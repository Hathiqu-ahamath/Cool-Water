import { motion } from "framer-motion"
import { ShieldCheck, Award, Microscope, Factory } from "lucide-react"
import { sectionHeading, staggerContainer, staggerItem, iconHover, scaleFadeIn } from "../lib/motionVariants"

const qualityItems = [
  {
    icon: Award,
    title: "SLS-894 Certified",
    description: "Our products meet the stringent Sri Lanka Standards Institute requirements for bottled drinking water, ensuring international quality benchmarks.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Ministry of Health Approved",
    description: "Fully licensed and regulated by the Ministry of Health, guaranteeing compliance with national health and safety standards.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Microscope,
    title: "Rigorous Testing",
    description: "Every batch undergoes comprehensive laboratory testing for purity, pH balance, mineral content, and microbiological safety.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Factory,
    title: "Hygienic Production",
    description: "State-of-the-art production facility with strict hygiene protocols. Multi-stage filtration and UV treatment ensure the purest water.",
    color: "text-brand-600",
    bg: "bg-brand-50",
  },
]

export default function QualitySection() {
  return (
    <section id="quality" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-brand-50/30 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Quality Assurance</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Quality You Can Trust
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600">
            Every drop of Cool Water undergoes rigorous quality control to ensure it meets the highest standards of purity and safety.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {qualityItems.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            >
              <div className="flex gap-5">
                <motion.div
                  className={`${item.bg} ${item.color} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}
                  aria-hidden="true"
                  variants={iconHover}
                  whileHover="whileHover"
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={scaleFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 relative rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0">
            <img
              src="https://coolwater.lk/wp-content/uploads/2022/12/profile_2.jpg"
              alt="Cool Water quality testing laboratory"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = "none" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-800/95 via-brand-700/90 to-brand-600/85" />
          </div>
          <div className="relative p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Our Commitment to Purity
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              From source to bottle, every step of our process is monitored and controlled. We maintain strict hygiene standards at our production facility and conduct regular quality audits to ensure your safety.
            </p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div className="text-center" whileHover={{ scale: 1.05, y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-white">8+</div>
                <div className="text-white/60 text-sm mt-1">Quality Checks</div>
              </motion.div>
              <div className="w-px h-10 bg-white/20" />
              <motion.div className="text-center" whileHover={{ scale: 1.05, y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/60 text-sm mt-1">Lab Tested</div>
              </motion.div>
              <div className="w-px h-10 bg-white/20" />
              <motion.div className="text-center" whileHover={{ scale: 1.05, y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-white/60 text-sm mt-1">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
