"use client"

import { motion, type Variants } from "framer-motion"

interface ImageRevealProps {
  leftImage: string
  middleImage: string
  rightImage: string
  fourthImage: string
}

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.15,
      staggerChildren: 0.18,
    },
  },
}

const leftImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: -8,
    x: -210,
    y: 8,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    rotate: 0,
    x: -220,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
}

const middleImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: 6,
    x: -70,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    rotate: 0,
    x: -76,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
}

const rightImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: -6,
    x: 70,
    y: 14,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    rotate: 2,
    x: 76,
    y: 8,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
}

const fourthImageVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  animate: {
    rotate: 9,
    x: 210,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
  hover: {
    rotate: 3,
    x: 220,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
}

export default function ImageReveal({ leftImage, middleImage, rightImage, fourthImage }: ImageRevealProps) {
  return (
    <motion.div
      className="relative mx-auto my-2 hidden h-72 w-[700px] items-center justify-center md:flex"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute h-60 w-56 origin-bottom-right overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
        variants={leftImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 30 }}
      >
        <img
          src={leftImage}
          alt="SaaS analytics dashboard"
          className="h-full w-full object-cover p-2 rounded-2xl"
        />
      </motion.div>

      <motion.div
        className="absolute h-60 w-56 origin-bottom-left overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
        variants={middleImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 20 }}
      >
        <img
          src={middleImage}
          alt="SaaS team workspace"
          className="h-full w-full object-cover p-2 rounded-2xl"
        />
      </motion.div>

      <motion.div
        className="absolute h-60 w-56 origin-bottom-right overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
        variants={rightImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 10 }}
      >
        <img
          src={rightImage}
          alt="SaaS product interface"
          className="h-full w-full object-cover p-2 rounded-2xl"
        />
      </motion.div>

      <motion.div
        className="absolute h-56 w-52 origin-bottom-left overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
        variants={fourthImageVariants}
        whileHover="hover"
        animate="animate"
        style={{ zIndex: 5 }}
      >
        <img
          src={fourthImage}
          alt="SaaS admin overview"
          className="h-full w-full object-cover p-2 rounded-2xl"
        />
      </motion.div>
    </motion.div>
  )
}
