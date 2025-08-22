"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import React, { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    await signIn("credentials", {
      email,
      password,
      redirect: true, 
      callbackUrl: "/" 
    })
  }

 

  return (
    <section className="bg-[#f2efee] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#27ce75]">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="bg-[#27ce75] text-white py-2 rounded-lg hover:bg-[#c24242] transition"
          >
            Login
          </button>

          
        </form>

        <p className="text-center pt-5 text-[#040316]">
          Don’t have an account?{" "}
          <Link className="text-[#27ce75] font-semibold" href="/register">
            Register
          </Link>
        </p>
      </div>
    </section>
  )
}
