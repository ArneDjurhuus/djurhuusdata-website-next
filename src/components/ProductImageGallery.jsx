"use client"
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Image from 'next/image'

const ProductImageGallery = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  // Use images array if available, otherwise fallback to single image logic
  const images = product.images || [
    {
      src: product.name === "DD-PrivacyPEN" 
        ? "/products/tailsOS-usb/tailsOS-usb.jpg" 
        : null,
      alt: `${product.name}`,
      isPrimary: true
    }
  ].filter(img => img.src) // Remove null images

  const hasMultipleImages = images.length > 1

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        {images.length > 0 ? (
          <Image
            src={images[selectedImageIndex]?.src}
            alt={images[selectedImageIndex]?.alt}
            width={500}
            height={500}
            className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => {
              // Optional: Add lightbox functionality here
              console.log('Image clicked - could open lightbox')
            }}
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${
            product.type === 'physical' 
              ? 'bg-gradient-to-br from-green-100 to-green-200 text-green-700' 
              : 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700'
          }`}>
            <div className="text-center">
              <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                {product.type === 'physical' ? (
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                )}
              </svg>
              <p className="text-lg font-medium">{product.name}</p>
              <p className="text-sm text-gray-500 mt-2">Produktbillede kommer snart</p>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {hasMultipleImages && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImageIndex === index
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              aria-label={`Vis billede ${index + 1} af ${images.length}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter and Info */}
      {hasMultipleImages && (
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{selectedImageIndex + 1} af {images.length} billeder</span>
          <span className="text-xs">Klik for at se større</span>
        </div>
      )}

      {/* Image Navigation Arrows for keyboard accessibility */}
      {hasMultipleImages && (
        <div className="flex justify-center space-x-4 mt-2">
          <button
            onClick={() => setSelectedImageIndex(Math.max(0, selectedImageIndex - 1))}
            disabled={selectedImageIndex === 0}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Forrige billede"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setSelectedImageIndex(Math.min(images.length - 1, selectedImageIndex + 1))}
            disabled={selectedImageIndex === images.length - 1}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Næste billede"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductImageGallery
