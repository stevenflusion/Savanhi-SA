import { ReactNode } from "react";
import {
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface CalloutProps {
  type: "info" | "warning" | "danger" | "success";
  title?: string;
  children: ReactNode;
}

const config = {
  info: {
    icon: Info,
    border: "#7A5197",
    bg: "#7A519715",
    title: "Info",
  },
  warning: {
    icon: AlertTriangle,
    border: "#FFB32B",
    bg: "#FFB32B15",
    title: "Advertencia",
  },
  danger: {
    icon: AlertCircle,
    border: "#DF2531",
    bg: "#DF253115",
    title: "Peligro",
  },
  success: {
    icon: CheckCircle,
    border: "#2BA84A",
    bg: "#2BA84A15",
    title: "Éxito",
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const c = config[type];
  const Icon = c.icon;
  return (
    <div
      className="my-6 rounded-xl border-l-4 p-4"
      style={{
        borderLeftColor: c.border,
        backgroundColor: c.bg,
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 shrink-0" style={{ color: c.border }} />
        <span
          className="text-sm font-semibold"
          style={{ color: c.border, fontFamily: "var(--font-syne)" }}
        >
          {title || c.title}
        </span>
      </div>
      <div className="text-sm text-[#F4F4F4]/90">{children}</div>
    </div>
  );
}
