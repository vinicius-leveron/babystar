import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export type RingMarker = {
  angle: number // graus, 0 = topo, sentido horário
  emoji: string
  time: string
  active?: boolean
}

// Anel do dia — assinatura da home. Marcadores de despertar/soneca/noite
// posicionados no anel, com uma estrela-guia dourada marcando o "agora".
export function DayRing({
  size = 300,
  markers,
  children,
}: {
  size?: number
  markers: RingMarker[]
  children: ReactNode
}) {
  const radius = size / 2 - 22
  const toXY = (angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180
    return {
      x: size / 2 + radius * Math.cos(rad),
      y: size / 2 + radius * Math.sin(rad),
    }
  }

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      {/* trilha do anel */}
      <svg width={size} height={size} className="absolute inset-0 -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={2} strokeDasharray="2 7" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#ring-gold)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * radius}
          initial={{ strokeDashoffset: 2 * Math.PI * radius }}
          animate={{ strokeDashoffset: 2 * Math.PI * radius * 0.52 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="ring-gold" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#F5C86B" />
            <stop offset="1" stopColor="#F0A987" />
          </linearGradient>
        </defs>
      </svg>

      {/* centro */}
      <div className="absolute inset-[38px] flex flex-col items-center justify-center gap-1 rounded-full text-center">
        {children}
      </div>

      {/* marcadores */}
      {markers.map((m, i) => {
        const { x, y } = toXY(m.angle)
        return (
          <div key={i} className="absolute" style={{ left: x, top: y, transform: 'translate(-50%,-50%)' }}>
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${
                m.active
                  ? 'border-[1.5px] border-gold/70 bg-gradient-to-br from-[#3A2E10] to-[#241C08] shadow-gold-sm'
                  : 'border-[1.5px] border-white/[0.16] bg-bg-2'
              }`}
            >
              {m.emoji}
            </div>
            <div className="mt-0.5 text-center text-[11px] font-bold text-muted">{m.time}</div>
          </div>
        )
      })}
    </div>
  )
}
