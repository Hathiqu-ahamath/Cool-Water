import { lazy, Suspense, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

const About = lazy(() => import("./components/About"))
const Products = lazy(() => import("./components/Products"))
const QualitySection = lazy(() => import("./components/QualitySection"))
const Features = lazy(() => import("./components/Features"))
const Delivery = lazy(() => import("./components/Delivery"))
const Testimonials = lazy(() => import("./components/Testimonials"))
const Clients = lazy(() => import("./components/Clients"))
const Contact = lazy(() => import("./components/Contact"))
const ClientsPage = lazy(() => import("./pages/ClientsPage"))

function SectionLoader() {
  return <div className="py-20" aria-hidden="true" />
}

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
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Products />
        <QualitySection />
        <Features />
        <Delivery />
        <Testimonials />
        <Clients />
        <Contact />
      </Suspense>
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
          <Route path="/clients" element={
            <Suspense fallback={<SectionLoader />}>
              <ClientsPage />
            </Suspense>
          } />
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
