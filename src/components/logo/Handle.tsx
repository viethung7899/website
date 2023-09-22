import { cn } from "@/lib/utils.ts"
import type { ReactNode } from "react"

type HandleProps = {
  show?: boolean
  className?: string
  children?: ReactNode
}

export function Handle({ show, className, children }: HandleProps) {
  return (
    <span
      className={cn(
        "transition-all duration-200 ease-in-out",
        show ? "opacity-100" : "opacity-0",
        show ? undefined : className || "mr-[-0.5em]"
      )}
    >
      {children}
    </span>
  )
}
