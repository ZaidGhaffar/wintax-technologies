"use client"

import { useEffect, useRef } from "react"

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLDivElement>
  fromRef: React.RefObject<HTMLDivElement>
  toRef: React.RefObject<HTMLDivElement>
  curvature?: number
  endYOffset?: number
  reverse?: boolean
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
}: AnimatedBeamProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>()
  const progress = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const from = fromRef.current
    const to = toRef.current

    if (!canvas || !container || !from || !to) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const containerRect = container.getBoundingClientRect()
    canvas.width = containerRect.width
    canvas.height = containerRect.height

    const fromRect = from.getBoundingClientRect()
    const toRect = to.getBoundingClientRect()

    const startX = fromRect.left - containerRect.left + fromRect.width / 2
    const startY = fromRect.top - containerRect.top + fromRect.height / 2
    const endX = toRect.left - containerRect.left + toRect.width / 2
    const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset

    const controlX = (startX + endX) / 2
    const controlY = (startY + endY) / 2 - curvature

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = "#e5e7eb"
      ctx.lineWidth = 2

      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.quadraticCurveTo(controlX, controlY, endX, endY)
      ctx.stroke()

      const point = getQuadraticBezierPoint(
        progress.current,
        { x: startX, y: startY },
        { x: controlX, y: controlY },
        { x: endX, y: endY },
      )

      ctx.fillStyle = "#3b82f6"
      ctx.beginPath()
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
      ctx.fill()

      progress.current += reverse ? -0.005 : 0.005
      if (progress.current > 1) progress.current = 0
      if (progress.current < 0) progress.current = 1

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [containerRef, fromRef, toRef, curvature, endYOffset, reverse])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}

function getQuadraticBezierPoint(
  t: number,
  start: { x: number; y: number },
  control: { x: number; y: number },
  end: { x: number; y: number },
) {
  const x =
    Math.pow(1 - t, 2) * start.x +
    2 * (1 - t) * t * control.x +
    Math.pow(t, 2) * end.x
  const y =
    Math.pow(1 - t, 2) * start.y +
    2 * (1 - t) * t * control.y +
    Math.pow(t, 2) * end.y
  return { x, y }
}
