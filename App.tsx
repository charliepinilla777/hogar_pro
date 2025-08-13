
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Páginas
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import RequestService from './pages/RequestService'
import Dashboard from './pages/Dashboard'
import Providers from './pages/Providers'
import ProviderProfile from './pages/ProviderProfile'
import AdminPanel from './pages/AdminPanel'

// Componentes
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicio/:id" element={<ServiceDetail />} />
            <Route path="/solicitar/:serviceId" element={<RequestService />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/proveedores" element={<Providers />} />
            <Route path="/proveedor/:id" element={<ProviderProfile />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>

        <Footer />
        
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
