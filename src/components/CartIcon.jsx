"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../hooks/useCart'

const CartIcon = () => {
  const { getCartItemsCount } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const itemCount = getCartItemsCount()

  return (
    <Link
      href="/kurv"
      className="relative p-2 text-white hover:text-blue-200 transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Kurv med ${itemCount} varer`}
    >
      {/* Shopping cart icon */}
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"
        />
      </svg>
      
      {/* Item count badge */}
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
      
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute top-full right-0 mt-2 bg-gray-800 text-white text-sm py-1 px-2 rounded whitespace-nowrap z-50">
          {itemCount === 0 ? 'Kurven er tom' : `${itemCount} vare${itemCount !== 1 ? 'r' : ''} i kurven`}
        </div>
      )}
    </Link>
  )
}

export default CartIcon
