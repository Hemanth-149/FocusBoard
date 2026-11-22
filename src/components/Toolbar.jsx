import { STATUSES, PRIORITIES } from "../data/sampleTasks.js";
import { SearchIcon, ChevronDown } from "./Icons.jsx";

export default function Toolbar({ query, setQuery, tab, setTab, priority, setPriority, total }) {
  const tabs = [{ value: "all", label: "All tasks" }, ...STATUSES];
  return (
    <div className="toolbar">
      <div role="tablist" aria-label="Filter by status" className="tabs">
        {tabs.map((t) => (
          <button key={t.value} role="tab" aria-selected={tab === t.value} className={tab === t.value ? "tab active" : "tab"} onClick={() => setTab(t.value)}>
            {t.label}{t.value === "all" && <span className="tab-count"> {total}</span>}
          </button>
        ))}
      </div>
      <div className="filters">
        <div className="search">
          <SearchIcon width={16} height={16} />
          <label className="sr-only" htmlFor="search">Search tasks by title</label>
          <input id="search" type="search" placeholder="Find a task..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="select-wrap">
          <label className="sr-only" htmlFor="priority">Filter by priority</label>
          <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="all">Priority: All</option>
            {PRIORITIES.map((p) => <option key={p.value} value={p.value}>Priority: {p.label}</option>)}
          </select>
          <ChevronDown width={16} height={16} />
        </div>
      </div>
    </div>
  );
}
