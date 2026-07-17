import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, ShieldCheck } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { StarLogo } from '../components/StarLogo'
import { Body } from '../components/ui'
import { paywall } from '../data/content'

export function Paywall() {
  const nav = useNavigate()
  const [plan, setPlan] = useState<'year' | 'month'>('year')
  return (
    <PhoneFrame seed={141}>
      <Body scroll>
        <button onClick={() => nav('/app/home')} className="self-end pt-2 text-[13px] font-bold text-ink2">
          Agora não
        </button>

        <div className="flex flex-col items-center text-center">
          <StarLogo size={64} />
          <h1 className="mt-3 text-[26px] font-extrabold leading-tight">
            Experimente o BabyStar
            <br />
            <span className="text-gradient-gold">7 dias por R$ 0</span>
          </h1>
        </div>

        <div className="bs-card flex flex-col gap-2">
          {paywall.benefits.map((b) => (
            <div key={b} className="flex items-center gap-2.5 text-[13.5px] text-ink2">
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold/20">
                <Check size={13} className="text-gold" />
              </span>
              {b}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <PlanRow
            active={plan === 'year'}
            onClick={() => setPlan('year')}
            title="Anual"
            price={paywall.yearly}
            tag={paywall.yearlySave}
          />
          <PlanRow active={plan === 'month'} onClick={() => setPlan('month')} title="Mensal" price={paywall.monthly} />
        </div>
      </Body>
      <div className="px-6 pb-6 pt-1">
        <button className="bs-btn-primary" onClick={() => nav('/app/home')}>
          Começar teste grátis
        </button>
        <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[12px] text-ink2">
          <ShieldCheck size={13} /> {paywall.guarantee}
        </div>
        <p className="mt-1 text-center text-[12px] font-semibold text-gold">{paywall.socialProof}</p>
      </div>
    </PhoneFrame>
  )
}

function PlanRow({
  active,
  onClick,
  title,
  price,
  tag,
}: {
  active: boolean
  onClick: () => void
  title: string
  price: string
  tag?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-2xl border p-4 ${
        active ? 'border-gold/60 bg-gold/10 shadow-gold-sm' : 'border-white/10 bg-white/[0.05]'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 ${
            active ? 'border-gold bg-gold' : 'border-white/25'
          }`}
        >
          {active && <span className="h-2 w-2 rounded-full bg-[#251A05]" />}
        </span>
        <div className="flex flex-col items-start">
          <span className="text-[15px] font-extrabold leading-tight">{title}</span>
          {tag && <span className="mt-0.5 rounded-full bg-gold/15 px-2 py-0.5 text-[10.5px] font-bold text-gold">{tag}</span>}
        </div>
      </div>
      <span className="flex-none whitespace-nowrap text-[15px] font-extrabold">{price}</span>
    </button>
  )
}
