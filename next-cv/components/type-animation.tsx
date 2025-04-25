"use client"

import { useEffect, useState } from "react"

interface TypeAnimationProps {
  words: string[]
  className?: string
}

export default function TypeAnimation({ words, className = "" }: TypeAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1))

        // If word is complete, start deleting after a pause
        if (currentText === word) {
          setTypingSpeed(1000) // Pause before deleting
          setIsDeleting(true)
        } else {
          setTypingSpeed(150) // Normal typing speed
        }
      } else {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1))

        // If deletion is complete, move to next word
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(150) // Normal typing speed
        } else {
          setTypingSpeed(75) // Faster deletion speed
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
