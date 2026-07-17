import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Grid2x2 } from 'lucide-react'
import { Gallery } from './screens/Gallery'
import { Perfil } from './screens/Perfil'
import { screens } from './screens/registry'

// Cada tela aberta em cheio é centralizada num "palco" escuro,
// com um atalho flutuante de volta à galeria.
function Stage({ children }: { children: React.ReactNode }) {
  // `?bare` esconde a moldura de preview (usado nos screenshots)
  const bare = new URLSearchParams(window.location.search).has('bare')
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#03040c] p-6">
      {!bare && (
        <Link
          to="/"
          className="fixed bottom-5 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-[13px] font-bold text-ink2 backdrop-blur hover:text-gold"
        >
          <Grid2x2 size={16} /> Voltar à galeria
        </Link>
      )}
      {children}
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        {/* Perfil não entra na galeria de aprovação, mas mantém a aba viva no fluxo */}
        <Route
          path="/app/perfil"
          element={
            <Stage>
              <Perfil />
            </Stage>
          }
        />
        {screens.map((s) => (
          <Route
            key={s.path}
            path={s.path}
            element={
              <Stage>
                <s.Component />
              </Stage>
            }
          />
        ))}
      </Routes>
    </HashRouter>
  )
}
