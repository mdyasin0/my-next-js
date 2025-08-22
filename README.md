# TechShop - Next.js E-commerce App

## Project Description
**TechShop** is a simple e-commerce application built using **Next.js 15 (App Router)**.  
It features public pages such as a landing page and product listings, as well as protected pages for authenticated users to manage products.  
Authentication is implemented using **NextAuth.js**, allowing credential-based and social login (Google).


Core Features
Landing Page

Navbar, Hero, Product Highlights, Footer

Navigation links to login and products

No authentication required

Login Page (/login)

NextAuth credential login or Google login

Redirects authenticated users to /products

Product List Page (/products)

Publicly accessible

Fetches products from backend

Shows name, description, price, and a details button

Product Details Page (/products/[id])

Shows detailed information for a single product

Publicly accessible

Add Product Page (/productdata/add-product)

Protected route

Form to add a new product

Stores product in database


Technologies Used
Next.js 15 (App Router)

NextAuth.js for authentication

MongoDB for product storage

TailwindCSS for styling

Optional: SweetAlert 

Deployment
Vercel
