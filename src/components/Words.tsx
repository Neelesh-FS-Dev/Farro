/**
 * Splits a sentence into word spans for scroll-linked reveals (see scrubWords in lib/motion).
 * Words stay in the DOM as plain text, so screen readers and copy-paste are unaffected.
 */
export function Words({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span data-words="">
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="word">
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
