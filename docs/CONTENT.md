# Site copy

Every user-facing string, in English (default) and Brazilian Portuguese. The English strings are translated from the Portuguese drafts in [PLANNING.md](PLANNING.md). The pt-BR strings are those drafts, with only light edits where UI labels were missing.

The drafts are meant to be adjusted to Leandro's voice. When a string changes in code, update this file in the same change.

Conventions:

- `TODO` means the data is missing. Do not invent it. Hide the element until it exists.
- Strings in CAPS are shown in the pixel font (titles, buttons). Keep them short.

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
| `start.subtitle` | Full-stack developer and former marketing strategist. I build digital products people want to use. | Desenvolvedor fullstack que já foi estrategista de marketing. Eu construo produtos digitais que as pessoas querem usar. |
| `start.play` | PRESS START | PRESS START |
| `start.contact` | Let's build a project together | Quero fazer um projeto com você |

`start.play` scrolls to the next section. `start.contact` goes to the Partnerships section's contact block. It must be visible on the first screen.

## 2. About (character select)

| Key | en | pt-BR |
| --- | --- | --- |
| `about.title` | CHOOSE YOUR PLAYER | ESCOLHA SEU PERSONAGEM |
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

## 3. Timeline (world map)

| Key | en | pt-BR |
| --- | --- | --- |
| `timeline.title` | WORLD MAP | MAPA DE MUNDO |
| `timeline.offline` (badge / alt for the powered-off icon) | Offline | Fora do ar |
| `timeline.present` (end year) | present | hoje |
| `timeline.buildWithMe` (button on the "???" stage) | LET'S BUILD IT | VAMOS CONSTRUIR |

Years are exactly as in the planning doc.

| # | Stage title (en) | Stage title (pt-BR) | Years | Text (en) | Text (pt-BR) |
| --- | --- | --- | --- | --- | --- |
| 1 | World 1: Marketing & Video | Mundo 1: Marketing e vídeo | 2021–2023 | Freelance marketing strategy and video editing. | Estratégia e edição como freelancer. |
| 2 | World 2: Front-end | Mundo 2: Front-end | 2023–2024 | Front-end training in the Vai Na Web program (HTML, SASS, React, Vue). | Formação no programa Vai Na Web (HTML, SASS, React, Vue). |
| 3 | World 3: College | Mundo 3: Faculdade | 2024 | Started a degree in Computer Systems Technology at UFF. | Início de Tecnologia em Sistemas de Computação na UFF. |
| 4 | World 4: MercurioChat | Mundo 4: MercurioChat | 2024–2025 | A project built with classmates: AI-powered customer service automation on WhatsApp. Currently offline. | Projeto em parceria com colegas, automação de atendimento no WhatsApp com IA. Fora do ar no momento. |
| 5 | World 5: B2B E-commerce | Mundo 5: E-commerce B2B | 2025–present | Implementations on Salesforce B2B Commerce, Shopify and WooCommerce, with ERP and payment integrations, on teams that work in English. | Implementações em Salesforce B2B Commerce, Shopify e WooCommerce, com integrações de ERP e pagamentos, em equipes que trabalham em inglês. |
| 6 | World 6: Own Projects | Mundo 6: Projetos próprios | 2026 | Lords of Logic and the launches that come next. | Lords of Logic e os próximos lançamentos. |
| 7 | Next Stage | Próxima fase | — | ??? Build the next world with me. | ??? Construa a próxima fase comigo. |

Notes:

- World 4 (MercurioChat) is offline and shows the pixel-art "powered off" icon on its stage (see [ASSETS.md](ASSETS.md)). Its data entry has `status: "offline"`.
- World 5 years render as "2025–present" / "2025–hoje" (use `timeline.present`).
- World 7 is the invitation to build together. Its text is new copy based on the doc ("'???', with an invitation for the visitor to build together"); confirm the wording. It should link to the Partnerships section.
- World 5 must not name clients.

## 4. Skills (inventory)

| Key | en | pt-BR |
| --- | --- | --- |
| `skills.title` | INVENTORY | INVENTÁRIO |
| `skills.usageLabel` (tooltip heading) | Where I use it | Onde eu uso |

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

**Usage tooltips ("where I use it")**

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
| Salesforce B2B Commerce (Core) | B2B store implementations with ERP and payment integrations. | Implementações de lojas B2B com integrações de ERP e pagamentos. |
| Shopify | E-commerce implementations for teams that work in English. | Implementações de e-commerce em equipes que trabalham em inglês. |
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
| `partnerships.howItWorksTitle` | HOW IT WORKS | COMO FUNCIONA |
| `partnerships.contactTitle` | CONTACT | CONTATO |

**Pitch** (`partnerships.pitch`)

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
| `footer.title` | CREDITS | CRÉDITOS |
| `footer.madeBy` | Made by Leandro Junior | Feito por Leandro Junior |

Links: GitHub (TODO, hidden until set), LinkedIn, email.

| Key | en | pt-BR |
| --- | --- | --- |
| `footer.credits.icons` | Icons: pixelarticons by Gerrit Halfmann (MIT) | Ícones: pixelarticons de Gerrit Halfmann (MIT) |
| `footer.credits.fonts` | Fonts: Press Start 2P and VT323 (SIL OFL) | Fontes: Press Start 2P e VT323 (SIL OFL) |

## Open Graph

| Key | en | pt-BR |
| --- | --- | --- |
| `og.title` | Leandro Junior — Full-Stack Developer | Leandro Junior — Desenvolvedor Fullstack |
| `og.description` | Same as `site.description` | Igual a `site.description` |
| `og.imageAlt` | Leandro Junior's 16-bit portfolio title screen | Tela de título do portfólio 16 bits de Leandro Junior |
| `og.url` | Resolved at build from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` (used as Next.js `metadataBase`); falls back to `http://localhost:3000` locally | — |
