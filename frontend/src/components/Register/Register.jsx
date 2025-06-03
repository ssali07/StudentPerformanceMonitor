import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    password: '',
    course: '',
    yearOfStudy: '',
  })
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, city, email, password, course, yearOfStudy } = formData
    if (!name || !city || !email || !password || !course || !yearOfStudy) {
      setMessage('Please fill in all fields')
      return
    }

    try {
      const { data, status } = await axios.post(
        'http://localhost:5000/api/signup',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      )

      if (status === 201 && data.access_token && data.user) {
        // Store JWT and user profile
        localStorage.setItem('token', data.access_token)
        localStorage.setItem('user', JSON.stringify(data.user))

        setMessage('Registration successful! Redirecting...')
        setTimeout(() => {
          navigate('/PredictStudent')
          window.location.reload()
        }, 1000)
      } else {
        setMessage(data.msg || 'Registration failed')
      }
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage('Email already registered')
      } else {
        setMessage('Server error. Please try again later.')
      }
    }
  }

  return (
    <div className="min-h-screen py-5 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="backdrop-blur-md p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Student Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select your course</option>
              <option value="BSc Computer Science">BSc Computer Science</option>
              <option value="BCom">BCom</option>
              <option value="BA Psychology">BA Psychology</option>
              <option value="BTech">BTech</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Year of Study</label>
            <select
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select your year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
          {message && (
            <p
              className={`text-center font-medium ${
                message.includes('successful')
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
