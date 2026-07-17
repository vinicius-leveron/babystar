import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body } from '../components/ui'
import { persona, temperaments } from '../data/content'

export function QuizResult() {
  const nav = useNavigate()
  const t = temperaments['A'] // resultado exemplo: Bebê Anjo
  return (
    <PhoneFrame seed={31}>
      <Body scroll>
        <p className="mt-3 text-center text-[13px] font-bold uppercase tracking-[0.6px] text-lav">
          Temperamento da {persona.babyName}
        </p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 14 }}
          className="mx-auto mt-1 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#2A2350] to-[#141A38] text-6xl shadow-gold-sm"
        >
          {t.emoji}
        </motion.div>

        <h1 className="mt-3 text-center text-[30px] font-extrabold text-gradient-gold">{t.name}</h1>
        <p className="mx-auto max-w-[280px] text-center text-[14.5px] leading-relaxed text-ink2">
          A {persona.babyName} é uma bebê naturalmente mais calma, adaptável e previsível.
        </p>

        <div className="bs-card-gold mt-1">
          <p className="mb-2 flex items-center gap-2 text-[14px] font-extrabold text-gold">🌙 Como isso muda o sono</p>
          <p className="text-[13.5px] leading-relaxed text-ink2">{t.sleep}</p>
          <p className="mt-2 border-t border-white/10 pt-2 text-[12.5px] italic leading-snug text-lav">
            A Dra. Denise costuma dizer: bebês assim dormem melhor quando o dia é previsível e o ritual, sempre o mesmo.
          </p>
        </div>

        <div className="bs-card">
          <p className="text-[13.5px] leading-relaxed text-ink2">
            Agora que você conhece o temperamento da {persona.babyName}, vamos usar isso para construir a{' '}
            <span className="font-bold text-ink">pressão de sono ideal</span> dela na próxima etapa.
          </p>
        </div>
      </Body>
      <div className="px-6 pb-6 pt-1">
        <button className="bs-btn-primary" onClick={() => nav('/app/home')}>
          Aplicar na rotina da {persona.babyName}
        </button>
      </div>
    </PhoneFrame>
  )
}
