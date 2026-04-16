import { HeroDemo } from "@/components/ui/hero"
import { Navbar } from "@/components/ui/navbar"
import { EnergySections } from "@/components/landing/energy-sections"
import { EnergyFooter } from "@/components/landing/energy-footer"
import { AmbientBackground, ScrollProgressBar } from "@/components/ui/site-motion"

export default function Home() {
  return (
    <main className="bg-background">
      <ScrollProgressBar />
      <AmbientBackground />
      <div id="top" />
      <Navbar />
      <HeroDemo />
      <EnergySections />
      <EnergyFooter />
    </main>
  )
}
