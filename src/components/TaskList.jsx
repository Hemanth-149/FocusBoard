import { useEffect, useRef, useState } from "react";
import { STATUSES, PRIORITIES } from "../data/sampleTasks.js";
import { CheckIcon, CalendarIcon, DotsIcon } from "./Icons.jsx";

const fmt = (iso) => {
  if (!iso) return "No date";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
const label = (list, v) => list.find((x) => x.value === v)?.label ?? v;

function RowMenu({ task, onStatus, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); ref.current?.querySelector("button")?.focus(); } };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const run = (fn) => () => { setOpen(false); fn(); };

  return (
    <div className="menu-wrap" ref={ref}>
      <button className="dots-btn" aria-label={`More actions for ${task.title}`} aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <DotsIcon />
      </button>
      {open && (
        <div className="menu" role="menu">
          <button role="menuitem" onClick={run(() => onEdit(task))}>Edit task</button>
          {STATUSES.filter((s) => s.value !== task.status).map((s) => (
            <button role="menuitem" key={s.value} onClick={run(() => onStatus(task.id, s.value))}>Mark as {s.label.toLowerCase()}</button>
          ))}
          <button role="menuitem" className="danger" onClick={run(() => onDelete(task))}>Delete task</button>
        </div>
      )}
    </div>
  );
}

function StatusButton({ task, onStatus }) {
  const done = task.status === "completed";
  return (
    <button
      className={`status-icon ${task.status}`}
      onClick={() => onStatus(task.id, done ? "in-progress" : "completed")}
      aria-label={done ? `Mark ${task.title} as in progress` : `Mark ${task.title} as completed`}
      title={label(STATUSES, task.status)}
    >
      {done ? <CheckIcon width={18} height={18} strokeWidth={2.6} /> : <span className="sq" />}
    </button>
  );
}

export default function TaskList({ tasks, onStatus, onEdit, onDelete, onCreate, hasAny }) {
  if (tasks.length === 0) {
    return (
      <div className="empty">
        <p>{hasAny ? "No tasks match your search or filters." : "You have no tasks yet."}</p>
        {!hasAny && <button className="btn primary" onClick={onCreate}>Create your first task</button>}
      </div>
    );
  }
  return (
    <ul className="tasks">
      {tasks.map((t) => (
        <li key={t.id} className="task">
          <StatusButton task={t} onStatus={onStatus} />
          <div className="task-main">
            <h3>{t.title}</h3>
            {t.description && <p>{t.description}</p>}
          </div>
          <div className="task-meta">
            <span className="pill cat">{t.category}</span>
            <span className={`pill pr-${t.priority}`}>{label(PRIORITIES, t.priority)}</span>
            <span className="date"><CalendarIcon width={15} height={15} />{fmt(t.dueDate)}</span>
          </div>
          <RowMenu task={t} onStatus={onStatus} onEdit={onEdit} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
