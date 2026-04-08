"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type HeroAction = {
  label: string
  href: string
  variant?: React.ComponentProps<typeof Button>["variant"]
}

type HeroProps = Omit<React.ComponentPropsWithoutRef<"section">, "title"> & {
  gradient?: boolean
  blur?: boolean
  title: React.ReactNode
  subtitle?: React.ReactNode
  actions?: HeroAction[]
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

const trustStats = [
  { label: "Active Deployments", value: "25K+" },
  { label: "Avg. Efficiency Gain", value: "31%" },
  { label: "Monitoring Uptime", value: "99.99%" },
] as const

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background",
          className,
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
            )}

            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

            <motion.div
              initial={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
            />

            <motion.div
              initial={{ width: "15rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "30rem" }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60"
            />

            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-background [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0.5, width: "15rem" }}
              whileInView={{ opacity: 1, width: "30rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-background [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex flex-1 -translate-y-20 flex-col justify-center gap-4 px-5 md:px-10"
        >
          <div className="flex flex-col items-center space-y-4 text-center mt-20">
            {/* <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mb-2 inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-300"
            >
              Next-gen AI energy intelligence
            </motion.p> */}
            <motion.h1
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
              className={cn(
                "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
                titleClassName,
              )}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.58, duration: 0.5, ease: "easeOut" }}
                className={cn("text-xl text-muted-foreground", subtitleClassName)}
              >
                {subtitle}
              </motion.p>
            )}
            {actions && actions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.68, duration: 0.45, ease: "easeOut" }}
                className={cn("flex gap-4", actionsClassName)}
              >
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    asChild
                    className="transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 grid w-full max-w-3xl gap-3 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl sm:grid-cols-3"
            >
              {trustStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75 + index * 0.07, duration: 0.4 }}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3"
                >
                  <p className="text-xl font-semibold text-zinc-100 md:text-2xl">{item.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-zinc-400">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    )
  },
)
Hero.displayName = "Hero"

function HeroDemo() {
  return (
    <Hero
      title={
        <>
          Powering a smarter <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">solar future</span>.
        </>
      }
      subtitle="Advanced AI automation for energy systems, predictive optimization, and real-time performance control."
      actions={[
        {
          label: "Explore products",
          href: "#",
          variant: "outline",
        },
        {
          label: "Get proposal",
          href: "#",
          variant: "default",
        },
      ]}
      titleClassName="max-w-5xl text-5xl font-extrabold leading-[0.95] md:text-7xl"
      subtitleClassName="max-w-[760px] text-md text-zinc-300 md:text-lg"
      actionsClassName="mt-8"
    />
  )
}

export { Hero, HeroDemo }
