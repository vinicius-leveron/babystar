import { motion } from 'framer-motion'
import { PhoneFrame } from '../components/PhoneFrame'
import { Body, ScreenHeader } from '../components/ui'
import { notifications } from '../data/content'

export function Notificacoes() {
  return (
    <PhoneFrame seed={71}>
      <ScreenHeader back title="Notificações" />
      <Body scroll>
        <p className="px-1 text-[13px] text-ink2">
          O BabyStar não avisa só “próxima soneca”. Ele avisa quando o cérebro do bebê entra na{' '}
          <span className="font-bold text-gold">zona de aprofundamento</span>.
        </p>

        {notifications.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-2xl border border-white/[0.16] p-3.5 backdrop-blur-md"
            style={{ background: 'linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.05))' }}
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-gold/40 bg-gradient-to-br from-bg-3 to-bg-1 text-xl">
              {n.emoji}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[14px] font-extrabold leading-tight">{n.title}</p>
                <span className="flex-none text-[11.5px] text-muted">{n.when}</span>
              </div>
              <p className="mt-1 text-[13px] leading-snug text-ink2">{n.body}</p>
            </div>
          </motion.div>
        ))}
      </Body>
    </PhoneFrame>
  )
}
