import { ReactNode } from "react";

interface DataTableProps {
  headers: string[];
  rows: ReactNode[][];
}

export default function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#7A5197]/30 my-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#2A1F35]">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left font-semibold text-[#F4F4F4] border-b border-[#7A5197]/30"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`transition-colors hover:bg-[#7A5197]/10 ${
                ri % 2 === 0 ? "bg-[#1C1C1C]" : "bg-[#242424]"
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-2.5 text-[#F4F4F4]/90 border-b border-[#7A5197]/10"
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
