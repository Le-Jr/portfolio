# Site copy

Every user-facing string, in English (default) and Brazilian Portuguese. The English strings are translated from the Portuguese drafts in [PLANNING.md](PLANNING.md). The pt-BR strings are those drafts, with only light edits where UI labels were missing.

The drafts are meant to be adjusted to Leandro's voice. When a string changes in code, update this file in the same change.

Conventions:

- `TODO` means the data is missing. Do not invent it. Hide the element until it exists.
- Strings in CAPS are shown in the pixel font (titles, buttons). Keep them short.

## Arcade chrome

Boot screen, HUD and stage labels. Arcade jargon stays in English in both locales where players would expect it (`1P`, `PAUSE`, `PRESS START`, `ROUND`).

| Key | en | pt-BR |
| --- | --- | --- |
| `boot.system` | LJ ARCADE SYSTEM | LJ ARCADE SYSTEM |
| `boot.checks` | MEMORY CHECK · VIDEO CHECK · INPUT CHECK | TESTE DE MEMÓRIA · TESTE DE VÍDEO · TESTE DE CONTROLES |
| `boot.ok` | OK | OK |
| `boot.loading` | LOADING | CARREGANDO |
| `boot.skip` | PRESS ANY BUTTON | APERTE QUALQUER BOTÃO |
| `boot.copyright` | © 2026 LEANDRO JUNIOR | © 2026 LEANDRO JUNIOR |
| `hud.player` | 1P | 1P |
| `hud.playerName` | LEANDRO JR | LEANDRO JR |
| `hud.stage` / `stageLabel` | STAGE | FASE |
| `start.insertCoin` | INSERT COIN | INSIRA UMA FICHA |

## Global

| Key | en | pt-BR |
| --- | --- | --- |
| `site.name` | Leandro Junior | Leandro Junior |
| `site.domain` | Vercel's default `*.vercel.app` domain for now (set by the project name at deploy) | — |
| `site.title` (browser tab) | Leandro Junior — Full-Stack Developer | Leandro Junior — Desenvolvedor Fullstack |
| `site.description` (meta / Open Graph) | Full-stack developer and former marketing strategist. I build digital products people want to use. | Desenvolvedor fullstack que já foi estrategista de marketing. Eu construo produtos digitais que as pessoas querem usar. |

## Pause menu and settings

| Key | en | pt-BR |
| --- | --- | --- |
| `menu.label` | PAUSE | PAUSE |
| `menu.open` (aria) | Open menu | Abrir menu |
| `menu.close` (aria) | Close menu | Fechar menu |
| `menu.start` | START | INÍCIO |
| `menu.about` | ABOUT | QUEM SOU EU |
| `menu.timeline` | TIMELINE | TIMELINE |
| `menu.skills` | SKILLS | CONHECIMENTOS |
| `menu.projects` | PROJECTS | PROJETOS |
| `menu.partnerships` | PARTNERSHIPS | PARCERIAS |
| `menu.contact` | CONTACT | CONTATO |
| `menu.skipToSummary` | Skip to summary | Pular para o resumo |
| `menu.navLabel` (aria) | Sections | Seções |
| `settings.title` | SETTINGS | CONFIGURAÇÕES |
| `settings.theme.label` | THEME | TEMA |
| `settings.theme.dark` | DARK | ESCURO |
| `settings.theme.light` | LIGHT | CLARO |
| `settings.language.label` | LANGUAGE | IDIOMA |
| `settings.language.en` | EN | EN |
| `settings.language.ptBR` | PT-BR | PT-BR |
| `settings.sound.label` | SOUND | SOM |
| `settings.sound.off` | OFF | DESLIGADO |
| `settings.sound.on` | ON | LIGADO |

## 1. Start (title screen)

| Key | en | pt-BR |
| --- | --- | --- |
| `start.title` | LEANDRO JUNIOR | LEANDRO JUNIOR |
| `start.tagline` (under the logo) | FULL STACK DEVELOPER | DESENVOLVEDOR FULL STACK |
| `start.subtitle` | Full-stack developer and former marketing strategist. I build digital products people want to use. | Desenvolvedor fullstack que já foi estrategista de marketing. Eu construo produtos digitais que as pessoas querem usar. |
| `start.play` | PRESS START | PRESS START |
| `start.contact` | Let's build a project together | Quero fazer um projeto com você |

`start.play` scrolls to the next section. `start.contact` goes to the Partnerships section's contact block. It must be visible on the first screen.

## 2. About (player select)

| Key | en | pt-BR |
| --- | --- | --- |
| `about.title` | PLAYER SELECT | ESCOLHA SEU PERSONAGEM |
| `about.selected` | SELECTED | SELECIONADO |
| `about.player2Slot` | 2P? | 2P? |
| `about.classLabel` | Class | Classe |
| `about.class` | Full-Stack Dev | Dev Fullstack |
| `about.specialtyLabel` | Specialty | Especialidade |
| `about.specialty` | E-commerce and digital products | E-commerce e produtos digitais |
| `about.attributesLabel` | Attributes | Atributos |
| `about.avatarAlt` | Pixel-art portrait of Leandro Junior | Retrato em pixel art de Leandro Junior |

> `about.title` is new UI copy. It is not in the planning doc; confirm or replace it.

**Attributes** (in this order):

| Key | en | pt-BR |
| --- | --- | --- |
| `about.attributes.code` | Code | Código |
| `about.attributes.business` | Business | Negócio |
| `about.attributes.marketing` | Marketing | Marketing |
| `about.attributes.video` | Video | Vídeo |
| `about.attributes.english` | English | Inglês |

> TODO: attribute values. The planning doc lists the attributes but no levels. Show them as a list without numbers until values are set.

**Bio** (`about.bio`)

en:

> I'm a full-stack developer who started out building marketing strategies and editing videos. Today I work on e-commerce projects on platforms like Salesforce and Shopify. In my spare time, I build my own games and apps. That mix makes me comfortable on both sides of a product: building it, and making people want to use it.

pt-BR:

> Sou desenvolvedor fullstack e comecei criando estratégias de marketing e editando vídeos. Hoje trabalho em projetos de e-commerce em plataformas como Salesforce e Shopify. Nas horas vagas, crio meus próprios jogos e apps. Essa mistura me deixa à vontade nos dois lados de um produto: construir e fazer as pessoas quererem usar.

## 3. Timeline (career mode)

| Key | en | pt-BR |
| --- | --- | --- |
| `timeline.title` | CAREER MODE | MODO CARREIRA |
| `timeline.current` (chip on the ongoing stage) | NOW PLAYING | FASE ATUAL |
| `timeline.offline` (badge / alt for the powered-off icon) | Offline | Fora do ar |
| `timeline.present` (end year) | present | hoje |
| `timeline.buildWithMe` (button on the "???" stage) | LET'S BUILD IT | VAMOS CONSTRUIR |

Years are exactly as in the planning doc.

| # | Stage title (en) | Stage title (pt-BR) | Years | Text (en) | Text (pt-BR) |
| --- | --- | --- | --- | --- | --- |
| 1 | Marketing & Video | Marketing e vídeo | 2021–2023 | Freelance marketing strategy and video editing. | Estratégia e edição como freelancer. |
| 2 | Front-end | Front-end | 2023–2024 | Front-end training in the Vai Na Web program (HTML, SASS, React, Vue). | Formação no programa Vai Na Web (HTML, SASS, React, Vue). |
| 3 | College | Faculdade | 2024 | Started a degree in Computer Systems Technology at UFF. | Início de Tecnologia em Sistemas de Computação na UFF. |
| 4 | MercurioChat | MercurioChat | 2024–2025 | A project built with classmates: AI-powered customer service automation on WhatsApp. Currently offline. | Projeto em parceria com colegas, automação de atendimento no WhatsApp com IA. Fora do ar no momento. |
| 5 | Develoci: E-commerce | Develoci: E-commerce | 2025–present | Joined Develoci as a full-stack developer. I build and integrate e-commerce stores on platforms like Salesforce B2B Commerce and Shopify: storefronts, ERP and payment integrations, and the custom logic that keeps B2B operations running smoothly from catalog to checkout. | Entrei na Develoci como desenvolvedor fullstack. Desenvolvo e integro lojas virtuais em plataformas como Salesforce B2B Commerce e Shopify: vitrines, integrações com ERP e meios de pagamento, e a lógica sob medida que mantém operações B2B rodando sem atrito do catálogo ao checkout. |
| 6 | Own Projects | Projetos próprios | 2026 | Alongside client work, I'm also building my own products: Lords of Logic is live, and more are on the way. | Em paralelo ao trabalho com clientes, também construo meus próprios produtos: o Lords of Logic já está no ar e outros estão a caminho. |
| 7 | Next Stage | Próxima fase | — | ??? Build the next world with me. | ??? Construa a próxima fase comigo. |

Notes:

- Stages are labeled `STAGE 1` to `STAGE 6` from their order (`FASE` in pt-BR); the last one shows `???`.
- Stage 4 (MercurioChat) is offline and shows the pixel-art "powered off" icon on its stage (see [ASSETS.md](ASSETS.md)). Its data entry has `status: "offline"`.
- Stage 5 years render as "2025–present" / "2025–hoje" (use `timeline.present`).
- Stage 7 is the invitation to build together. Its text is new copy based on the doc ("'???', with an invitation for the visitor to build together"); confirm the wording. It should link to the Partnerships section.
- Stage 5 names the employer, Develoci (approved by the owner on October 16, 2026). It must not name Develoci's clients, and it no longer mentions working in English.

## 4. Skills (inventory)

| Key | en | pt-BR |
| --- | --- | --- |
| `skills.title` | INVENTORY | INVENTÁRIO |
| `skills.hint` | Hover or tap an item to inspect it. | Passe o mouse ou toque em um item para ver detalhes. |
| `skills.itemsLabel` | items | itens |
| `skills.usageLabel` (item panel heading) | Where I use it | Onde eu uso |

Categories and items, exactly as listed in the planning doc. Product names are not translated.

| Category key | en | pt-BR | Items |
| --- | --- | --- | --- |
| `frontend` | Front-end | Front-end | Next.js, LWC, React, Vue.js, Tailwind CSS, shadcn/ui |
| `backend` | Back-end | Back-end | Apex, SOQL, SQL, MongoDB, Node.js, NestJS, Prisma, PostgreSQL, Supabase |
| `platforms` | Platforms | Plataformas | Salesforce B2B Commerce (Core), Shopify, WordPress & WooCommerce |
| `creative` | Creative & Strategy | Criação e estratégia | Marketing strategy, Video editing |

Items with translated names:

| Item | en | pt-BR |
| --- | --- | --- |
| `wordpress-woocommerce` | WordPress & WooCommerce | WordPress e WooCommerce |
| `marketing-strategy` | Marketing strategy | Estratégia de marketing |
| `video-editing` | Video editing | Edição de vídeo |

No percentage bars. RPG levels per category are optional:

> TODO: category levels. None are given in the planning doc. Until they are, show only the items.

**Usage text ("where I use it", shown in the item panel)**

Placeholder drafts, written to be replaced later in his own voice. They only build on facts from the planning doc (Lords of Logic, Vai Na Web, the e-commerce work, MercurioChat, freelance marketing) and stay generic otherwise.

| Item | en | pt-BR |
| --- | --- | --- |
| Next.js | My go-to framework. Lords of Logic is built with it. | Meu framework principal. O Lords of Logic é feito com ele. |
| LWC | Storefront components in Salesforce B2B Commerce projects. | Componentes de loja em projetos Salesforce B2B Commerce. |
| React | Learned in Vai Na Web; the base for everything I build with Next.js. | Aprendi no Vai Na Web; é a base de tudo que faço com Next.js. |
| Vue.js | Learned in Vai Na Web, building front-end projects. | Aprendi no Vai Na Web, em projetos de front-end. |
| Tailwind CSS | Styling for my own projects, including this site. | Estilo dos meus projetos, incluindo este site. |
| shadcn/ui | Accessible UI building blocks for my own projects. | Componentes de interface acessíveis nos meus projetos. |
| Apex | Back-end logic and integrations in Salesforce B2B Commerce. | Lógica de back-end e integrações no Salesforce B2B Commerce. |
| SOQL | Querying store and order data in Salesforce. | Consultas de dados de loja e pedidos no Salesforce. |
| SQL | Modeling and querying relational data. | Modelagem e consulta de dados relacionais. |
| MongoDB | Document storage for APIs and side projects. | Armazenamento de documentos em APIs e projetos paralelos. |
| Node.js | APIs, scripts and integrations. | APIs, scripts e integrações. |
| NestJS | Structured back-end APIs. | APIs de back-end bem estruturadas. |
| Prisma | Type-safe database access in Node.js projects. | Acesso a banco de dados com tipos em projetos Node.js. |
| PostgreSQL | Relational database for my own products. | Banco de dados relacional dos meus produtos. |
| Supabase | Database and Google and Discord sign-in for Lords of Logic. | Banco de dados e login com Google e Discord no Lords of Logic. |
| Salesforce B2B Commerce (Core) | B2B stores with ERP and payment integrations at Develoci. | Lojas B2B com integrações de ERP e pagamentos na Develoci. |
| Shopify | Store builds and integrations at Develoci. | Lojas e integrações na Develoci. |
| WordPress & WooCommerce | E-commerce implementations with ERP and payment integrations. | Implementações de e-commerce com integrações de ERP e pagamentos. |
| Marketing strategy | Freelance strategy work, 2021–2023. Still shapes how I launch products. | Estratégia como freelancer, 2021–2023. Ainda guia como lanço produtos. |
| Video editing | Freelance video editing, 2021–2023. | Edição de vídeo como freelancer, 2021–2023. |

Skill icons are decorative (`aria-hidden="true"`) because the item name is shown as HTML text under it.

## 5. Projects (cartridge select)

| Key | en | pt-BR |
| --- | --- | --- |
| `projects.title` | SELECT A CARTRIDGE | ESCOLHA UM CARTUCHO |
| `projects.genreLabel` | Genre | Gênero |
| `projects.builtWithLabel` | Built with | Feito com |
| `projects.opensInNewTab` (screen readers) | (opens in a new tab) | (abre em uma nova aba) |

> `projects.title` is new UI copy; confirm or replace it.

### Cartridge: Lords of Logic

| Key | en | pt-BR |
| --- | --- | --- |
| `name` | Lords of Logic | Lords of Logic |
| `url` | https://lords-of-logic.vercel.app/ | — |
| `genre` | Trivia for developers | Trivia para desenvolvedores |
| `description` | Quick 3-to-7-minute matches on the web stack, platforms and best practices, with a leaderboard and an XP system. | Partidas rápidas de 3 a 7 minutos sobre stack web, plataformas e boas práticas, com ranking e sistema de XP. |
| `builtWith` | Next.js, Supabase, Google and Discord sign-in | Next.js, Supabase, login com Google e Discord |
| `cta.play` | PLAY NOW | JOGAR AGORA |
| `cta.behindTheScenes` | BEHIND THE SCENES | BASTIDORES |
| `behindTheScenes` (one paragraph) | TODO (optional) | TODO (opcional) |

- "Play now" opens the game in a new tab.
- "Behind the scenes" is optional. Hide the button until the paragraph exists.
- The cartridge uses Lords of Logic's own terminal look, not the portfolio palette.

### Cartridge: coming soon

| Key | en | pt-BR |
| --- | --- | --- |
| `name` | ??? | ??? |
| `label` | COMING SOON | EM BREVE |
| `description` | A new cartridge is being built. | Um novo cartucho está em produção. |

> The description is new copy; confirm or replace it. The planning doc only says "coming soon". The slot is reserved for upcoming products, including the Amigo Secreto project.

## 6. Partnerships ("PLAYER 2")

| Key | en | pt-BR |
| --- | --- | --- |
| `partnerships.title` | PLAYER 2, PRESS START | PLAYER 2, PRESS START |
| `partnerships.player1` | 1P · LEANDRO | 1P · LEANDRO |
| `partnerships.player2` | 2P · YOU | 2P · VOCÊ |
| `partnerships.joinIn` | PRESS START TO JOIN | APERTE START PARA ENTRAR |
| `partnerships.coopResult` | CO-OP MODE | MODO COOPERATIVO |
| `partnerships.round` (step label) | ROUND | ROUND |
| `partnerships.howItWorksTitle` | HOW IT WORKS | COMO FUNCIONA |
| `partnerships.contactTitle` | CONTACT | CONTATO |

**Pitch.** The co-op screen splits it into `coop.player1`, `coop.player2` and `coop.result` (one sentence each). The full text:

en:

> You have an audience, or you know a problem inside out. I bring the tech and the product side. Together, we turn it into an app, a SaaS or a game.

pt-BR:

> Você tem uma audiência ou conhece bem um problema. Eu tenho a parte técnica e a de produto. Juntos, transformamos isso em um app, SaaS ou jogo.

**How it works**

| Step | en | pt-BR |
| --- | --- | --- |
| 1 | You tell me the idea, or the problem your audience has. | Você me conta a ideia ou o problema do seu público. |
| 2 | We decide together whether it's worth turning into a product. | Avaliamos juntos se vale virar produto. |
| 3 | I build it and run it. You spread the word. | Eu construo e opero. Você divulga. |
| 4 | We share the results. | Dividimos o resultado. |

How the results are split (revenue, equity, fixed fee plus percentage) is **not** shown on the site. It is handled in conversation.

## Contact

| Key | en | pt-BR |
| --- | --- | --- |
| `contact.email` | nascimentoleandrojr@gmail.com | — |
| `contact.emailLabel` | Email me | Mande um e-mail |
| `contact.linkedin` | https://www.linkedin.com/in/leandro-jr23 | — |
| `contact.linkedinLabel` | LinkedIn | LinkedIn |
| `contact.github` | TODO: the repository URL, which the owner will send | — |
| `contact.githubLabel` | GitHub | GitHub |

Contact in version 1 is `mailto:` only (no form). A contact form is in the version 2 backlog.

## 7. Footer (credits)

| Key | en | pt-BR |
| --- | --- | --- |
| `footer.thanks` | THANK YOU FOR PLAYING | OBRIGADO POR JOGAR |
| `footer.title` | CREDITS | CRÉDITOS |
| `footer.continue` (link back to the title screen) | CONTINUE? | CONTINUAR? |
| `footer.madeBy` | Made by Leandro Junior | Feito por Leandro Junior |

Links: GitHub (TODO, hidden until set), LinkedIn, email.

| Key | en | pt-BR |
| --- | --- | --- |
| `footer.credits.icons` | Icons: pixelarticons by Gerrit Halfmann (MIT) | Ícones: pixelarticons de Gerrit Halfmann (MIT) |
| `footer.credits.fonts` | Fonts: Jersey 10 and Pixelify Sans (SIL OFL) | Fontes: Jersey 10 e Pixelify Sans (SIL OFL) |

## Open Graph

| Key | en | pt-BR |
| --- | --- | --- |
| `og.title` | Leandro Junior — Full-Stack Developer | Leandro Junior — Desenvolvedor Fullstack |
| `og.description` | Same as `site.description` | Igual a `site.description` |
| `og.imageAlt` | Leandro Junior's arcade portfolio title screen | Tela de título do portfólio arcade de Leandro Junior |
| `og.url` | Resolved at build from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` (used as Next.js `metadataBase`); falls back to `http://localhost:3000` locally | — |
