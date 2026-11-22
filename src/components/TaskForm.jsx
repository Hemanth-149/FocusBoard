import { useState } from "react";
import Modal from "./Modal.jsx";
import { STATUSES, PRIORITIES, CATEGORIES } from "../data/sampleTasks.js";

const EMPTY = { title: "", description: "", category: "Work", status: "todo", priority: "medium", dueDate: "" };

export default function TaskForm({ task, onSave, onClose }) {
  const editing = Boolean(task);
  const [form, setForm] = useState(task ?? EMPTY);
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const title = form.title.trim();
    if (!title) return setError("Title is required. Give your task a short name.");
    if (title.length > 80) return setError("Title must be 80 characters or fewer.");
    onSave({ ...form, title, description: form.description.trim() });
  };

  return (
    <Modal title={editing ? "Edit task" : "Create task"} labelId="task-form-title" onClose={onClose}>
      <form onSubmit={submit} noValidate className="form">
        <div className="field">
          <label htmlFor="f-title">Title <span aria-hidden="true">*</span></label>
          <input id="f-title" value={form.title} onChange={set("title")} aria-required="true"
            aria-invalid={Boolean(error)} aria-describedby={error ? "f-title-err" : undefined} placeholder="What needs to be done?" />
          {error && <p id="f-title-err" className="error" role="alert">{error}</p>}
        </div>
        <div className="field">
          <label htmlFor="f-desc">Description</label>
          <textarea id="f-desc" rows="3" value={form.description} onChange={set("description")} placeholder="Add a few details (optional)" />
        </div>
        <div className="grid2">
          <div className="field">
            <label htmlFor="f-status">Status</label>
            <select id="f-status" value={form.status} onChange={set("status")}>
              {STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-priority">Priority</label>
            <select id="f-priority" value={form.priority} onChange={set("priority")}>
              {PRIORITIES.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-cat">Category</label>
            <select id="f-cat" value={form.category} onChange={set("category")}>
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="f-due">Due date</label>
            <input id="f-due" type="date" value={form.dueDate} onChange={set("dueDate")} />
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="btn" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn primary">{editing ? "Save changes" : "Create task"}</button>
        </div>
      </form>
    </Modal>
  );
}
