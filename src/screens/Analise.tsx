import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { StarLogo } from '../components/StarLogo'
import { persona } from '../data/content'

export function Analise() {
  const nav = useNavigate()
  const pct = persona.learningPct
  const R = 54
  const C = 2 * Math.PI * R
  return (
    <PhoneFrame seed={51}>
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="relative animate-floaty">
          <svg width="150" height="150" className="-rotate-90">
            <circle cx="75" cy="75" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <motion.circle
              cx="75"
              cy="75"
              r={R}
              fill="none"
              stroke="url(#an-gold)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={C}
              initial={{ strokeDashoffset: C }}
              animate={{ strokeDashoffset: C * (1 - pct / 100) }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="an-gold" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#F5C86B" />
                <stop offset="1" stopColor="#F0A987" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <StarLogo size={54} />
          </div>
        </div>

        <p className="mt-7 text-[15px] font-bold uppercase tracking-[1px] text-gold">BabyStar está aprendendo</p>
        <h1 className="mt-1 text-[52px] font-extrabold leading-none">{pct}%</h1>
        <p className="mt-4 max-w-[300px] text-[15px] leading-relaxed text-ink2">
          Estou cruzando o temperamento e as 48h da {persona.babyName} com a pressão de sono ideal dela para encontrar
          a zona de aprofundamento do sono.
        </p>
      </div>
      <div className="px-6 pb-10">
        <button className="bs-btn-primary" onClick={() => nav('/rotina')}>
          Ver a rotina da {persona.babyName}
        </button>
      </div>
    </PhoneFrame>
  )
}
