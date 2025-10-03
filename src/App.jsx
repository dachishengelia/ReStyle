import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Auth from './pages/Auth';
import DiscountFeed from './pages/DiscountFeed';
import Secondhand from './pages/Secondhand';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ecom_favs')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('ecom_favs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route
              path="/"
              element={<Home favorites={favorites} toggleFav={toggleFav} />}
            />
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} toggleFav={toggleFav} />}
            />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/discounts"
              element={<DiscountFeed favorites={favorites} toggleFav={toggleFav} />}
            />
            <Route
              path="/secondhand"
              element={<Secondhand favorites={favorites} toggleFav={toggleFav} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
