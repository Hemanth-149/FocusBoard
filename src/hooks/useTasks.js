import { useEffect, useReducer } from "react";
import { sampleTasks } from "../data/sampleTasks.js";

const KEY = "focusboard.tasks.v1";

function load() {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === null) return sampleTasks; // first visit only
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : sampleTasks;
  } catch {
    return sampleTasks;
  }
}

const newId = () =>
  typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `t-${Date.now()}-${Math.random().toString(16).slice(2)}`;

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [{ ...action.task, id: newId() }, ...state];
    case "update":
      return state.map((t) => (t.id === action.task.id ? { ...t, ...action.task } : t));
    case "status":
      return state.map((t) => (t.id === action.id ? { ...t, status: action.status } : t));
    case "delete":
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}

export function useTasks() {
  const [tasks, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(tasks));
    } catch {
      /* storage full or blocked: app keeps working in memory */
    }
  }, [tasks]);

  return {
    tasks,
    addTask: (task) => dispatch({ type: "add", task }),
    updateTask: (task) => dispatch({ type: "update", task }),
    setStatus: (id, status) => dispatch({ type: "status", id, status }),
    deleteTask: (id) => dispatch({ type: "delete", id }),
  };
}
