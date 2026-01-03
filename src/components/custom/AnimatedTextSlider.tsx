import { useEffect, useState } from "react"

interface AnimatedTextSliderProps {
  texts: string[]
  interval?: number
  className?: string
}

const AnimatedTextSlider = ({
  texts,
  interval = 2500,
  className = "",
}: AnimatedTextSliderProps) => {
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    if (texts.length <= 1) return

    const timer = setInterval(() => {
      setAnimate(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length)
        setAnimate(true)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`relative h-6 overflow-hidden ${className}`}>
      <span
        className={`
          absolute inset-0
          transition-all duration-300 ease-out
          ${animate ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
        `}
      >
        {texts[index]}
      </span>
    </div>
  )
}

export default AnimatedTextSlider
