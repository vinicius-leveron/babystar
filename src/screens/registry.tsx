import type { ComponentType } from 'react'
import { Splash } from './Splash'
import { Onboarding } from './Onboarding'
import { Quiz } from './Quiz'
import { QuizResult } from './QuizResult'
import { RegistroIntro } from './RegistroIntro'
import { Registro } from './Registro'
import { Analise } from './Analise'
import { Rotina } from './Rotina'
import { Home } from './Home'
import { Notificacoes } from './Notificacoes'
import { Timer } from './Timer'
import { Diario } from './Diario'
import { Sons } from './Sons'
import { Atividades } from './Atividades'
import { Chat } from './Chat'
import { Estatisticas } from './Estatisticas'
import { Paywall } from './Paywall'
import { AdminPrompts } from './AdminPrompts'
import { AdminUsuarias } from './AdminUsuarias'

export type Phase = 'A · Chegada' | 'B · Temperamento' | 'C · Pressão de sono' | 'D · GPS entregue' | 'E · Vida com o app' | 'F · Admin'

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
  { n: 2, path: '/onboarding', title: 'Cadastro afetivo', caption: 'Nome da mãe, do bebê e data de nascimento.', phase: 'A · Chegada', kind: 'mobile', Component: Onboarding },
  { n: 3, path: '/quiz', title: 'Quiz de temperamento', caption: 'Camada 1 · 6 perguntas, uma por vez.', phase: 'B · Temperamento', kind: 'mobile', Component: Quiz },
  { n: 4, path: '/resultado', title: 'Resultado do temperamento', caption: 'O perfil do bebê e o que muda no sono.', phase: 'B · Temperamento', kind: 'mobile', Component: QuizResult },
  { n: 5, path: '/registro-intro', title: 'Intro do registro 48h', caption: 'Camada 2 · por que e como registrar.', phase: 'C · Pressão de sono', kind: 'mobile', Component: RegistroIntro },
  { n: 6, path: '/registro', title: 'Registro de sono', caption: 'Despertar, sonecas, noite e madrugada.', phase: 'C · Pressão de sono', kind: 'mobile', Component: Registro },
  { n: 7, path: '/analise', title: 'Aprendendo o padrão', caption: 'A IA cruza temperamento + 48h + fisiologia.', phase: 'C · Pressão de sono', kind: 'mobile', Component: Analise },
  { n: 8, path: '/rotina', title: 'Rotina personalizada', caption: 'Timeline pela pressão de sono ideal.', phase: 'D · GPS entregue', us: 'US 2.2', kind: 'mobile', Component: Rotina },
  { n: 9, path: '/app/home', title: 'Home · anel do dia', caption: 'Zona de aprofundamento + rotina do dia.', phase: 'D · GPS entregue', us: 'US 2.3', kind: 'mobile', Component: Home },
  { n: 10, path: '/notificacoes', title: 'Notificações proativas', caption: 'Diferente do Napper: zona de aprofundamento.', phase: 'D · GPS entregue', us: 'US 2.4', kind: 'mobile', Component: Notificacoes },
  { n: 11, path: '/timer', title: 'Timer de soneca', caption: 'Play / pause / stop + registro automático.', phase: 'E · Vida com o app', us: 'US 2.5', kind: 'mobile', Component: Timer },
  { n: 12, path: '/app/diario', title: 'Diário de anotações', caption: 'Mamada, fralda, peso, despertares e sono.', phase: 'E · Vida com o app', us: 'US 2.7', kind: 'mobile', Component: Diario },
  { n: 13, path: '/app/sons', title: 'Biblioteca de sons', caption: 'Ruídos + natureza + canções + mini-player.', phase: 'E · Vida com o app', us: 'US 2.6', kind: 'mobile', Component: Sons },
  { n: 14, path: '/atividades', title: 'Atividades do dia', caption: 'Camada 3 · gasto de energia por idade.', phase: 'E · Vida com o app', kind: 'mobile', Component: Atividades },
  { n: 15, path: '/chat', title: 'Chat com a Denise', caption: 'IA treinada pela Dra. Denise Gurgel.', phase: 'E · Vida com o app', us: 'US 2.1', kind: 'mobile', Component: Chat },
  { n: 16, path: '/app/evolucao', title: 'Estatísticas', caption: 'Sono total, hora de dormir, despertares.', phase: 'E · Vida com o app', kind: 'mobile', Component: Estatisticas },
  { n: 17, path: '/paywall', title: 'Paywall', caption: '7 dias grátis, planos em R$, garantia.', phase: 'E · Vida com o app', kind: 'mobile', Component: Paywall },
  { n: 18, path: '/admin/prompts', title: 'Admin · Editor de prompts', caption: 'CRUD dos prompts das camadas GPS.', phase: 'F · Admin', us: 'US 2.8', kind: 'admin', Component: AdminPrompts },
  { n: 19, path: '/admin/usuarias', title: 'Admin · Usuárias', caption: 'Listagem e busca de usuárias.', phase: 'F · Admin', us: 'US 2.9', kind: 'admin', Component: AdminUsuarias },
]

export const phases: Phase[] = ['A · Chegada', 'B · Temperamento', 'C · Pressão de sono', 'D · GPS entregue', 'E · Vida com o app', 'F · Admin']
