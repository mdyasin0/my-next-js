"use client"
import React from "react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-[#f2efee] text-[#040316]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Shop Smarter, <span className="text-[#27ce75]">Live Better</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700">
            Discover amazing products with unbeatable prices.  
            Fast delivery, secure payments, and a seamless shopping experience.  
          </p>

          <div className="mt-8 flex space-x-4">
            <Link
              href="/all-products"
              className="px-6 py-3 bg-[#27ce75] text-white rounded-lg font-semibold hover:bg-[#c24242] transition"
            >
              Shop Now
            </Link>
           
          </div>
        </div>

  
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Shopping Illustration"
            className="w-80 md:w-[400px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
