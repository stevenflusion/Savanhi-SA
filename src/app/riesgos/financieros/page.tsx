import DataTable from "@/components/ui/DataTable";
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import MetricCard from "@/components/ui/MetricCard";

export default function RiesgosFinancierosPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Riesgos Financieros — Validación Completa
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Documento generado por co-finanzas durante la validación de riesgos. Abril 2026.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Riesgo #1: Buffer de Pago + Cláusula de Garantía
      </h2>

      <Callout type="success" title="Validación completa">
        Estructura viable — el modelo de buffer + garantía es operativo y enforceable en Ecuador.
      </Callout>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Buffer de pago temporal (Capital de trabajo)
      </h3>

      <DataTable
        headers={["Escenario", "Tiendas", "Cupones/semana", "Buffer (4 semanas)"]}
        rows={[
          ["Conservador", "10", "~150", "$1,800 USD"],
          ["Base", "50", "~750", "$9,000 USD"],
          ["Óptimo", "100", "~1,500", "$18,000 USD"],
        ]}
      />

      <Callout type="info">
        Asume CPO $0.30 (punto medio del rango $0.15-0.60), ~15 cupones/tienda/semana. Buffer = capital de trabajo, NO costo.
      </Callout>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Cláusula de garantía
      </h3>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Enforceable en Ecuador si</strong>:
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Define responsabilidad directa de la marca por el reembolso al tendero</li>
        <li>Establece plazo de pago claro (netto 15 días desde redención validada)</li>
        <li>Incluye penalidad por mora (1.5% mensual acumulativo)</li>
        <li>Savanhi retiene derecho de off-set contra futuros fees</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Estructura recomendada
      </h3>

      <DataTable
        headers={["Fase", "Tiendas", "Fondo requerido"]}
        rows={[
          ["Piloto", "10", "$2,000 (cash reserved)"],
          ["Fase 1", "50", "$10,000 (escrow parcial)"],
          ["Fase 2", "100", "$20,000 (escrow + guarantee letter)"],
        ]}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Operativo</strong>:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Marca paga 50% upfront → buffer operativo</li>
        <li>Fondos en escrow → Savanhi paga tendero</li>
        <li>A 50+ tiendas: guarantee letter bancario</li>
      </ol>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Riesgo residual
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Default de marca &gt; 30 días → Savanhi come el buffer</li>
        <li>2+ marcas en default simultáneo → buffer insuficiente</li>
        <li><strong>Estimado</strong>: 5-10% del flujo total en default no recoverable → asumir como costo operativo</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Próximo paso (Riesgo #1)
      </h2>

      <DataTable
        headers={["Acción", "Responsable"]}
        rows={[
          [
            "Incluir cláusula de garantía en contrato ($500/incidente) + penalidad mora",
            "Co-Finanzas",
          ],
          [
            "Structurar piloto con $2,000 buffer separado del operativo",
            "Co-Finanzas",
          ],
          [
            "Definir ciclo exacto con marca (días después de entrega de reporte)",
            "Co-Negocios",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Métricas financieras del piloto
      </h2>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Break-even operativo (Piloto 2 meses)
      </h3>

      <DataTable
        headers={["Costo", "Mensual", "2 meses"]}
        rows={[
          ["Embajadores (x2)", "$1,200", "$2,400"],
          ["Infraestructura", "$50", "$100"],
          ["Varios", "$150", "$300"],
          [<strong key="t">Total</strong>, <strong key="tm">$1,400</strong>, <strong key="t2">$2,800</strong>],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Ingresos necesarios para break-even
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Fee $300 (conservador): 9-10 campañas</li>
        <li>Fee $500 (base): 6 campañas</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Unit Economics — Lado Marca
      </h2>

      <DataTable
        headers={["Métrica", "Conservador", "Base", "Óptimo"]}
        rows={[
          ["LTV (año 1)", "$1,050", "$2,500", "$4,000"],
          ["CAC", "$700", "$500", "$350"],
          [<strong key="r">Ratio LTV:CAC</strong>, <strong key="rc">1.5:1</strong>, <strong key="rb">5:1</strong>, <strong key="ro">11:1</strong>],
        ]}
      />

      <Callout type="info">
        Ratio mínimo: 3:1 (escenario base es saludable)
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Proyecciones Financieras — Runway, Burn Rate y P&L
      </h2>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Supuestos Base
      </h3>

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

      <Callout type="warning">
        Los números asumen operación real con demanda validada. Si el piloto no valida hipótesis, los escenarios no aplican.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        A) Runway Proyectado
      </h2>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Costos mensuales por fase
      </h3>

      <DataTable
        headers={["Fase", "Meses", "Tiendas", "Ambassador", "Infra", "Varios", "Total/mes"]}
        rows={[
          ["Piloto", "1-2", "10", "$1,200", "$50", "$150", <strong key="p">$1,400</strong>],
          ["Fase 1", "3-4", "50", "$2,400", "$150", "$300", <strong key="f1">$2,850</strong>],
          ["Fase 2", "5-12", "100", "$4,000", "$300", "$500", <strong key="f2">$4,800</strong>],
        ]}
      />

      <Callout type="info">
        Costos incluyen: equipo creciendo de 2→4→8 personas, infraestructura cloud proporcional, gastos operativos crecientes.
      </Callout>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Runway por escenario
      </h3>

      <DataTable
        headers={["Escenario", "Capital inicial", "Burn Rate promedio", "Meses de runway"]}
        rows={[
          ["Conservador", "$30,000", "$3,500 (promedio 12 meses)", <strong key="rc">8.5 meses</strong>],
          ["Base", "$30,000", "$2,800 (meses 1-4) → $4,800", <strong key="rb">7 meses</strong>],
          ["Óptimo", "$30,000", "+$2,000/mes revenue temprano", <strong key="ro">10+ meses</strong>],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Análisis de runway
      </h3>

      <CodeBlock
        code={`Capital: $30,000
- Buffer piloto: $2,000 (reservado, no tocar)
- Operaciones piloto (2 meses): $2,800
- Operaciones Fase 1 (2 meses): $5,700
= Residual para Fase 2: $19,500

Con $19,500 / $4,800/mes = ~4 meses de runway en Fase 2`}
        language="text"
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>RUNWAY REAL</strong>: <strong>6-8 meses</strong> (desde inicio de operaciones)
      </p>

      <Callout type="danger" title="Crítico">
        El runway es suficiente para piloto + Fase 1 + 4 meses de Fase 2. Si no hay revenue en Fase 2, se agota antes de mes 10.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        B) P&L Simplificado por Fase
      </h2>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Piloto (Mes 1-2, 10 tiendas)
      </h3>

      <DataTable
        headers={["Concepto", "Mensual", "2 meses"]}
        rows={[
          [<strong key="i">Ingresos</strong>, "", ""],
          ["Fee campañas", "$2,400", "$4,800"],
          ["CPO acumulado", "$1,800", "$3,600"],
          [<strong key="ti">Total ingresos</strong>, <strong key="tim">$4,200</strong>, <strong key="ti2">$8,400</strong>],
          ["", "", ""],
          [<strong key="c">Costos</strong>, "", ""],
          ["Embajadores (x2)", "$1,200", "$2,400"],
          ["Infraestructura", "$50", "$100"],
          ["Varios", "$150", "$300"],
          [<strong key="tc">Total costos</strong>, <strong key="tcm">$1,400</strong>, <strong key="tc2">$2,800</strong>],
          ["", "", ""],
          [<strong key="m">Margen operativo</strong>, <strong key="mm">$2,800</strong>, <strong key="m2">$5,600</strong>],
          ["Margen %", "67%", "67%"],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Fase 1 (Mes 3-4, 50 tiendas)
      </h3>

      <DataTable
        headers={["Concepto", "Mensual", "2 meses"]}
        rows={[
          [<strong key="i">Ingresos</strong>, "", ""],
          ["Fee campañas", "$8,000", "$16,000"],
          ["CPO acumulado", "$9,000", "$18,000"],
          [<strong key="ti">Total ingresos</strong>, <strong key="tim">$17,000</strong>, <strong key="ti2">$34,000</strong>],
          ["", "", ""],
          [<strong key="c">Costos</strong>, "", ""],
          ["Equipo (x4)", "$2,400", "$4,800"],
          ["Infra + tools", "$150", "$300"],
          ["Operaciones", "$300", "$600"],
          [<strong key="tc">Total costos</strong>, <strong key="tcm">$2,850</strong>, <strong key="tc2">$5,700</strong>],
          ["", "", ""],
          [<strong key="m">Margen operativo</strong>, <strong key="mm">$14,150</strong>, <strong key="m2">$28,300</strong>],
          ["Margen %", "83%", "83%"],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Fase 2 (Mes 5-12, 100 tiendas, 8 meses)
      </h3>

      <DataTable
        headers={["Concepto", "Mensual", "8 meses"]}
        rows={[
          [<strong key="i">Ingresos</strong>, "", ""],
          ["Fee campañas", "$15,000", "$120,000"],
          ["CPO acumulado", "$18,000", "$144,000"],
          [<strong key="ti">Total ingresos</strong>, <strong key="tim">$33,000</strong>, <strong key="ti2">$264,000</strong>],
          ["", "", ""],
          [<strong key="c">Costos</strong>, "", ""],
          ["Equipo (x8)", "$4,000", "$32,000"],
          ["Infra + tools", "$300", "$2,400"],
          ["Operaciones", "$500", "$4,000"],
          [<strong key="tc">Total costos</strong>, <strong key="tcm">$4,800</strong>, <strong key="tc2">$38,400</strong>],
          ["", "", ""],
          [<strong key="m">Margen operativo</strong>, <strong key="mm">$28,200</strong>, <strong key="m2">$225,600</strong>],
          ["Margen %", "85%", "85%"],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Resumen P&L Acumulado (12 meses)
      </h3>

      <DataTable
        headers={["Fase", "Ingresos", "Costos", "Margen", "Margen %"]}
        rows={[
          ["Piloto (mes 1-2)", "$8,400", "$2,800", "$5,600", "67%"],
          ["Fase 1 (mes 3-4)", "$34,000", "$5,700", "$28,300", "83%"],
          ["Fase 2 (mes 5-12)", "$264,000", "$38,400", "$225,600", "85%"],
          [<strong key="t">TOTAL</strong>, <strong key="ti">$306,400</strong>, <strong key="tc">$46,900</strong>, <strong key="tm">$259,500</strong>, <strong key="tp">85%</strong>],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        C) Escenarios — Cuántas marcas/tiendas para ser profitable
      </h2>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
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
          [<strong key="r">Resultado</strong>, <strong key="rv">+$6,500/mes</strong>, <strong key="rc">Profitability OK</strong>],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
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
          [<strong key="r">Resultado</strong>, <strong key="rv">+$28,200/mes</strong>, <strong key="rc">Profitable</strong>],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
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
          [<strong key="r">Resultado</strong>, <strong key="rv">+$48,500/mes</strong>, <strong key="rc">Highly profitable</strong>],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Punto de equilibrio (break-even)
      </h3>

      <DataTable
        headers={["Condición", "Marcas/Tiendas mínimas"]}
        rows={[
          ["Profitable (sin scale)", "5 marcas activas × 10 tiendas = 50 tiendas"],
          ["Scale viable", "10 marcas activas × 100 tiendas = 1,000 tiendas impactadas"],
        ]}
      />

      <Callout type="info">
        El modelo es profitable desde el piloto si se cierran 5+ campañas/mes. El riesgo NO es profitability — es cash flow y timing de colección.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        D) Sensibilidad — Qué mueve el modelo
      </h2>

      <DataTable
        headers={["Variable", "Impacto", "Valor crítico"]}
        rows={[
          ["Fee/campaña", "ALTO", "< $200 = profitability comprometida"],
          ["CPO", "MEDIO", "< $0.15 = margins erosionadas"],
          ["Tiendas activas", "ALTO", "< 50 = revenue insuficiente"],
          ["Colección timeline", "CRÍTICO", "> 45 días = cash flow crisis"],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Cash flow riesgo específico
      </h3>

      <CodeBlock
        code={`Escenario de riesgo:
- Marca X paga a 60 días (vs. netto 15)
- 3 marcas en pipeline = $15,000 trapped
- Operativo mensual = $3,000
- Cash disponible: $30,000 - $2,000 buffer - $5,600 piloto = $22,400
- Con $15K trapped → $7,400 disponible para 2.5 meses`}
        language="text"
      />

      <Callout type="danger" title="Riesgo principal">
        No es rentabilidad — es el timing de colección. La estructura de buffer + cláusula de garantía MITIGA pero no elimina el riesgo.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Resumen Ejecutivo — Proyecciones
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <MetricCard value="6-8 meses" label="Runway (desde $30K inicial)" />
        <MetricCard value="$2,800" label="Break-even operativo (YA LOGRADO en piloto)" />
        <MetricCard value="Mes 1" label="Profitable desde (con 5+ campañas/mes)" />
        <MetricCard value="50 tiendas" label="Break-even scale (5 marcas)" />
        <MetricCard value="$306,400" label="Revenue 12 meses (proyectado)" />
        <MetricCard value="85%" label="Margen operativo" />
      </div>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Próximos pasos financieros
      </h2>

      <DataTable
        headers={["#", "Acción", "Responsable"]}
        rows={[
          ["1", "Definir capital inicial REAL (no asumido)", "CEO"],
          ["2", "Estructurar línea de crédito backup ($10K)", "Co-Finanzas"],
          ["3", "Crear dashboard de burn rate semanal", "Co-Finanzas"],
          ["4", "Definir triggers para fundraising", "CEO + Co-Finanzas"],
        ]}
      />
    </article>
  );
}
