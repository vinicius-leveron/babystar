import { Plus, Video, FileText, Upload, Save, Send, Lock } from 'lucide-react'
import { BrowserFrame } from '../components/BrowserFrame'
import { adminAulas } from '../data/content'

const trilhas = ['Comece por aqui', 'Sono do bebê', 'Rotina & desenvolvimento', 'Rituais']

export function AdminAulas() {
  return (
    <BrowserFrame url="admin.babystar.app/aulas" active="Aulas">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-extrabold">Aulas & Conteúdo</h1>
          <p className="text-[13px] text-muted">Alimente o módulo Aprender com aulas em vídeo e artigos</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-lg bg-gold-grad px-3.5 py-2 text-[12.5px] font-extrabold text-[#251A05]">
          <Plus size={16} /> Nova aula
        </button>
      </div>

      <div className="flex min-h-0 flex-1 gap-4">
        {/* lista de aulas */}
        <div className="flex min-h-0 flex-1 flex-col rounded-xl border border-white/[0.1] bg-white/[0.03]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
            <p className="text-[12.5px] font-bold text-ink2">{adminAulas.length} aulas</p>
            <span className="text-[11.5px] text-muted">Trilha · Tipo · Status</span>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <table className="w-full border-collapse text-[13px]">
              <tbody>
                {adminAulas.map((a, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="border-b border-white/[0.05] px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg ${a.tipo === 'Vídeo' ? 'bg-gold/15 text-gold' : 'bg-white/[0.06] text-lav'}`}>
                          {a.tipo === 'Vídeo' ? <Video size={15} /> : <FileText size={15} />}
                        </span>
                        <div>
                          <p className="flex items-center gap-1.5 font-bold">
                            {a.title}
                            {a.premium && <Lock size={11} className="text-gold" />}
                          </p>
                          <p className="text-[11.5px] text-muted">{a.trilha}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-white/[0.05] px-3 py-3 text-muted">{a.tipo}</td>
                    <td className="border-b border-white/[0.05] px-4 py-3">
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${a.status === 'Publicado' ? 'bg-ok/15 text-ok' : 'bg-peach/15 text-peach'}`}>
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* formulário — nova aula */}
        <div className="flex w-[360px] flex-none flex-col rounded-xl border border-gold/25 bg-gold/[0.04]">
          <div className="border-b border-white/[0.07] px-4 py-3">
            <p className="text-[14px] font-extrabold">Nova aula</p>
          </div>
          <div className="flex flex-1 flex-col gap-3.5 overflow-y-auto no-scrollbar p-4">
            <Field label="Título" value="Como a idade muda tudo" />
            <div>
              <span className="mb-1.5 block text-[12px] font-bold text-ink2">Formato</span>
              <div className="flex gap-2">
                <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gold/50 bg-gold/10 py-2 text-[12.5px] font-bold text-gold">
                  <Video size={14} /> Vídeo
                </span>
                <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] py-2 text-[12.5px] font-bold text-ink2">
                  <FileText size={14} /> Texto
                </span>
              </div>
            </div>
            <div>
              <span className="mb-1.5 block text-[12px] font-bold text-ink2">Trilha</span>
              <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5 text-[13px]">
                {trilhas[0]}
              </div>
            </div>
            <div>
              <span className="mb-1.5 block text-[12px] font-bold text-ink2">Vídeo da aula</span>
              <div className="flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-white/20 bg-white/[0.02] py-6 text-center">
                <Upload size={20} className="text-gold" />
                <p className="text-[12px] font-bold text-ink2">Arraste o vídeo ou clique para enviar</p>
                <p className="text-[11px] text-muted">MP4 até 500 MB · ou cole um link</p>
              </div>
            </div>
            <label className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5">
              <span className="text-[12.5px] font-bold text-ink2">Conteúdo Premium</span>
              <span className="flex h-5 w-9 items-center rounded-full bg-gold/30 px-0.5">
                <span className="h-4 w-4 translate-x-4 rounded-full bg-gold" />
              </span>
            </label>
          </div>
          <div className="flex items-center justify-end gap-2 border-t border-white/[0.07] px-4 py-3">
            <button className="flex items-center gap-1.5 rounded-lg bg-white/[0.07] px-3 py-2 text-[12px] font-bold text-ink2">
              <Save size={14} /> Rascunho
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-gold-grad px-3.5 py-2 text-[12px] font-extrabold text-[#251A05]">
              <Send size={14} /> Publicar
            </button>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="mb-1.5 block text-[12px] font-bold text-ink2">{label}</span>
      <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5 text-[13px]">{value}</div>
    </div>
  )
}
