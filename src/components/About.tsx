import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, Heart, TrendingUp } from "lucide-react"
import { sectionHeading, staggerContainer, staggerItem, iconHover } from "../lib/motionVariants"

const milestones = [
  {
    year: "2010",
    title: "Founded",
    description: "Cool Water began its journey in Sri Lanka, committed to providing quality drinking water.",
    icon: Heart,
  },
  {
    year: "2022",
    title: "New Chapter",
    description: "Acquired by Ahamed and Brother Company (Pvt) Ltd, ushering in enhanced quality standards.",
    icon: TrendingUp,
  },
  {
    year: "Today",
    title: "Trusted Choice",
    description: "Serving thousands of homes and businesses with premium quality bottled drinking water.",
    icon: Shield,
  },
]

export default function About() {
  const { scrollY } = useScroll()
  const imgY = useTransform(scrollY, [0, 600], [0, -80])

  return (
    <section id="about" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <motion.div
        className="absolute right-0 top-0 w-1/3 h-full pointer-events-none"
        style={{ y: imgY, opacity: 0.15 }}
      >
        <img
          src="https://coolwater.lk/wp-content/uploads/2022/12/profile_1.jpg"
          alt="Cool Water production facility"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Our Story</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            About Cool Water
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            With commercial operations dating back to <strong className="text-gray-900">2010</strong>, Cool Water has established itself as a trusted name in the bottled drinking water industry across Sri Lanka. In <strong className="text-gray-900">September 2022</strong>, we entered an exciting new chapter under the ownership of <strong className="text-gray-900">Ahamed and Brother Company (Pvt) Ltd</strong>, bringing enhanced resources and renewed commitment to quality.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Today, we serve thousands of satisfied customers with our range of premium bottled water products, ensuring every drop meets the highest standards of purity and hygiene.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              variants={staggerItem}
              className="relative group"
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm"
                whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(30,111,159,0.1)" }}
                transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-6"
                  aria-hidden="true"
                  variants={iconHover}
                  whileHover="whileHover"
                >
                  <item.icon className="w-7 h-7 text-brand-500" />
                </motion.div>
                <div className="text-4xl font-extrabold text-brand-500 mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
              {index < milestones.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gray-200" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
