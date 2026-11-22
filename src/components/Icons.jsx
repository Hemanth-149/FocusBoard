const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false" };
const make = (children) => (props) => <svg {...base} {...props}>{children}</svg>;

export const CheckIcon = make(<path d="M20 6 9 17l-5-5" />);
export const ChevronLeft = make(<path d="m15 18-6-6 6-6" />);
export const ChevronRight = make(<path d="m9 18 6-6-6-6" />);
export const ChevronDown = make(<path d="m6 9 6 6 6-6" />);
export const SearchIcon = make(<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>);
export const CalendarIcon = make(<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>);
export const ListIcon = make(<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />);
export const ClockIcon = make(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const DotsIcon = make(<><circle cx="5" cy="12" r="1.4" fill="currentColor" /><circle cx="12" cy="12" r="1.4" fill="currentColor" /><circle cx="19" cy="12" r="1.4" fill="currentColor" /></>);
