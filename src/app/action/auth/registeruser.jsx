"use server"

import dbconnect from "@/lib/mongodb"
import { hash } from "bcryptjs"

export const registeruser = async (payload) => {
  try {
    const { name, email, password } = payload

    const users = await dbconnect("users")  

    
    const existing = await users.findOne({ email })
    if (existing) {
      return { error: "User already exists" }
    }

    // hash password
    const hashedPassword = await hash(password, 10)

    // insert user
    await users.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date()
    })

    return { success: true, message: "User registered successfully" }

  } catch (error) {
    console.error("Register error:", error)
    return { error: "Failed to register user" }
  }
}
