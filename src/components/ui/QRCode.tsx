'use client'
import React, { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

interface QRCodeProps {
  data: string
  size?: number
  className?: string
  id?: string
}

export const QRCodeComponent: React.FC<QRCodeProps> = ({ 
  data, 
  size = 150, 
  className = '',
  id 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (canvasRef.current && data) {
      setError(null)
      
      QRCode.toCanvas(canvasRef.current, data, {
        width: size,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'L'
      }, (error) => {
        if (error) {
          console.error('QR Code generation error:', error)
          setError('Failed to generate QR code')
        }
      })
    }
  }, [data, size])

  if (error) {
    return (
      <div className={`inline-block ${className}`}>
        <div 
          className="rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-xs text-center"
          style={{ width: size, height: size }}
        >
          QR Error
        </div>
      </div>
    )
  }

  return (
    <div id={id} className={`inline-block ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="rounded-lg"
        style={{ width: size, height: size }}
      />
    </div>
  )
}
