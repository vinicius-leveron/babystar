import type { ReactNode } from 'react'

export type RingMarker = {
  angle: number // graus, 0 = topo, sentido horário
  emoji: string
  time: string
  active?: boolean
}

// Anel do dia — pontilhado e leve (referência Napper): marcadores com horário,
// destaque suave no "agora", sem arco pesado.
export function DayRing({
  size = 280,
  markers,
  children,
}: {
  size?: number
  markers: RingMarker[]
  children: ReactNode
}) {
  const radius = size / 2 - 26
  const toXY = (angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180
    return { x: size / 2 + radius * Math.cos(rad), y: size / 2 + radius * Math.sin(rad) }
  }

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      {/* trilha pontilhada */}
      <svg width={size} height={size} className="absolute inset-0">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth={1.5}
          strokeDasharray="1.5 7"
          strokeLinecap="round"
        />
      </svg>

      {/* centro */}
      <div className="absolute inset-[44px] flex flex-col items-center justify-center gap-1 rounded-full text-center">
        {children}
      </div>

      {/* marcadores com horário */}
      {markers.map((m, i) => {
        const { x, y } = toXY(m.angle)
        return (
          <div key={i} className="absolute flex flex-col items-center" style={{ left: x, top: y, transform: 'translate(-50%,-50%)' }}>
            <div
              className={`flex h-[42px] w-[42px] items-center justify-center rounded-full text-lg ${
                m.active
                  ? 'border-2 border-gold bg-gradient-to-br from-[#3A2E10] to-[#241C08] shadow-gold-sm'
                  : 'border border-white/12 bg-white/[0.05]'
              }`}
            >
              {m.emoji}
            </div>
            <span className={`mt-0.5 text-[10.5px] font-bold ${m.active ? 'text-gold' : 'text-muted'}`}>{m.time}</span>
          </div>
        )
      })}
    </div>
  )
}
