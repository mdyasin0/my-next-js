"use client"

import Link from "next/link"
import React, { useState } from "react"
import Joined from "./form/form"

export default function Register() {
 

  

  return (
    <section className="bg-[#f2efee] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#27ce75]">Register</h2>
       <Joined/>
        <p className="text-center pt-5"> Already have an account?  <Link className="text-green-400" href="/login">Login</Link></p>
      </div>
      
    </section>
  )
}
