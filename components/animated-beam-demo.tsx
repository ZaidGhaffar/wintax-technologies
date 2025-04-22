"use client"

import React from "react"

export function AnimatedBeamDemo() {
  return (
    <div className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-md bg-slate-900">
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]">
        <div className="absolute inset-0 h-full w-full animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]" />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-2xl font-bold text-white">Connect Your Workflow</h3>
        <p className="max-w-[500px] text-slate-300">
          Seamlessly integrate our platform with your existing tools and processes
        </p>
      </div>
    </div>
  )
} 