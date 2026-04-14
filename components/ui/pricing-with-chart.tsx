"use client"

import { CheckCircleIcon } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", growth: 120 },
  { month: "February", growth: 180 },
  { month: "March", growth: 210 },
  { month: "April", growth: 260 },
  { month: "May", growth: 300 },
  { month: "June", growth: 360 },
  { month: "July", growth: 420 },
  { month: "August", growth: 470 },
  { month: "September", growth: 520 },
  { month: "October", growth: 590 },
  { month: "November", growth: 650 },
  { month: "December", growth: 740 },
]

const chartConfig = {
  growth: {
    label: "Growth",
    color: "#a5b4fc",
  },
} satisfies ChartConfig

export function PricingWithChart() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Pricing</p>
        <h2 className="font-display mt-3 text-3xl font-semibold text-zinc-100 md:text-5xl">
          Pricing that scales with your product.
        </h2>
        <p className="mt-4 text-sm text-zinc-300 md:text-base">
          Choose the plan that fits your team today and grows with your SaaS tomorrow.
        </p>
      </div>

      <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_30px_80px_-45px_rgba(129,140,248,0.45)] md:grid-cols-6">
        <div className="flex flex-col justify-between border-b border-white/10 p-6 md:col-span-2 md:border-b-0 md:border-r md:p-8">
          <div className="space-y-4">
            <div>
              <h3 className="inline rounded-sm border border-white/10 bg-white/[0.03] px-2 py-1 text-xl font-semibold text-zinc-100">
                Starter
              </h3>
              <span className="my-3 block text-3xl font-bold text-indigo-300">$0</span>
              <p className="text-sm text-zinc-400">Best for testing and small side projects</p>
            </div>

            <Button asChild variant="outline" className="w-full rounded-full border-white/20 bg-white/[0.03] text-zinc-100 hover:bg-white/[0.07]">
              <a href="#">Get Started</a>
            </Button>

            <div className="my-6 h-px w-full bg-white/10" />

            <ul className="space-y-3 text-sm text-zinc-300">
              {[
                "Core analytics dashboard",
                "5 team members included",
                "Community + email support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-indigo-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-8 p-6 md:col-span-4 lg:grid-cols-2 lg:p-8">
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-100">Pro Monthly</h3>
              <span className="my-3 block text-3xl font-bold text-indigo-300">$299</span>
              <p className="text-sm text-zinc-400">Perfect for growing product teams and SaaS startups</p>
            </div>
            <div className="h-fit w-full rounded-lg border border-white/10 bg-slate-900/40 p-2">
              <Card className="border-white/10 bg-slate-900/55 text-zinc-100">
                <CardHeader className="space-y-0 border-b border-white/10 p-3">
                  <CardTitle className="text-lg">Plan Popularity</CardTitle>
                  <CardDescription className="text-xs text-zinc-400">
                    Monthly trend of teams choosing Pro.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3">
                  <ChartContainer config={chartConfig}>
                    <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                      <Line
                        dataKey="growth"
                        type="monotone"
                        stroke="var(--color-growth)"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative w-full">
            <div className="text-sm font-medium text-zinc-200">Everything in Starter plus:</div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              {[
                "Unlimited projects and automations",
                "Priority support with faster SLAs",
                "Advanced funnel and retention analytics",
                "Team collaboration and approvals",
                "Role-based access control",
                "Custom integrations and webhooks",
                "Audit logs and compliance exports",
                "Realtime alerting and anomaly detection",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-indigo-300" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid w-full grid-cols-2 gap-2.5">
              <Button asChild className="rounded-full bg-indigo-400 text-zinc-950 hover:bg-indigo-300">
                <a href="#">Get Started</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/[0.03] text-zinc-100 hover:bg-white/[0.07]">
                <a href="#">Start free trial</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

