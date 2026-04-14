"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Features", href: "#products", featured: true },
  { label: "Use Cases", href: "#solutions", featured: false },
  { label: "Reliability", href: "#performance", featured: false },
  { label: "Customers", href: "#projects", featured: false },
  { label: "Contact", href: "#contact", featured: false },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[110] bg-transparent">
        <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between px-4 md:px-8">
          <Link href="#top" className="inline-flex items-center gap-2 text-white">
            {/* <span className="grid h-7 w-7 place-items-center rounded-sm border border-white/20 text-[10px] font-bold">
              I
            </span> */}
            <span className="font-display text-sm font-semibold tracking-[0.08em] uppercase">
              Black.
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-white/90 transition hover:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
            <nav className="relative mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-6 md:px-12">
              <div className="mx-auto w-full max-w-sm space-y-8">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i }}
                    onClick={() => setOpen(false)}
                    className="group block text-left text-3xl font-medium uppercase tracking-[0.03em] text-zinc-100 transition hover:text-white md:text-3xl"
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.label}
                      {item.featured ? (
                        <span className="text-xl text-zinc-300 transition group-hover:translate-x-1">→</span>
                      ) : null}
                    </span>
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
