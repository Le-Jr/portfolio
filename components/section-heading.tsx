type SectionHeadingProps = {
  id: string;
  children: string;
};

/** Pixel-font section title. Focusable by script so the pause menu can move focus here. */
export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      tabIndex={-1}
      className="mb-8 font-pixel text-display-m text-primary md:text-display-l"
    >
      {children}
    </h2>
  );
}
