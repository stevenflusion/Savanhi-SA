import DataTable from "@/components/ui/DataTable";
import StatusBadge from "@/components/ui/StatusBadge";

export default function Fase2Page() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Fase 2 — Mes 5-12
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        La Fase 2 es la etapa de escala nacional. Se expande a múltiples marcas y ciudades,
        consolidando el modelo como profitable y replicable. El objetivo es alcanzar 100+ tiendas
        activas en al menos 3 ciudades del Ecuador.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Metadato
      </h2>

      <DataTable
        headers={["Metadato", "Valor"]}
        rows={[
          ["Objetivo", "Escalar a múltiples marcas y ciudades"],
          ["KR Principal", "5+ marcas, 100+ tiendas"],
          ["Región", "Quito + Guayaquil + 2-3 ciudades adicionales"],
          ["Capital", "$38,400 (profitable desde esta fase)"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        OKR Fase 2
      </h2>

      <DataTable
        headers={["#", "Objetivo Clave (O)", "Key Result (KR)", "Métrica", "Meta"]}
        rows={[
          [
            "O1",
            "Escala de volumen",
            "KR1: Tasa redención ≥25%",
            "Redimidos / Activados",
            "≥25%",
          ],
          [
            "O1",
            "",
            "KR2: 10,000+ cupones redimidos/mes",
            "Cupones/mes",
            "≥10,000",
          ],
          [
            "O2",
            "Expansión geográfica",
            "KR3: 100+ tiendas activas",
            "Tiendas únicas",
            "≥100",
          ],
          ["O2", "", "KR4: 3+ ciudades activas", "Ciudades con tiendas", "≥3"],
          [
            "O3",
            "Portfolio de marcas",
            "KR5: 5+ marcas activas",
            "Marcas con campañas",
            "≥5",
          ],
          [
            "O3",
            "",
            "KR6: Tasa renovación ≥70%",
            "Renovaciones / Cancelaciones",
            "≥70%",
          ],
          [
            "O4",
            "Eficiencia operativa",
            "KR7: Margen operativo ≥85%",
            "(Ingresos - Costos) / Ingresos",
            "≥85%",
          ],
          [
            "O4",
            "",
            "KR8: Tiempo reembolso <24h",
            "Horas desde redención",
            "<24h",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Dashboard Fase 2
      </h2>

      <DataTable
        headers={["KPI", "Frecuencia", "Meta", "Status", "Notas"]}
        rows={[
          [
            "Cupones/mes",
            "Mensual",
            "10,000+",
            <StatusBadge key="cm" status="confirmado">Pendiente</StatusBadge>,
            "5x Fase 1",
          ],
          [
            "Tasa de redención",
            "Mensual",
            "≥25%",
            <StatusBadge key="tr" status="confirmado">Pendiente</StatusBadge>,
            "Industry benchmark",
          ],
          [
            "Tiendas activas",
            "Mensual",
            "100+",
            <StatusBadge key="ta" status="confirmado">Pendiente</StatusBadge>,
            "2x Fase 1",
          ],
          [
            "Ciudades",
            "Mensual",
            "3+",
            <StatusBadge key="ci" status="confirmado">Pendiente</StatusBadge>,
            "Quito + GYE + 1",
          ],
          [
            "Marcas activas",
            "Mensual",
            "5+",
            <StatusBadge key="ma" status="confirmado">Pendiente</StatusBadge>,
            "Diversificación risk",
          ],
          [
            "Renovación",
            "Trimestral",
            "≥70%",
            <StatusBadge key="ren" status="confirmado">Pendiente</StatusBadge>,
            "Retention",
          ],
          [
            "NPS tendero",
            "Mensual",
            "≥8/10",
            <StatusBadge key="nps" status="confirmado">Pendiente</StatusBadge>,
            "Stable",
          ],
          [
            "ROAS promedio",
            "Por campaña",
            "≥4x",
            <StatusBadge key="roas" status="confirmado">Pendiente</StatusBadge>,
            "Above break-even",
          ],
          [
            "Margen operativo",
            "Mensual",
            "≥85%",
            <StatusBadge key="mo" status="confirmado">Pendiente</StatusBadge>,
            "Unit economics",
          ],
          [
            "SLA delivery",
            "Semanal",
            "<24h",
            <StatusBadge key="sla" status="confirmado">Pendiente</StatusBadge>,
            "Competitive",
          ],
        ]}
      />
    </article>
  );
}
