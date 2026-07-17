import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader, ProgressBar } from '../components/ui'
import { quiz } from '../data/content'

export function Quiz() {
  const nav = useNavigate()
  const [step, setStep] = useState(0)
  const [choice, setChoice] = useState<string | null>('C')
  const q = quiz[step]
  const last = step === quiz.length - 1

  const next = () => {
    if (last) return nav('/resultado')
    setStep((s) => s + 1)
    setChoice(null)
  }

  return (
    <PhoneFrame seed={21} scroll>
      <ScreenHeader back title="Temperamento" onBack={() => (step === 0 ? nav(-1) : setStep((s) => s - 1))} />
      <Body>
        <div className="px-1">
          <ProgressBar pct={((step + 1) / quiz.length) * 100} />
          <p className="mt-2 text-[12.5px] text-muted">
            Camada 1 · Pergunta {step + 1} de {quiz.length}
          </p>
        </div>

        <motion.h2 key={q.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="mt-1 text-[21px] font-extrabold leading-snug">
          {q.prompt}
        </motion.h2>

        <div className="flex flex-col gap-2.5">
          {q.options.map((o) => {
            const on = choice === o.letter
            return (
              <button
                key={o.letter}
                onClick={() => setChoice(o.letter)}
                className={`flex items-center gap-3.5 rounded-2xl border p-4 text-left text-[15px] leading-snug transition ${
                  on
                    ? 'border-gold/55 bg-gold/10 shadow-gold-sm'
                    : 'border-white/10 bg-white/[0.055]'
                }`}
              >
                <span
                  className={`flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full text-[14.5px] font-extrabold ${
                    on ? 'bg-gold-grad text-[#251A05]' : 'border border-white/[0.16] bg-white/[0.08] text-lav'
                  }`}
                >
                  {o.letter}
                </span>
                <span className={on ? 'text-ink' : 'text-ink2'}>{o.text}</span>
              </button>
            )
          })}
        </div>
      </Body>
      <div className="px-6 pb-6 pt-1">
        <button className="bs-btn-primary disabled:opacity-40" disabled={!choice} onClick={next}>
          {last ? 'Ver o resultado' : 'Próxima'}
        </button>
      </div>
    </PhoneFrame>
  )
}
