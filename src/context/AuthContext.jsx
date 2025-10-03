import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ecom_user')) } catch { return null }
  })

  useEffect(() => {
    localStorage.setItem('ecom_user', JSON.stringify(user))
  }, [user])

  const login = ({ email, role }) => setUser({ email, role })
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
