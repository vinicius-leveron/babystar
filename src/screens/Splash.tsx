import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'
import { StarLogo } from '../components/StarLogo'

export function Splash() {
  const nav = useNavigate()
  return (
    <PhoneFrame seed={3}>
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="animate-floaty"
        >
          <StarLogo size={104} />
        </motion.div>
        <motion.h1
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-7 text-[40px] font-extrabold leading-none tracking-[-0.5px]"
        >
          Baby<span className="text-gradient-gold">Star</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-4 text-[17px] leading-relaxed text-ink2"
        >
          Ajudamos seu bebê a dormir mais
          <br />
          profundo — guiado pela estrela.
        </motion.p>
      </div>
      <div className="flex flex-col gap-3 px-6 pb-10">
        <button className="bs-btn-primary" onClick={() => nav('/onboarding')}>
          Começar
        </button>
        <button className="bs-btn-ghost" onClick={() => nav('/app/home')}>
          Já tenho conta
        </button>
      </div>
    </PhoneFrame>
  )
}
