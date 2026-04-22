import DataTable from "@/components/ui/DataTable";
import Callout from "@/components/ui/Callout";

export default function ProyeccionesPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Proyecciones Financieras
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Este documento consolida las proyecciones financieras de Savanhi, incluyendo runway,
        burn rate, P&L simplificado por fase, escenarios de sensibilidad y punto de equilibrio.
      </p>

      <Callout type="warning" title="Advertencia">
        Los números presentados asumen operación real con demanda validada. Si el piloto no valida
        las hipótesis, los escenarios no aplican. Estas proyecciones son metas de diseño que
        requieren confirmación en campo.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Supuestos Base
      </h2>

      <DataTable
        headers={["Parámetro", "Valor", "Notas"]}
        rows={[
          ["Capital inicial disponible", "$30,000", "Asumido (no definido en docs)"],
          ["Duración piloto", "2 meses", "10 tiendas"],
          ["Duración Fase 1", "2 meses", "50 tiendas"],
          ["Duración Fase 2", "8 meses", "100 tiendas"],
          ["Fee campaña promedio", "$400", "Rango $200-600"],
          ["CPO promedio", "$0.30", "Rango $0.15-0.60"],
          ["Cupones/tienda/semana", "15", "Conservador"],
          ["Semanas/mes", "4", ""],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        P&L Piloto (Mes 1-2, 10 tiendas)
      </h2>

      <DataTable
        headers={["Concepto", "Mensual", "2 meses"]}
        rows={[
          ["Ingresos", "", ""],
          ["Fee campañas", "$2,400", "$4,800"],
          ["CPO acumulado", "$1,800", "$3,600"],
          ["Total ingresos", "$4,200", "$8,400"],
          ["", "", ""],
          ["Costos", "", ""],
          ["Embajadores (x2)", "$1,200", "$2,400"],
          ["Infraestructura", "$50", "$100"],
          ["Varios", "$150", "$300"],
          ["Total costos", "$1,400", "$2,800"],
          ["", "", ""],
          ["Margen operativo", "$2,800", "$5,600"],
          ["Margen %", "67%", "67%"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        P&L Fase 1 (Mes 3-4, 50 tiendas)
      </h2>

      <DataTable
        headers={["Concepto", "Mensual", "2 meses"]}
        rows={[
          ["Ingresos", "", ""],
          ["Fee campañas", "$8,000", "$16,000"],
          ["CPO acumulado", "$9,000", "$18,000"],
          ["Total ingresos", "$17,000", "$34,000"],
          ["", "", ""],
          ["Costos", "", ""],
          ["Equipo (x4)", "$2,400", "$4,800"],
          ["Infra + tools", "$150", "$300"],
          ["Operaciones", "$300", "$600"],
          ["Total costos", "$2,850", "$5,700"],
          ["", "", ""],
          ["Margen operativo", "$14,150", "$28,300"],
          ["Margen %", "83%", "83%"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        P&L Fase 2 (Mes 5-12, 100 tiendas, 8 meses)
      </h2>

      <DataTable
        headers={["Concepto", "Mensual", "8 meses"]}
        rows={[
          ["Ingresos", "", ""],
          ["Fee campañas", "$15,000", "$120,000"],
          ["CPO acumulado", "$18,000", "$144,000"],
          ["Total ingresos", "$33,000", "$264,000"],
          ["", "", ""],
          ["Costos", "", ""],
          ["Equipo (x8)", "$4,000", "$32,000"],
          ["Infra + tools", "$300", "$2,400"],
          ["Operaciones", "$500", "$4,000"],
          ["Total costos", "$4,800", "$38,400"],
          ["", "", ""],
          ["Margen operativo", "$28,200", "$225,600"],
          ["Margen %", "85%", "85%"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Resumen P&L Acumulado (12 meses)
      </h2>

      <DataTable
        headers={["Fase", "Ingresos", "Costos", "Margen", "Margen %"]}
        rows={[
          ["Piloto (mes 1-2)", "$8,400", "$2,800", "$5,600", "67%"],
          ["Fase 1 (mes 3-4)", "$34,000", "$5,700", "$28,300", "83%"],
          ["Fase 2 (mes 5-12)", "$264,000", "$38,400", "$225,600", "85%"],
          ["TOTAL", "$306,400", "$46,900", "$259,500", "85%"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Escenarios
      </h2>

      <h3 className="text-xl font-semibold text-[#F4F4F4]/80 mt-8 mb-3">
        Escenario Conservador (peor caso operativo)
      </h3>

      <DataTable
        headers={["Métrica", "Valor", "Condición"]}
        rows={[
          ["Fee promedio", "$200", "Negociación débil"],
          ["CPO efectivo", "$0.15", "Only básico"],
          ["Tiendas activas", "50", "No se reach 100"],
          ["Ingresos/mes", "$10,000", ""],
          ["Costos/mes", "$3,500", ""],
          ["Resultado", "+$6,500/mes", "Profitability OK"],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4]/80 mt-8 mb-3">
        Escenario Base (caso plan)
      </h3>

      <DataTable
        headers={["Métrica", "Valor", "Condición"]}
        rows={[
          ["Fee promedio", "$400", "Negociación normal"],
          ["CPO efectivo", "$0.30", "Plan estándar"],
          ["Tiendas activas", "100", "Scale completo"],
          ["Ingresos/mes", "$33,000", ""],
          ["Costos/mes", "$4,800", ""],
          ["Resultado", "+$28,200/mes", "Profitable"],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4]/80 mt-8 mb-3">
        Escenario Óptimo (best case)
      </h3>

      <DataTable
        headers={["Métrica", "Valor", "Condición"]}
        rows={[
          ["Fee promedio", "$600", "Premium brands"],
          ["CPO efectivo", "$0.60", "Plan premium"],
          ["Tiendas activas", "100+", "Exceeds target"],
          ["Ingresos/mes", "$54,000", ""],
          ["Costos/mes", "$5,500", "Team expande"],
          ["Resultado", "+$48,500/mes", "Highly profitable"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Punto de equilibrio (break-even)
      </h2>

      <DataTable
        headers={["Condición", "Marcas/Tiendas mínimas"]}
        rows={[
          [
            "Profitable (sin scale)",
            "5 marcas activas × 10 tiendas = 50 tiendas",
          ],
          [
            "Scale viable",
            "10 marcas activas × 100 tiendas = 1,000 tiendas impactadas",
          ],
        ]}
      />

      <Callout type="info" title="Nota clave">
        El modelo es profitable desde el piloto si se cierran 5+ campañas/mes. El riesgo NO es
        profitability — es cash flow y timing de colección.
      </Callout>
    </article>
  );
}
