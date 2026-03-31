'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { DownloadForm } from '@/components/ui/DownloadForm' 
import { X, Download, AlertCircle, CheckCircle2, Loader2, ArrowLeft, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface QRRedirectData {
  imageUrl: string
  imageName: string
  productId: string
  productName: string
  productSlug?: string
  colorName?: string
  finishType?: string
}

export default function QRRedirectPage() {
  const params = useParams()
  const router = useRouter()
  const [data, setData] = useState<QRRedirectData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showDownloadForm, setShowDownloadForm] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [notification, setNotification] = useState<{show: boolean; message: string; type: 'success' | 'error'}>({
    show: false,
    message: '',
    type: 'success'
  })

  const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Get the encoded data from the URL parameter
        const encodedData = params.data as string
        
        if (!encodedData) {
          throw new Error('No QR data provided')
        }

        // Decode the base64 data (handle URL-safe encoding)
        try {
          // Convert URL-safe base64 back to standard base64
          let standardBase64 = encodedData
            .replace(/-/g, '+')
            .replace(/_/g, '/');
          
          // Pad with proper padding if needed
          while (standardBase64.length % 4) {
            standardBase64 += '=';
          }
          
          const decodedData = JSON.parse(atob(standardBase64))
          setData(decodedData)
        } catch (decodeError) {
          // If base64 decoding fails, try to treat it as a direct image URL
          // This is a fallback for simpler QR codes
          const response = await fetch(`${API_BASE}/api/products/finishes/by-image`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl: encodedData })
          })
          
          if (!response.ok) {
            throw new Error('Failed to find image information')
          }
          
          const imageData = await response.json()
          setData({
            imageUrl: encodedData,
            imageName: imageData.colorName || 'Unknown Finish',
            productId: imageData.productId,
            productName: imageData.productName,
            productSlug: imageData.productSlug,
            colorName: imageData.colorName,
            finishType: imageData.finishType
          })
        }
        
        // Auto-show the download form after a short delay
        setTimeout(() => {
          setShowDownloadForm(true)
        }, 500)
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load QR data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.data])

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type })
    setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000)
  }

  const handleFormSubmit = async (formData: any) => {
    setFormLoading(true)
    try {
      // Transform phone format if needed
      const submissionData = {
        ...formData,
        phone: {
          countryCode: formData.phone.includes('+') ? formData.phone.split(' ')[0] : '+91',
          number: formData.phone.includes('+') ? formData.phone.split(' ').slice(1).join(' ') : formData.phone
        }
      }

      const response = await fetch(`${API_BASE}/api/downloads/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()
      
      if (response.ok) {
        // Store email in localStorage for future downloads
        localStorage.setItem('userEmail', formData.email)
        
        // Close form and download the image
        setShowDownloadForm(false)
        
        if (data) {
          await handleDirectDownload(data.imageUrl, data.imageName)
        }
        
        showNotification('Download started successfully!', 'success')
      } else {
        console.error('Form submission failed:', result.message)
        showNotification('Failed to submit form', 'error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      showNotification('Error submitting form', 'error')
    } finally {
      setFormLoading(false)
    }
  }

  const handleDirectDownload = async (url: string, name: string) => {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = blobUrl
      a.download = `${name}.jpg`
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(blobUrl)
    } catch (err) {
      console.error('Download failed:', err)
      showNotification('Download failed', 'error')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-blue-600 mx-auto mb-4" size={32} />
          <p className="text-gray-600">Loading QR code information...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
          <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">QR Code Error</h2>
          <p className="text-gray-600 mb-6">{error || 'Unable to process QR code'}</p>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home size={16} />
              Back to Home
            </Link>
            <Link
              href="/finishes"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={16} />
              Browse Finishes
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg animate-slide-in ${
          notification.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
        }`}>
          {notification.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span className="text-sm font-medium">{notification.message}</span>
          <button onClick={() => setNotification({ show: false, message: '', type: 'success' })}>
            <X size={16} className="ml-2 hover:opacity-70" />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Home size={16} />
                Home
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <Link 
                href="/finishes"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={16} />
                Finishes
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold text-gray-900">QR Code Download</h1>
            </div>
            
            {data.productSlug && (
              <Link
                href={`/productview/${data.productSlug}`}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Product
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Product Preview */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start gap-6">
              <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={data.imageUrl}
                  alt={data.imageName}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex-1">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.imageName}</h2>
                  <p className="text-gray-600 mb-4">From {data.productName}</p>
                  
                  {data.colorName && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {data.colorName}
                      </span>
                      {data.finishType && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium capitalize">
                          {data.finishType}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowDownloadForm(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Download size={18} />
                    Download Image
                  </button>
                  
                  <a
                    href={data.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    View Original
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="p-6 bg-blue-50 border-b border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">Download Instructions</h3>
            <p className="text-blue-700 text-sm">
              To download this high-quality finish image, please fill out the download form with your contact information. 
              This helps us provide better service and track product interest.
            </p>
          </div>

          {/* Additional Info */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Image Details</h4>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Finish Name:</dt>
                    <dd className="text-sm font-medium text-gray-900">{data.imageName}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Product:</dt>
                    <dd className="text-sm font-medium text-gray-900">{data.productName}</dd>
                  </div>
                  {data.finishType && (
                    <div className="flex justify-between">
                      <dt className="text-sm text-gray-500">Finish Type:</dt>
                      <dd className="text-sm font-medium text-gray-900 capitalize">{data.finishType}</dd>
                    </div>
                  )}
                </dl>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Usage Rights</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• High-resolution image for design reference</li>
                  <li>• Personal and commercial use permitted</li>
                  <li>• Credit to Spaceone Luxury appreciated</li>
                  <li>• No redistribution of original files</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Form Modal */}
      {data && (
        <DownloadForm
          isOpen={showDownloadForm}
          onClose={() => setShowDownloadForm(false)}
          onSubmit={handleFormSubmit}
          imageUrl={data.imageUrl}
          imageName={data.imageName}
          productId={data.productId}
          productName={data.productName}
          loading={formLoading}
        />
      )}
    </div>
  )
}
