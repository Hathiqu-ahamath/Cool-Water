import { useRef, useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Phone, MessageCircle, MapPin, Clock, Loader2 } from "lucide-react"
import { sectionHeading, fadeInLeft, fadeInRight, iconHover, buttonHover } from "../lib/motionVariants"

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+94 75 287 1414",
    href: "tel:+94752871414",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/94752871414",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "38, Cool Water Road, Addappallam, Nintavur-10, Sri Lanka",
    href: null,
    color: "text-brand-600",
    bg: "bg-brand-50",
  },
  {
    icon: Clock,
    title: "Service Hours",
    value: "Mon - Sat: 8:00 AM - 6:00 PM",
    href: null,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
]

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const data = new FormData(form)
    const name = data.get("name") as string
    const email = data.get("email") as string
    const phone = data.get("phone") as string
    const message = data.get("message") as string

    if (!name || !email || !message) return

    setSending(true)
    const mailtoLink = `mailto:info@coolwater.lk?subject=Enquiry from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0A%0AMessage:%0A${encodeURIComponent(message)}`
    window.location.href = mailtoLink
    setTimeout(() => setSending(false), 2000)
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-sky-50 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600">
            Ready to order or have questions? We're here to help. Reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item) => (
              item.href ? (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-brand-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(30,111,159,0.1)" }}
                  transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
                >
                  <motion.div
                    className={`${item.bg} ${item.color} w-10 h-10 rounded-xl flex items-center justify-center`}
                    aria-hidden="true"
                    variants={iconHover}
                    whileHover="whileHover"
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-500">{item.title}</div>
                    <div className="font-semibold text-gray-900 text-sm">{item.value}</div>
                  </div>
                </motion.a>
              ) : (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100"
                >
                  <div className={`${item.bg} ${item.color} w-10 h-10 rounded-xl flex items-center justify-center`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{item.title}</div>
                    <div className="font-semibold text-gray-900 text-sm">{item.value}</div>
                  </div>
                </div>
              )
            ))}
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Send Us a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+94 77 123 4567"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  autoComplete="off"
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all duration-200 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={sending}
                className="w-full bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-brand-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                variants={buttonHover}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                {sending ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
