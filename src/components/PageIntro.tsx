import type { ReactNode } from "react";

type Props = {
  label: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

/** Title block for inner pages, placed on the same rail and body grid as the sections. */
export function PageIntro({ label, title, lead, children }: Props) {
  return (
    <header className="intro">
      <div className="wrap">
        <div className="grid12 section__inner">
          <div className="rail">
            <span className="rail__label">{label}</span>
          </div>
          <div className="section__body">
            <div className="intro__title">
              <h1>{title}</h1>
              {lead && <p className="lead">{lead}</p>}
            </div>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
