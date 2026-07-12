import { useRef, memo } from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { sectionHeading, staggerContainer, staggerItem } from "../lib/motionVariants"

const testimonials = [
  {
    id: "priya",
    name: "Priya Jayawardena",
    role: "Homeowner, Colombo",
    content: "We've been using Cool Water for over three years. The quality is consistently excellent and delivery is always on time. Highly recommended for families.",
    rating: 5,
  },
  {
    id: "ranil",
    name: "Ranil Fernando",
    role: "Office Manager, Kandy",
    content: "Cool Water supplies our entire office building. Their service is professional and reliable. Our staff love the quality of the water.",
    rating: 5,
  },
  {
    id: "samantha",
    name: "Samantha Perera",
    role: "Restaurant Owner, Galle",
    content: "As a restaurant owner, water quality is crucial. Cool Water meets all our standards. Our customers appreciate the difference.",
    rating: 4,
  },
]

const doubledTestimonials = [...testimonials, ...testimonials]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm marquee-card min-w-[280px] max-w-[320px] shrink-0">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-brand-200 mb-4" />
      <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export default memo(function Testimonials() {
  const innerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = () => {
    if (innerRef.current) innerRef.current.style.animationPlayState = "paused"
  }

  const handleTouchEnd = () => {
    if (innerRef.current) {
      setTimeout(() => {
        if (innerRef.current) innerRef.current.style.animationPlayState = "running"
      }, 1000)
    }
  }

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
          <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="md:hidden">
          <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div ref={innerRef} className="flex gap-6 items-stretch w-max animate-marquee-left">
              {doubledTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(30,111,159,0.15), 0 0 0 1px rgba(30,111,159,0.1)" }}
              transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-brand-200 mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})
