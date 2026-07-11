import { motion } from "framer-motion"
import { ArrowLeft, Building2, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import { clients } from "../lib/clientsData"
import { staggerContainer, staggerItem, buttonHover } from "../lib/motionVariants"

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Trusted By</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              Our Clients
            </h1>
            <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-lg text-gray-600">
              We are proud to serve leading organizations across Sri Lanka, providing premium quality bottled drinking water that meets the highest standards of purity and hygiene.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm cursor-pointer"
              whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(30,111,159,0.1)" }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            >
              <div className="flex items-center gap-4 mb-5">
                <img src={client.logo} alt={client.name} className="w-16 h-16 object-contain rounded" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                    {client.industry}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{client.description}</p>
              <motion.div
                className="mt-5 flex items-center gap-1.5 text-brand-600 text-sm font-semibold"
                variants={buttonHover}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <ExternalLink className="w-4 h-4" />
                Learn More
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
