"use client";

import { motion } from "framer-motion";

interface Phase {
  name: string;
  status: "completado" | "activo" | "pendiente";
  date?: string;
  metrics?: string[];
}

const statusConfig = {
  completado: { color: "#2BA84A", label: "Completado" },
  activo: { color: "#FFB32B", label: "En progreso" },
  pendiente: { color: "#7A5197", label: "Pendiente" },
};

export default function PhaseTimeline({ phases }: { phases: Phase[] }) {
  return (
    <div className="my-8">
      {/* Desktop horizontal */}
      <div className="hidden md:block">
        <div className="flex items-start justify-between relative">
          {/* Line */}
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-[#7A5197]/20" />
          {phases.map((phase, i) => {
            const cfg = statusConfig[phase.status];
            return (
              <div key={i} className="relative flex flex-col items-center z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: cfg.color,
                    backgroundColor:
                      phase.status === "completado" ? cfg.color : "#1C1C1C",
                  }}
                >
                  {phase.status === "completado" && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </motion.div>
                <div className="mt-3 text-center">
                  <div
                    className="text-sm font-semibold text-[#F4F4F4]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {phase.name}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: cfg.color }}
                  >
                    {cfg.label}
                  </div>
                  {phase.date && (
                    <div className="text-xs text-[#A0A0A0] mt-1">{phase.date}</div>
                  )}
                  {phase.metrics && (
                    <div className="mt-2 space-y-1">
                      {phase.metrics.map((m, mi) => (
                        <div key={mi} className="text-xs text-[#A0A0A0]">
                          {m}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile vertical */}
      <div className="md:hidden space-y-6 relative">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#7A5197]/20" />
        {phases.map((phase, i) => {
          const cfg = statusConfig[phase.status];
          return (
            <div key={i} className="relative flex items-start gap-4 z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  borderColor: cfg.color,
                  backgroundColor:
                    phase.status === "completado" ? cfg.color : "#1C1C1C",
                }}
              >
                {phase.status === "completado" && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </motion.div>
              <div>
                <div
                  className="text-sm font-semibold text-[#F4F4F4]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {phase.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: cfg.color }}>
                  {cfg.label}
                </div>
                {phase.date && (
                  <div className="text-xs text-[#A0A0A0] mt-1">{phase.date}</div>
                )}
                {phase.metrics && (
                  <div className="mt-2 space-y-1">
                    {phase.metrics.map((m, mi) => (
                      <div key={mi} className="text-xs text-[#A0A0A0]">
                        {m}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
