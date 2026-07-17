import { Home, Music, Plus, BarChart3, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

type TabKey = 'home' | 'sons' | 'stats' | 'perfil'

const tabs: { key: TabKey; label: string; icon: typeof Home; to: string }[] = [
  { key: 'home', label: 'Início', icon: Home, to: '/app/home' },
  { key: 'sons', label: 'Sons', icon: Music, to: '/app/sons' },
  { key: 'stats', label: 'Evolução', icon: BarChart3, to: '/app/evolucao' },
  { key: 'perfil', label: 'Perfil', icon: User, to: '/app/perfil' },
]

export function TabBar({ active }: { active: TabKey }) {
  const nav = useNavigate()
  return (
    <div className="relative z-40 mx-4 mb-5 flex h-[70px] flex-none items-center justify-around rounded-full border border-white/[0.16] bg-[#101634]/90 shadow-card backdrop-blur-lg">
      {tabs.slice(0, 2).map((t) => (
        <TabButton key={t.key} label={t.label} icon={t.icon} active={active === t.key} onClick={() => nav(t.to)} />
      ))}
      <button
        onClick={() => nav('/app/diario')}
        className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#0A0F26] bg-gold-grad text-[#251A05] shadow-gold-sm"
        aria-label="Registrar"
      >
        <Plus size={24} strokeWidth={2.6} />
      </button>
      {tabs.slice(2).map((t) => (
        <TabButton key={t.key} label={t.label} icon={t.icon} active={active === t.key} onClick={() => nav(t.to)} />
      ))}
    </div>
  )
}

function TabButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string
  icon: typeof Home
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex min-w-[52px] flex-col items-center gap-0.5 text-[10px] font-bold ${
        active ? 'text-gold' : 'text-muted'
      }`}
    >
      <Icon size={23} strokeWidth={2} />
      {label}
    </button>
  )
}
