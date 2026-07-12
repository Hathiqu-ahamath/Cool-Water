import { memo } from "react"
import { motion } from "framer-motion"
import { Home, Building2, PackageCheck, CalendarCheck } from "lucide-react"
import { sectionHeading, staggerContainer, staggerItem, iconHover, buttonHover, scaleFadeIn } from "../lib/motionVariants"
import { WHATSAPP_PHONE, WHATSAPP_ORDER_MESSAGE } from "../lib/constants"

const services = [
  {
    icon: Home,
    title: "Home Delivery",
    description: "Regular water delivery to your doorstep. Set up a convenient schedule that works for you.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Building2,
    title: "Office Supply",
    description: "Keep your workplace hydrated with scheduled bulk deliveries for offices of all sizes.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: PackageCheck,
    title: "Business Orders",
    description: "Special rates and dedicated service for restaurants, hotels, and commercial establishments.",
    color: "text-brand-600",
    bg: "bg-brand-50",
  },
  {
    icon: CalendarCheck,
    title: "Event Supply",
    description: "Planning an event? We provide bulk water supply for weddings, conferences, and gatherings.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
]

export default memo(function Delivery() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Our Service</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Delivery & Service
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600">
            We make it easy to get pure drinking water wherever you need it, whenever you need it.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex gap-5"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(30,111,159,0.08)" }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            >
              <motion.div
                className={`${service.bg} ${service.color} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}
                aria-hidden="true"
                variants={iconHover}
                whileHover="whileHover"
              >
                <service.icon className="w-7 h-7" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={scaleFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 relative rounded-2xl overflow-hidden border border-brand-100 shadow-xl"
        >
          <div className="absolute inset-0">
            <img
              src="https://coolwater.lk/wp-content/uploads/2022/12/19L.jpg"
              alt="Cool Water 19L delivery bottles"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = "none" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-50/95 via-white/92 to-brand-50/95" />
          </div>
          <div className="relative p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Contact us today to set up your delivery schedule. We serve customers across Sri Lanka.
            </p>
            <motion.a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_ORDER_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-brand-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              variants={buttonHover}
              initial="initial"
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Order via WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
})
