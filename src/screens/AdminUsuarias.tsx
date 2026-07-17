import { Search, Filter, Download } from 'lucide-react'
import { BrowserFrame } from '../components/BrowserFrame'
import { adminUsers } from '../data/content'

const planTag: Record<string, string> = {
  Anual: 'bg-ok/15 text-ok',
  Mensal: 'bg-lav/15 text-lav',
  Trial: 'bg-peach/15 text-peach',
}
const tempTag: Record<string, string> = {
  Anjo: 'bg-gold/15 text-gold',
  Enérgico: 'bg-peach/15 text-peach',
  Sensível: 'bg-lav/15 text-lav',
  'Livro-texto': 'bg-sky/15 text-sky',
  Irritável: 'bg-alert/15 text-alert',
}

export function AdminUsuarias() {
  return (
    <BrowserFrame url="admin.babystar.app/usuarias" active="Usuárias">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-extrabold">Usuárias</h1>
          <p className="text-[13px] text-muted">Mães e bebês acompanhados pelo BabyStar</p>
        </div>
        <button className="flex items-center gap-1.5 rounded-lg bg-white/[0.07] px-3.5 py-2 text-[12.5px] font-bold text-ink2">
          <Download size={15} /> Exportar
        </button>
      </div>

      {/* busca + filtros */}
      <div className="flex items-center gap-2.5">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.05] px-3.5 py-2.5">
          <Search size={16} className="text-muted" />
          <span className="text-[13px] text-muted">Buscar por nome da mãe ou do bebê…</span>
        </div>
        <button className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.05] px-3.5 py-2.5 text-[12.5px] font-bold text-ink2">
          <Filter size={15} /> Temperamento
        </button>
        <button className="flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.05] px-3.5 py-2.5 text-[12.5px] font-bold text-ink2">
          <Filter size={15} /> Plano
        </button>
      </div>

      {/* tabela */}
      <div className="min-h-0 flex-1 overflow-y-auto no-scrollbar rounded-xl border border-white/[0.08]">
        <table className="w-full border-collapse text-[13.5px]">
          <thead className="sticky top-0 bg-[#0C1128]">
            <tr>
              {['Mãe', 'Bebê', 'Idade', 'Temperamento', 'Camada', 'Plano', 'Último acesso'].map((h) => (
                <th
                  key={h}
                  className="border-b border-white/[0.09] px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.6px] text-muted"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {adminUsers.map((u, i) => (
              <tr key={i} className="hover:bg-white/[0.02]">
                <td className="border-b border-white/[0.05] px-4 py-3.5 font-bold">{u.mother}</td>
                <td className="border-b border-white/[0.05] px-4 py-3.5 text-ink2">{u.baby}</td>
                <td className="border-b border-white/[0.05] px-4 py-3.5 text-ink2">{u.age}</td>
                <td className="border-b border-white/[0.05] px-4 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-[11.5px] font-bold ${tempTag[u.temperament]}`}>
                    {u.temperament}
                  </span>
                </td>
                <td className="border-b border-white/[0.05] px-4 py-3.5">
                  <span className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[11.5px] font-bold text-ink2">
                    {u.layer}
                  </span>
                </td>
                <td className="border-b border-white/[0.05] px-4 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-[11.5px] font-bold ${planTag[u.plan]}`}>{u.plan}</span>
                </td>
                <td className="border-b border-white/[0.05] px-4 py-3.5 text-ink2">{u.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  )
}
