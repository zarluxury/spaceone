'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function QRDebugPage() {
  const params = useParams()
  const [debugInfo, setDebugInfo] = useState<any>(null)

  useEffect(() => {
    const encodedData = params.data as string
    
    if (encodedData) {
      try {
        // Try to decode the data
        const decodedData = atob(encodedData)
        const parsedData = JSON.parse(decodedData)
        
        setDebugInfo({
          encodedData,
          decodedData,
          parsedData,
          success: true
        })
      } catch (error) {
        setDebugInfo({
          encodedData,
          error: error instanceof Error ? error.message : 'Unknown error',
          success: false
        })
      }
    } else {
      setDebugInfo({
        error: 'No data found in URL',
        success: false
      })
    }
  }, [params.data])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">QR Code Debug Info</h1>
        
        {debugInfo ? (
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            <div className={`p-4 rounded ${debugInfo.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <h2 className={`font-semibold mb-2 ${debugInfo.success ? 'text-green-900' : 'text-red-900'}`}>
                {debugInfo.success ? '✅ QR Data Decoded Successfully' : '❌ QR Data Decoding Failed'}
              </h2>
            </div>
            
            {debugInfo.success ? (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Encoded Data (from URL):</h3>
                  <div className="bg-gray-100 p-3 rounded border text-xs break-all">
                    <code>{debugInfo.encodedData}</code>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Decoded String:</h3>
                  <div className="bg-gray-100 p-3 rounded border text-sm">
                    <pre>{debugInfo.decodedData}</pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parsed JSON Data:</h3>
                  <div className="bg-gray-100 p-3 rounded border">
                    <pre className="text-sm overflow-x-auto">
                      {JSON.stringify(debugInfo.parsedData, null, 2)}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Next Steps:</h3>
                  <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                    <li>If data looks correct above, the QR code is working</li>
                    <li>Go back to <a href="/qr-redirect/[data]" className="text-blue-600 underline">/qr-redirect/[data]</a> to test the actual redirect</li>
                    <li>Or test with the actual QR code generation page</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Error Details:</h3>
                  <div className="bg-red-100 p-3 rounded border text-red-700">
                    {debugInfo.error}
                  </div>
                </div>
                
                {debugInfo.encodedData && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Raw Data Received:</h3>
                    <div className="bg-gray-100 p-3 rounded border text-xs break-all">
                      <code>{debugInfo.encodedData}</code>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600">Loading debug information...</p>
          </div>
        )}
      </div>
    </div>
  )
}
