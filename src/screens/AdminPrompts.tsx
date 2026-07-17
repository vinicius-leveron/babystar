import { History, Play, Save, Send } from 'lucide-react'
import { BrowserFrame } from '../components/BrowserFrame'
import { adminPrompts } from '../data/content'

export function AdminPrompts() {
  const selected = adminPrompts[5] // Prompt 6 — Entrega da rotina (Rascunho)
  return (
    <BrowserFrame url="admin.babystar.app/prompts" active="Prompts">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-extrabold">Editor de prompts</h1>
          <p className="text-[13px] text-muted">Prompts das camadas do Método GPS que alimentam a IA</p>
        </div>
        <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-[12.5px] text-ink2">10 prompts</span>
      </div>

      <div className="flex min-h-0 flex-1 gap-4">
        {/* lista */}
        <div className="flex w-[340px] flex-none flex-col gap-1.5 overflow-y-auto no-scrollbar">
          {adminPrompts.map((p) => (
            <div
              key={p.id}
              className={`flex items-center justify-between rounded-xl border px-3.5 py-3 ${
                p.id === selected.id ? 'border-gold/40 bg-gold/[0.08]' : 'border-white/[0.07] bg-white/[0.03]'
              }`}
            >
              <div>
                <p className="text-[13.5px] font-bold">
                  {p.id}. {p.name}
                </p>
                <p className="text-[11.5px] text-muted">
                  {p.version} · atualizado {p.updated}
                </p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                  p.status === 'Publicado' ? 'bg-ok/15 text-ok' : 'bg-peach/15 text-peach'
                }`}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>

        {/* editor */}
        <div className="flex min-h-0 flex-1 flex-col rounded-xl border border-white/[0.1] bg-white/[0.03]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
            <div className="flex items-center gap-2">
              <p className="text-[14px] font-extrabold">6. Entrega da rotina</p>
              <span className="rounded bg-white/[0.08] px-1.5 py-0.5 text-[11px] font-bold text-lav">{selected.version}</span>
              <span className="rounded-full bg-peach/15 px-2 py-0.5 text-[11px] font-bold text-peach">Rascunho</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <History size={16} />
              <Play size={16} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar p-4 font-mono text-[12px] leading-relaxed text-ink2">
            <p className="text-lav"># PROMPT 6 — ENTREGA DA ROTINA</p>
            <p className="mt-2">
              Você é uma IA especialista em sono infantil, treinada na metodologia da Dra. Denise Gurgel. Seu papel não
              é ensinar teoria, mas <span className="text-gold">pensar pela mãe</span>, criando a melhor rotina para
              construir a pressão de sono ideal…
            </p>
            <p className="mt-2 text-alert">
              ⚠︎ Nunca usar o termo “janela de sono” com a mãe. Sempre traduzir como “pressão de sono”.
            </p>
            <p className="mt-2">
              FORMATO DA ENTREGA: Resumo da análise · Rotina sugerida · Por que funciona · O que observar · Mensagem
              acolhedora final. Sempre chamando a mãe e o bebê pelo nome.
            </p>
          </div>
          <div className="flex items-center justify-end gap-2.5 border-t border-white/[0.07] px-4 py-3">
            <button className="flex items-center gap-1.5 rounded-lg bg-white/[0.07] px-3.5 py-2 text-[12.5px] font-bold text-ink2">
              <Save size={15} /> Salvar rascunho
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-gold-grad px-3.5 py-2 text-[12.5px] font-extrabold text-[#251A05]">
              <Send size={15} /> Publicar
            </button>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}
