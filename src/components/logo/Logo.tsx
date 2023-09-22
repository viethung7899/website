import { Handle } from "@/components/logo/Handle"
import { useEffect, useState } from "react"

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener("scroll", updatePosition)
    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return scrollPosition
}

export function Logo() {
  const scrollPosition = useScrollPosition()
  const isTop = scrollPosition > 0

  return (
    <a href="/" className="font-mono text-primary">
      <h2 className="inline-flex">
        <Handle show={!isTop}>[</Handle>
        <span>v</span>
        <Handle show={isTop} className="mr-[-2.5em]">
          iet-
        </Handle>
        <span>h</span>
        <Handle show={isTop} className="mr-[-2.5em]">
          ung&nbsp;
        </Handle>
        <span>ng</span>
        <Handle show={isTop} className="mr-[-2.5em]">
          uyen
        </Handle>
        <Handle show={!isTop}>]</Handle>
      </h2>
    </a>
  )
}
