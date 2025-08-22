import dbconnect from "@/lib/mongodb"

export async function POST(request) {
  try {
    
    const productData = await request.json()

   
    const productCollection = await dbconnect("products")


    const result = await productCollection.insertOne(productData)

    return new Response(
      JSON.stringify({ message: "Product added successfully!", id: result.insertedId }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    )
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
