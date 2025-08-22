"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2"; 
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SessionProvider>
      <NavbarContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </SessionProvider>
  );
}

function NavbarContent({ isOpen, setIsOpen }) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false }); 
      Swal.fire({
        icon: "success",
        title: "Logged out!",
        text: "You have been logged out successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
      router.push("/"); // redirect to home
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: "Something went wrong while logging out.",
      });
    }
  };

  return (
    <nav className="bg-[#27ce75] text-[#040316] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-white">
            <Link href="/">TechShop</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-[#ff913d]">
              Home
            </Link>
            <Link href="/all-products" className="hover:text-[#ff913d]">
              Product
            </Link>

            {isLoggedIn && (
              <Link href="/add-product" className="hover:text-[#ff913d]">
                Add Product
              </Link>
            )}

            {!isLoggedIn ? (
              <button
                onClick={() => signIn()}
                className="px-2 py-1 bg-[#ff913d] text-white rounded-lg font-semibold hover:bg-[#c24242] transition"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="px-2 py-1 bg-[#ff913d] text-white rounded-lg font-semibold hover:bg-[#c24242] transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#27ce75] px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md hover:bg-[#c24242] hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/all-products"
            className="block px-3 py-2 rounded-md hover:bg-[#c24242] hover:text-white"
          >
            Product
          </Link>

          {isLoggedIn && (
            <Link
              href="/add-product"
              className="block px-3 py-2 rounded-md hover:bg-[#c24242] hover:text-white"
            >
              Add Product
            </Link>
          )}

          {!isLoggedIn ? (
            <button
              onClick={() => signIn()}
              className="w-full text-left px-3 py-2 bg-[#ff913d] text-white rounded-lg font-semibold hover:bg-[#c24242] transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 bg-[#ff913d] text-white rounded-lg font-semibold hover:bg-[#c24242] transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
