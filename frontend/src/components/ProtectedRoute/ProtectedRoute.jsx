import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token')  // make sure this matches your key

  if (!token) {
    // Not logged in? Redirect to Login.
    return <Navigate to="/Login" replace />
  }

  // Logged in → render the protected component
  return element
}

export default ProtectedRoute
