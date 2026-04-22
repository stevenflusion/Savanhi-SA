import DataTable from "@/components/ui/DataTable";
import CodeBlock from "@/components/ui/CodeBlock";
import StatusBadge from "@/components/ui/StatusBadge";
import Callout from "@/components/ui/Callout";

export default function UnitEconomicsPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Unit Economics y Sensibilidad
      </h1>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Unit Economics — Lado Marca
      </h2>

      <DataTable
        headers={["Métrica", "Conservador", "Base", "Óptimo"]}
        rows={[
          ["LTV (año 1)", "$1,050", "$2,500", "$4,000"],
          ["CAC", "$700", "$500", "$350"],
          [
            <strong key="r">Ratio LTV:CAC</strong>,
            <StatusBadge key="c" status="reformulado">1.5:1</StatusBadge>,
            <StatusBadge key="b" status="validado">5:1</StatusBadge>,
            <StatusBadge key="o" status="validado">11:1</StatusBadge>,
          ],
        ]}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Ratio mínimo saludable: <strong>3:1</strong>. El escenario base ya es saludable.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Métricas financieras del piloto — Break-even operativo
      </h2>

      <DataTable
        headers={["Costo", "Mensual", "2 meses"]}
        rows={[
          ["Embajadores (x2)", "$1,200", "$2,400"],
          ["Infraestructura", "$50", "$100"],
          ["Varios", "$150", "$300"],
          [<strong key="t">Total</strong>, <strong key="tm">$1,400</strong>, <strong key="t2">$2,800</strong>],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Ingresos necesarios para break-even
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Fee $300 (conservador): 9-10 campañas</li>
        <li>Fee $500 (base): 6 campañas</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Sensibilidad — Qué mueve el modelo
      </h2>

      <DataTable
        headers={["Variable", "Impacto", "Umbral crítico"]}
        rows={[
          [
            "Fee/campaña",
            <StatusBadge key="i1" status="reformulado">ALTO</StatusBadge>,
            "< $200 = profitability comprometida",
          ],
          [
            "CPO",
            <StatusBadge key="i2" status="confirmado">MEDIO</StatusBadge>,
            "< $0.15 = margins erosionadas",
          ],
          [
            "Tiendas activas",
            <StatusBadge key="i3" status="reformulado">ALTO</StatusBadge>,
            "< 50 = revenue insuficiente",
          ],
          [
            "Colección timeline",
            <StatusBadge key="i4" status="reformulado">CRÍTICO</StatusBadge>,
            "> 45 días = cash flow crisis",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cash flow riesgo específico
      </h2>

      <CodeBlock
        language="text"
        code={`Escenario de riesgo:
- Marca X paga a 60 días (vs. netto 15)
- 3 marcas en pipeline = $15,000 trapped
- Operativo mensual = $3,000
- Cash disponible: $30,000 - $2,000 buffer - $5,600 piloto = $22,400
- Con $15K trapped → $7,400 disponible para 2.5 meses`}
      />

      <Callout type="danger" title="RIESGO PRINCIPAL">
        No es rentabilidad — es el <strong>timing de colección</strong>. La estructura
        de buffer + cláusula de garantía MITIGA pero no elimina el riesgo.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Resumen Ejecutivo — Proyecciones
      </h2>

      <DataTable
        headers={["Métrica", "Valor"]}
        rows={[
          [<strong key="r">Runway</strong>, "6-8 meses (desde $30K inicial)"],
          [<strong key="be">Break-even operativo</strong>, "$2,800 (YA LOGRADO en piloto)"],
          [<strong key="pf">Profitable desde</strong>, "Mes 1 (con 5+ campañas/mes)"],
          [<strong key="bs">Break-even scale</strong>, "50 tiendas (5 marcas)"],
          [<strong key="rv">Revenue 12 meses</strong>, "$306,400 (proyectado)"],
          [<strong key="mo">Margen operativo</strong>, <StatusBadge key="m" status="validado">85%</StatusBadge>],
        ]}
      />
    </article>
  );
}
