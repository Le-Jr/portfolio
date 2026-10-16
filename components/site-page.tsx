import type { CSSProperties } from "react";
import { about } from "@/content/about";
import { partnerships } from "@/content/partnerships";
import { projects } from "@/content/projects";
import { contact, start } from "@/content/site";
import { skillCategories } from "@/content/skills";
import { timeline } from "@/content/timeline";
import type { Locale } from "@/lib/i18n";
import { getUiStrings, type UiStrings } from "@/locales";
import { Avatar } from "./avatar";
import { BootScreen } from "./boot-screen";
import { CareerTimeline } from "./career-timeline";
import { Cartridge } from "./cartridge";
import { DevScene } from "./dev-scene";
import { Hud } from "./hud";
import { Inventory } from "./inventory";
import { PixelIcon } from "./pixel-icon";
import { Reveal } from "./reveal";
import { Skyline } from "./skyline";
import { TrackedLink } from "./tracked-link";

const sectionClass = "relative mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-24 md:px-8 md:py-32";

/** Section banner: a small "STAGE 0X" chip over a big arcade title. */
function SectionTitle({
  id,
  stage,
  label,
  children,
}: {
  id: string;
  stage: number;
  label: string;
  children: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-3 flex items-center gap-3 font-ui text-label font-bold tracking-[0.25em] text-link">
        <span aria-hidden="true" className="h-[3px] w-10 bg-current" />
        {label} {String(stage).padStart(2, "0")}
      </p>
      <h2
        id={id}
        tabIndex={-1}
        className="arcade-text section-title text-[48px] leading-[0.9] md:text-[80px]"
      >
        {children}
      </h2>
    </div>
  );
}

/** The whole single-page site for one locale. */
export function SitePage({ locale }: { locale: Locale }) {
  const t: UiStrings = getUiStrings(locale);

  const menuSections = [
    { id: "start", label: t.menu.start },
    { id: "about", label: t.menu.about },
    { id: "timeline", label: t.menu.timeline },
    { id: "skills", label: t.menu.skills },
    { id: "projects", label: t.menu.projects },
    { id: "partnerships", label: t.menu.partnerships },
  ];
  const menuItems = [...menuSections, { id: "contact", label: t.menu.contact }];

  return (
    <>
      <a
        href="#about"
        className="sr-only z-[60] bg-primary p-3 text-on-primary focus:not-sr-only focus:fixed focus:top-20 focus:left-4"
      >
        {t.skipToSummary}
      </a>

      <BootScreen strings={t.boot} title={start.title} tagline={start.tagline[locale]} />
      <Hud locale={locale} stages={menuSections} menuItems={menuItems} strings={t} />

      <main>
        {/* 1. Start: arcade title screen (always a dark "screen", in both themes) */}
        <section
          id="start"
          aria-labelledby="start-title"
          className="relative isolate flex min-h-dvh items-end overflow-hidden bg-void pt-24 text-parchment md:items-center"
        >
          <Skyline />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-6 px-4 pb-10 md:grid-cols-[1.1fr_1fr] md:gap-10 md:px-8 md:pb-0">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className="mb-4 font-ui text-label font-bold tracking-[0.3em] text-coral">
                <span className="blink">{t.start.insertCoin}</span>
              </p>
              <h1 id="start-title" tabIndex={-1} className="logo-in">
                <span className="arcade-text block text-logo md:text-logo-l">LEANDRO</span>
                <span className="arcade-text arcade-text-cool block text-logo md:text-logo-l">
                  JUNIOR
                </span>
              </h1>
              <p className="mt-5 inline-block border-y-3 border-sky px-3 py-1 font-ui text-[15px] font-bold tracking-[0.35em] text-sky md:text-[18px]">
                {start.tagline[locale]}
              </p>
              <p className="mt-6 max-w-xl border-l-4 border-amber bg-void/80 px-4 py-3 text-body-l text-parchment">
                {start.subtitle[locale]}
              </p>
              <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row">
                <TrackedLink
                  href="#about"
                  event={{ name: "start_click" }}
                  className="press-start arcade-button arcade-button-primary whitespace-nowrap text-[20px]"
                >
                  <PixelIcon name="forward" />
                  {start.play[locale]}
                </TrackedLink>
                <TrackedLink
                  href="#contact"
                  event={{ name: "contact_click", channel: "hero" }}
                  className="arcade-button arcade-button-secondary"
                >
                  <PixelIcon name="mail" />
                  {start.contact[locale]}
                </TrackedLink>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div
                aria-hidden="true"
                className="absolute bottom-6 h-24 w-[80%] bg-sky opacity-20 blur-2xl"
              />
              <DevScene className="relative h-[192px] w-[288px] sm:h-[256px] sm:w-[384px] lg:h-[320px] lg:w-[480px]" />
            </div>
          </div>
        </section>

        {/* 2. About: player select */}
        <section id="about" aria-labelledby="about-title" className={sectionClass}>
          <SectionTitle id="about-title" stage={2} label={t.stageLabel}>
            {t.about.title}
          </SectionTitle>
          <Reveal className="grid gap-8 lg:grid-cols-[auto_1fr]">
            <div className="flex flex-col items-center gap-4">
              <div className="panel panel-glow flex flex-col items-center p-4!" style={{ "--glow": "var(--primary)" } as CSSProperties}>
                <span className="chip mb-3 text-primary">{t.about.selected}</span>
                <div className="relative border-3 border-border bg-[linear-gradient(180deg,var(--umber)_0_50%,var(--clay)_50%_68%,var(--rust)_68%_82%,var(--orange)_82%)]">
                  <Avatar label={t.about.avatarAlt} scale={7} />
                  <div className="scanlines" />
                </div>
                <p className="mt-3 font-display text-title leading-none">{start.title}</p>
              </div>
              {/* Character grid: Leandro picked, the other slots wait for player 2. */}
              <ul className="grid grid-cols-4 gap-2" aria-hidden="true">
                <li className="flex size-14 items-center justify-center overflow-hidden border-3 border-primary bg-umber">
                  <Avatar label="" scale={1} />
                </li>
                {[0, 1, 2].map((slot) => (
                  <li
                    key={slot}
                    className="flex size-14 items-center justify-center border-3 border-border bg-surface-raised font-display text-title-s text-muted"
                  >
                    {slot === 0 ? t.about.player2Slot : "?"}
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-label font-bold tracking-wider text-muted uppercase">
                    {t.about.classLabel}
                  </dt>
                  <dd className="font-display text-title leading-none text-primary">
                    {about.class[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="text-label font-bold tracking-wider text-muted uppercase">
                    {t.about.specialtyLabel}
                  </dt>
                  <dd className="font-display text-title-s leading-tight text-link">
                    {about.specialty[locale]}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="mb-2 text-label font-bold tracking-wider text-muted uppercase">
                    {t.about.attributesLabel}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {about.attributes.map((attribute, index) => (
                        <li
                          key={attribute.id}
                          className="chip px-3 py-1 text-[15px]"
                          style={{ color: ["var(--link)", "var(--primary)", "var(--special)", "var(--success)", "var(--danger)"][index % 5] }}
                        >
                          {attribute.label[locale]}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 border-t-3 border-dashed border-muted pt-6 text-body">
                {about.bio[locale]}
              </p>
            </div>
          </Reveal>
        </section>

        {/* 3. Timeline: career mode, one stage after another */}
        <section id="timeline" aria-labelledby="timeline-title" className={sectionClass}>
          <SectionTitle id="timeline-title" stage={3} label={t.stageLabel}>
            {t.timeline.title}
          </SectionTitle>
          <CareerTimeline locale={locale} stages={timeline} strings={t} />
        </section>

        {/* 4. Skills: inventory */}
        <section id="skills" aria-labelledby="skills-title" className={sectionClass}>
          <SectionTitle id="skills-title" stage={4} label={t.stageLabel}>
            {t.skills.title}
          </SectionTitle>
          <Inventory locale={locale} categories={skillCategories} strings={t.skills} />
        </section>

        {/* 5. Projects: cartridge select */}
        <section id="projects" aria-labelledby="projects-title" className={sectionClass}>
          <SectionTitle id="projects-title" stage={5} label={t.stageLabel}>
            {t.projects.title}
          </SectionTitle>
          <ul className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.id}>
                <Reveal className="h-full">
                  <Cartridge project={project} locale={locale} strings={t.projects} />
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Partnerships: PLAYER 2, PRESS START (co-op screen) */}
        <section id="partnerships" aria-labelledby="partnerships-title" className={sectionClass}>
          <SectionTitle id="partnerships-title" stage={6} label={t.stageLabel}>
            {t.partnerships.title}
          </SectionTitle>

          <Reveal className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
            <div className="panel panel-glow" style={{ "--glow": "var(--link)" } as CSSProperties}>
              <span className="chip mb-3 text-link">{t.partnerships.player1}</span>
              <p className="text-body-l">{partnerships.coop.player1[locale]}</p>
            </div>
            <div
              aria-hidden="true"
              className="flex items-center justify-center font-display text-[64px] leading-none text-primary"
            >
              +
            </div>
            <div className="panel panel-glow" style={{ "--glow": "var(--special)" } as CSSProperties}>
              <span className="chip mb-3 text-special">{t.partnerships.player2}</span>
              <p className="text-body-l">{partnerships.coop.player2[locale]}</p>
              <p className="mt-3 font-ui text-label font-bold tracking-[0.2em] text-special">
                <span className="blink">{t.partnerships.joinIn}</span>
              </p>
            </div>
          </Reveal>
          <p className="mt-8 text-center">
            <span className="chip mb-3 text-primary">{t.partnerships.coopResult}</span>
            <span className="block font-display text-title leading-tight md:text-title-l">
              {partnerships.coop.result[locale]}
            </span>
          </p>

          <h3 className="mt-16 mb-6 font-display text-title leading-none text-special uppercase">
            {t.partnerships.howItWorksTitle}
          </h3>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {partnerships.steps.map((step, index) => (
              <li key={step.en}>
                <Reveal className="panel h-full">
                  <p className="font-ui text-label font-bold tracking-[0.2em] text-muted">
                    {t.partnerships.round}
                  </p>
                  <p className="arcade-text section-title text-[56px] leading-none">{index + 1}</p>
                  <p className="mt-2 text-body">{step[locale]}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <div id="contact" className="mt-16 scroll-mt-24">
            <div className="panel panel-glow flex flex-col items-center gap-6 text-center" style={{ "--glow": "var(--primary)" } as CSSProperties}>
              <h3 tabIndex={-1} className="arcade-text section-title text-title-l leading-none">
                {t.partnerships.contactTitle}
              </h3>
              <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-center">
                <TrackedLink
                  href={`mailto:${contact.email}`}
                  event={{ name: "contact_click", channel: "email" }}
                  className="arcade-button arcade-button-primary"
                >
                  <PixelIcon name="mail" />
                  {t.contact.emailLabel}
                </TrackedLink>
                <TrackedLink
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener"
                  event={{ name: "contact_click", channel: "linkedin" }}
                  className="arcade-button arcade-button-secondary"
                >
                  {t.contact.linkedinLabel}
                  <PixelIcon name="external-link" />
                  <span className="sr-only">{t.projects.opensInNewTab}</span>
                </TrackedLink>
              </div>
              <p className="text-body-s text-muted">{contact.email}</p>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer: credits */}
      <footer aria-labelledby="credits-title" className="relative overflow-hidden bg-void text-parchment">
        <div className="scanlines" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 py-20 text-center">
          <p className="font-ui text-label font-bold tracking-[0.3em] text-coral">
            {t.footer.thanks}
          </p>
          <h2 id="credits-title" className="arcade-text text-title-l leading-none">
            {t.footer.title}
          </h2>
          <p className="text-body">{t.footer.madeBy}</p>
          <ul className="flex flex-wrap justify-center gap-6 text-body">
            {contact.github ? (
              <li>
                <a href={contact.github} target="_blank" rel="noopener" className="text-sky">
                  {t.contact.githubLabel}
                </a>
              </li>
            ) : null}
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener" className="text-sky">
                {t.contact.linkedinLabel}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="text-sky">
                {contact.email}
              </a>
            </li>
          </ul>
          <p className="text-body-s text-khaki">{t.footer.creditsIcons}</p>
          <p className="text-body-s text-khaki">{t.footer.creditsFonts}</p>
          <a href="#start" className="mt-4 font-ui text-label font-bold tracking-[0.3em] text-amber no-underline">
            <span className="blink">{t.footer.continue}</span>
          </a>
        </div>
      </footer>
    </>
  );
}
