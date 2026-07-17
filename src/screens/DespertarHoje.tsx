import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sun } from 'lucide-react'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body } from '../components/ui'
import { persona } from '../data/content'

const quick = ['6:30', '6:45', '7:00', '7:15', '7:30']

export function DespertarHoje() {
  const nav = useNavigate()
  const [time, setTime] = useState('7:00')
  return (
    <PhoneFrame seed={17}>
      <Body>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 140, damping: 13 }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#3A2E10] to-[#241C08] text-4xl shadow-gold-sm"
          >
            ☀️
          </motion.div>

          <p className="mt-5 text-[13px] font-bold uppercase tracking-[1px] text-gold">Bom dia, {persona.motherName}</p>
          <h1 className="mt-1 text-[26px] font-extrabold leading-tight">
            Que horas a {persona.babyName}
            <br />
            acordou hoje?
          </h1>
          <p className="mt-2 max-w-[290px] text-[13.5px] leading-relaxed text-ink2">
            Só isso. Com a idade da {persona.babyName} ({persona.babyAgeMonths} meses), eu já monto a rotina do dia
            inteiro — sem espera.
          </p>

          {/* horário selecionado */}
          <div className="mt-6 flex items-center gap-2">
            <Sun size={22} className="text-gold" />
            <span className="font-mono text-[52px] font-extrabold leading-none tabular-nums">{time}</span>
          </div>

          {/* atalhos de horário */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {quick.map((t) => (
              <button
                key={t}
                onClick={() => setTime(t)}
                className={`rounded-full px-4 py-2 text-[14px] font-bold transition ${
                  time === t
                    ? 'bg-gold-grad text-[#251A05] shadow-gold-sm'
                    : 'border border-white/[0.16] bg-white/[0.06] text-ink2'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </Body>
      <div className="px-6 pb-8 pt-1">
        <button className="bs-btn-primary" onClick={() => nav('/app/home')}>
          Montar o dia da {persona.babyName}
        </button>
      </div>
    </PhoneFrame>
  )
}
