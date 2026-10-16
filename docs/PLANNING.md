# Portfólio 16 bits: planejamento da versão 1

Oct 16, 2026 · @Leandro

Primeiro portfólio público, com estética de Super Nintendo, para apresentar quem você é e abrir conversas de parceria em SaaS com empresas e influenciadores. A versão 1 vai ao ar com um projeto só, o Lords of Logic, e foi desenhada para crescer a cada novo produto.

## Objetivo e público

O portfólio existe para gerar conversas de parceria. Ser bonito é meio, não fim: cada tela precisa empurrar o visitante para o contato.

| Público | O que procura | O que precisa ver |
| --- | --- | --- |
| Influenciadores e criadores | Alguém que transforme a audiência em produto, sem eles terem que entender de tecnologia | A oferta de parceria em linguagem simples e prova de que você entrega produto no ar |
| Empresas e agências | Um dev que entende negócio e marketing, não só código | Trajetória, stack e projetos funcionando |
| Comunidade dev e recrutadores | Curiosidade, inspiração | Os projetos e o código (secundário) |

### O teste dos 20 segundos

Sem jogar nada, o visitante precisa saber:

1. Quem você é: desenvolvedor fullstack com passado em marketing e vídeo.
2. O que você oferece: construir SaaS, apps e jogos em parceria.
3. Como falar com você: um botão de contato visível na primeira tela.

A gamificação vem depois disso, para quem quiser explorar. Sempre haverá um atalho "pular para o resumo".

## Estrutura

Na versão 1 é uma página única com rolagem, onde cada seção imita uma tela de jogo. Um menu fixo no estilo "pause menu" leva direto a qualquer seção. Não há fases bloqueadas: tudo é acessível desde o início.

| Ordem | Seção | Metáfora de jogo | Conteúdo |
| --- | --- | --- | --- |
| 1 | Início | Tela de título, "PRESS START" | Nome, uma frase do que você faz, botões "jogar" (rolar) e "falar comigo" |
| 2 | Quem sou eu | Seleção de personagem | Avatar em pixel art, classe ("Dev Fullstack"), atributos e um parágrafo curto |
| 3 | Timeline | Mapa de mundo | Cada fase é um momento da carreira, em ordem, com um pequeno texto ao abrir |
| 4 | Conhecimentos | Inventário e barra de status | Stack agrupada por categoria, com itens e níveis |
| 5 | Projetos | Seleção de cartucho | Um cartucho por projeto; na versão 1, só o Lords of Logic e um cartucho "em breve" |
| 6 | Parcerias | "PLAYER 2, PRESS START" | A oferta de parceria, como funciona e o contato |
| 7 | Rodapé | Tela de créditos | Links (GitHub, LinkedIn, e-mail) e "feito por" |

### Interação

- Navegação por rolagem e cliques, com atalho de teclado (setas e Enter), como o Lords of Logic já faz.
- Em celular, tudo funciona por toque, sem depender de teclado.
- O cartucho "em breve" já deixa pronto o espaço para o amigo secreto e os próximos produtos, sem mudar a estrutura.

## Textos

Rascunhos em português para ajustar com a sua voz. O site é publicado em inglês, com a tradução para pt-BR no botão de idioma. Trechos entre colchetes dependem de dados que ainda faltam.

### Início

- **Título:** LEANDRO JUNIOR
- **Subtítulo:** Desenvolvedor fullstack que já foi estrategista de marketing. Eu construo produtos digitais que as pessoas querem usar.
- **Botões:** "PRESS START" e "Quero fazer um projeto com você"

### Quem sou eu

- **Classe:** Dev Fullstack · **Especialidade:** e-commerce e produtos digitais
- **Atributos:** Código, Negócio, Marketing, Vídeo, Inglês
- **Texto:** Sou desenvolvedor fullstack e comecei criando estratégias de marketing e editando vídeos. Hoje trabalho em projetos de e-commerce em plataformas como Salesforce e Shopify. Nas horas vagas, crio meus próprios jogos e apps. Essa mistura me deixa à vontade nos dois lados de um produto: construir e fazer as pessoas quererem usar.

### Timeline (fases do mapa)

1. **Mundo 1, Marketing e vídeo:** estratégia e edição como freelancer. 2021–2023
2. **Mundo 2, Front-end:** formação no programa Vai Na Web (HTML, SASS, React, Vue). 2023–2024
3. **Mundo 3, Faculdade:** início de Tecnologia em Sistemas de Computação na UFF. 2024
4. **Mundo 4, MercurioChat:** projeto em parceria com colegas, automação de atendimento no WhatsApp com IA. Fora do ar no momento, com um ícone de "desligado" em pixel art na fase. 2024–2025
5. **Mundo 5, E-commerce B2B:** implementações em Salesforce B2B Commerce, Shopify e WooCommerce, com integrações de ERP e pagamentos, em equipes que trabalham em inglês. 2025–hoje
6. **Mundo 6, Projetos próprios:** Lords of Logic e os próximos lançamentos. 2026
7. **Próxima fase:** "???", com o convite para o visitante construir junto.

### Conhecimentos (inventário)

| Categoria | Itens |
| --- | --- |
| Front-end | Next.js, LWC, React, Vue.js, Tailwind CSS, shadcn/ui |
| Back-end | Apex, SOQL, SQL, MongoDB, Node.js, NestJS, Prisma, PostgreSQL, Supabase |
| Plataformas | Salesforce B2B Commerce (Core), Shopify, WordPress e WooCommerce |
| Criação e estratégia | Estratégia de marketing, edição de vídeo |

Evite barras com porcentagem ("React 85%"). Elas não dizem nada a quem contrata. Prefira níveis de RPG por categoria ou só os itens.

Cada item do inventário aparece com o logo da tecnologia ou plataforma redesenhado em pixel art, como um item de RPG, com o nome embaixo. Ao passar o mouse ou tocar, abre uma caixa de diálogo curta com onde você usa aquilo.

### Projetos (cartucho do Lords of Logic)

- **Nome:** Lords of Logic
- **Gênero:** trivia para desenvolvedores
- **Descrição:** Partidas rápidas de 3 a 7 minutos sobre stack web, plataformas e boas práticas, com ranking e sistema de XP.
- **Feito com:** Next.js, Supabase, login com Google e Discord
- **Botões:** "Jogar agora" (abre o jogo) e "Bastidores" (opcional, um parágrafo sobre como foi construído)

### Parcerias

- **Título:** PLAYER 2, PRESS START
- **Texto:** Você tem uma audiência ou conhece bem um problema. Eu tenho a parte técnica e a de produto. Juntos, transformamos isso em um app, SaaS ou jogo.
- **Como funciona:**
  1. Você me conta a ideia ou o problema do seu público.
  2. Avaliamos juntos se vale virar produto.
  3. Eu construo e opero. Você divulga.
  4. Dividimos o resultado.
- **Contato:** e-mail nascimentoleandrojr@gmail.com, e link para o LinkedIn (linkedin.com/in/leandro-jr23).

A forma de divisão (receita, participação, valor fixo mais percentual) fica em aberto e é melhor tratada na conversa, não no site.

## Direção visual 16 bits

A referência é a interface de RPGs de Super Nintendo: caixas de diálogo com borda, menus com cursor piscando, mapa de mundo e cores saturadas sobre fundo escuro. O Lords of Logic usa estética de terminal; o portfólio pode ter identidade própria, e cada cartucho mostra o visual do seu projeto.

### Elementos

| Elemento | Direção |
| --- | --- |
| Paleta | Paleta fechada de 8 a 16 cores, fundo azul-marinho ou roxo escuro, destaques em amarelo, ciano e magenta |
| Tipografia | Fonte pixel só em títulos e botões (por exemplo, Press Start 2P); fonte legível e levemente retrô no texto corrido (por exemplo, VT323 ou uma sans comum) |
| Caixas de texto | Estilo caixa de diálogo de RPG, com borda dupla e efeito de digitação opcional |
| Pixel art | Avatar seu, ícones do inventário, cartuchos e o mapa; tudo em escala inteira (2x, 3x) com `image-rendering: pixelated` |
| Animação | Cursor piscando, "PRESS START" pulsando, transição de tela curta; nada que atrase a leitura |
| Som | Desligado por padrão, com botão para ligar; efeitos curtos de menu |

### Tema e idioma

- **Modo escuro como padrão**, com botão para alternar para o modo claro. A paleta tem uma versão clara própria (fundo creme ou cinza claro, mesmas cores de destaque), em vez de só inverter as cores.
- A escolha de tema fica salva no navegador e respeita `prefers-color-scheme` na primeira visita.
- **Inglês como idioma principal**, com botão para pt-BR no menu. Os dois botões ficam no canto, como opções de um menu de configurações de jogo.
- Logos das tecnologias em pixel art: conferir as regras de uso de marca de cada uma e manter o logo reconhecível.

### Logos das stacks

Não existe pacote pronto em pixel art que cubra a stack inteira. Os que existem cobrem poucas linguagens, como o [pacote da Ceo Potato](https://ceo-potato.itch.io/programming-languages-pixel-icons) (C#, Python, JavaScript, HTML, CSS) ou o da [YukiPixels](https://yukipixels.itch.io/pixel-art-icons) (redes sociais e softwares, licença CC BY-SA 4.0).

A solução é gerar os logos automaticamente:

1. Partir dos SVGs do [Simple Icons](https://simpleicons.org/), biblioteca aberta com mais de 3.200 logos de marcas.
2. Um script do projeto rasteriza cada SVG em 16×16 ou 24×24 pixels, com a cor da paleta.
3. O site exibe a imagem ampliada em escala inteira com `image-rendering: pixelated`, o que dá o visual 16 bits.

Assim cada nova stack vira ícone sem desenho manual. Pontos de atenção: algumas marcas podem não estar no Simple Icons (Apex e LWC não têm logo próprio e podem usar o da Salesforce), e cada marca tem regras de uso que vale conferir.

Para os componentes da interface, vale avaliar o [8bitcn/ui](https://tomevault.io/tome/theorcdev/8bitcn-ui), uma coleção de componentes 8 bits feita sobre shadcn/ui e Tailwind, com licença MIT.

### Acessibilidade e legibilidade

- Texto corrido nunca em fonte pixel pequena. Tamanho mínimo confortável no celular.
- Contraste suficiente entre texto e fundo.
- Respeitar `prefers-reduced-motion`: sem efeito de digitação nem animações para quem pediu menos movimento.
- Conteúdo em HTML real, não dentro de imagens ou `canvas`, para leitores de tela e para o Google encontrar.

### De onde vem a pixel art

Opções em ordem de custo: pacotes gratuitos com licença comercial (verifique a licença de cada um), editor de pixel art feito por você, ou um artista para o avatar. O avatar é a peça que mais vale personalizar.

## Escopo e stack

### Versão 1 (agora)

- Página única com as 7 seções
- Menu fixo e atalho "pular para o resumo"
- Navegação por teclado e por toque
- Inglês como padrão e botão para pt-BR
- Modo escuro como padrão e botão para modo claro
- Avatar, logos das stacks e ícones em pixel art
- Cartucho do Lords of Logic e um cartucho "em breve"
- Contato por e-mail ou formulário simples, e link para o LinkedIn
- Imagem de prévia para compartilhar em redes e WhatsApp (`Open Graph`)
- Analytics básico: visitas, cliques em "jogar" e cliques em contato

### Versão 2 (depois do amigo secreto)

- Mapa de mundo navegável com personagem andando
- Página própria para cada projeto, com bastidores e números de uso
- Easter eggs: código secreto, conquistas por explorar o site
- Som e trilha opcionais

### Stack sugerida

- `Next.js` com exportação estática, hospedado na `Vercel`, como o Lords of Logic
- Conteúdo (timeline, skills, projetos) em arquivos de dados, por exemplo `content/projects.ts`, para adicionar um projeto sem mexer em layout
- CSS próprio com variáveis para a paleta, sem biblioteca de componentes
- Formulário de contato por um serviço de formulário ou `mailto:`, sem backend próprio na versão 1

## Cronograma

A versão 1 cabe em cerca de duas semanas sem tirar o foco do amigo secreto, cujo lançamento está previsto para 16 de novembro.

| Período | Entrega | Esforço estimado |
| --- | --- | --- |
| 17–19 out | Fechar textos, idioma, paleta e escolher a pixel art | 3–4 h |
| 20–26 out | Montar a página com as 7 seções e publicar | 6–8 h |
| 27 out–1 nov | Ajustes de celular, `Open Graph`, analytics e revisão | 2–3 h |

Regra para não atrasar o outro projeto: se a versão 1 passar de 15 horas no total, publique como está e deixe o resto para a versão 2.

## Decisões em aberto e dados que faltam

- [x] **Idioma principal:** inglês, com botão para pt-BR
- [x] **Nome no título:** Leandro Junior
- [x] **Anos da timeline:** definidos
- [x] **LinkedIn:** linkedin.com/in/leandro-jr23
- [x] **E-mail de contato:** nascimentoleandrojr@gmail.com
- [ ] Domínio e nome do site (por exemplo, seu nome ou um nome de "estúdio")
- [ ] Quanto falar do trabalho atual: nomes de clientes provavelmente não podem aparecer, então descreva o tipo de trabalho
- [ ] Avatar: pacote gratuito, feito por você ou encomendado
- [ ] Link do GitHub a exibir
- [ ] Logos em pixel art: gerar a partir do Simple Icons com pixelização automática (ver Direção visual); conferir quais marcas estão disponíveis lá

## Instruções para o agente local

Exporte este documento em Markdown, coloque na raiz do projeto como `docs/PLANNING.md` e envie o prompt abaixo ao agente. Ele gera os documentos de referência do projeto antes de qualquer código.

```markdown
Read docs/PLANNING.md (written in Portuguese). It is the planning document for my personal portfolio. Using ONLY the information in it, generate the project documentation files listed below. Do not write any application code yet. All generated files must be written in English.

## Files to create

1. `AGENTS.md` — rules for you (the coding agent) in this repo:
   - Stack: Next.js (App Router, static export), TypeScript, Tailwind CSS, shadcn/ui only where it fits the 16-bit look, deployed on Vercel.
   - All code, identifiers, comments and commit messages in English.
   - Content lives in data files (e.g. `content/*.ts`) and locale files; never hardcode copy inside components.
   - i18n: English is the default locale, `pt-BR` is the second; every user-facing string must exist in both.
   - Theme: dark mode is the default, light mode via toggle; persist the choice in `localStorage` wrapped in try/catch; respect `prefers-color-scheme` on first visit.
   - Accessibility rules from the planning doc: real HTML text (no text inside images or canvas), pixel font only for titles and buttons, `prefers-reduced-motion` support, keyboard (arrows + Enter) and touch navigation.
   - Do not add dependencies without asking. Keep a hard limit on scope: version 1 only.
   - Point to the other docs below as the source of truth.

2. `PROJECT.md` — product scope:
   - Goal, target audiences and the 20-second test.
   - The 7 sections (Start, About, Timeline, Skills, Projects, Partnerships, Footer) with their game metaphor and content.
   - Version 1 scope vs version 2 backlog, and what is out of scope.
   - Success metrics: visits, "play" clicks, contact clicks.

3. `CONTENT.md` — all site copy, translated from the Portuguese drafts into natural English, with the pt-BR version next to each string:
   - Name: Leandro Junior.
   - About text, attributes and class.
   - Timeline: the 7 worlds with their years exactly as in the doc (MercurioChat is offline and shows a pixel-art "powered off" icon).
   - Skills inventory: Front-end, Back-end, Platforms, Creative & Strategy, exactly the items listed.
   - Lords of Logic cartridge (https://lords-of-logic.vercel.app/) and a "coming soon" cartridge.
   - Partnerships copy and the 4-step "how it works".
   - Contact: email nascimentoleandrojr@gmail.com, LinkedIn https://www.linkedin.com/in/leandro-jr23.
   - Mark any missing info (domain, GitHub) as TODO; never invent it.

4. `STYLE_GUIDE.md` — the 16-bit design system:
   - Color tokens for dark (default) and light themes, as CSS variables, with a closed 8–16 color palette.
   - Typography: pixel font for headings/buttons, readable font for body text, size scale.
   - Components: RPG dialog box, blinking menu cursor, pause menu, character select card, world map stage, inventory slot with pixel logo and tooltip, cartridge card, theme and language toggles.
   - Pixel art rules: integer scaling, `image-rendering: pixelated`.
   - Motion rules and sound (off by default).

5. `ASSETS.md` — checklist of every pixel-art asset needed: avatar, one logo per skill item, the "powered off" icon, cartridges, map tiles, favicon, Open Graph image. For each: size, where it is used, source and license (TODO until chosen). For the skill logos, plan a build script that takes the Simple Icons SVG for each skill (package `simple-icons`), rasterizes it to 16x16 or 24x24 PNG in a palette color, and the UI scales it up by an integer factor with `image-rendering: pixelated`. List which skills have no Simple Icons entry and propose a fallback for each.

6. `ROADMAP.md` — version 1 milestones from the schedule section with the 15-hour cap, then the version 2 backlog.

7. `README.md` — short project description, how to run locally, how to add a new project cartridge and a new skill item.

When done, list the files you created and every TODO you left, and wait for my review before writing code.
```
