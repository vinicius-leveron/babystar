import type { ReactNode } from 'react'
import { StatusBar } from './StatusBar'
import { StarField } from './StarField'

// Moldura de iPhone reutilizável. `scroll` habilita rolagem interna do corpo.
export function PhoneFrame({
  children,
  stars = true,
  scroll = false,
  seed = 7,
  className = '',
}: {
  children: ReactNode
  stars?: boolean
  scroll?: boolean
  seed?: number
  className?: string
}) {
  return (
    <div
      className={`relative flex h-[844px] w-[390px] flex-none flex-col overflow-hidden rounded-[54px] border-[11px] border-[#04060F] bg-sky-grad shadow-phone outline outline-[1.5px] outline-white/[0.14] ${className}`}
    >
      {stars && <StarField seed={seed} />}
      {/* dynamic island */}
      <div className="absolute left-1/2 top-[11px] z-50 h-[34px] w-[118px] -translate-x-1/2 rounded-[20px] bg-[#02030A]" />
      <StatusBar />
      <div
        className={`relative z-10 flex min-h-0 flex-1 flex-col ${
          scroll ? 'overflow-y-auto no-scrollbar' : 'overflow-hidden'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
