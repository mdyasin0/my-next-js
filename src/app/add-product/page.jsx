"use client"

import { useState } from "react"

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    details: "",
    grantee: "",
    warranty: "",
    type: "Laptop",
    totalStock: "",
    deliveryCharge: ""
  })

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      totalStock: parseInt(formData.totalStock),
      deliveryCharge: parseFloat(formData.deliveryCharge),
      addedAt: new Date().toISOString()
    }

    try {
      const res = await fetch("api/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (res.ok) {
        setMessage("Product added successfully!")
        setFormData({
          name: "",
          image: "",
          description: "",
          price: "",
          details: "",
          grantee: "",
          warranty: "",
          type: "Laptop",
          totalStock: "",
          deliveryCharge: ""
        })
      } else {
        setMessage(data.error || "Failed to add product")
      }
    } catch (error) {
      console.error(error)
      setMessage("Something went wrong")
    }
  }

  return (
    <section className="bg-[#f2efee] min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#27ce75]">Add Product</h2>
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <input
            type="text"
            name="details"
            placeholder="Details"
            value={formData.details}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <input
            type="text"
            name="grantee"
            placeholder="Grantee"
            value={formData.grantee}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <input
            type="text"
            name="warranty"
            placeholder="Warranty"
            value={formData.warranty}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          >
            <option value="Laptop">Laptop</option>
            <option value="Mobile">Mobile</option>
          </select>
          <input
            type="number"
            name="totalStock"
            placeholder="Total Stock"
            value={formData.totalStock}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <input
            type="number"
            name="deliveryCharge"
            placeholder="Delivery Charge"
            value={formData.deliveryCharge}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
          />
          <button
            type="submit"
            className="bg-[#27ce75] hover:bg-[#c24242] text-white py-2 rounded-lg transition"
          >
            Add Product
          </button>
        </form>
        {message && <p className="mt-4 text-center text-[#ff913d]">{message}</p>}
      </div>
    </section>
  )
}
