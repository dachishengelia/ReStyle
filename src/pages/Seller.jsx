import React, { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Seller() {
  const { user } = useContext(AuthContext)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("shirts")

  if (!user || user.role !== "seller") {
    return <p className="text-center mt-8 text-red-600">Only sellers can add products.</p>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ title, price, category }) 
    alert("Product added!")
    setTitle(""); setPrice(""); setCategory("shirts")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form className="bg-white p-8 rounded shadow-lg w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
        <input placeholder="Title" className="border p-2 rounded w-full" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input placeholder="Price" type="number" className="border p-2 rounded w-full" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <select className="border p-2 rounded w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="shirts">Shirts</option>
          <option value="pants">Pants</option>
          <option value="shoes">Shoes</option>
          <option value="jackets">Jackets</option>
        </select>
        <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700">Add Product</button>
      </form>
    </div>
  )
}
