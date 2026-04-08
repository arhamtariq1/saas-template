"use client"

import { motion } from "framer-motion"
import { BatteryCharging, Gauge, PanelsTopLeft, SunMedium, Zap } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Hybrid Inverters",
    desc: "Smart grid + battery synchronization with adaptive load balancing for homes and businesses.",
    icon: Zap,
  },
  {
    title: "Solar Storage Packs",
    desc: "High-density lithium systems designed for long lifecycle performance and safer backup power.",
    icon: BatteryCharging,
  },
  {
    title: "Smart Solar Panels",
    desc: "Next-gen panel arrays with heat-optimized output and weather-aware monitoring intelligence.",
    icon: SunMedium,
  },
] as const

const metrics = [
  { label: "Conversion Efficiency", value: "98.2%" },
  { label: "Warranty Support", value: "12 Years" },
  { label: "Installations", value: "25K+" },
] as const

const featurePanels = [
  {
    id: ".01",
    title: "Built-in Solar Intelligence",
    desc: "Advanced MPPT inverter enables direct solar operation, maximizing efficiency without external converters or complex wiring.",
  },
  {
    id: ".02",
    title: "Extreme Climate Performance",
    desc: "T3-rated engineering ensures powerful, stable cooling in extreme heat, dusty environments, and fluctuating power conditions.",
  },
  {
    id: ".03",
    title: "Hybrid Energy Reliability",
    desc: "Automatically switches between solar and grid power, delivering uninterrupted cooling with reduced electricity costs.",
  },
] as const

const capabilityPanels = [
  {
    title: "Smart Inverter Control",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    desc: "AI-assisted inverter tuning for safer and more efficient solar output.",
  },
  {
    title: "Predictive Maintenance",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1400&q=80",
    desc: "Detect performance drops early with continuous diagnostics and anomaly alerts.",
  },
  {
    title: "Grid + Battery Intelligence",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
    desc: "Balance grid and storage flow dynamically to cut energy costs and downtime.",
  },
  {
    title: "Remote Energy Analytics",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    desc: "Live dashboards with actionable insights across all installed solar assets.",
  },
  {
    title: "Industrial Solar Scaling",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=80",
    desc: "Scale from pilot deployments to utility-size operations with confidence.",
  },
] as const

export function EnergySections() {
  const [activeCapability, setActiveCapability] = useState(0)

  return (
    <div className="relative z-10">
      <section id="products" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Products</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-5xl">
                Engineered for reliable clean energy.
              </h2>
            </div>
            <Button variant="outline" className="w-fit rounded-full border-white/20 bg-white/[0.03] text-zinc-100">
              Product catalog
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {products.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-xl transition hover:border-white/20"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-zinc-200" />
                  </div>
                  <h3 className="mt-5 text-xl font-medium text-zinc-100">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 md:grid-cols-[1fr_1fr] md:p-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Solutions</p>
            <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
              End-to-end systems for homes, factories, and utility projects.
            </h3>
            <p className="mt-4 text-sm text-zinc-300 md:text-base">
              We design complete energy ecosystems: generation, storage, and intelligent distribution with real-time visibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-full bg-zinc-100 text-black hover:bg-white">Book consultation</Button>
              <Button variant="outline" className="rounded-full border-white/20 bg-white/[0.03] text-zinc-100">
                Download brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 text-zinc-200">
              <PanelsTopLeft className="h-4 w-4" />
              <span className="text-sm">Deployment stack</span>
            </div>
            <ul className="mt-5 space-y-4 text-sm text-zinc-300">
              <li>• Site audit and feasibility simulation</li>
              <li>• Grid integration + smart metering</li>
              <li>• Battery + inverter optimization</li>
              <li>• Live diagnostics and service alerts</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Capabilities</p>
            <h3 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-5xl">
              Accelerate solar intelligence across every site.
            </h3>
            <p className="mt-4 max-w-md text-sm text-zinc-300 md:text-base">
              Hover each panel to expand and preview how our energy stack improves reliability,
              monitoring, and cost efficiency.
            </p>
            <Button className="mt-6 rounded-full bg-zinc-100 text-black hover:bg-white">
              Contact sales
            </Button>
          </div>

          <div className="flex min-h-[340px] gap-3 overflow-hidden">
            {capabilityPanels.map((item, idx) => {
              const isActive = idx === activeCapability
              return (
                <motion.article
                  key={item.title}
                  onMouseEnter={() => setActiveCapability(idx)}
                  initial={false}
                  animate={{ flex: isActive ? 4.2 : 1 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative min-h-[340px] overflow-hidden rounded-[1.4rem] border border-white/15 bg-black/70"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className={`object-cover transition duration-500 ${isActive ? "opacity-80" : "opacity-40 grayscale"
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center px-2"
                    animate={{ opacity: isActive ? 0 : 1, y: isActive ? -8 : 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                  >
                    <p className="whitespace-nowrap py-4 text-xs leading-none tracking-tight text-white [writing-mode:vertical-rl] md:text-base">
                      {item.title}
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute inset-x-4 bottom-4"
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                    transition={{ duration: 0.32, ease: "easeInOut" }}
                  >
                    <p className="text-xl font-semibold text-white md:text-2xl">
                      {item.title}
                    </p>
                    <p className="mt-2 max-w-md text-sm text-zinc-200">{item.desc}</p>
                  </motion.div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-0 py-10 md:py-14">
        <div className="grid border-y border-white/10 md:grid-cols-3">
          {featurePanels.map((panel, i) => (
            <motion.article
              key={panel.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative min-h-[220px] border-b border-white/10 px-6 py-8 md:min-h-[250px] md:border-b-0 md:border-r md:border-white/10 md:px-8 md:py-10 last:border-r-0"
            >
              <p className="text-right text-4xl font-semibold tracking-tight text-zinc-500/70">
                {panel.id}
              </p>
              <h3 className="mt-3 max-w-xs text-3xl font-semibold uppercase leading-[0.95] text-zinc-100 md:text-2xl">
                {panel.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-300">
                {panel.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="performance" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-400">Performance</p>
          <h3 className="mt-3 text-center text-2xl font-semibold text-zinc-100 md:text-4xl">
            Data-backed power, built for long-term output.
          </h3>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 text-center backdrop-blur-xl"
              >
                <div className="text-3xl font-semibold text-zinc-100">{metric.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-white/10 bg-black/35 p-7 backdrop-blur-xl md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Projects</p>
            <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
              Utility-scale execution with premium reliability.
            </h3>
            <p className="mt-4 text-sm text-zinc-300 md:text-base">
              From rooftop systems to industrial solar fields, each rollout is tailored for efficiency targets and long-term maintenance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.05 }}
            className="rounded-[2rem] border border-white/10 bg-black/30 p-7 backdrop-blur-xl md:p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
              <Gauge className="h-3.5 w-3.5" />
              Live monitoring ready
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-300">
              Every installation includes telemetry-ready infrastructure for continuous analytics, anomaly detection, and remote maintenance planning.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-8 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.09] via-white/[0.04] to-transparent p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Contact</p>
          <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
            Start your solar transition with experts.
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-full bg-zinc-100 text-black hover:bg-white">Request proposal</Button>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/[0.03] text-zinc-100">
              sales@black.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
