import DataTable from "@/components/ui/DataTable";
import StatusBadge from "@/components/ui/StatusBadge";

export default function Fase1Page() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Fase 1 — Mes 3-4
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        La Fase 1 tiene como objetivo demostrar que el modelo es escalable con la primera marca activa.
        Se expande la región de Quito norte y se busca consolidar 50+ tiendas con métricas de redención
        y adopción sólidas.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Metadato
      </h2>

      <DataTable
        headers={["Metadato", "Valor"]}
        rows={[
          ["Objetivo", "Demostrar modelo escalable con primera marca"],
          ["KR Principal", "1 marca, 20+ tiendas con pedido semanal"],
          ["Región", "Quito norte expandido"],
          ["Capital", "$8,500 (acumulado)"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        OKR Fase 1
      </h2>

      <DataTable
        headers={["#", "Objetivo Clave (O)", "Key Result (KR)", "Métrica", "Meta"]}
        rows={[
          [
            "O1",
            "Escala de redenciones",
            "KR1: Tasa redención ≥20%",
            "Redimidos / Activados",
            "≥20%",
          ],
          ["O1", "", "KR2: 2,000+ cupones redimidos", "Cupones únicos redimidos", "≥2,000"],
          [
            "O2",
            "Adopción tenderos",
            "KR3: Tiendas con pedido semanal ≥75%",
            "Tiendas con ≥1 pedido/semana",
            "≥75%",
          ],
          ["O2", "", "KR4: NPS tendero ≥8/10", "Encuesta NPS", "≥8"],
          [
            "O3",
            "Caso de éxito marca",
            "KR5: ROAS ≥4x",
            "Revenue / Costo campaña",
            "≥4x",
          ],
          ["O3", "", "KR6: Marca renueva contrato", "Renovaciones de campaña", "≥1"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Dashboard Fase 1
      </h2>

      <DataTable
        headers={["KPI", "Frecuencia", "Meta", "Status", "Notas"]}
        rows={[
          [
            "Cupones redimidos",
            "Semanal",
            "500+/semana",
            <StatusBadge key="cr" status="confirmado">Pendiente</StatusBadge>,
            "4x Piloto",
          ],
          [
            "Tasa de redención",
            "Semanal",
            "≥20%",
            <StatusBadge key="tr" status="confirmado">Pendiente</StatusBadge>,
            "+5pp vs Piloto",
          ],
          [
            "Tiendas activas",
            "Mensual",
            "50+",
            <StatusBadge key="ta" status="confirmado">Pendiente</StatusBadge>,
            "2x Piloto",
          ],
          [
            "Tiendas con pedido",
            "Semanal",
            "≥75%",
            <StatusBadge key="tcp" status="confirmado">Pendiente</StatusBadge>,
            "+15pp vs Piloto",
          ],
          [
            "NPS tendero",
            "Quincenal",
            "≥8/10",
            <StatusBadge key="nps" status="confirmado">Pendiente</StatusBadge>,
            "+1 vs Piloto",
          ],
          [
            "ROAS marca",
            "Por campaña",
            "≥4x",
            <StatusBadge key="roas" status="confirmado">Pendiente</StatusBadge>,
            "+1x vs Piloto",
          ],
          [
            "Renovaciones",
            "Trimestral",
            "≥1",
            <StatusBadge key="ren" status="confirmado">Pendiente</StatusBadge>,
            "Caso de éxito",
          ],
          [
            "Tiempo reembolso",
            "Semanal",
            "<48 horas",
            <StatusBadge key="tre" status="confirmado">Pendiente</StatusBadge>,
            "SLA interno",
          ],
        ]}
      />
    </article>
  );
}
