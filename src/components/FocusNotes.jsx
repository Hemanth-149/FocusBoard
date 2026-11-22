import { useState } from "react";
import { focusNotes } from "../data/focusNotes.js";
import { CheckIcon, ChevronLeft, ChevronRight } from "./Icons.jsx";

export default function FocusNotes() {
  const [index, setIndex] = useState(0);
  const last = focusNotes.length - 1;
  const prev = () => setIndex((i) => (i === 0 ? last : i - 1));
  const next = () => setIndex((i) => (i === last ? 0 : i + 1));
  const s = focusNotes[index];

  return (
    <section className="notes" aria-roledescription="carousel" aria-label="Focus notes">
      <div className="notes-text" aria-live="polite" role="group" aria-roledescription="slide" aria-label={s.count.replace(" / ", " of ")}>
        <p className="notes-kicker"><span>Focus notes</span><span className="notes-count">{s.count}</span></p>
        <h2>{s.title}</h2>
        <p className="notes-sub">{s.text}</p>
      </div>

      <div className="notes-bars" role="group" aria-label="Choose slide">
        {focusNotes.map((n, i) => (
          <button key={n.id} className={i === index ? "bar-btn active" : "bar-btn"} onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1} of ${focusNotes.length}`} aria-current={i === index ? "true" : undefined}>
            <span />
          </button>
        ))}
      </div>

      <div className="notes-card-wrap" aria-hidden="true">
        <div className="notes-ghost" />
        <div className="notes-card">
          <span className="notes-check"><CheckIcon width={16} height={16} strokeWidth={2.6} /></span>
          <div className="notes-card-body">
            <p className="notes-card-label">{s.card.label}</p>
            <p className="notes-card-title">{s.card.title}</p>
            <div className="notes-progress">
              <span className="track"><span style={{ width: `${s.card.percent}%` }} /></span>
              <span className="pct">{s.card.percent}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="notes-arrows">
        <button className="arrow ghost" onClick={prev} aria-label="Previous slide"><ChevronLeft /></button>
        <button className="arrow solid" onClick={next} aria-label="Next slide"><ChevronRight /></button>
      </div>
    </section>
  );
}
