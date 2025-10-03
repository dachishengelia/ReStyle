import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl">ReStyle</Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm">Home</Link>
          <Link to="/favorites" className="text-sm">Favorites</Link>
          <Link to="/discounts" className="text-sm">Discounts</Link>
          <Link to="/secondhand" className="text-sm">Secondhand</Link>

          {user ? (
            <>
              {user.role === 'seller' && (
                <button
                  onClick={() => navigate('/seller')}
                  className="text-sm underline"
                >
                  Add Product
                </button>
              )}
              <span className="text-sm">{user.email}</span>
              <button onClick={logout} className="text-sm underline">Logout</button>
            </>
          ) : (
            <Link to="/auth" className="text-sm">Login / Sign Up</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
