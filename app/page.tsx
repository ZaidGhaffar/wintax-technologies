"use client"

import { useRef, useEffect, useState } from "react"
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
import { TestimonialsSection } from "@/components/testimonials-with-marquee"
import ImageCarousel from "@/components/image-carousel"

import WhatWeDoSection from "@/components/what-we-do-section"

// CountUp hook for integer and time values
interface UseCountUpProps {
  end: number;
  duration?: number;
  isTime?: boolean;
}
function useCountUp({ end, duration = 800, isTime = false }: UseCountUpProps) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = 0
    let raf: number
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      if (isTime) {
        // end is in seconds
        setValue(Math.floor(progress * end))
      } else {
        setValue(Math.floor(progress * end))
      }
      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      } else {
        setValue(end)
      }
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, isTime])
  if (isTime) {
    // Format as mm:ss
    const mins = Math.floor(value / 60)
    const secs = value % 60
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
  }
  return value
}

// Custom hook for live timer in HH:MM:SS
function useLiveTimer(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 100)
    return () => clearInterval(interval)
  }, [])
  // Format as HH:MM:SS
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Initial times in seconds
  const step2Start = 13 * 60 + 22 // 00:13:22
  const step3Start = 15 * 60 + 34 // 00:15:34
  const processTimeStart = 25 * 60 + 5 // 00:25:05
  const totalTimeStart = 26 * 60 + 27 // 00:26:27

  const step2Timer = useLiveTimer(step2Start)
  const step3Timer = useLiveTimer(step3Start)
  const processTimer = useLiveTimer(processTimeStart)
  const totalTimer = useLiveTimer(totalTimeStart)

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
              We help companies redefine the future through technology
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
                Get in Touch
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
          <div className="relative pt-12 pb-12" ref={containerRef}>
            {/* Main Image Carousel with Annotations */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <ImageCarousel />
              {/* Floating Counter Card - fixed at top-right over carousel */}
              <div className="absolute top-4 right-4 bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-xl shadow-sm z-30">
                <div className="flex items-end gap-2 pr-8">
                  <span className="text-4xl font-bold">{useCountUp({ end: 572, duration: 2200 })}</span>
                  <span className="text-green-500 text-sm font-semibold">10%+</span>
                </div>
                <div className="text-sm text-gray-400 font-light">Satisfied customers</div>
              </div>
              {/* Process Time and Total Time - Now with glass effect */}
              <div className="absolute bottom-12 right-4 flex flex-col gap-2 z-20">
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-sm p-2 text-sm">
                  <div>
                    <span>Process time:</span> <span className="font-semibold ml-2">{processTimer}</span>
                  </div>
                </div>
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-sm p-2 text-sm">
                  <div>
                    Total time: <span className="font-semibold">{totalTimer}</span>
                  </div>
                </div>
              </div>
              {/* Bottom Right Overlay - Hands and Steps - Now with glass effect */}
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-sm p-3 text-sm z-20">
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <span>Step 02: </span>   <span className="font-semibold ml-2">{step2Timer}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <span>Step 03: </span> <span className="font-semibold ml-2">{step3Timer}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>
      <WhatWeDoSection />
      {/* Animated Beam Demo */}
      <div className="mt-16">
          <h2 className="text-2xl font-bold  text-center">We Build What You Dream — Fast</h2>
          <AnimatedBeamDemo />
        </div>
      <TimeSavingSection />
      <AboutSection />
      <TestimonialsSection 
        title="What Our Clients Say"
        description="Discover why businesses trust us with their software development needs"
        testimonials={[
          {
            author: {
              name: "Sarah Johnson",
              handle: "@sarah_techcorp",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
            },
            text: "Working with this team has been transformative for our business. Their expertise in AI and automation has helped us achieve remarkable efficiency gains."
          },
          {
            author: {
              name: "Michael Chen",
              handle: "@mchen_innovate",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            text: "The quality of work and attention to detail is outstanding. They don't just write code, they provide solutions that drive real business value."
          },
          {
            author: {
              name: "Emily Rodriguez",
              handle: "@emily_digital",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
            },
            text: "Their ability to understand our business needs and translate them into elegant technical solutions has been impressive. Highly recommended!"
          }
        ]}
      />

      
      <ContactSection />
      
      <Footer />
      
    </div>
  )
}
