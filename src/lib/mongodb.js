import { MongoClient, ServerApiVersion } from "mongodb"

const uri = process.env.DB_URL

let client
let clientPromise

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })
  global._mongoClientPromise = client.connect()
}

clientPromise = global._mongoClientPromise

export default async function dbconnect(collectionName) {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME) 
  return db.collection(collectionName)
}
