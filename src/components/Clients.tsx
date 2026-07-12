import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { clients } from "../lib/clientsData"
import { sectionHeading } from "../lib/motionVariants"

const doubledClients = [...clients, ...clients]

function LogoRow({ items, className }: { items: typeof clients; className: string }) {
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
    <div className="relative overflow-hidden marquee-wrapper" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div ref={innerRef} className={`flex gap-6 items-center w-max ${className}`}>
        {items.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="marquee-card flex items-center gap-3 shrink-0 px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm active:scale-95 active:shadow-md transition-transform duration-150"
          >
            <img src={client.logo} alt={client.name} className="w-16 h-16 object-contain rounded" onError={(e) => { e.currentTarget.style.display = "none" }} />
            <span className="font-semibold text-gray-900 text-sm whitespace-nowrap">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="clients" className="py-16 lg:py-20 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-brand-500 font-semibold text-sm tracking-[0.2em] uppercase">Trusted By</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
            Our Valued Clients
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-gray-600">
            Proudly serving leading organizations across Sri Lanka with premium quality drinking water.
          </p>
        </motion.div>

        <div className="space-y-6 mb-10">
          <LogoRow items={doubledClients} className="animate-marquee-left" />
          <LogoRow items={doubledClients} className="animate-marquee-right" />
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 bg-white hover:bg-brand-50 text-brand-600 border-2 border-brand-200 hover:border-brand-400 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            View All Clients
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
