import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate  } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import PredictStudent from './components/PredictStudent/PredictStudent.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      {/* <Route path='PredictStudent' element={<PredictStudent/>} /> */}
      {/* Inline protected route logic without extra component */}
      <Route
        path='PredictStudent'
        element={
          localStorage.getItem('token')
            ? <PredictStudent/>
            : <Navigate to="/Login" replace />
        }
      />
      {/* Protect Diagnose route */}
      {/* <Route 
        path="PredicStudent" 
        element={<ProtectedRoute element={<PredictStudent/>} />} 
      />  */}

      <Route path='Login' element={<Login/>}/>
      <Route path='Register' element={<Register/>}/>
    </Route>
  )
)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="About" element={<About />} />
//       <Route path="Contact" element={<Contact />} />

//       {/* Protected routes group */}
//       <Route element={<ProtectedRoute />}>
//         <Route path="PredictStudent" element={<PredictStudent />} />
//       </Route>

//       <Route path="Login" element={<Login />} />
//       <Route path="Register" element={<Register />} />
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </StrictMode>,
)
