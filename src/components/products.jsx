"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        const res = await fetch("api/productdata")
        const data = await res.json()
        setProducts(data.slice(0, 8)) 
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className="bg-[#f2efee] text-[#040316] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#27ce75]">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  {product.description}
                </p>
                <p className="text-[#27ce75] font-bold text-lg mb-4">
                  ${product.price}
                </p>
                <Link href={`/product-details/${product._id}`} className="px-4 py-2 bg-[#ff913d] hover:bg-[#c24242] text-white rounded-lg transition">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
