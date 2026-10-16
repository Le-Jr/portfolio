import { about } from "@/content/about";
import { partnerships } from "@/content/partnerships";
import { projects } from "@/content/projects";
import { contact, start } from "@/content/site";
import { skillCategories } from "@/content/skills";
import { timeline } from "@/content/timeline";
import type { Locale } from "@/lib/i18n";
import { getUiStrings } from "@/locales";
import { Avatar } from "./avatar";
import { Cartridge } from "./cartridge";
import { Inventory } from "./inventory";
import { PauseMenu } from "./pause-menu";
import { PixelIcon } from "./pixel-icon";
import { SectionHeading } from "./section-heading";
import { TrackedLink } from "./tracked-link";
import { WorldMap } from "./world-map";

const sectionClass = "screen mx-auto w-full max-w-5xl px-4 py-20 md:px-8 md:py-28";

/** The whole single-page site for one locale. */
export function SitePage({ locale }: { locale: Locale }) {
  const t = getUiStrings(locale);

  const menuSections = [
    { id: "start", label: t.menu.start },
    { id: "about", label: t.menu.about },
    { id: "timeline", label: t.menu.timeline },
    { id: "skills", label: t.menu.skills },
    { id: "projects", label: t.menu.projects },
    { id: "partnerships", label: t.menu.partnerships },
    { id: "contact", label: t.menu.contact },
  ];

  return (
    <>
      <a
        href="#about"
        className="sr-only z-50 bg-primary p-3 text-on-primary focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.skipToSummary}
      </a>

      <PauseMenu locale={locale} sections={menuSections} strings={t} />

      <main>
        {/* 1. Start: title screen */}
        <section
          id="start"
          aria-labelledby="start-title"
          className="flex min-h-dvh flex-col items-center justify-center gap-8 px-4 py-24 text-center"
        >
          <h1
            id="start-title"
            tabIndex={-1}
            className="font-pixel text-display-l text-primary sm:text-[32px] md:text-display-xl"
          >
            {start.title}
          </h1>
          <p className="max-w-2xl text-body-l">{start.subtitle[locale]}</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <TrackedLink
              href="#about"
              event={{ name: "start_click" }}
              className="press-start pixel-button pixel-button-primary"
            >
              {start.play[locale]}
            </TrackedLink>
            <TrackedLink
              href="#contact"
              event={{ name: "contact_click", channel: "hero" }}
              className="pixel-button pixel-button-secondary font-body! text-body! normal-case!"
            >
              <PixelIcon name="mail" />
              {start.contact[locale]}
            </TrackedLink>
          </div>
        </section>

        {/* 2. About: character select */}
        <section id="about" aria-labelledby="about-title" className={sectionClass}>
          <SectionHeading id="about-title">{t.about.title}</SectionHeading>
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="mx-auto flex shrink-0 items-center justify-center border-4 border-border bg-slate p-4 md:mx-0">
              <Avatar label={t.about.avatarAlt} />
            </div>
            <div className="dialog-box flex-1">
              <p className="font-pixel text-display-m text-primary">{start.title}</p>
              <dl className="mt-4 grid gap-2 text-body">
                <div>
                  <dt className="inline text-muted">{t.about.classLabel}: </dt>
                  <dd className="inline">{about.class[locale]}</dd>
                </div>
                <div>
                  <dt className="inline text-muted">{t.about.specialtyLabel}: </dt>
                  <dd className="inline">{about.specialty[locale]}</dd>
                </div>
                <div>
                  <dt className="text-muted">{t.about.attributesLabel}:</dt>
                  <dd>
                    <ul className="mt-1 flex flex-wrap gap-2">
                      {about.attributes.map((attribute) => (
                        <li
                          key={attribute.id}
                          className="border-2 border-border-inner px-2 py-1 font-pixel text-display-m"
                        >
                          {attribute.label[locale]}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-body">{about.bio[locale]}</p>
            </div>
          </div>
        </section>

        {/* 3. Timeline: world map */}
        <section id="timeline" aria-labelledby="timeline-title" className={sectionClass}>
          <SectionHeading id="timeline-title">{t.timeline.title}</SectionHeading>
          <WorldMap locale={locale} stages={timeline} strings={t.timeline} />
        </section>

        {/* 4. Skills: inventory */}
        <section id="skills" aria-labelledby="skills-title" className={sectionClass}>
          <SectionHeading id="skills-title">{t.skills.title}</SectionHeading>
          <Inventory locale={locale} categories={skillCategories} strings={t.skills} />
        </section>

        {/* 5. Projects: cartridge select */}
        <section id="projects" aria-labelledby="projects-title" className={sectionClass}>
          <SectionHeading id="projects-title">{t.projects.title}</SectionHeading>
          <ul className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.id} className="flex">
                <div className="flex-1">
                  <Cartridge project={project} locale={locale} strings={t.projects} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Partnerships: PLAYER 2, PRESS START */}
        <section id="partnerships" aria-labelledby="partnerships-title" className={sectionClass}>
          <SectionHeading id="partnerships-title">{t.partnerships.title}</SectionHeading>
          <div className="dialog-box">
            <p className="text-body-l">{partnerships.pitch[locale]}</p>
          </div>

          <h3 className="mt-12 mb-4 font-pixel text-display-m text-special">
            {t.partnerships.howItWorksTitle}
          </h3>
          <ol className="grid gap-4 md:grid-cols-2">
            {partnerships.steps.map((step, index) => (
              <li key={step.en} className="flex items-start gap-4 border-4 border-border-inner p-4">
                <span className="font-pixel text-display-m text-special">{index + 1}</span>
                <span className="text-body">{step[locale]}</span>
              </li>
            ))}
          </ol>

          <div id="contact" className="screen mt-12">
            <h3 tabIndex={-1} className="mb-4 font-pixel text-display-m text-special">
              {t.partnerships.contactTitle}
            </h3>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <TrackedLink
                href={`mailto:${contact.email}`}
                event={{ name: "contact_click", channel: "email" }}
                className="pixel-button pixel-button-primary"
              >
                <PixelIcon name="mail" />
                {t.contact.emailLabel}
              </TrackedLink>
              <TrackedLink
                href={contact.linkedin}
                target="_blank"
                rel="noopener"
                event={{ name: "contact_click", channel: "linkedin" }}
                className="pixel-button pixel-button-secondary"
              >
                {t.contact.linkedinLabel}
                <PixelIcon name="external-link" />
                <span className="sr-only">{t.projects.opensInNewTab}</span>
              </TrackedLink>
            </div>
            <p className="mt-4 text-body-s text-muted">{contact.email}</p>
          </div>
        </section>
      </main>

      {/* 7. Footer: credits */}
      <footer aria-labelledby="credits-title" className="border-t-4 border-border-inner">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-16 text-center">
          <h2 id="credits-title" className="font-pixel text-display-m text-primary">
            {t.footer.title}
          </h2>
          <p className="text-body">{t.footer.madeBy}</p>
          <ul className="flex flex-wrap justify-center gap-6 text-body">
            {contact.github ? (
              <li>
                <a href={contact.github} target="_blank" rel="noopener">
                  {t.contact.githubLabel}
                </a>
              </li>
            ) : null}
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener">
                {t.contact.linkedinLabel}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
          <p className="text-body-s text-muted">{t.footer.creditsIcons}</p>
          <p className="text-body-s text-muted">{t.footer.creditsFonts}</p>
        </div>
      </footer>
    </>
  );
}
