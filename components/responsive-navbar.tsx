"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const productButtonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        productButtonRef.current &&
        !productButtonRef.current.contains(event.target as Node)
      ) {
        setIsProductsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen)
  }

  const mainProducts = [
    {
      title: "Driver Safety",
      description: "Prevent accidents and reduce risk with the industry's most accurate AI.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" fillOpacity="0.1" />
          <path
            d="M12 16V14M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M8 7H16M8 7H6M16 7H18M6 7C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V17C4 17.5304 4.21071 18.0391 4.58579 18.4142C4.96086 18.7893 5.46957 19 6 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V9C20 8.46957 19.7893 7.96086 19.4142 7.58579C19.0391 7.21071 18.5304 7 18 7"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Equipment Monitoring",
      description: "Gain comprehensive insights into your assets' location, usage, and health.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" fillOpacity="0.1" />
          <path
            d="M9 17V15M12 17V13M15 17V11M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Workforce Management",
      description: "Qualifications, time tracking, training, and coaching – all in one place.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" fillOpacity="0.1" />
          <path
            d="M17 20H7C5.9 20 5 19.1 5 18V8C5 6.9 5.9 6 7 6H17C18.1 6 19 6.9 19 8V18C19 19.1 18.1 20 17 20Z"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 4V6M8 4V6M5 10H19M9.5 14L11 15.5L14.5 12"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      badge: "NEW",
    },
    {
      title: "Platform Overview",
      description: "Your operations. One platform. With AI-powered automation at its core.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" fillOpacity="0.1" />
          <path
            d="M4 5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V5Z"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 7H15M9 11H15M9 15H13"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Fleet Management",
      description: "Get unparalleled visibility into your vehicles' location, usage, and health.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" fillOpacity="0.1" />
          <path d="M8 16H6V18H8V16Z" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M18 16H16V18H18V16Z"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7H14C13.4696 7 12.9609 7.21071 12.5858 7.58579C12.2107 7.96086 12 8.46957 12 9M19 9V16M19 9H5M5 9V16M5 9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7H10C10.5304 7 11.0391 7.21071 11.4142 7.58579C11.7893 7.96086 12 8.46957 12 9M5 16H19M5 12H19"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Spend Management",
      description: "Unlock savings and productivity with the Motive fleet card.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" fillOpacity="0.1" />
          <path
            d="M3 10H21M7 15H8M12 15H13M6 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V17C4 17.5304 4.21071 18.0391 4.58579 18.4142C4.96086 18.7893 5.46957 19 6 19Z"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "AI Vision",
      description: "Customized AI solutions for your business's unique operational needs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0F172A" fillOpacity="0.1" />
          <path
            d="M2 8V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H20C20.5304 18 21.0391 17.7893 21.4142 17.4142C21.7893 17.0391 22 16.5304 22 16V8M2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8M2 8V9C2 9.53043 2.21071 10.0391 2.58579 10.4142C2.96086 10.7893 3.46957 11 4 11H20C20.5304 11 21.0391 10.7893 21.4142 10.4142C21.7893 10.0391 22 9.53043 22 9V8M12 14V15M12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14Z"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  const featuredItems = [
    "AI Dashcam",
    "Fleet Compliance",
    "Fleet Telematics",
    "Maintenance",
    "Sustainability",
    "Reefer Monitoring",
    "IFTA Fuel Tax Reporting",
    "Electronic Logging Device (ELD)",
    "GPS Asset Tracking",
    "Accident Management",
  ]

  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 rounded-full p-1.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3L4 14H15L11 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="font-bold text-xl">Boltshift</span>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-700">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6 bg-[#F4F4F4] px-4 py-2 rounded-full">
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          Benefits
        </Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          How it works
        </Link>
        <div className="relative" ref={dropdownRef}>
          <button
            ref={productButtonRef}
            className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleProductsDropdown}
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
          >
            Products
            <ChevronDown size={16} className="ml-1" />
          </button>
          {isProductsDropdownOpen && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[1000px] max-w-[90vw] bg-white rounded-xl shadow-lg z-50 overflow-hidden"
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <div className="flex">
                {/* Left column - Main products */}
                <div className="w-1/2 p-6 border-r border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">PRODUCTS</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {mainProducts.map((product, index) => (
                      <Link href="#" key={index} className="flex items-start gap-3 group">
                        <div className="mt-1">{product.icon}</div>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600">{product.title}</h4>
                            {product.badge && (
                              <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      View All Products
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Middle column - Featured items */}
                <div className="w-1/4 p-6 border-r border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-500 mb-4">FEATURED</h3>
                  <div className="space-y-3">
                    {featuredItems.map((item, index) => (
                      <Link
                        href="#"
                        key={index}
                        className="block text-gray-800 hover:text-blue-600 font-medium text-sm"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right column - ROI Calculator */}
                <div className="w-1/4 bg-gray-50 p-6">
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="text-sm text-gray-400">ROI Savings Calculator</div>
                      <div className="text-3xl font-bold mt-1">$2,295,901</div>
                    </div>
                    <div className="flex items-end gap-2 mb-6">
                      <div className="bg-orange-500 w-1/4 h-12 rounded"></div>
                      <div className="bg-blue-500 w-1/3 h-16 rounded"></div>
                      <div className="bg-green-500 w-1/5 h-10 rounded"></div>
                    </div>
                    <h4 className="font-bold text-lg mb-2">How much will you save with Motive?</h4>
                    <p className="text-sm text-gray-300">
                      Improve your bottom line with Motive's cutting-edge technology that enhances safety, boosts
                      productivity, and drives profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          Industries
        </Link>
        <Link href="#" className="text-gray-700 hover:text-gray-900">
          Who we are
        </Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <Button variant="outline" className="rounded-full">
          Log in
        </Button>
        <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full">Request early access</Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 mt-2 py-4 px-6 rounded-lg">
          <div className="flex flex-col space-y-4">
            <Link href="#" className="text-gray-700 hover:text-gray-900 py-2">
              Benefits
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 py-2">
              How it works
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none py-2 w-full text-left"
                onClick={toggleProductsDropdown}
              >
                Products
                <ChevronDown size={16} className="ml-1" />
              </button>
              {isProductsDropdownOpen && (
                <div className="pl-4 mt-2 space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-500">PRODUCTS</h3>
                    {mainProducts.map((product, index) => (
                      <Link href="#" key={index} className="flex items-start gap-2 py-2">
                        <div className="mt-1">{product.icon}</div>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium text-gray-900">{product.title}</h4>
                            {product.badge && (
                              <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{product.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-500">FEATURED</h3>
                    {featuredItems.slice(0, 5).map((item, index) => (
                      <Link href="#" key={index} className="block text-gray-800 hover:text-blue-600 text-sm">
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="#" className="text-gray-700 hover:text-gray-900 py-2">
              Industries
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 py-2">
              Who we are
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="rounded-full w-full">
                Log in
              </Button>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full w-full">
                Request early access
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
