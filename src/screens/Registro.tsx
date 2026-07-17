import { useNavigate } from 'react-router-dom'
import { Plus, TrendingUp } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader } from '../components/ui'
import { sleepLog, persona } from '../data/content'

// "Meus dias": histórico do dia a dia que CALIBRA a rotina — sem gate de 48h.
export function Registro() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={42}>
      <ScreenHeader
        back
        title="Meus dias"
        right={
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-grad text-[#251A05] shadow-gold-sm"
            aria-label="Adicionar evento"
          >
            <Plus size={22} strokeWidth={2.6} />
          </button>
        }
      />
      <Body scroll>
        {/* calibração — melhora a cada dia, sem espera */}
        <div className="bs-card-gold flex items-center gap-3">
          <TrendingUp size={22} className="flex-none text-gold" />
          <p className="text-[13px] leading-snug text-ink2">
            Cada dia que você registra deixa a rotina da {persona.babyName} mais precisa. Você já recebe a rotina desde
            o primeiro dia — isto aqui só afina.
          </p>
        </div>

        {sleepLog.map((d, di) => (
          <div key={d.day} className="bs-card">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[14px] font-extrabold">{di === 0 ? 'Hoje' : 'Ontem'}</p>
              <span className="text-[12px] text-muted">{d.items.length} eventos</span>
            </div>
            <div className="relative flex flex-col gap-0">
              {d.items.map((it, i) => (
                <div key={i} className="flex items-center gap-3 py-2">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/[0.06] text-base">
                    {it.icon}
                  </div>
                  <span className="flex-1 text-[14px] text-ink2">{it.label}</span>
                  <span className="text-[13px] font-bold text-ink">{it.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="mb-1 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-white/25 bg-white/[0.03] py-3.5 text-[14px] font-bold text-ink2">
          <Plus size={18} /> Adicionar evento
        </button>
      </Body>
      <div className="px-6 pb-6 pt-1">
        <button className="bs-btn-primary" onClick={() => nav('/app/home')}>
          Voltar para o dia da {persona.babyName}
        </button>
      </div>
    </PhoneFrame>
  )
}
