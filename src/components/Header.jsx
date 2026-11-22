import { ChevronDown } from "./Icons.jsx";

export default function Header() {
  return (
    <header className="topbar">
      <div className="container bar">
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            <li>Workspace</li>
            <li aria-current="page">Overview</li>
          </ol>
        </nav>
        <button className="avatar-btn" aria-label="Account menu (placeholder)">
          <span className="avatar">JD</span>
          <ChevronDown width={16} height={16} />
        </button>
      </div>
    </header>
  );
}
