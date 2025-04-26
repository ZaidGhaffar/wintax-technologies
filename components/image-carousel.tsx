import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface ImageCarouselProps {
  images: { src: string; alt?: string }[]
  className?: string
}

export default function ImageCarousel({ images, className = "" }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 2200)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, images.length])

  return (
    <div className={`relative rounded-xl border overflow-hidden aspect-[4/3] ${className}`}>
      {images.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={img.src}
            alt={img.alt || `Carousel image ${idx + 1}`}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  )
}

// Demo default props for quick use
ImageCarousel.defaultProps = {
  images: [
    { src: "/Drone-3.png", alt: "Drone 3" },
    { src: "/Drone-4.png", alt: "Drone 4" },
    { src: "/Car-2.jpg", alt: "Car" },
  ],
} 