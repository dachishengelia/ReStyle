import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import products from "../data/products";



export default function Home({ favorites, toggleFav }) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [filterOpen, setFilterOpen] = useState(false);


  const filtered = products.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !filters.category || p.category === filters.category;
    const matchesColor = !filters.color || p.color === filters.color;
    const matchesSize = !filters.size || p.size.includes(filters.size);
    const matchesPrice = !filters.maxPrice || p.price <= parseInt(filters.maxPrice);
    const matchesDiscount = !filters.minDiscount || p.discount >= parseInt(filters.minDiscount);
    return matchesQuery && matchesCategory && matchesColor && matchesSize && matchesPrice && matchesDiscount;
  });


  const firstFour = filtered.slice(0, 4);

  const brands = ["Zara", "H&M", "New Yorker", "Waikiki", "Mango", "Nike", "Adidas", "Uniqlo", "Puma", "Levis"];

  return (
    <div className="w-full">

      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white h-[500px] md:h-[600px] px-6 md:px-20">
        <img
          src="\https://picsum.photos/seed/splash/400/400"
          alt="Cloth"
          className="w-full md:w-1/2 h-full object-cover rounded-lg"
        />
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ReStyle</h1>
          <p className="text-xl md:text-2xl font-medium">Where fashion meets savings.</p>
        </div>
      </div>


      <div className="overflow-hidden py-6 bg-gray-50 relative">
        <div className="flex gap-8 whitespace-nowrap animate-marquee-fast">
          {brands.concat(brands).map((b, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-white shadow rounded-full font-bold text-gray-900 flex-shrink-0"
            >
              {b}
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-between items-center my-6 px-4 md:px-20">
        <input
          type="text"
          placeholder="Search items..."
          className="border p-2 rounded w-full md:w-1/2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="ml-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
          onClick={() => setFilterOpen(true)}
        >
          Filters
        </button>
      </div>


      {filterOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3 relative">
            <button
              onClick={() => setFilterOpen(false)}
              className="absolute top-2 right-2 text-gray-500 font-bold"
            >
              ×
            </button>
            <Filters filters={filters} setFilters={setFilters} />
          </div>
        </div>
      )}


      {["Hot", "New", "Top Sales", "Biggest Discount"].map((section, idx) => (
        <div key={idx} className="my-8 px-4 md:px-20">
          <h2 className="text-2xl font-bold mb-4">{section}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {firstFour.map((p) => (
              <ProductCard
                key={p.id}
                p={p}
                onToggleFav={toggleFav}
                isFav={favorites.includes(p.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
