import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import { sectionHeading, staggerContainer, staggerItem, buttonHover } from "../lib/motionVariants"
import OrderModal from "./OrderModal"

const products = [
  {
    id: "19l",
    size: "19L",
    title: "19L Water Bottle",
    description: "Our flagship product. The perfect solution for homes and offices. Fits standard water dispensers.",
    features: ["Reusable bottle", "Dispenser compatible", "Best value"],
    gradient: "from-brand-500 to-brand-700",
    capacity: "19 Liters",
    image: "/assets/19L.webp",
  },
  {
    id: "5l",
    size: "5L",
    title: "5L Water Bottle",
    description: "Convenient medium-size bottle ideal for smaller households and office use.",
    features: ["Easy to carry", "Fits refrigerators", "Space saving"],
    gradient: "from-sky-400 to-brand-500",
    capacity: "5 Liters",
    image: "/assets/5L.webp",
  },
  {
    id: "1-5l",
    size: "1.5L",
    title: "1.5L Water Bottle",
    description: "Perfect personal size for hydration on the go. Great for school, work, and travel.",
    features: ["Portable", "BPA-free cap", "Single serve"],
    gradient: "from-sky-300 to-sky-500",
    capacity: "1.5 Liters",
    image: "/assets/1.5L.webp",
  },
  {
    id: "1l",
    size: "1L",
    title: "1L Water Bottle",
    description: "Compact and lightweight. Ideal for individual daily hydration needs.",
    features: ["Pocket friendly", "Lightweight", "Easy grip"],
    gradient: "from-cyan-300 to-sky-400",
    capacity: "1 Liter",
    image: "/assets/1L.webp",
  },
]

function ProductCard({ product, onOrder }: { product: typeof products[number]; onOrder: (size: string) => void }) {
  return (
    <div className="marquee-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm shrink-0 w-[220px] sm:w-[240px]">
      <div className={`bg-gradient-to-br ${product.gradient} p-4 flex items-center justify-center relative overflow-hidden h-40`}>
        <div className="absolute inset-0 bg-white/5" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain drop-shadow-xl"
            loading="lazy"
            width="240"
            height="240"
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 mb-1">{product.title}</h3>
        <p className="text-xs text-gray-600 mb-3 leading-relaxed line-clamp-2">{product.description}</p>
        <ul className="space-y-1 mb-4">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="w-1 h-1 rounded-full bg-brand-500" />
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onOrder(product.size)}
          className="flex items-center justify-center gap-2 w-full bg-brand-50 hover:bg-brand-500 text-brand-600 hover:text-white px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Order {product.size}
        </button>
      </div>
    </div>
  )
}

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

  const handleOrderClick = (size: string) => {
    setSelectedPackage(size)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="products" className="py-16 lg:py-20 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionHeading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Our Range</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              Our Products
            </h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-lg text-gray-600">
              Choose from our range of premium bottled drinking water sizes, designed for every need.
            </p>
          </motion.div>

          <div className="md:hidden">
            <div className="touch-scroll flex gap-4 px-4 -mx-4 pb-2">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} onOrder={handleOrderClick} />
                </div>
              ))}
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={staggerItem}
                whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(30,111,159,0.15), 0 0 0 1px rgba(30,111,159,0.1)" }}
                transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer flex flex-col"
              >
                <div className={`bg-gradient-to-br ${product.gradient} p-6 flex items-center justify-center relative overflow-hidden h-56`}>
                  <div className="absolute inset-0 bg-white/5" />
                  <motion.div
                    className="relative z-10 w-full h-full flex items-center justify-center"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain drop-shadow-xl"
                      loading="lazy"
                      width="240"
                      height="240"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() => handleOrderClick(product.size)}
                    className="mt-auto flex items-center justify-center gap-2 w-full bg-brand-50 hover:bg-brand-500 text-brand-600 hover:text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                    variants={buttonHover}
                    initial="initial"
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Order {product.size}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </>
  )
}
