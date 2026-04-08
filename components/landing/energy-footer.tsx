"use client"

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function EnergyFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black/50 px-6 py-12 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.08em] text-zinc-100 uppercase">
            Black.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
            Building intelligent solar and energy systems for homes, enterprises, and industrial infrastructure.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Products</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li><a href="#products" className="hover:text-white">Hybrid Inverters</a></li>
            <li><a href="#products" className="hover:text-white">Solar Storage</a></li>
            <li><a href="#products" className="hover:text-white">Smart Panels</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Connect</p>
          <p className="mt-4 text-sm text-zinc-300">sales@black.com</p>
          <div className="mt-4 flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/15 p-2 text-zinc-300 hover:text-white"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/15 p-2 text-zinc-300 hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/15 p-2 text-zinc-300 hover:text-white"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-white/15 p-2 text-zinc-300 hover:text-white"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs text-zinc-500">
        © {year} Black Global. All rights reserved.
      </div>
    </footer>
  )
}
