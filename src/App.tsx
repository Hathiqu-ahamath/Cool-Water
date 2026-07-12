import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Products from "./components/Products"
import QualitySection from "./components/QualitySection"
import Features from "./components/Features"
import Delivery from "./components/Delivery"
import Testimonials from "./components/Testimonials"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ClientsPage from "./pages/ClientsPage"

function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [hash])
  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <QualitySection />
      <Features />
      <Delivery />
      <Testimonials />
      <Clients />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
                <p className="text-gray-600 mt-4">Page not found</p>
                <a href="/" className="mt-6 inline-block text-brand-500 hover:text-brand-600 font-semibold">Go Home</a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
