import { ChevronRight, Baby, Bell, Moon, CreditCard, HelpCircle, Star } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { TabBar } from '../components/TabBar'
import { ScreenHeader } from '../components/ui'
import { persona } from '../data/content'

const groups = [
  {
    label: 'Bebê',
    items: [
      { icon: Baby, title: 'Dados da Olivia', sub: '9 meses · Bebê Anjo' },
      { icon: Moon, title: 'Rotina e ritmo', sub: 'Ritmo equilibrado' },
    ],
  },
  {
    label: 'App',
    items: [
      { icon: Bell, title: 'Notificações', sub: 'Zona de aprofundamento ativa' },
      { icon: CreditCard, title: 'Assinatura', sub: 'Teste grátis · 5 dias restantes' },
      { icon: HelpCircle, title: 'Ajuda e suporte', sub: '' },
    ],
  },
]

export function Perfil() {
  return (
    <PhoneFrame seed={151}>
      <ScreenHeader title="Perfil" />
      <div className="flex flex-1 flex-col overflow-y-auto no-scrollbar px-[22px] pb-5 pt-1">
        {/* cartão da mãe + bebê */}
        <div className="bs-card-lift flex items-center gap-3.5">
          <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-[#2A2350] to-[#141A38] text-3xl">
            👶
          </div>
          <div className="flex-1">
            <p className="text-[17px] font-extrabold leading-tight">{persona.motherName}</p>
            <p className="text-[13px] text-ink2">
              mãe da {persona.babyName} · {persona.babyAgeMonths} meses
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[11.5px] font-bold text-gold">
            <Star size={12} fill="currentColor" /> {persona.temperament}
          </span>
        </div>

        {groups.map((g) => (
          <div key={g.label} className="mt-4">
            <p className="mb-2.5 bs-label">{g.label}</p>
            <div className="flex flex-col gap-2">
              {g.items.map((it) => (
                <button
                  key={it.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-left"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/[0.06] text-gold">
                    <it.icon size={19} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-bold leading-tight">{it.title}</p>
                    {it.sub && <p className="text-[12px] text-muted">{it.sub}</p>}
                  </div>
                  <ChevronRight size={18} className="text-muted" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <p className="mt-5 text-center text-[12px] text-muted">BabyStar · versão 1.0 (protótipo)</p>
      </div>
      <TabBar active="perfil" />
    </PhoneFrame>
  )
}
