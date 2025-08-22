"use client"
import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#040316] text-[#f2efee] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#27ce75]">TechShop</h2>
          <p className="mt-3 text-gray-400">
            Your trusted e-commerce partner.  
            Shop smart. Live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#ff913d]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-[#27ce75]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#27ce75]">
                Products
              </Link>
            </li>
            <li>
              <Link href="/add-product" className="hover:text-[#27ce75]">
                Add Product
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-[#27ce75]">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3 className="text-lg font-semibold text-[#ff913d]">Contact Us</h3>
          <p className="mt-4 text-gray-400">Email: support@myshop.com</p>
          <p className="text-gray-400">Phone: +880 1234-567890</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#27ce75]">Facebook</a>
            <a href="#" className="hover:text-[#27ce75]">Twitter</a>
            <a href="#" className="hover:text-[#27ce75]">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  )
}
