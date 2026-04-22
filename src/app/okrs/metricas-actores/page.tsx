import DataTable from "@/components/ui/DataTable";
import StatusBadge from "@/components/ui/StatusBadge";
import Callout from "@/components/ui/Callout";
import TierTable from "@/components/ui/TierTable";
import CodeBlock from "@/components/ui/CodeBlock";

export default function MetricasActoresPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Métricas por Actor
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Este documento detalla las métricas clave para cada actor del ecosistema Savanhi:
        tendero, consumidor, marca y operación. Cada métrica incluye su definición y metas por fase.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        2.1 Tendero
      </h2>

      <DataTable
        headers={["Métrica", "Definición", "Meta Piloto", "Meta Fase 1", "Meta Fase 2"]}
        rows={[
          [
            "NPS",
            "Net Promoter Score (0-10)",
            "≥7/10",
            "≥8/10",
            "≥8/10",
          ],
          [
            "Tasa aceptación",
            "Cupones aceptados / cupones presentados",
            "≥60%",
            "≥75%",
            "≥80%",
          ],
          [
            "Cupones/semana",
            "Cupones redimidos por tienda por semana",
            "≥8",
            "≥15",
            "≥20",
          ],
          [
            "Tiempo de atención",
            "Minutos desde que llega cliente hasta entrega",
            "<5 min",
            "<3 min",
            "<3 min",
          ],
          [
            "Tasa de error",
            "Errores en verificación / total verificaciones",
            "<3%",
            "<2%",
            "<1%",
          ],
          [
            "Retención",
            "Tiendas que permanecen activas 90 días",
            "—",
            "≥80%",
            "≥85%",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Sistema de Tiers Tendero
      </h2>

      <TierTable
        tiers={[
          {
            name: "Gold",
            color: "#FFB32B",
            requirements: [
              "≥15 cupones/semana",
              "≥80% tasa aceptación",
            ],
            benefits: [
              "Prioridad en campañas",
              "Comisión +5%",
              "Capacitación gratuita",
            ],
          },
          {
            name: "Silver",
            color: "#A0A0A0",
            requirements: [
              "8-14 cupones/semana",
              "60-79% tasa aceptación",
            ],
            benefits: [
              "Acceso a todas las campañas",
              "Soporte estándar",
            ],
          },
          {
            name: "Bronze",
            color: "#7A5197",
            requirements: [
              "<8 cupones/semana",
              "<60% tasa aceptación",
            ],
            benefits: [
              "Solo retiro en tienda",
              "Soporte básico",
            ],
          },
        ]}
      />

      <Callout type="info" title="Nota">
        El tier se evalúa semanalmente. Transiciones son automáticas basadas en métricas.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Diagnóstico Automático
      </h2>

      <div className="space-y-4 mb-6">
        <div className="rounded-xl border border-[#FFB32B]/30 bg-[#FFB32B]/10 p-4">
          <div className="text-sm font-semibold text-[#FFB32B] mb-1">Gold</div>
          <p className="text-sm text-[#F4F4F4]/90">
            “Felicitaciones, sos de los mejores. Tu tasa de aceptación es 85%. Las tiendas similares
            promedian 72%. Seguí así.”
          </p>
        </div>
        <div className="rounded-xl border border-[#A0A0A0]/30 bg-[#A0A0A0]/10 p-4">
          <div className="text-sm font-semibold text-[#A0A0A0] mb-1">Silver</div>
          <p className="text-sm text-[#F4F4F4]/90">
            “Vas bien. Tu tasa aceptación es 65%. Con poco más de esfuerzo llegás a Gold.”
          </p>
        </div>
        <div className="rounded-xl border border-[#7A5197]/30 bg-[#7A5197]/10 p-4">
          <div className="text-sm font-semibold text-[#7A5197] mb-1">Bronze</div>
          <p className="text-sm text-[#F4F4F4]/90">
            “Tu tasa de aceptación bajó a 58%. Las tiendas similares tienen 80%. Problema reportado:
            tiempo de espera. Necesitás apoyo?”
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        2.2 Consumidor
      </h2>

      <DataTable
        headers={["Métrica", "Definición", "Meta Piloto", "Meta Fase 1", "Meta Fase 2"]}
        rows={[
          [
            "Activaciones",
            "Veces que el usuario activa un cupón",
            "≥1.5/mes avg",
            "≥2/mes avg",
            "≥3/mes avg",
          ],
          [
            "Tasa de conversión",
            "Activaciones → redenciones",
            "≥15%",
            "≥20%",
            "≥25%",
          ],
          [
            "Retención D30",
            "Usuarios que vuelven 30 días después",
            "≥40%",
            "≥50%",
            "≥60%",
          ],
          [
            "Retención D90",
            "Usuarios que vuelven 90 días después",
            "—",
            "≥30%",
            "≥40%",
          ],
          [
            "CAC",
            "Costo de adquisición por usuario",
            "<$0.50",
            "<$0.40",
            "<$0.30",
          ],
          [
            "LTV",
            "Valor de vida del usuario",
            "≥$5",
            "≥$8",
            "≥$12",
          ],
          [
            "LTV:CAC",
            "Ratio lifetime value / costo adquisición",
            "≥10:1",
            "≥20:1",
            "≥40:1",
          ],
          [
            "Ticket promedio",
            "Gasto promedio por transacción",
            "≥$12",
            "≥$15",
            "≥$18",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Embudo de Usuario
      </h2>

      <CodeBlock
        language="text"
        code={`Descubrimiento (app install)
    ↓ (60%)
Activación (primer cupón)
    ↓ (40%)
Transacción (primer cupón usado)
    ↓ (30%)
Retención D30
    ↓ (50%)
Retención D90
    ↓ (40%)
Embajador (referrals)`}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Funil de Conversión por Fase
      </h2>

      <DataTable
        headers={["Etapa", "Piloto", "Fase 1", "Fase 2"]}
        rows={[
          ["Install → Activación", "60%", "65%", "70%"],
          ["Activación → Transacción", "40%", "45%", "50%"],
          ["Transacción → Retención D30", "40%", "50%", "60%"],
          ["CAC real", "$0.50", "$0.35", "$0.25"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        2.3 Marca
      </h2>

      <DataTable
        headers={["Métrica", "Definición", "Meta Piloto", "Meta Fase 1", "Meta Fase 2"]}
        rows={[
          [
            "ROAS",
            "Revenue generado / Inversión campaña",
            "≥3x",
            "≥4x",
            "≥4x+",
          ],
          [
            "CPO real",
            "Costo por pedido real",
            "$0.25-0.50",
            "$0.20-0.40",
            "$0.15-0.35",
          ],
          [
            "Alcance",
            "Usuarios únicos que ven promoción",
            "5,000+",
            "20,000+",
            "50,000+",
          ],
          [
            "Tasa de renovación",
            "Marcas que renuevan contrato",
            "—",
            "≥70%",
            "≥80%",
          ],
          [
            "LTV marca",
            "Valor de vida de marca (contratos)",
            "$2,400/año",
            "$4,800/año",
            "$10,000/año",
          ],
          [
            "Share of wallet",
            "% del presupuesto de promo del marca",
            "—",
            "≥5%",
            "≥10%",
          ],
          [
            "Tiempo de pago",
            "Días promedio de cobro",
            "15",
            "10",
            "7",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Modelo de Revenue por Marca
      </h2>

      <DataTable
        headers={["Componente", "Piloto", "Fase 1", "Fase 2"]}
        rows={[
          ["Fee fijo campaña", "$200-400", "$300-600", "$400-1,000"],
          ["CPO variable", "$0.25-0.50", "$0.20-0.40", "$0.15-0.30"],
          ["Duración campaña", "2-4 semanas", "4-8 semanas", "8-12 semanas"],
          ["Frecuencia campaña/mes", "1", "2", "3+"],
          ["Revenue/mes/marca", "$400", "$800", "$1,500+"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Proyección Revenue por Fase
      </h2>

      <DataTable
        headers={["Fase", "# Marcas", "Revenue/marca/mes", "Revenue total/mes"]}
        rows={[
          ["Piloto", "1", "$500", "$500"],
          ["Fase 1", "3", "$800", "$2,400"],
          ["Fase 2", "5+", "$1,500", "$7,500+"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        2.4 Operación (SLA)
      </h2>

      <DataTable
        headers={["Métrica", "Definición", "Meta Piloto", "Meta Fase 1", "Meta Fase 2"]}
        rows={[
          [
            "Tiempo de reembolso",
            "Horas desde redención hasta crédito DeUna",
            "<48h",
            "<24h",
            "<12h",
          ],
          [
            "SLA delivery",
            "Pedidos entregados a tiempo",
            "≥95%",
            "≥97%",
            "≥99%",
          ],
          [
            "Incidentes",
            "# de incidentes reportados/semana",
            "<10",
            "<5",
            "<2",
          ],
          [
            "Tiempo resolución",
            "Horas promedio de resolución de incidentes",
            "<24h",
            "<12h",
            "<6h",
          ],
          [
            "Uptime sistema",
            "Disponibilidad de la plataforma",
            "≥99%",
            "≥99.5%",
            "≥99.9%",
          ],
          [
            "Exactitud inventario",
            "% de productos con stock correcto",
            "—",
            "≥90%",
            "≥95%",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        SLA por Tipo de Incidente
      </h2>

      <DataTable
        headers={["Tipo de Incidente", "SLA Piloto", "SLA Fase 1", "SLA Fase 2"]}
        rows={[
          ["Error de verificación cupón", "<30 min", "<15 min", "<5 min"],
          ["Fallo de pago DeUna", "<2h", "<1h", "<30 min"],
          ["Delivery no entregado", "<24h", "<12h", "<6h"],
          ["Reclamo de marca", "<48h", "<24h", "<12h"],
          ["Fraude detectado", "<1h", "<30 min", "<15 min"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Dashboard de Salud Operativa
      </h2>

      <DataTable
        headers={["Indicador", "Verde", "Amarillo", "Rojo"]}
        rows={[
          [
            "Uptime",
            <StatusBadge key="upg" status="validado">≥99.5%</StatusBadge>,
            <StatusBadge key="upa" status="confirmado">99-99.5%</StatusBadge>,
            <StatusBadge key="upr" status="reformulado">&lt;99%</StatusBadge>,
          ],
          [
            "SLA delivery",
            <StatusBadge key="sdg" status="validado">≥97%</StatusBadge>,
            <StatusBadge key="sda" status="confirmado">95-97%</StatusBadge>,
            <StatusBadge key="sdr" status="reformulado">&lt;95%</StatusBadge>,
          ],
          [
            "Tiempo reembolso",
            <StatusBadge key="trg" status="validado">&lt;24h</StatusBadge>,
            <StatusBadge key="tra" status="confirmado">24-48h</StatusBadge>,
            <StatusBadge key="trr" status="reformulado">&gt;48h</StatusBadge>,
          ],
          [
            "Incidentes/semana",
            <StatusBadge key="isg" status="validado">&lt;5</StatusBadge>,
            <StatusBadge key="isa" status="confirmado">5-10</StatusBadge>,
            <StatusBadge key="isr" status="reformulado">&gt;10</StatusBadge>,
          ],
        ]}
      />
    </article>
  );
}
