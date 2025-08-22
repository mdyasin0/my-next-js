"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#27ce75] text-[#040316] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-white">
            <Link href="/">TechShop</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-[#ff913d]">
              Home
            </Link>
            <Link href="/products" className="hover:text-[#ff913d]">
              Product
            </Link>
            <Link href="/add-product" className="hover:text-[#ff913d]">
              Add Product
            </Link>
            <Link href="/login" className=" bg-[#c24242] py-1 px-2 text-white rounded-lg hover:text-[#ff913d]">
              Login
            </Link>
            <Link href="/logout" className=" bg-[#c24242] py-1 px-2 text-white rounded-lg hover:text-[#ff913d]">
              Logout
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#27ce75] px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md hover:bg-[#c24242] hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-3 py-2 rounded-md hover:bg-[#c24242] hover:text-white"
          >
            Product
          </Link>
          <Link
            href="/add-product"
            className="block px-3 py-2 rounded-md hover:bg-[#c24242] hover:text-white"
          >
            Add Product
          </Link>
          <Link
            href="/login"
            className="block px-3 py-2 rounded-md hover:bg-[#c24242] hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/logout"
            className="block px-3 py-2 rounded-md hover:bg-[#c24242] hover:text-white"
          >
            Logout
          </Link>
        </div>
      )}
    </nav>
  )
}
