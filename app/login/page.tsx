'use client'
import React, { useState } from 'react'

const Page = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
  }

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle forgot password logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!showForgotPassword ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6 text-orange-600">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors"
              onClick={() => window.location.href = '/user'}
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            <button
              onClick={() => setShowForgotPassword(true)}
              className="text-orange-500 hover:text-orange-600"
            >
              Forgot Password?
            </button>
          </p>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6 text-orange-600">Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reset-email">
                Email
              </label>
              <input
                type="email"
                id="reset-email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors"
            >
              Reset Password
            </button>
          </form>
          <p className="text-center mt-4">
            <button
              onClick={() => setShowForgotPassword(false)}
              className="text-orange-500 hover:text-orange-600"
            >
              Back to Login
            </button>
          </p>
        </div>
      )}
    </div>
  )
}

export default Page;
