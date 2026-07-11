import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Products from "./components/Products"
import QualitySection from "./components/QualitySection"
import Accreditations from "./components/Accreditations"
import Features from "./components/Features"
import Delivery from "./components/Delivery"
import Testimonials from "./components/Testimonials"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ClientsPage from "./pages/ClientsPage"

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <QualitySection />
      <Accreditations />
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
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
