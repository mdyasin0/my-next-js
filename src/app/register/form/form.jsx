"use client";

import { registeruser } from "@/app/action/auth/registeruser";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Joined() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await registeruser({ name, email, password });

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "Registered!",
        text: res.message,
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => router.push("/login"), 2000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: res.error || "Registration failed",
      });
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white p-8 rounded-lg w-full max-w-md flex flex-col gap-4"
    >
     

      <input
        type="text"
        placeholder="Name"
        className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27ce75]"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

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
        Register
      </button>
    </form>
  );
}
