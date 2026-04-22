"use client"

import { useState, useRef, useCallback } from 'react'

interface BeforeAfterSliderProps {
  beforeImg: string
  afterImg: string
  beforeAlt: string
  afterAlt: string
}

export default function BeforeAfterSlider({ beforeImg, afterImg, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percent)
  }, [])

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX) }
  const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX) }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/2] overflow-hidden cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full) */}
      <img
        src={afterImg}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImg}
          alt={beforeAlt}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <div className="flex items-center gap-1">
            <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-r-[5px] border-transparent border-r-white" />
            <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[5px] border-transparent border-l-white" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div 
        className={`absolute top-4 left-4 z-20 transition-opacity duration-300 ${
          position <= 5 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white bg-foreground/50 backdrop-blur-sm px-3 py-1.5">
          Before
        </span>
      </div>
      <div 
        className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${
          position >= 95 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white bg-foreground/50 backdrop-blur-sm px-3 py-1.5">
          After
        </span>
      </div>
    </div>
  )
}
