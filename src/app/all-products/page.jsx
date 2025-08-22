"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function Products() {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filter, setFilter] = useState("latest")

  // Fetch products.json
  useEffect(() => {
    fetch("api/productdata")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setFiltered(sortProducts(data, filter))
      })
  }, [])

  // Handle filter change
  const handleFilter = (value) => {
    setFilter(value)
    setFiltered(sortProducts(products, value))
  }

  // Sorting / Filtering function
  const sortProducts = (items, type) => {
    let sorted = [...items]
    switch (type) {
      case "lowToHigh":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "highToLow":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "onlyMobile":
        sorted = sorted.filter((p) => p.type === "Mobile")
        break
      case "onlyLaptop":
        sorted = sorted.filter((p) => p.type === "Laptop")
        break
      case "latest":
        sorted.sort(
          (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
        )
        break
      default:
        break
    }
    return sorted
  }

  return (
    <section className="bg-[#f2efee] text-[#040316] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-[#27ce75]">Products</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded ${
              filter === "lowToHigh" ? "bg-[#27ce75] text-white" : "bg-[#ff913d] text-white"
            }`}
            onClick={() => handleFilter("lowToHigh")}
          >
            Price: Low to High
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "highToLow" ? "bg-[#27ce75] text-white" : "bg-[#ff913d] text-white"
            }`}
            onClick={() => handleFilter("highToLow")}
          >
            Price: High to Low
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "onlyMobile" ? "bg-[#27ce75] text-white" : "bg-[#ff913d] text-white"
            }`}
            onClick={() => handleFilter("onlyMobile")}
          >
            Only Mobile
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "onlyLaptop" ? "bg-[#27ce75] text-white" : "bg-[#ff913d] text-white"
            }`}
            onClick={() => handleFilter("onlyLaptop")}
          >
            Only Laptop
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "latest" ? "bg-[#27ce75] text-white" : "bg-[#ff913d] text-white"
            }`}
            onClick={() => handleFilter("latest")}
          >
            Latest
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2 flex-1">{product.description}</p>
                <p className="text-[#27ce75] font-bold mb-4">${product.price}</p>
                <Link href={`/product-details/${product._id}`} className="mt-auto px-4 py-2 bg-[#ff913d] text-white rounded hover:bg-[#c24242] transition">
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
