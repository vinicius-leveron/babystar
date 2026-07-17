# BabyStar — Planejamento: correções e o que falta

> Documento de escopo pós-call de alinhamento (Vinícius · Denise · Wesley).
> Objetivo: separar **o que já existe**, **as correções do protótipo** e **o que falta pra virar app de verdade** — com a divisão MVP vs. Ideal pra orçamento.

---

## 0. Onde estamos hoje

- **Protótipo front-end navegável** (React + Vite + Tailwind), no ar na Vercel, ~19 telas.
- É a **camada visual/UX** com dados **mockados**: não tem back-end, não tem IA de verdade, não persiste nada (recarregou, zera).
- **Em andamento nesta rodada (código feito, ainda não commitado):** rework do fluxo para **"valor no minuto 1"** — fim da espera de 48h. Detalhe na seção 1.

**Resumindo:** temos a "cara" e a jornada do app prontas pra aprovar. Falta a "inteligência" e a infraestrutura.

---

## 1. Correções do protótipo (alinhamento com a call)

A call trouxe **uma correção estrutural** e alguns ajustes. Status: ✅ feito nesta rodada · 🔧 a terminar.

### 1.1 Correção estrutural — fim do "espere 48h" ✅
O modelo antigo (registrar 48h → só então receber a rotina) é exatamente o que a Denise disse que **não** quer ("a mãe tem que sair já com lucro"). Reescrevi para o modelo do Napper:
- Cadastro → **"Que horas a Olivia acordou hoje?"** → **rotina do dia na hora** (a partir da idade + despertar).
- As 48h viraram **"Meus dias"** = calibração contínua, sem gate.
- **Quiz de temperamento** virou **personalização opcional** (não trava a entrega).

### 1.2 Ajustes ✅
- **Sexo do bebê** no cadastro (a Denise cita "nome, nascimento, sexo"; resolve concordância a/o).
- **Notificações**: 30 min antes ("diminua os estímulos") · na hora ("está na hora de dormir") · **2h sem interação** ("cadê a Olivia?").
- **Timer**: ao parar a soneca, **recalcula as próximas** (tira a conta da cabeça da mãe).
- **Home** começa pelo "acordou hoje às 7:00" e leva à rotina.

### 1.3 Ainda falta no protótipo 🔧
- **Regra bebê < 2 meses**: não libera rotina, só deixa anotar (igual Napper).
- **Dashboard/previsões em linguagem de mãe** (a Denise diz que o do Napper "nem a mãe entende").
- **Tutorial guiado** na 1ª entrada (a navegação do Napper não é fácil).

---

## 2. O que falta pra virar APP DE VERDADE

O protótipo é a interface. Abaixo, os blocos de funcionalidade real, com nota **MVP vs. Ideal**.

### Bloco A — Fundação técnica (back-end) · **base de tudo**
- Login/cadastro + banco de dados (sugestão: **Supabase**).
- Modelo de dados: mãe, bebê (nome, nascimento, sexo), eventos de sono, registros do diário, assinatura.
- Persistência real (hoje nada é salvo).

### Bloco B — Engine de rotina (US 2.2) · **o coração**
- Tabelas de pressão de sono/cronotipo por faixa etária (já existem nos documentos da Denise).
- Cálculo: **idade + horário que acordou → sonecas do dia + hora de dormir**.
- **Recalibração**: ao registrar a soneca real (stop), reprojeta o resto do dia.
- Regra **< 2 meses** (não libera, só anota).
- Contagem regressiva + gatilhos de notificação (30 min / na hora / 2h).
- *MVP:* engine com as tabelas fixas por idade. *Ideal:* IA calibrando com o histórico real.

### Bloco C — IA (US 2.1)
- Integração com **Claude**.
- Plugar os **prompts das camadas GPS** (já prontos nos docs).
- Chat "consultora Dra. Denise" **nutrido com o conteúdo do curso** (aulas transcritas) — o que o Wesley chamou de "sua consultora particular".
- *MVP alternativo (Wesley):* rodar no **WhatsApp** (chatbot que manda lembretes e recebe o input da mãe), em vez de chat interno.

### Bloco D — Notificações reais
- Push nativo **ou** WhatsApp (decisão de arquitetura).
- Agendador que dispara 30 min antes, na hora e após 2h sem interação.

### Bloco E — Conteúdo / conhecimento
- **Hub de aulas/conteúdo** do curso (texto + vídeo). O Napper só tem texto básico ("tipo BabyCenter") — o conteúdo da Denise é diferencial.
- Esse banco também alimenta a IA.

### Bloco F — Áudio (US 2.6)
- Player real de **ruído branco/sons**: arquivos de áudio, timer de desligamento, tocar em segundo plano. (Mantém a mãe no app em vez de Spotify/YouTube.)

### Bloco G — Diário & dashboard (US 2.7)
- Persistir registros; **histórico do bebê** no dashboard.
- Extras citados: altura, histórico médico/consultas, dúvidas pro pediatra.
- **Simulação de crescimento** mês a mês (tipo apps de gravidez — "tamanho de uma maçã").
- Previsões em linguagem de mãe (quanto dormiu de dia/noite, quanto deveria).

### Bloco H — Monetização & planos · **com o Wesley**
- Entrega inclusa no curso (~R$200) **vs.** add-ons pagos.
- **Plano premium**: suporte/concierge humano, IA consultora, desbloqueio de features.
- **Curadoria de afiliados** (Naninha etc.).
- **Member-get-member** (indicar e ganhar benefício).
- **Upsell** para consultoria (R$600–3.000).
- **Admin**: editor de prompts (US 2.8) + usuárias (US 2.9) — já prototipados.

---

## 3. Duas rotas de escopo (pra orçar)

| | **Rota Ideal** | **Rota MVP econômica** |
|---|---|---|
| Experiência | App completo estilo Napper + híbrido com profissional | Valor no minuto 1 com engine simplificada |
| Rotina | Engine + IA calibrando | Engine por tabelas fixas de idade |
| IA / lembretes | Chat interno + push | Chatbot no **WhatsApp** |
| Áudio/sons | No app | Fica de fora no 1º momento |
| Prazo | Maior | Menor ("botar pra jogo esse mês") |

---

## 4. Decisões abertas (precisam de vocês)

1. **App nativo vs. PWA/web por link** — vocês gostaram do modelo por link (Upsell).
2. **Notificação**: push nativo **ou** WhatsApp.
3. **Preços dos planos** (Wesley).
4. **Escopo do conteúdo**: quais aulas entram no hub.
5. **Nome/identidade**: BabyStar confirmado? (revisão da Denise pra afinar).

---

## 5. Sequência sugerida

1. **Fechar as correções do protótipo** (esta rodada) e aprovar a jornada.
2. **Back-end + engine de rotina** (Blocos A + B) — é o que entrega valor real.
3. **IA** (Bloco C) com os prompts das camadas.
4. **Notificações + áudio + diário persistente** (D + F + G).
5. **Conteúdo + monetização/planos** (E + H).

> ✅ **O que já acertamos e não muda:** o termo **"pressão de sono"** (o que fez o Napper bombar), timer play/pause/stop, diário, sons, notificações proativas e o visual mais quente (dourado) — a Denise achou o roxo escuro do Napper "meio chocante".
