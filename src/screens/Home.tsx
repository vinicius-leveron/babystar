import { useNavigate } from 'react-router-dom'
import { Moon, Droplets, Milk, Baby } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import { DayRing, type RingMarker } from '../components/DayRing'
import { persona } from '../data/content'

const markers: RingMarker[] = [
  { angle: 20, emoji: '☀️', time: '6:42' },
  { angle: 80, emoji: '☁️', time: '9:05' },
  { angle: 150, emoji: '☁️', time: '13:00', active: true },
  { angle: 220, emoji: '☁️', time: '16:40' },
  { angle: 300, emoji: '🌙', time: '19:15' },
]

// faixa do dia (mesma info, legível, abaixo do anel)
const dayStrip = [
  { emoji: '☀️', time: '6:42' },
  { emoji: '☁️', time: '9:05' },
  { emoji: '☁️', time: '13:00', active: true },
  { emoji: '☁️', time: '16:40' },
  { emoji: '🌙', time: '19:15' },
]

const quick = [
  { icon: Moon, label: 'Soneca' },
  { icon: Milk, label: 'Mamada' },
  { icon: Droplets, label: 'Fralda' },
  { icon: Baby, label: 'Despertar' },
]

export function Home() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={2}>
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* topo */}
        <div className="flex items-center justify-between px-6 pt-1">
          <div className="flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-[#2A2350] to-[#141A38] text-xl">
              👶
            </div>
            <div>
              <p className="text-[15px] font-extrabold leading-tight">{persona.babyName}</p>
              <p className="text-[11.5px] text-muted">{persona.babyAgeMonths} meses · {persona.temperament}</p>
            </div>
          </div>
          <button
            onClick={() => nav('/notificacoes')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg"
          >
            🔔
          </button>
        </div>

        {/* anel do dia */}
        <div className="mt-1">
          <DayRing size={280} markers={markers}>
            <p className="text-[12.5px] font-bold uppercase tracking-[1px] text-gold">Zona de aprofundamento</p>
            <p className="text-[44px] font-extrabold leading-none text-gradient-gold">3 min</p>
            <p className="mt-1 text-[12.5px] font-semibold text-ink2">Próxima soneca 13:00–13:30</p>
          </DayRing>
        </div>

        {/* faixa do dia — horários legíveis */}
        <div className="mx-6 mt-1 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
          {dayStrip.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-base">{s.emoji}</span>
              <span className={`text-[11px] font-bold ${s.active ? 'text-gold' : 'text-ink2'}`}>{s.time}</span>
            </div>
          ))}
        </div>

        {/* status aprendizado */}
        <div className="mx-6 mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2.5">
          <span className="text-lg">🌟</span>
          <p className="flex-1 text-[13px] text-ink2">
            BabyStar está conhecendo a {persona.babyName}
          </p>
          <span className="text-[13px] font-extrabold text-gold">{persona.learningPct}%</span>
        </div>

        {/* atalhos rápidos */}
        <div className="mt-3 grid grid-cols-4 gap-2.5 px-6">
          {quick.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => nav('/app/diario')}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.05] py-3"
            >
              <Icon size={20} className="text-gold" />
              <span className="text-[11px] font-bold text-ink2">{label}</span>
            </button>
          ))}
        </div>
      </div>
      <TabBar active="home" />
    </PhoneFrame>
  )
}
