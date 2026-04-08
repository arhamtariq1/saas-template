import { HeroDemo } from "@/components/ui/hero"
import { Navbar } from "@/components/ui/navbar"
import { EnergySections } from "@/components/landing/energy-sections"
import { EnergyFooter } from "@/components/landing/energy-footer"

export default function Home() {
  return (
    <main className="bg-background">
      <div id="top" />
      <Navbar />
      <HeroDemo />
      <EnergySections />
      <EnergyFooter />
    </main>
  )
}
