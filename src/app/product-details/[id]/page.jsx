import dbconnect from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import React from "react"

export default async function Details({ params }) {
  const { id } = params

  const productCollection = await dbconnect("products")
  const data = await productCollection.findOne({ _id: new ObjectId(id) })

  return (
    <section className="bg-[#f2efee] text-[#040316] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        
        {/* Product Image */}
        <div className="lg:w-1/2">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-[#27ce75]">{data.name}</h1>
            <p className="text-gray-700 mb-4">{data.description}</p>

            <p className="text-2xl font-semibold mb-2 text-[#27ce75]">
              Price: ${data.price.$numberInt || data.price}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Details: {data.details}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Grantee: {data.grantee}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Warranty: {data.warranty}
            </p>
            
            <p className="text-sm text-gray-600 mb-2">
              Total Stock: {data.totalStock.$numberInt || data.totalStock}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Delivery Charge: ${data.deliveryCharge.$numberInt || data.deliveryCharge}
            </p>
          </div>

          <button className="mt-6 px-6 py-3 bg-[#ff913d] hover:bg-[#c24242] text-white font-semibold rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}
