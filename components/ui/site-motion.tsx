"use client"

import * as React from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion"

import { cn } from "@/lib/utils"

/** Default viewport: trigger once, a bit before element is fully in view (AOS-like). */
export const scrollViewport = {
  once: true as const,
  amount: 0.2 as const,
  margin: "0px 0px -12% 0px" as const,
}

export type ScrollRevealPreset =
  | "fade-up"
  | "fade-down"
  | "fade"
  | "fade-left"
  | "fade-right"
  | "zoom-in"

const presetVariants: Record<
  ScrollRevealPreset,
  { hidden: Record<string, number>; visible: Record<string, number> }
> = {
  "fade-up": { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -28 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  "fade-left": { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  "fade-right": { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
}

export type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  preset?: ScrollRevealPreset
  delay?: number
  duration?: number
  once?: boolean
}

/**
 * Scroll-triggered reveal (AOS-style) using Framer Motion `whileInView`.
 * Respects `prefers-reduced-motion`: no animation, content shows immediately.
 */
export function ScrollReveal({
  children,
  className,
  preset = "fade-up",
  delay = 0,
  duration = 0.55,
  once = true,
}: ScrollRevealProps) {
  const reduced = useReducedMotion()
  const v = presetVariants[preset]

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...scrollViewport, once }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Stagger children inside a scroll-revealed container (lists, grids). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
}

export type StaggerScrollProps = {
  children: React.ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  once?: boolean
}

export function StaggerScroll({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.06,
  once = true,
}: StaggerScrollProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...scrollViewport, once }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

/** @deprecated Prefer `ScrollReveal` — same idea, safer defaults */
export function RevealSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <ScrollReveal className={className} preset="fade-up" delay={delay}>
      {children}
    </ScrollReveal>
  )
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.2,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-gradient-to-r from-indigo-300 via-indigo-200 to-cyan-200"
    />
  )
}

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ x: [0, 22, 0], y: [0, -16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
