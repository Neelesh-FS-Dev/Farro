import { cloneElement, useId, useState, type FormEvent, type ReactElement } from "react";
import { site } from "../content/farro";

type Fields = { name: string; date: string; time: string; guests: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", date: "", time: "", guests: "2", message: "" };

function validate(f: Fields, today: string): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please add a name for the booking.";
  if (!f.date) e.date = "Choose a preferred date.";
  else if (f.date < today) e.date = "Choose today or a later date.";
  if (!f.time) e.time = "Choose a preferred time.";
  const g = Number(f.guests);
  if (!Number.isInteger(g) || g < 1 || g > 20) e.guests = "Enter between 1 and 20 guests.";
  return e;
}

/** Builds the enquiry text. It is a request, not a confirmed booking. */
function buildEnquiry(f: Fields): string {
  const lines = [
    "Hello Farro, I would like to enquire about a table.",
    `Name: ${f.name.trim()}`,
    `Preferred date: ${f.date}`,
    `Preferred time: ${f.time}`,
    `Guests: ${f.guests}`,
  ];
  if (f.message.trim()) lines.push(`Note: ${f.message.trim()}`);
  lines.push("(Sent from the Farro concept site. Please confirm availability.)");
  return lines.join("\n");
}

export function ReservationForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");
  const [draft, setDraft] = useState("");
  const [today] = useState(() => new Date().toISOString().slice(0, 10));
  const id = useId();

  const set = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(fields, today);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(`${id}-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    const text = buildEnquiry(fields);
    setDraft(text);
    // Open first, while the click still counts as user activation, so popup blockers allow it.
    window.open(site.whatsapp, "_blank", "noopener,noreferrer");
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
  }

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate aria-describedby={`${id}-note`}>
      <div className="enquiry__row">
        <Field id={`${id}-name`} label="Name" error={errors.name}>
          <input id={`${id}-name`} autoComplete="name" value={fields.name} onChange={set("name")} />
        </Field>
        <Field id={`${id}-guests`} label="Guests" error={errors.guests}>
          <input
            id={`${id}-guests`}
            type="number"
            min={1}
            max={20}
            inputMode="numeric"
            value={fields.guests}
            onChange={set("guests")}
          />
        </Field>
      </div>
      <div className="enquiry__row">
        <Field id={`${id}-date`} label="Preferred date" error={errors.date}>
          <input
            id={`${id}-date`}
            type="date"
            min={today}
            value={fields.date}
            onChange={set("date")}
          />
        </Field>
        <Field id={`${id}-time`} label="Preferred time" error={errors.time}>
          <input id={`${id}-time`} type="time" value={fields.time} onChange={set("time")} />
        </Field>
      </div>
      <Field id={`${id}-message`} label="Message (optional)">
        <textarea id={`${id}-message`} rows={3} value={fields.message} onChange={set("message")} />
      </Field>

      <p id={`${id}-note`} className="note">
        Reservations are subject to confirmation. Submitting copies your enquiry and opens WhatsApp.
        We cannot see live availability from this page.
      </p>

      <button type="submit" className="button button--primary">
        Reserve Your Table
      </button>

      {status === "copied" && (
        <p className="enquiry__status" role="status">
          Your enquiry is copied. Paste it into the WhatsApp chat that just opened and send it.
        </p>
      )}
      {status === "manual" && (
        <div className="enquiry__status" role="status">
          <p>Copy this text into WhatsApp to send your enquiry:</p>
          <textarea readOnly rows={6} value={draft} onFocus={(e) => e.target.select()} />
        </div>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactElement<{ "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {cloneElement(children, {
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? `${id}-error` : undefined,
      })}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
