import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, User, Phone, Mail, MapPin, Package } from "lucide-react"
import { WHATSAPP_PHONE } from "../lib/constants"

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPackage: string
}

const packages = ["500ml", "1L", "1.5L", "5L", "19L"]

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  city: "",
  quantity: "1",
  selectedPkg: "",
}

export default function OrderModal({ isOpen, onClose, selectedPackage }: OrderModalProps) {
  const [formData, setFormData] = useState({ ...initialFormData, selectedPkg: selectedPackage })
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setFormData((prev) => ({ ...prev, selectedPkg: selectedPackage }))
  }, [selectedPackage])

  useEffect(() => {
    if (isOpen) {
      setFormData({ ...initialFormData, selectedPkg: selectedPackage })
    }
  }, [isOpen, selectedPackage])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      closeRef.current?.focus()
    }
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, handleKeyDown])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message =
      `*New Order Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*City:* ${formData.city}\n` +
      `*Product:* ${formData.selectedPkg}\n` +
      `*Quantity:* ${formData.quantity}\n`

    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, "_blank")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Order form"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Place Your Order</h3>
                <p className="text-white/80 text-sm mt-1">Fill in the details below</p>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close order form"
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="order-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <User className="w-4 h-4 inline mr-1.5 text-gray-400" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="order-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="order-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <Phone className="w-4 h-4 inline mr-1.5 text-gray-400" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="order-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="order-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <Mail className="w-4 h-4 inline mr-1.5 text-gray-400" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="order-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="order-city" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  <MapPin className="w-4 h-4 inline mr-1.5 text-gray-400" />
                  City
                </label>
                <input
                  type="text"
                  id="order-city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="order-pkg" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <Package className="w-4 h-4 inline mr-1.5 text-gray-400" />
                    Package
                  </label>
                  <select
                    id="order-pkg"
                    name="selectedPkg"
                    value={formData.selectedPkg}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm bg-white"
                    required
                  >
                    {packages.map((pkg) => (
                      <option key={pkg} value={pkg}>
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="order-qty" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="order-qty"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 mt-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Order via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
