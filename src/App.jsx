import { useMemo, useState } from "react";
import { useTasks } from "./hooks/useTasks.js";
import Header from "./components/Header.jsx";
import Stats from "./components/Stats.jsx";
import FocusNotes from "./components/FocusNotes.jsx";
import Toolbar from "./components/Toolbar.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import ConfirmDialog from "./components/ConfirmDialog.jsx";

export default function App() {
  const { tasks, addTask, updateTask, setStatus, deleteTask } = useTasks();
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all");
  const [priority, setPriority] = useState("all");
  const [form, setForm] = useState(null); // null | { task?: Task }
  const [toDelete, setToDelete] = useState(null);

  // Derived values: never stored, always recomputed from `tasks`
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === "completed").length;
    const inProgress = tasks.filter((t) => t.status === "in-progress").length;
    return { total, completed, inProgress, percent: total ? Math.round((completed / total) * 100) : 0 };
  }, [tasks]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tasks.filter(
      (t) =>
        (tab === "all" || t.status === tab) &&
        (priority === "all" || t.priority === priority) &&
        (!q || t.title.toLowerCase().includes(q))
    );
  }, [tasks, tab, priority, query]);

  const save = (data) => {
    data.id ? updateTask(data) : addTask(data);
    setForm(null);
  };
  const resetFilters = () => { setTab("all"); setPriority("all"); setQuery(""); };

  return (
    <>
      <Header />
      <main className="container page">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <h1 id="hero-title">Your work, in focus.</h1>
            <p>Plan your day, stay organized, and celebrate small wins.</p>
          </div>
          <button className="btn primary big" onClick={() => setForm({})}>New task</button>
        </section>

        <FocusNotes />
        <Stats stats={stats} />

        <section aria-labelledby="tasks-title" className="tasks-section">
          <div className="section-head">
            <div>
              <h2 id="tasks-title">My tasks</h2>
              <p>Manage and track everything in one place.</p>
            </div>
            <button className="btn soft" onClick={resetFilters}>View all tasks</button>
          </div>
          <Toolbar {...{ query, setQuery, tab, setTab, priority, setPriority }} total={tasks.length} />
          <TaskList
            tasks={visible}
            hasAny={tasks.length > 0}
            onStatus={setStatus}
            onEdit={(task) => setForm({ task })}
            onDelete={setToDelete}
            onCreate={() => setForm({})}
          />
        </section>
      </main>

      {form && <TaskForm task={form.task} onSave={save} onClose={() => setForm(null)} />}
      {toDelete && (
        <ConfirmDialog task={toDelete} onCancel={() => setToDelete(null)} onConfirm={() => { deleteTask(toDelete.id); setToDelete(null); }} />
      )}
    </>
  );
}
