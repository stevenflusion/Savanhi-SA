interface MetricCardProps {
  value: string;
  label: string;
  change?: string;
  gradient?: string;
}

export default function MetricCard({
  value,
  label,
  change,
  gradient = "from-[#7A5197] via-[#BB5098] to-[#F47F6B]",
}: MetricCardProps) {
  return (
    <div className="rounded-xl bg-[#242424] border border-[#7A5197]/20 p-5 hover:scale-[1.02] transition-transform duration-200">
      <div
        className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {value}
      </div>
      <div className="text-sm text-[#A0A0A0]">{label}</div>
      {change && (
        <div className="mt-2 text-xs text-[#2BA84A] font-medium">{change}</div>
      )}
    </div>
  );
}
