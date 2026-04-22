import DataTable from "@/components/ui/DataTable";
import CodeBlock from "@/components/ui/CodeBlock";
import StatusBadge from "@/components/ui/StatusBadge";

export default function RunwayPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Runway Proyectado
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Proyecciones financieras basadas en capital inicial de $30,000 USD, con
        costos escalonados por fase y tres escenarios de runway.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Costos mensuales por fase
      </h2>

      <DataTable
        headers={["Fase", "Meses", "Tiendas", "Ambassador", "Infra", "Varios", "Total/mes"]}
        rows={[
          ["Piloto", "1–2", "10", "$1,200", "$50", "$150", <strong key="p1">$1,400</strong>],
          ["Fase 1", "3–4", "50", "$2,400", "$150", "$300", <strong key="p2">$2,850</strong>],
          ["Fase 2", "5–12", "100", "$4,000", "$300", "$500", <strong key="p3">$4,800</strong>],
        ]}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Los costos incluyen equipo creciente de 2 → 4 → 8 personas, infraestructura
        cloud proporcional y gastos operativos crecientes.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Runway por escenario
      </h2>

      <DataTable
        headers={["Escenario", "Capital inicial", "Burn Rate promedio", "Meses de runway"]}
        rows={[
          [
            <strong key="c">Conservador</strong>,
            "$30,000",
            "$3,500 (promedio 12 meses)",
            <StatusBadge key="c1" status="confirmado">8.5 meses</StatusBadge>,
          ],
          [
            <strong key="b">Base</strong>,
            "$30,000",
            "$2,800 (meses 1-4) → $4,800",
            <StatusBadge key="b1" status="reformulado">7 meses</StatusBadge>,
          ],
          [
            <strong key="o">Óptimo</strong>,
            "$30,000",
            "+$2,000/mes revenue temprano",
            <StatusBadge key="o1" status="validado">10+ meses</StatusBadge>,
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Análisis de runway
      </h2>

      <CodeBlock
        language="text"
        code={`Capital: $30,000
- Buffer piloto: $2,000 (reservado, intransferible)
- Operaciones piloto (2 meses): $2,800
- Operaciones Fase 1 (2 meses): $5,700
= Residual para Fase 2: $19,500

Con $19,500 / $4,800/mes = ~4 meses de runway en Fase 2`}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>RUNWAY REAL: 6-8 meses</strong> (desde inicio de operaciones).
      </p>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <StatusBadge status="reformulado">CRÍTICO</StatusBadge>{" "}
        El runway es suficiente para piloto + Fase 1 + 4 meses de Fase 2.
        Si no hay revenue en Fase 2, se agota antes de mes 10.
      </p>
    </article>
  );
}
