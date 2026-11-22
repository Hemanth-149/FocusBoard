import { ListIcon, ClockIcon, CheckIcon } from "./Icons.jsx";

export default function Stats({ stats }) {
  const items = [
    { label: "Total tasks", value: stats.total, note: "Across all projects", Icon: ListIcon, tone: "violet" },
    { label: "In progress", value: stats.inProgress, note: "Keep the momentum", Icon: ClockIcon, tone: "blue" },
    { label: "Completed", value: stats.completed, note: `${stats.percent}% done · great work`, Icon: CheckIcon, tone: "green" },
  ];
  return (
    <section aria-label="Overview" className="stats">
      {items.map(({ label, value, note, Icon, tone }) => (
        <div className="stat" key={label}>
          <div className="stat-top">
            <span className={`stat-icon ${tone}`}><Icon width={20} height={20} /></span>
            <span className="stat-label">{label}</span>
          </div>
          <div className="stat-bottom">
            <span className="stat-value">{value}</span>
            <span className="stat-note">{note}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
