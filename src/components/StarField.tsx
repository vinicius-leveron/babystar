import { useMemo } from 'react'

type Star = { x: number; y: number; r: number; o: number; c: string; d: number }

// Campo de estrelas determinístico (mesma seed → mesmo céu, bom para screenshots).
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export function StarField({ count = 46, seed = 7 }: { count?: number; seed?: number }) {
  const stars = useMemo<Star[]>(() => {
    const rnd = seeded(seed)
    const palette = ['rgba(255,255,255,', 'rgba(245,200,107,', 'rgba(169,178,232,']
    return Array.from({ length: count }, () => ({
      x: rnd() * 100,
      y: rnd() * 100,
      r: 0.6 + rnd() * 1.3,
      o: 0.3 + rnd() * 0.6,
      c: palette[Math.floor(rnd() * palette.length)],
      d: rnd() * 4,
    }))
  }, [count, seed])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((st, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: st.r * 2,
            height: st.r * 2,
            background: `${st.c}${st.o})`,
            animationDelay: `${st.d}s`,
          }}
        />
      ))}
    </div>
  )
}
