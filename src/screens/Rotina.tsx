import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader } from '../components/ui'
import { routine, persona } from '../data/content'

export function Rotina() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={61} scroll>
      <ScreenHeader back title="Rotina da Olivia" />
      <Body scroll>
        <div className="bs-card-gold">
          <p className="mb-1 text-[13px] font-extrabold text-gold">Análise da {persona.babyName} · {persona.babyAgeMonths} meses</p>
          <p className="text-[13.5px] leading-relaxed text-ink2">{routine.analysis}</p>
          <p className="mt-2 text-[12.5px] text-muted">
            Cronotipo identificado: <span className="font-bold text-lav">{persona.chronotype}</span>
          </p>
        </div>

        <p className="bs-label px-1">Rotina pela pressão de sono ideal</p>
        <div className="relative pl-2">
          <div className="absolute bottom-3 left-[19px] top-3 w-px bg-white/10" />
          <div className="flex flex-col gap-2.5">
            {routine.steps.map((s, i) => (
              <div key={i} className="relative flex items-start gap-3">
                <div className="z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/[0.16] bg-bg-2 text-base">
                  {s.icon}
                </div>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.05] px-3.5 py-2.5">
                  <p className="text-[14px] font-bold leading-tight">{s.title}</p>
                  <p className="text-[13px] text-gold">{s.time}</p>
                  {s.note && <p className="text-[12px] text-muted">{s.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bs-card">
          <p className="mb-2 text-[13.5px] font-extrabold">Por que essa organização funciona</p>
          <div className="flex flex-col gap-1.5">
            {routine.why.map((w) => (
              <div key={w} className="flex items-start gap-2 text-[13.5px] text-ink2">
                <Check size={16} className="mt-0.5 flex-none text-ok" />
                <span>{w}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="px-2 text-center text-[13.5px] italic leading-relaxed text-lav">“{routine.keyPhrase}”</p>
      </Body>
      <div className="px-6 pb-6 pt-1">
        <button className="bs-btn-primary" onClick={() => nav('/app/home')}>
          Ativar minha rotina
        </button>
      </div>
    </PhoneFrame>
  )
}
