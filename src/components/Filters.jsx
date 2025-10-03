import React from "react"

export default function Filters({ filters = {}, setFilters, close }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      <div
        className="absolute inset-0 backdrop-blur-sm bg-white/30"
        onClick={close}
      ></div>


      <div className="bg-white p-6 rounded-lg z-50 w-11/12 max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="grid grid-cols-2 gap-3">
          <select
            value={filters.category || ""}
            onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
            className="border p-2 rounded"
          >
            <option value="">All categories</option>
            <option value="shirts">Shirts</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="jackets">Jackets</option>
          </select>

          <select
            value={filters.color || ""}
            onChange={(e) => setFilters((f) => ({ ...f, color: e.target.value }))}
            className="border p-2 rounded"
          >
            <option value="">Any color</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="red">Red</option>
          </select>

          <select
            value={filters.size || ""}
            onChange={(e) => setFilters((f) => ({ ...f, size: e.target.value }))}
            className="border p-2 rounded"
          >
            <option value="">Any size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
          </select>

          <input
            type="number"
            placeholder="Max price"
            value={filters.maxPrice || ""}
            onChange={(e) =>
              setFilters((f) => ({ ...f, maxPrice: e.target.value ? Number(e.target.value) : null }))
            }
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Min discount %"
            value={filters.minDiscount || ""}
            onChange={(e) =>
              setFilters((f) => ({ ...f, minDiscount: e.target.value ? Number(e.target.value) : null }))
            }
            className="border p-2 rounded"
          />
        </div>

        <button
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={close}
        >
          Close
        </button>
      </div>
    </div>
  )
}
