import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader, ProgressBar } from '../components/ui'
import { sleepLog, persona } from '../data/content'

export function Registro() {
  const nav = useNavigate()
  const registered = 36 // horas registradas das 48h
  return (
    <PhoneFrame seed={42}>
      <ScreenHeader
        back
        title="Registro"
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
        {/* progresso 48h */}
        <div className="bs-card">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[13.5px] font-bold">{registered}h de 48h registradas</p>
            <span className="text-[12.5px] font-bold text-gold">Dia 2 de 2</span>
          </div>
          <ProgressBar pct={(registered / 48) * 100} />
        </div>

        <p className="px-1 text-[13px] text-ink2">
          Toque no <span className="font-bold text-gold">+</span> para adicionar um evento do dia da {persona.babyName}.
        </p>

        {sleepLog.map((d) => (
          <div key={d.day} className="bs-card">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[14px] font-extrabold">{d.day}</p>
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
        <button className="bs-btn-primary" onClick={() => nav('/analise')}>
          Concluir registro de 48h
        </button>
      </div>
    </PhoneFrame>
  )
}
