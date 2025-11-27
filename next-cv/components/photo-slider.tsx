"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Photo {
    src: string
    alt: string
    title?: string
}

interface PhotoSliderProps {
    photos: Photo[]
    autoPlay?: boolean
    interval?: number
    height?: string // Added height prop for customization
    objectFit?: "cover" | "contain" // Added prop to control image fit
}

export default function PhotoSlider({
                                        photos,
                                        autoPlay = true,
                                        interval = 5000,
                                        height = "h-[500px]",
                                        objectFit = "contain", // Changed default to "contain" to show full images
                                    }: PhotoSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (!autoPlay || isHovered) return

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
        }, interval)

        return () => clearInterval(timer)
    }, [autoPlay, interval, isHovered, photos.length])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div
            className={`relative w-full ${height} overflow-hidden rounded-2xl shadow-2xl group bg-zinc-100 dark:bg-zinc-900`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Image Display */}
            <div className="relative w-full h-full">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        <Image
                            src={photo.src || "/placeholder.svg"}
                            alt={photo.alt}
                            fill
                            className={`${objectFit === "cover" ? "object-cover" : "object-contain"}`}
                            priority={index === 0}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Title Overlay */}
                        {photo.title && (
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                <h3 className="text-white text-2xl font-bold text-balance">{photo.title}</h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous photo"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next photo"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Go to photo ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            {autoPlay && !isHovered && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20">
                    <div
                        className="h-full bg-purple-500 transition-all duration-300"
                        style={{
                            width: `${((currentIndex + 1) / photos.length) * 100}%`,
                        }}
                    />
                </div>
            )}
        </div>
    )
}
