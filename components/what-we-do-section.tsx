"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// Simple SVG icons for the service cards
const icons = {
  diamond: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2L38 20L20 38L2 20L20 2Z"
        stroke="#0EA5E9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  cube: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2L38 12V28L20 38L2 28V12L20 2Z"
        stroke="#EC4899"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M20 38V20" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 12L20 20L2 12" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pyramid: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2L38 30H2L20 2Z"
        stroke="#EAB308"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  team: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="10" r="8" stroke="#F97316" strokeWidth="3" fill="none" />
      <path d="M8 38L20 20L32 38" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  software: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2L38 12L20 22L2 12L20 2Z"
        stroke="#14B8A6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M38 28L20 38L2 28" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 22V38" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ai: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2L32 10V26L20 34L8 26V10L20 2Z"
        stroke="#A855F7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),
  cloud: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 28C6.68629 28 4 25.3137 4 22C4 18.6863 6.68629 16 10 16C10.3721 16 10.7367 16.0303 11.0909 16.0889C12.0568 12.0616 15.6326 9 20 9C25.5228 9 30 13.4772 30 19C30 19.6906 29.9236 20.3608 29.7795 21H30C33.3137 21 36 23.6863 36 27C36 30.3137 33.3137 33 30 33H10"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mobile: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="2" width="20" height="36" rx="4" stroke="#10B981" strokeWidth="3" fill="none" />
      <line x1="10" y1="8" x2="30" y2="8" stroke="#10B981" strokeWidth="3" />
      <line x1="10" y1="32" x2="30" y2="32" stroke="#10B981" strokeWidth="3" />
      <circle cx="20" cy="35" r="1.5" fill="#10B981" />
    </svg>
  ),
  security: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2L34 8V18C34 26.8366 28.1737 34.7314 20 38C11.8263 34.7314 6 26.8366 6 18V8L20 2Z"
        stroke="#F43F5E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M15 20L18 23L25 16" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default function WhatWeDoSection() {
  const [showMore, setShowMore] = useState(false)

  const initialServices = [
    {
      icon: icons.diamond,
      title: "AI Development",
      description: "A structured 15 day process to align your product vision with your business goals.",
    },
    {
      icon: icons.cube,
      title: "UX/UI Design",
      description: "Design an engaging product that is easy-to-use, attractive and functional.",
    },
    {
      icon: icons.pyramid,
      title: "MVP Builder",
      description: "Go to the market quickly with a high-quality Minimum Viable Product.",
    },
    {
      icon: icons.team,
      title: "Custom Software Development",
      description: "Build your product with a dedicated team of developers.",
    },
    {
      icon: icons.software,
      title: "Custom Tools Development",
      description: "Lean frameworks applied to your vision to create an innovative custom software solution.",
    },
    {
      icon: icons.ai,
      title: "Automation & Integration",
      description: "We leverage ML and Generative AI strategically to ensure your business is future-ready.",
    },
  ]

  const additionalServices = [
    {
      icon: icons.cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your operations.",
    },
    {
      icon: icons.mobile,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: icons.security,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and customer data.",
    },
  ]

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <section className="relative w-full py-16 px-4 md:py-24 bg-gray-50">
      {/* Yellow accent in top left */}
      <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[100px] border-l-[100px] border-t-transparent border-l-yellow-400 opacity-30"></div>
      </div>

      {/* Pink accent in bottom right */}
      <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[100px] border-r-[100px] border-b-pink-500 border-r-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold mb-6">What we do</h2>
          <p className="text-gray-700">
            We help entrepreneurs and business leaders build and launch innovative custom software solutions to the
            market across a range of verticals & industries. We can help you turn your vision into a successful product
            together, whether it's in the form of a Minimum Viable Product, UX/UI services, full product custom software
            development or help to scale your company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialServices.map((service, index) => (
            <ServiceCard
              key={`initial-${index}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

          {showMore &&
            additionalServices.map((service, index) => (
              <ServiceCard
                key={`additional-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button onClick={toggleShowMore} variant="outline" size="lg">
            {showMore ? "Show Less" : "View More Services"}
          </Button>
        </div>
      </div>
    </section>
  )
}
