import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { StarLogo } from '../components/StarLogo'
import { Body, ScreenHeader, ProgressBar } from '../components/ui'

export function Onboarding() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={11}>
      <ScreenHeader back />
      <Body scroll>
        <div className="px-1">
          <ProgressBar pct={20} />
          <p className="mt-2 text-[12.5px] text-muted">Passo 1 de 5 · Vamos nos conhecer</p>
        </div>

        <div className="mt-1 flex flex-col gap-1 px-1">
          <StarLogo size={34} />
          <h1 className="mt-1.5 text-[22px] font-extrabold leading-tight">Seja muito bem-vinda!</h1>
          <p className="text-[13.5px] leading-snug text-ink2">
            Eu sou a Dra. Denise. Vamos buscar a pressão de sono ideal do seu bebê.
          </p>
        </div>

        <div className="mt-1 flex flex-col gap-3">
          <Field label="Como você se chama?" placeholder="Seu nome" value="Amanda" />
          <Field label="E o nome do seu bebê?" placeholder="Nome do bebê" value="Olivia" />
          <Field label="Data de nascimento do bebê" placeholder="dd/mm/aaaa" value="12/10/2025" />
        </div>

        <div className="bs-card mt-1 flex items-center gap-3">
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gold/15 text-lg">🎬</div>
          <div className="flex-1">
            <p className="text-[13.5px] font-bold">Aula de apresentação</p>
            <p className="text-[12px] text-muted">2 min · como o BabyStar te ajuda</p>
          </div>
          <button className="bs-chip-on">Assistir</button>
        </div>
      </Body>
      <div className="px-6 pb-6 pt-1">
        <button className="bs-btn-primary" onClick={() => nav('/quiz')}>
          Continuar
        </button>
      </div>
    </PhoneFrame>
  )
}

function Field({ label, placeholder, value }: { label: string; placeholder: string; value?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-bold text-ink2">{label}</span>
      <div className="flex min-h-[52px] items-center rounded-2xl border border-white/10 bg-white/[0.05] px-4 text-[15.5px]">
        {value ? <span>{value}</span> : <span className="text-muted">{placeholder}</span>}
      </div>
    </label>
  )
}
