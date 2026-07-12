import { memo } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Truck, Clock, Leaf, Smile, Factory } from "lucide-react"
import { sectionHeading, staggerContainer, staggerItem, iconHover } from "../lib/motionVariants"

const features = [
  {
    icon: ShieldCheck,
    title: "100% Quality Assured",
    description: "Every bottle is tested and certified for purity and safety.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Factory,
    title: "Hygienic Production",
    description: "State-of-the-art facility with strict hygiene and sanitation protocols.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Trusted Since 2010",
    description: "Over a decade of experience serving Sri Lankan families.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable delivery service to your home or office.",
    color: "text-brand-600",
    bg: "bg-brand-50",
  },
  {
    icon: Leaf,
    title: "Safe Drinking Water",
    description: "Multi-stage purification for the cleanest, safest drinking water.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description: "Thousands of happy customers across Sri Lanka trust Cool Water.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
]

export default memo(function Features() {
  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Why Cool Water?
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600">
            We are dedicated to providing the highest quality drinking water with unmatched service.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            >
              <motion.div
                className={`${feature.bg} ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}
                aria-hidden="true"
                variants={iconHover}
                whileHover="whileHover"
              >
                <feature.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})
