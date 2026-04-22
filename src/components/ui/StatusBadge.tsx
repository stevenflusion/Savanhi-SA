interface StatusBadgeProps {
  status: "validado" | "confirmado" | "reformulado" | "owner";
  children: React.ReactNode;
}

const config = {
  validado: { bg: "#2BA84A15", border: "#2BA84A", text: "#2BA84A", icon: "✅" },
  confirmado: { bg: "#FFB32B15", border: "#FFB32B", text: "#FFB32B", icon: "⚠️" },
  reformulado: { bg: "#DF253115", border: "#DF2531", text: "#DF2531", icon: "❌" },
  owner: { bg: "#7A519715", border: "#7A5197", text: "#7A5197", icon: "✅" },
};

export default function StatusBadge({ status, children }: StatusBadgeProps) {
  const c = config[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border"
      style={{
        backgroundColor: c.bg,
        borderColor: c.border,
        color: c.text,
      }}
    >
      <span>{c.icon}</span>
      {children}
    </span>
  );
}
