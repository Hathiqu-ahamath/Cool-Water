import { memo } from "react"
import { motion } from "framer-motion"
import { Phone, ArrowDown } from "lucide-react"
import { fadeInUp, buttonHover, entranceEasing, scaleFadeIn } from "../lib/motionVariants"
import { WHATSAPP_PHONE, WHATSAPP_ORDER_MESSAGE } from "../lib/constants"

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-brand-900">
      <div className="absolute inset-0">
        <img
          src="/assets/hero.webp"
          alt="Pure water flowing over smooth river stones"
          className="w-full h-full object-cover blur-sm scale-105"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-800/75 to-brand-700/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-400/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 sm:pt-28 lg:py-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Cool Water
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white">
                For A Healthier Life
              </span>
            </h1>

            <motion.p
              className="mt-3 sm:mt-4 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: entranceEasing, delay: 0.3 }}
            >
              Quality-assured bottled drinking water trusted across Sri Lanka.
            </motion.p>

            <motion.div
              className="mt-4 sm:mt-6 flex flex-nowrap justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: entranceEasing, delay: 0.4 }}
            >
              <motion.a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_ORDER_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-gray-100 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800"
                variants={buttonHover}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <Phone className="w-5 h-5" />
                Order Now
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:bg-white/10 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800"
                variants={buttonHover}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Learn More
                <ArrowDown className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: entranceEasing, delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">2010</div>
                <div className="text-white/50 text-xs sm:text-sm">Founded</div>
              </div>
              <div className="w-px h-10 bg-white/15" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">19L</div>
                <div className="text-white/50 text-xs sm:text-sm">Premium Size</div>
              </div>
              <div className="w-px h-10 bg-white/15" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">SLS</div>
                <div className="text-white/50 text-xs sm:text-sm">Certified</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleFadeIn}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >
            <div className="relative w-32 h-40 sm:w-64 sm:h-80 lg:w-80 lg:h-96">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/30">
                <img
                  src="/assets/hero.webp"
                  alt="Cool Water 19L premium bottled drinking water"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="320"
                  height="384"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 w-max max-w-[120%]">
                <span className="inline-block bg-white/15 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-[10px] sm:text-sm font-semibold border border-white/10 whitespace-nowrap shadow-lg">
                  Pure Water. Trusted Quality.
                </span>
              </div>

              <div className="absolute -top-6 -right-6 w-16 h-16 animate-float-slow" aria-hidden="true">
                <svg viewBox="0 0 60 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e0f2fe" />
                      <stop offset="100%" stopColor="#7dd3fc" />
                    </linearGradient>
                  </defs>
                  <path d="M30 8 C30 8 12 28 12 38 C12 48 20 54 30 54 C40 54 48 48 48 38 C48 28 30 8 30 8Z" fill="url(#dropGrad)" opacity="0.6" />
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-8 w-12 h-12 animate-float-slow-delay" aria-hidden="true">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path d="M20 4 C20 4 6 18 6 26 C6 32 12 37 20 37 C28 37 34 32 34 26 C34 18 20 4 20 4Z" fill="url(#dropGrad)" opacity="0.4" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
