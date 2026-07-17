import { useNavigate } from 'react-router-dom'
import { Moon, Sun, Cloud, PencilLine, Camera, Keyboard } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader, ProgressBar } from '../components/ui'
import { persona } from '../data/content'

export function RegistroIntro() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={41} scroll>
      <ScreenHeader back />
      <Body scroll>
        <div className="px-1">
          <ProgressBar pct={60} />
          <p className="mt-2 text-[12.5px] text-muted">Camada 2 · Pressão de sono</p>
        </div>

        <h1 className="mt-1 text-[25px] font-extrabold leading-tight">
          Vamos descobrir o padrão da {persona.babyName}
        </h1>
        <p className="text-[14.5px] leading-relaxed text-ink2">
          Por 48 horas, registre o dia da {persona.babyName}. Com esses dados eu descubro se há excesso ou falta de
          pressão de sono e monto a rotina ideal dela.
        </p>

        <div className="bs-card flex flex-col gap-3">
          <p className="bs-label">O que registrar</p>
          {[
            { icon: Sun, t: 'Despertar da manhã' },
            { icon: Cloud, t: 'Todas as sonecas (início e fim)' },
            { icon: Moon, t: 'Início do sono noturno' },
            { icon: PencilLine, t: 'Despertares da madrugada' },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-white/[0.06] text-gold">
                <Icon size={18} />
              </div>
              <span className="text-[14px] text-ink2">{t}</span>
            </div>
          ))}
        </div>

        <p className="bs-label px-1">Do jeito que for melhor pra você</p>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { icon: Keyboard, t: 'No app' },
            { icon: PencilLine, t: 'Colar texto' },
            { icon: Camera, t: 'Foto do papel' },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-center">
              <Icon size={20} className="text-lav" />
              <span className="text-[12px] font-bold text-ink2">{t}</span>
            </div>
          ))}
        </div>
      </Body>
      <div className="px-6 pb-6 pt-1">
        <button className="bs-btn-primary" onClick={() => nav('/registro')}>
          Começar a registrar
        </button>
      </div>
    </PhoneFrame>
  )
}
