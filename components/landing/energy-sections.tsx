"use client"

import { motion } from "framer-motion"
import { Bot, Gauge, PanelsTopLeft, ShieldCheck, Zap } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4"
import { PricingWithChart } from "@/components/ui/pricing-with-chart"

const products = [
  {
    title: "Workflow Automation",
    desc: "Build AI-powered flows that automate repetitive ops, triage requests, and move work across tools instantly.",
    icon: Zap,
  },
  {
    title: "Realtime Analytics",
    desc: "Track adoption, retention, and funnel health with live dashboards your product and growth teams can trust.",
    icon: Gauge,
  },
  {
    title: "Enterprise Security",
    desc: "Ship with SOC 2-ready controls, granular RBAC, and audit logs built for compliance-heavy organizations.",
    icon: ShieldCheck,
  },
] as const

const metrics = [
  { label: "API Success Rate", value: "99.95%" },
  { label: "Median Response Time", value: "120ms" },
  { label: "Teams Onboarded", value: "25K+" },
] as const

const featurePanels = [
  {
    id: ".01",
    title: "Built-in AI Copilot",
    desc: "Context-aware assistants draft updates, summarize tickets, and suggest next actions right inside your workflows.",
  },
  {
    id: ".02",
    title: "Enterprise-grade Reliability",
    desc: "Multi-region architecture keeps your workspace responsive through traffic spikes, releases, and critical business hours.",
  },
  {
    id: ".03",
    title: "Composable Platform APIs",
    desc: "Plug into your existing stack with clean APIs, webhooks, and event streams for custom product experiences.",
  },
] as const

const capabilityPanels = [
  {
    title: "Smart Automation Rules",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    desc: "Automate assignment, escalation, and follow-ups with logic your ops team can update in minutes.",
  },
  {
    title: "Predictive Insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    desc: "Catch churn signals and delivery blockers early with anomaly alerts and trend intelligence.",
  },
  {
    title: "Cross-tool Orchestration",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    desc: "Coordinate actions across CRM, support, and billing without custom glue code.",
  },
  {
    title: "Realtime Team Analytics",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    desc: "Surface product and customer metrics instantly with drilldowns for every team.",
  },
  {
    title: "Enterprise Scale Controls",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    desc: "Roll out safely with SSO, advanced permissions, and organization-level governance.",
  },
] as const

const caseStudyItems: Gallery4Item[] = [
  {
    id: "growth-suite",
    title: "Growth Suite Rollout",
    description:
      "Unified onboarding, activation tracking, and lifecycle messaging to improve trial-to-paid conversion.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "support-intelligence",
    title: "Support Intelligence",
    description:
      "Implemented AI triage and auto-routing to reduce response times and raise CSAT during product launches.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "retention-lab",
    title: "Retention Lab",
    description:
      "Built churn detection dashboards and proactive playbooks that improved expansion revenue quarter-over-quarter.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ops-orchestrator",
    title: "Ops Orchestrator",
    description:
      "Connected CRM, billing, and product events to automate repetitive workflows across sales and customer success.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  },
]

export function EnergySections() {
  const [activeCapability, setActiveCapability] = useState(0)

  return (
    <div className="relative z-10">
      <section id="products" className="py-20 ">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="mb-5 px-6 md:px-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Features</p>
              <h2 className="mt-3 text-2xl font-medium text-zinc-100 md:text-3xl">
                Engineered for modern SaaS teams.
              </h2>
            </div>
            <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-fit rounded-full border-white/20 bg-white/[0.03] text-zinc-100">
                Feature catalog
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid border-y border-white/10 md:grid-cols-3">
            {products.map((item, i) => {
              const Icon = item.icon
              const panelId = `.0${i + 1}`
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                  className="group relative min-h-[220px] border-b border-white/10 px-6 py-8 md:min-h-[250px] md:border-b-0 md:border-r md:border-white/10 md:px-8 md:py-10 last:border-r-0"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-zinc-200" />
                    </div>
                    <p className="text-right text-4xl font-semibold tracking-tight text-zinc-500/70 transition-colors duration-300 group-hover:text-indigo-200/70">
                      {panelId}
                    </p>
                  </div>
                  <h3 className="mt-5 max-w-xs text-3xl font-semibold uppercase leading-[0.95] text-zinc-100 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                  <span className="pointer-events-none absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Capabilities</p>
            <h3 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-5xl">
              Accelerate product operations across every team.
            </h3>
            <p className="mt-4 max-w-md text-sm text-zinc-300 md:text-base">
              Hover each panel to preview how the platform improves automation,
              visibility, and shipping velocity.
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

      <section id="solutions" className="px-6 py-20 md:px-10">
        <div className="relative mx-auto grid max-w-7xl items-center gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 shadow-[0_30px_80px_-45px_rgba(129,140,248,0.45)] md:grid-cols-[1fr_1fr] md:p-10">
          <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Solutions</p>
            <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
              End-to-end workflows for product, growth, and support teams.
            </h3>
            <p className="mt-4 text-sm text-zinc-300 md:text-base">
              Unify intake, execution, and reporting in one platform so teams ship faster with less operational overhead.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-full bg-zinc-100 text-black hover:bg-white">Book demo</Button>
              <Button variant="outline" className="rounded-full border-white/20 bg-white/[0.03] text-zinc-100">
                View docs
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="relative rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 text-zinc-200">
              <PanelsTopLeft className="h-4 w-4" />
              <span className="text-sm">Implementation stack</span>
            </div>
            <ul className="mt-5 space-y-4 text-sm text-zinc-300">
              <li>• Workspace setup and data modeling</li>
              <li>• SSO, roles, and access governance</li>
              <li>• API + webhook integrations</li>
              <li>• Live observability and alerting</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="case-studies" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Gallery4
            title="Case studies from modern SaaS teams."
            description="See how product, growth, and support teams use our platform to ship faster and drive measurable outcomes."
            items={caseStudyItems}
          />
        </div>
      </section>


      <section id="performance" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-400">Performance</p>
          <h3 className="mt-3 text-center text-2xl font-semibold text-zinc-100 md:text-4xl">
            Data-backed performance, built for scale.
          </h3>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.015 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-6 text-center backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="text-3xl font-semibold text-zinc-100">{metric.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-zinc-400">{metric.label}</div>
                <span className="pointer-events-none absolute inset-x-10 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-indigo-300 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <PricingWithChart />
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-8 md:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/[0.09] via-white/[0.04] to-transparent p-8 shadow-[0_30px_80px_-45px_rgba(129,140,248,0.45)] md:p-10">
          <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Contact</p>
          <h3 className="mt-3 text-2xl font-semibold text-zinc-100 md:text-4xl">
            Start your SaaS rollout with experts.
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-full bg-zinc-100 text-black hover:bg-white">Request proposal</Button>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/[0.03] text-zinc-100">
              hello@blacksaas.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
