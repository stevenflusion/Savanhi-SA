import DataTable from "@/components/ui/DataTable";
import StatusBadge from "@/components/ui/StatusBadge";
import Callout from "@/components/ui/Callout";

export default function RiesgosPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Riesgo #1: Buffer de Pago + Cláusula de Garantía
      </h1>

      <StatusBadge status="validado">VALIDACIÓN COMPLETA — Estructura viable</StatusBadge>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Buffer de pago temporal (Capital de trabajo)
      </h2>

      <DataTable
        headers={["Escenario", "Tiendas", "Cupones/semana", "Buffer (4 semanas)"]}
        rows={[
          ["Conservador", "10", "~150", "$1,800 USD"],
          ["Base", "50", "~750", "$9,000 USD"],
          ["Óptimo", "100", "~1,500", "$18,000 USD"],
        ]}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Asume CPO $0.30 (punto medio del rango $0.15-0.60), ~15 cupones/tienda/semana.
        Buffer = capital de trabajo, NO costo.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula de garantía
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Enforceable en Ecuador si</strong>:
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Define responsabilidad directa de la marca por el reembolso al tendero</li>
        <li>Establece plazo de pago claro (netto 15 días desde redención validada)</li>
        <li>Incluye penalidad por mora (1.5% mensual acumulativo)</li>
        <li>Savanhi retiene derecho de off-set contra futuros fees</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Estructura recomendada
      </h2>

      <DataTable
        headers={["Fase", "Tiendas", "Fondo requerido"]}
        rows={[
          ["Piloto", "10", "$2,000 (cash reserved)"],
          ["Fase 1", "50", "$10,000 (escrow parcial)"],
          ["Fase 2", "100", "$20,000 (escrow + guarantee letter)"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Operativo
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Marca paga 50% upfront → buffer operativo</li>
        <li>Fondos en escrow → Savanhi paga tendero</li>
        <li>A 50+ tiendas: guarantee letter bancario</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Riesgo residual
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Default de marca &gt; 30 días → Savanhi come el buffer</li>
        <li>2+ marcas en default simultáneo → buffer insuficiente</li>
        <li>
          <strong>Estimado</strong>: 5-10% del flujo total en default no recoverable
          → asumir como costo operativo
        </li>
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

      <Callout type="danger" title="Riesgo principal">
        No es rentabilidad — es el <strong>timing de colección</strong>. La estructura
        de buffer + cláusula de garantía mitiga pero no elimina el riesgo.
      </Callout>
    </article>
  );
}
