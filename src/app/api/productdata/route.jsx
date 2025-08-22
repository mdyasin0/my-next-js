import dbconnect from "@/lib/mongodb"

export async function GET(request) {
  try {
    const productCollection = await dbconnect("products")
    const data = await productCollection.find({}).toArray()

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
