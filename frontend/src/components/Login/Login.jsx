import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setMessage('Please fill in all fields')
      return
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok && data.access_token && data.user) {
        setMessage('Login successful!')
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('user', JSON.stringify(data.user))
        setTimeout(() =>{
          // Redirect to PredictStudent after a short delay
          navigate('/PredictStudent')
          window.location.reload()
        }, 1000)
      } else {
        setMessage(data.msg || 'Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      setMessage('Server error. Try again later.')
    }
  }

  return (
    <div className="py-10 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          {message && (
            <p className={`text-center font-medium ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
