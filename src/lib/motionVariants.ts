import type { Variants, Transition } from "framer-motion"

export const corporateEasing: Transition["ease"] = [0.2, 0, 0, 1]
export const entranceEasing: Transition["ease"] = [0.4, 0, 0.2, 1]
export const ambientEasing: Transition["ease"] = [0.4, 0, 0.2, 1]

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: entranceEasing },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: entranceEasing },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: entranceEasing },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: entranceEasing },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: entranceEasing },
  },
}

export const sectionHeading: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: entranceEasing },
  },
}

export const cardHover = {
  whileHover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    transition: { duration: 0.25, ease: corporateEasing },
  },
}

export const cardTap = {
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.12, ease: corporateEasing },
  },
}

export const buttonHover = {
  whileHover: {
    scale: 1.03,
    transition: { duration: 0.2, ease: corporateEasing },
  },
  whileTap: {
    scale: 0.97,
    transition: { duration: 0.1, ease: corporateEasing },
  },
}

export const iconHover = {
  whileHover: {
    scale: 1.15,
    transition: { duration: 0.2, ease: corporateEasing },
  },
}

export const floatAmbient = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: ambientEasing,
    },
  },
}

export const luxuryCard: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 24px 48px rgba(30,111,159,0.15), 0 0 0 1px rgba(30,111,159,0.1)",
    transition: { duration: 0.35, ease: corporateEasing },
  },
}

export const imageReveal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: entranceEasing },
  },
}

export const shimmer: Variants = {
  animate: {
    x: ["-100%", "100%"],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export const scaleFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: entranceEasing },
  },
}
