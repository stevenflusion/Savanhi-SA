import DataTable from "./DataTable";

interface TierTableProps {
  tiers: {
    name: string;
    color: string;
    requirements: string[];
    benefits: string[];
    highlight?: boolean;
  }[];
}

export default function TierTable({ tiers }: TierTableProps) {
  const headers = ["", ...tiers.map((t) => t.name)];
  const rows = [
    [
      <span key="req" className="font-semibold text-[#A0A0A0]">Requisitos</span>,
      ...tiers.map((t) => (
        <ul key={t.name} className="space-y-1">
          {t.requirements.map((r, i) => (
            <li key={i} className="text-xs">{r}</li>
          ))}
        </ul>
      )),
    ],
    [
      <span key="ben" className="font-semibold text-[#A0A0A0]">Beneficios</span>,
      ...tiers.map((t) => (
        <ul key={t.name} className="space-y-1">
          {t.benefits.map((b, i) => (
            <li key={i} className="text-xs">{b}</li>
          ))}
        </ul>
      )),
    ],
  ];

  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm rounded-xl border border-[#7A5197]/30 overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-3 bg-[#1C1C1C] border-b border-[#7A5197]/30" />
            {tiers.map((t) => (
              <th
                key={t.name}
                className="px-4 py-3 text-center font-bold text-[#F4F4F4] border-b border-[#7A5197]/30"
                style={{
                  backgroundColor: t.color,
                  fontFamily: "var(--font-syne)",
                }}
              >
                {t.name}
                {t.highlight && (
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-white/20">
                    Recomendado
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? "bg-[#1C1C1C]" : "bg-[#242424]"}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 border-b border-[#7A5197]/10 align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
