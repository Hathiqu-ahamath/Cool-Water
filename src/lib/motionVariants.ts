import type { Variants, Transition } from "framer-motion"

export const corporateEasing: Transition["ease"] = [0.2, 0, 0, 1]
export const entranceEasing: Transition["ease"] = [0.4, 0, 0.2, 1]

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

export const scaleFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: entranceEasing },
  },
}
