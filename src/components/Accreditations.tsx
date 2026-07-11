import { motion } from "framer-motion"
import { Award, ShieldCheck, Droplets } from "lucide-react"
import { sectionHeading, staggerContainer, staggerItem, iconHover } from "../lib/motionVariants"

const accreditations = [
  {
    icon: Award,
    title: "Sri Lanka Standards",
    subtitle: "SLS-894",
    description: "Certified by the Sri Lanka Standards Institute, meeting international benchmarks for bottled drinking water quality and safety.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Ministry of Health",
    subtitle: "Manufacturing, Packaging & Distribution",
    description: "Fully certified by the Ministry of Health for the manufacturing, packaging, and distribution of bottled water, ensuring compliance with national health regulations.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Droplets,
    title: "Water Resources Board",
    subtitle: "Approved Source",
    description: "Authorized by the Water Resources Board, confirming our water source meets all environmental and purity standards for human consumption.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
]

export default function Accreditations() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Certifications</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Accreditations
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600">
            Recognized and certified by leading authorities, ensuring the highest standards of quality and safety.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {accreditations.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm cursor-pointer text-center"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            >
              <motion.div
                className={`${item.bg} ${item.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6`}
                aria-hidden="true"
                variants={iconHover}
                whileHover="whileHover"
              >
                <item.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-brand-600 font-semibold text-sm mb-4">{item.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
