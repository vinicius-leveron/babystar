import type { ComponentType } from 'react'
import { Splash } from './Splash'
import { Onboarding } from './Onboarding'
import { DespertarHoje } from './DespertarHoje'
import { Rotina } from './Rotina'
import { Home } from './Home'
import { Notificacoes } from './Notificacoes'
import { Timer } from './Timer'
import { Diario } from './Diario'
import { Sons } from './Sons'
import { Registro } from './Registro'
import { Conteudo } from './Conteudo'
import { ConteudoVideo } from './ConteudoVideo'
import { ConteudoArtigo } from './ConteudoArtigo'
import { Quiz } from './Quiz'
import { QuizResult } from './QuizResult'
import { Atividades } from './Atividades'
import { Estatisticas } from './Estatisticas'
import { Chat } from './Chat'
import { Perfil } from './Perfil'
import { Paywall } from './Paywall'
import { AdminDashboard } from './AdminDashboard'
import { AdminPrompts } from './AdminPrompts'
import { AdminAulas } from './AdminAulas'
import { AdminUsuarias } from './AdminUsuarias'

export type Phase =
  | 'A · Chegada'
  | 'B · Rotina no minuto 1'
  | 'C · Acompanhar o dia'
  | 'D · Aprender'
  | 'E · Personalizar'
  | 'F · Evolução & conta'
  | 'G · Admin'

export type ScreenMeta = {
  n: number
  path: string
  title: string
  caption: string
  phase: Phase
  us?: string
  kind: 'mobile' | 'admin'
  Component: ComponentType
}

export const screens: ScreenMeta[] = [
  { n: 1, path: '/splash', title: 'Boas-vindas', caption: 'A estrela e a promessa: o bebê permanecer dormindo.', phase: 'A · Chegada', kind: 'mobile', Component: Splash },
  { n: 2, path: '/onboarding', title: 'Cadastro afetivo', caption: 'Nome da mãe, do bebê, nascimento e sexo.', phase: 'A · Chegada', kind: 'mobile', Component: Onboarding },

  { n: 3, path: '/despertar', title: 'Despertar de hoje', caption: '“Que horas a Olivia acordou?” — a rotina sai daqui, na hora.', phase: 'B · Rotina no minuto 1', kind: 'mobile', Component: DespertarHoje },
  { n: 4, path: '/rotina', title: 'Rotina do dia', caption: 'IA gera as regras (temperamento + idade + despertar) — o engine. US 2.1 · 2.2.', phase: 'B · Rotina no minuto 1', us: 'US 2.1 · 2.2', kind: 'mobile', Component: Rotina },
  { n: 5, path: '/app/home', title: 'Home · anel do dia', caption: 'Zona de aprofundamento + a rotina do dia.', phase: 'B · Rotina no minuto 1', us: 'US 2.3', kind: 'mobile', Component: Home },
  { n: 6, path: '/notificacoes', title: 'Notificações proativas', caption: '30 min antes, na hora, e “2h sem novidade”.', phase: 'B · Rotina no minuto 1', us: 'US 2.4', kind: 'mobile', Component: Notificacoes },

  { n: 7, path: '/timer', title: 'Timer de soneca', caption: 'Play / pause / stop → recalcula as próximas.', phase: 'C · Acompanhar o dia', us: 'US 2.5', kind: 'mobile', Component: Timer },
  { n: 8, path: '/app/diario', title: 'Diário de anotações', caption: 'Mamada, fralda, peso, banho, despertares…', phase: 'C · Acompanhar o dia', us: 'US 2.7', kind: 'mobile', Component: Diario },
  { n: 9, path: '/app/sons', title: 'Biblioteca de sons', caption: 'Ruídos, natureza, canções + mini-player.', phase: 'C · Acompanhar o dia', us: 'US 2.6', kind: 'mobile', Component: Sons },
  { n: 10, path: '/registro', title: 'Meus dias', caption: 'O dia a dia calibra a rotina — sem gate de 48h.', phase: 'C · Acompanhar o dia', kind: 'mobile', Component: Registro },

  { n: 11, path: '/app/conteudo', title: 'Aprender · hub', caption: 'Aulas e artigos da Dra. Denise (texto + vídeo).', phase: 'D · Aprender', kind: 'mobile', Component: Conteudo },
  { n: 12, path: '/conteudo/video', title: 'Aula em vídeo', caption: 'Player com controles, progresso e trilha de aulas.', phase: 'D · Aprender', kind: 'mobile', Component: ConteudoVideo },
  { n: 13, path: '/conteudo/artigo', title: 'Aula / artigo', caption: 'Leitor de conteúdo com vídeo, dica e “a seguir”.', phase: 'D · Aprender', kind: 'mobile', Component: ConteudoArtigo },

  { n: 14, path: '/quiz', title: 'Temperamento (opcional)', caption: 'Camada 1 do GPS — deixa a rotina mais precisa.', phase: 'E · Personalizar', kind: 'mobile', Component: Quiz },
  { n: 15, path: '/resultado', title: 'Resultado do temperamento', caption: 'O perfil do bebê e o que muda no sono.', phase: 'E · Personalizar', kind: 'mobile', Component: QuizResult },
  { n: 16, path: '/atividades', title: 'Atividades do dia', caption: 'Camada 3 · gasto de energia por idade.', phase: 'E · Personalizar', kind: 'mobile', Component: Atividades },

  { n: 17, path: '/app/evolucao', title: 'Estatísticas', caption: 'Sono total, hora de dormir, despertares.', phase: 'F · Evolução & conta', kind: 'mobile', Component: Estatisticas },
  { n: 18, path: '/chat', title: 'Chat com a Dra. Denise', caption: 'Assistente IA treinada pela especialista (US 2.10).', phase: 'F · Evolução & conta', us: 'US 2.10', kind: 'mobile', Component: Chat },
  { n: 19, path: '/app/perfil', title: 'Perfil', caption: 'Bebê, rotina, notificações, assinatura.', phase: 'F · Evolução & conta', kind: 'mobile', Component: Perfil },
  { n: 20, path: '/paywall', title: 'Paywall', caption: '7 dias grátis, planos em R$, garantia.', phase: 'F · Evolução & conta', kind: 'mobile', Component: Paywall },

  { n: 21, path: '/admin/painel', title: 'Admin · Painel do negócio', caption: 'KPIs, crescimento, funil e engajamento para a Denise.', phase: 'G · Admin', kind: 'admin', Component: AdminDashboard },
  { n: 22, path: '/admin/prompts', title: 'Admin · Editor de prompts', caption: 'CRUD dos prompts das camadas GPS.', phase: 'G · Admin', us: 'US 2.8', kind: 'admin', Component: AdminPrompts },
  { n: 23, path: '/admin/aulas', title: 'Admin · Aulas & conteúdo', caption: 'Inserir e gerir aulas em vídeo e artigos.', phase: 'G · Admin', kind: 'admin', Component: AdminAulas },
  { n: 24, path: '/admin/usuarias', title: 'Admin · Usuárias', caption: 'Listagem e busca de usuárias.', phase: 'G · Admin', us: 'US 2.9', kind: 'admin', Component: AdminUsuarias },
]

export const phases: Phase[] = [
  'A · Chegada',
  'B · Rotina no minuto 1',
  'C · Acompanhar o dia',
  'D · Aprender',
  'E · Personalizar',
  'F · Evolução & conta',
  'G · Admin',
]
