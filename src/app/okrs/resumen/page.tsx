import DataTable from "@/components/ui/DataTable";
import PhaseTimeline from "@/components/ui/PhaseTimeline";
import MetricCard from "@/components/ui/MetricCard";

export default function OkrsResumenPage() {
  return (
    <article className="max-w-5xl">
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Resumen Ejecutivo
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Los OKRs de Savanhi están diseñados para validar primero, escalar
        después. Cada fase tiene métricas claras de entrada y salida. No
        avanzamos a la siguiente fase hasta que la anterior demuestre
        sostenibilidad operativa y económica.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <MetricCard value="20-30" label="Tiendas activas (Piloto)" change="Meta M1-2" />
        <MetricCard value="≥15%" label="Tasa de redención" change="Umbral mínimo" />
        <MetricCard value="$2,800" label="Revenue piloto" change="Break-even operativo" />
        <MetricCard value="500+" label="Cupones redimidos" change="Volumen de validación" />
      </div>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Tabla resumen por fase
      </h2>

      <DataTable
        headers={[
          "Métrica",
          "Piloto (M1-2)",
          "Fase 1 (M3-4)",
          "Fase 2 (M5-12)",
          "Fase 3 (Año 2)",
        ]}
        rows={[
          ["Tiendas activas", "20-30", "50+", "100+", "500+"],
          ["Cupones emitidos", "500+", "2,000+", "10,000+", "50,000+"],
          ["Tasa redención", "≥15%", "≥20%", "≥25%", "≥30%"],
          ["Marcas activas", "1", "3", "5+", "10+"],
          ["Revenue proyectado", "$2,800", "$12,000", "$80,000+", "$300,000+"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Línea de tiempo de fases
      </h2>

      <PhaseTimeline
        phases={[
          {
            name: "Piloto (Mes 1-2)",
            status: "completado",
            date: "Inicio",
            metrics: ["Validar modelo", "20-30 tiendas", "1 marca ancla"],
          },
          {
            name: "Fase 1 (Mes 3-4)",
            status: "activo",
            date: "Escalar",
            metrics: ["Primera marca activa", "50+ tiendas", "3 marcas"],
          },
          {
            name: "Fase 2 (Mes 5-12)",
            status: "pendiente",
            date: "Nacional",
            metrics: ["5+ marcas", "100+ tiendas", "Quito + GYE"],
          },
          {
            name: "Fase 3 (Año 2)",
            status: "pendiente",
            date: "API/Datos",
            metrics: ["500+ tiendas", "API activa", "Internacional"],
          },
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        KPI vs Fase — Vista Consolidada
      </h2>

      <DataTable
        headers={["KPI", "Piloto", "Fase 1", "Fase 2", "Fase 3", "Owner"]}
        rows={[
          ["Tiendas activas", "20-30", "50+", "100+", "500+", "Operaciones"],
          ["Cupones emitidos", "500+", "2,000+", "10,000+", "50,000+", "Producto"],
          ["Cupones redimidos", "≥500", "≥2,000", "≥10,000", "≥50,000", "Producto"],
          ["Tasa de redención", "≥15%", "≥20%", "≥25%", "≥30%", "Producto"],
          ["Tiendas con ≥1 redención/semana", "≥60%", "≥70%", "≥80%", "≥85%", "Operaciones"],
          ["NPS tendero", "≥7/10", "≥7.5/10", "≥8/10", "≥8.5/10", "Operaciones"],
          ["ROAS marca", "≥3x", "≥4x", "≥5x", "≥6x", "Negocio"],
          ["Marcas activas", "1", "3", "5+", "10+", "Negocio"],
          ["Revenue mensual", "$2,800", "$12,000", "$80,000+", "$300,000+", "Finanzas"],
          ["Churn mensual tiendas", "<10%", "<8%", "<5%", "<3%", "Operaciones"],
          ["Incidentes SLA", "<5%", "<3%", "<2%", "<1%", "Tecnología"],
        ]}
      />
    </article>
  );
}
