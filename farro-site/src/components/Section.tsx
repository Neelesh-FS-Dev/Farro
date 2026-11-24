import type { ReactNode } from "react";

type Props = {
  /** Optional two-digit index shown in the rail, e.g. "01". */
  no?: string;
  /** Rail label, e.g. "Culinary philosophy". */
  label: string;
  tone?: "light" | "paper" | "dark" | "green";
  /** id of the heading inside this section, for the accessible name. */
  labelledBy?: string;
  id?: string;
  children: ReactNode;
};

/**
 * The one layout every content section uses: a label rail in columns 1-3 and the
 * body in columns 4-12. Keeping every section on this structure is what makes the
 * page read as one composition.
 */
export function Section({ no, label, tone = "light", labelledBy, id, children }: Props) {
  const toneClass = tone === "light" ? "" : ` section--${tone}`;
  return (
    <section id={id} className={`section${toneClass}`} aria-labelledby={labelledBy}>
      <div className="wrap">
        <div className="grid12 section__inner">
          <div className="rail">
            {no && <span className="rail__no">{no}</span>}
            <span className="rail__label">{label}</span>
          </div>
          <div className="section__body">{children}</div>
        </div>
      </div>
    </section>
  );
}
