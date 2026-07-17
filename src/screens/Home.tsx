import { useNavigate } from 'react-router-dom'
import { Bell, Moon, Droplets, Milk, Sun, ChevronRight } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import { DayRing, type RingMarker } from '../components/DayRing'
import { persona } from '../data/content'

const markers: RingMarker[] = [
  { angle: 12, emoji: '☀️', time: '7:00' },
  { angle: 78, emoji: '☁️', time: '9:05' },
  { angle: 150, emoji: '☁️', time: '13:00', active: true },
  { angle: 218, emoji: '☁️', time: '16:40' },
  { angle: 300, emoji: '🌙', time: '19:15' },
]

// atalhos de registro — só ícones (referência Napper)
const quick = [
  { icon: Moon, key: 'soneca' },
  { icon: Milk, key: 'mamada' },
  { icon: Droplets, key: 'fralda' },
  { icon: Sun, key: 'despertar' },
]

export function Home() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={2}>
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* topo minimalista */}
        <div className="flex items-center justify-between px-6 pt-1">
          <button onClick={() => nav('/app/perfil')} className="flex items-center gap-2.5 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-[#2A2350] to-[#141A38] text-xl">
              👶
            </div>
            <div>
              <p className="text-[15px] font-extrabold leading-tight">{persona.babyName}</p>
              <p className="text-[11.5px] text-muted">{persona.babyAgeMonths} meses</p>
            </div>
          </button>
          <button
            onClick={() => nav('/notificacoes')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-ink2"
          >
            <Bell size={18} />
          </button>
        </div>

        {/* anel do dia */}
        <button onClick={() => nav('/rotina')} className="mt-3">
          <DayRing size={286} markers={markers}>
            <p className="text-[12px] font-bold uppercase tracking-[1.5px] text-lav">Próxima soneca</p>
            <p className="text-[48px] font-extrabold leading-none text-gradient-gold">3 min</p>
          </DayRing>
        </button>

        {/* atalhos rápidos — só ícones */}
        <div className="mt-5 flex items-center justify-center gap-4">
          {quick.map(({ icon: Icon, key }) => (
            <button
              key={key}
              onClick={() => nav('/app/diario')}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-gold"
            >
              <Icon size={22} />
            </button>
          ))}
        </div>

        {/* único texto: conhecer o temperamento (opcional) */}
        <button
          onClick={() => nav('/quiz')}
          className="mx-6 mt-6 flex items-center gap-3 rounded-2xl border border-lav/20 bg-lav/[0.06] px-4 py-3 text-left"
        >
          <span className="text-xl">🧩</span>
          <p className="flex-1 text-[13.5px] font-semibold leading-snug text-ink">
            Conhecer o temperamento da {persona.babyName}
          </p>
          <ChevronRight size={18} className="text-lav" />
        </button>
      </div>
      <TabBar active="home" />
    </PhoneFrame>
  )
}
