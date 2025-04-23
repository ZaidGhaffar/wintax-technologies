"use client"

import { useRef } from "react"
import Image from "next/image"
import { Play, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBeamDemo } from "@/components/animated-beam"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import  TimeSavingSection from "@/components/time-saving-section"
import Drone3 from "@/public/Drone-3.png"
import Navbar from "@/components/responsive-navbar"

import WhatWeDoSection from "@/components/what-we-do-section"


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Video Button */}
            <button className="flex items-center gap-4 text-gray-700 hover:text-gray-900">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <Play size={16} />
              </div>
              <span className="text-sm font-normal">
                Watch instructional video on
                <br />
                how to use our platform
              </span>
            </button>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Reveal a fresh dimension of efficiency within your Projects
                <span className="inline-flex items-center ml-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  AI based platform
                </span>
              </h1>

              <p className="text-gray-700">
                We develop software designed to aid employees and process specialists in their daily tasks, enhancing
                human efficacy, minimizing errors, and amplifying adaptability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
                Request early access
              </Button>
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
                Learn more <ArrowRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-1 text-sm">(5.0)</span>
                      </div>
                      <div className="text-xs font-semibold">OVER 2K+ USERS</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <a href="#" className="text-xs text-gray-600 hover:underline">
                    Check all reviews
                    <br />
                    on Clutch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative" ref={containerRef}>
            {/* Counter Card */}
            <div className="absolute -top-4 right-4 md:top-0 md:right-2 bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-xl shadow-sm z-10 pt-6 pr-16 p-4">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold">572</span>
                <span className="text-green-500 text-sm font-semibold">10%+</span>
              </div>
              <div className="text-sm text-gray-400 font-light">Satisfied customers</div>
            </div>

            {/* Main Image with Annotations */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <div className="aspect-[4/3] relative">
                <Image
                  src={Drone3}
                  alt="Worker on assembly line"
                  fill
                  className="object-cover"
                />

                {/* Process Time and Total Time - Now with glass effect */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-sm p-2 text-sm">
                    <div className="font-semibold">
                      Process time: <span className="text-gray-700">00:25:05</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-sm p-2 text-sm">
                    <div className="font-semibold">
                      Total time: <span className="text-gray-700">00:26:27</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Right Overlay - Hands and Steps - Now with glass effect */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-sm p-3 text-sm">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                      Step 02: 00:13:22
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                      Step 03: 00:15:34
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Beam Demo */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Build your own AI Agents</h2>
          <AnimatedBeamDemo />
        </div>
      </section>
      <WhatWeDoSection />
      <TimeSavingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      
    </div>
  )
}
