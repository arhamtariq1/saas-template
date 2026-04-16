"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import ImageReveal from "@/components/ui/image-tiles"
import { ScrollReveal } from "@/components/ui/site-motion"
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
          <div className="flex flex-col items-center space-y-4 text-center mt-32">
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
              initial={{ opacity: 0, y: 22, scale: 0.97, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.72, ease: "easeOut" }}
              className={cn(
                "font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.78 + index * 0.08, duration: 0.42, ease: "easeOut" }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={action.variant || "default"}
                      asChild
                      className={cn(
                        "group relative h-12 overflow-hidden rounded-full px-6 text-sm font-medium tracking-[0.01em] transition-all duration-300",
                        action.variant === "outline"
                          ? "border-white/25 bg-white/[0.04] text-zinc-100 backdrop-blur-md hover:border-indigo-300/50 hover:bg-white/[0.08] hover:text-white"
                          : "border border-indigo-300/40 bg-gradient-to-r from-indigo-300 via-indigo-200 to-cyan-200 text-slate-950 shadow-[0_14px_35px_-18px_rgba(129,140,248,0.9)] hover:shadow-[0_18px_45px_-18px_rgba(129,140,248,1)]",
                      )}
                    >
                      <Link href={action.href} className="inline-flex items-center gap-2">
                        <span>{action.label}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            )}

            <ScrollReveal preset="zoom-in" delay={0.12} duration={0.65} className="relative mt-6 w-full max-w-4xl">
              <div className="relative flex justify-center">
                <ImageReveal
                  leftImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
                  middleImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                  rightImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
                  fourthImage="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80"
                />
              </div>
            </ScrollReveal>
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
          Building a faster <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">SaaS future.</span>
        </>
      }
      subtitle="AI-powered workflows for product teams, with real-time analytics, automation, and enterprise-grade reliability."
      actions={[
        {
          label: "Explore features",
          href: "#",
          variant: "outline",
        },
        {
          label: "Start free trial",
          href: "#",
          variant: "default",
        },
      ]}
      titleClassName="max-w-5xl text-5xl font-extrabold leading-[0.95] md:text-7xl"
      subtitleClassName="max-w-[760px] text-sm !mb-7 text-zinc-300 md:text-lg"
      actionsClassName="mt-8"
    />
  )
}

export { Hero, HeroDemo }
