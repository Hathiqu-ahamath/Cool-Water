import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, ArrowDown } from "lucide-react"
import { fadeInUp, buttonHover, floatAmbient, corporateEasing, entranceEasing, scaleFadeIn } from "../lib/motionVariants"

export default function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-brand-900">
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, opacity }}
      >
        <img
          src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-800/75 to-brand-700/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: entranceEasing }}
      >
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-400/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: corporateEasing }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-white/30"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: corporateEasing }}
        />
        <motion.div
          className="absolute top-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-white/20"
          animate={{ opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: corporateEasing, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-white/15"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: corporateEasing, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-white/20"
          animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: corporateEasing, delay: 0.8 }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 mb-4 border border-white/10 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: entranceEasing, delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-sky-400"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: corporateEasing }}
              />
              <span className="text-white/80 text-sm font-medium tracking-wide">Pure Water. Trusted Quality.</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Pure Drinking Water
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white">
                For A Healthier Life
              </span>
            </h1>

            <motion.p
              className="mt-4 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: entranceEasing, delay: 0.3 }}
            >
              Providing hygienic and quality-assured bottled drinking water trusted by families and businesses across Sri Lanka.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: entranceEasing, delay: 0.4 }}
            >
              <motion.a
                href="https://wa.me/94752871414?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-gray-100 px-8 py-4 rounded-full text-base font-bold shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800"
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
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800"
                variants={buttonHover}
                initial="initial"
                whileHover="whileHover"
                whileTap="whileTap"
              >
                Learn More
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: corporateEasing }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: entranceEasing, delay: 0.5 }}
            >
              <motion.div className="text-center cursor-pointer" whileHover={{ scale: 1.05, y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-white">2010</div>
                <div className="text-white/50 text-sm">Founded</div>
              </motion.div>
              <div className="w-px h-10 bg-white/15" />
              <motion.div className="text-center cursor-pointer" whileHover={{ scale: 1.05, y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-white">19L</div>
                <div className="text-white/50 text-sm">Premium Size</div>
              </motion.div>
              <div className="w-px h-10 bg-white/15" />
              <motion.div className="text-center cursor-pointer" whileHover={{ scale: 1.05, y: -2 }} transition={{ duration: 0.2 }}>
                <div className="text-3xl font-bold text-white">SLS</div>
                <div className="text-white/50 text-sm">Certified</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleFadeIn}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-80 lg:h-96">
              <motion.div
                className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/30"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: corporateEasing }}
              >
                <img
                  src="/assets/hero.png"
                  alt="Cool Water 19L premium bottled drinking water"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="inline-block bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/10">
                    Cool Water Premium
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={floatAmbient}
                animate="animate"
                className="absolute -top-6 -right-6 w-16 h-16"
                aria-hidden="true"
              >
                <svg viewBox="0 0 60 60" className="w-full h-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e0f2fe" />
                      <stop offset="100%" stopColor="#7dd3fc" />
                    </linearGradient>
                  </defs>
                  <path d="M30 8 C30 8 12 28 12 38 C12 48 20 54 30 54 C40 54 48 48 48 38 C48 28 30 8 30 8Z" fill="url(#dropGrad)" opacity="0.6" />
                </svg>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: corporateEasing,
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-8 w-12 h-12"
                aria-hidden="true"
              >
                <svg viewBox="0 0 40 40" className="w-full h-full" aria-hidden="true">
                  <path d="M20 4 C20 4 6 18 6 26 C6 32 12 37 20 37 C28 37 34 32 34 26 C34 18 20 4 20 4Z" fill="url(#dropGrad)" opacity="0.4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
