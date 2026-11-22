export const STATUSES = [
  { value: "todo", label: "To do" },
  { value: "in-progress", label: "In progress" },
  { value: "completed", label: "Completed" },
];
export const PRIORITIES = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];
export const CATEGORIES = ["Design", "Development", "Content", "Planning", "Research"];

export const sampleTasks = [
  { id: "t-1", title: "Design landing page", description: "Website redesign · Due soon", category: "Design", status: "in-progress", priority: "high", dueDate: "2026-11-22" },
  { id: "t-2", title: "Fix navigation", description: "Mobile menu bugs · In progress", category: "Development", status: "in-progress", priority: "high", dueDate: "2026-11-23" },
  { id: "t-3", title: "Write API documentation", description: "Developer docs · Draft", category: "Content", status: "todo", priority: "medium", dueDate: "2026-11-25" },
  { id: "t-4", title: "Polish UI components", description: "Frontend sprint · UI polish", category: "Development", status: "todo", priority: "medium", dueDate: "2026-11-24" },
  { id: "t-5", title: "Review onboarding copy", description: "Content updates · Approved", category: "Content", status: "completed", priority: "low", dueDate: "2026-11-18" },
  { id: "t-6", title: "Plan sprint backlog", description: "Team planning · Done", category: "Planning", status: "completed", priority: "medium", dueDate: "2026-11-17" },
  { id: "t-7", title: "Update brand colors", description: "Design system · Done", category: "Design", status: "completed", priority: "low", dueDate: "2026-11-16" },
  { id: "t-8", title: "Set up analytics", description: "Tracking events · Done", category: "Development", status: "completed", priority: "medium", dueDate: "2026-11-15" },
  { id: "t-9", title: "Create email templates", description: "Marketing emails · Done", category: "Content", status: "completed", priority: "low", dueDate: "2026-11-14" },
  { id: "t-10", title: "Prepare client demo", description: "Presentation · In progress", category: "Planning", status: "in-progress", priority: "high", dueDate: "2026-11-26" },
  { id: "t-11", title: "Research competitors", description: "Market notes · In progress", category: "Research", status: "in-progress", priority: "medium", dueDate: "2026-11-27" },
  { id: "t-12", title: "Test checkout flow", description: "QA pass · In progress", category: "Development", status: "in-progress", priority: "high", dueDate: "2026-11-28" },
];
