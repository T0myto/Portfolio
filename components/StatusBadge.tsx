export function StatusBadge({ status }: { status: "completed" | "in-progress" }) {
  const completed = status === "completed";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
        completed
          ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20"
          : "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${completed ? "bg-emerald-500" : "bg-amber-500"}`}
        aria-hidden="true"
      />
      {completed ? "Complété" : "En cours"}
    </span>
  );
}
