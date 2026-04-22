import DataTable from "@/components/ui/DataTable";
import CodeBlock from "@/components/ui/CodeBlock";
import Callout from "@/components/ui/Callout";
import StatusBadge from "@/components/ui/StatusBadge";

export default function OkrsPilotoPage() {
  return (
    <article className="max-w-4xl">
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Piloto — Mes 1-2
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        El piloto es la unidad mínima de validación. No buscamos escalar, buscamos
        aprender. Cada decisión de diseño en esta fase prioriza la observabilidad
        sobre la eficiencia.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Metadato del piloto
      </h2>

      <DataTable
        headers={["Metadato", "Valor"]}
        rows={[
          ["Objetivo", "Validar que el modelo funciona en campo"],
          [
            "KR Principal",
            "Tasa redención ≥15%, 500+ cupones redimidos",
          ],
          [
            "Región",
            "1-2 barrios piloto (Quito norte: Carcelén/Calderón)",
          ],
          ["Capital", "$2,800 (break-even operativo)"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        OKR Piloto
      </h2>

      <DataTable
        headers={["#", "Objetivo Clave (O)", "Key Result (KR)", "Métrica", "Meta"]}
        rows={[
          [
            "O1",
            "Validar redención real",
            "KR1: Tasa redención ≥15%",
            "Redimidos / Activados",
            "≥15%",
          ],
          [
            "O1",
            "",
            "KR2: Cupones redimidos ≥500",
            "Cupones únicos redimidos",
            "≥500",
          ],
          [
            "O2",
            "Validar aceptación del tendero",
            "KR3: Tiendas con ≥1 redención ≥60%",
            "Tiendas con pedido/semana",
            "≥60%",
          ],
          [
            "O2",
            "",
            "KR4: NPS tendero ≥7/10",
            "Encuesta NPS (1-10)",
            "≥7",
          ],
          [
            "O3",
            "Validar willingness to pay marca",
            "KR5: ROAS ≥3x",
            "Revenue campaña / Costo campaña",
            "≥3x",
          ],
          [
            "O3",
            "",
            "KR6: 1 marca ancla activa",
            "Campañas lanzadas",
            "≥1",
          ],
        ]}
      />

      <Callout type="info" title="¿Por qué estos OKRs?">
        O1 valida que el incentivo funciona (demanda). O2 valida que el tendero
        quiere usar la plataforma (supply). O3 valida que la marca paga
        (monetización). Sin los tres, el modelo no cierra.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Dashboard Piloto
      </h2>

      <DataTable
        headers={["KPI", "Frecuencia", "Meta", "Status", "Notas"]}
        rows={[
          [
            "Cupones activados",
            "Diario",
            "200+/semana",
            "—",
            "Leading indicator",
          ],
          [
            "Cupones redimidos",
            "Diario",
            "125+/semana",
            "—",
            "KR principal",
          ],
          [
            "Tasa de redención",
            "Semanal",
            "≥15%",
            "—",
            "KR principal",
          ],
          [
            "Tiendas activas",
            "Semanal",
            "20-30",
            "—",
            "Supply side",
          ],
          [
            "Tiendas con redención",
            "Semanal",
            "≥60%",
            "—",
            "KR O2",
          ],
          [
            "NPS tendero",
            "Quincenal",
            "≥7/10",
            "—",
            "KR O2",
          ],
          [
            "ROAS marca",
            "Por campaña",
            "≥3x",
            "—",
            "KR O3",
          ],
          [
            "Incidentes SLA",
            "Semanal",
            "<5%",
            "—",
            "Operation health",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Embudo de usuario
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        El embudo describe la conversión desde que un tendero descarga la app
        hasta que redime un cupón. Cada etapa tiene una métrica de conversión
        objetivo.
      </p>

      <CodeBlock
        language="diagram"
        code={`Descarga App
    │ 100% (baseline)
    ▼
Registro completo
    │ ~85%  ← pierde quienes no tienen RUC o no entregan datos
    ▼
Onboarding (escanea 1er producto)
    │ ~60%  ← fricción máxima: requiere comportamiento nuevo
    ▼
Activa 1er cupón
    │ ~40%  ← el tendero debe entender el valor del cupón
    ▼
Redime 1er cupón
    │ ~15%  ← KR principal: valida que el modelo funciona end-to-end
    ▼
Redime 2do+ cupón
    │ ~8%   ← indica retención real, no solo curiosidad`}
      />

      <Callout type="warning" title="Punto de fricción crítico">
        El onboarding (escaneo del primer producto) es donde más se pierde.
        Si la conversión descarga → onboarding cae por debajo del 50%, el
        piloto se considera en riesgo y se activa el protocolo de "onboarding
        asistido" (visita de campo en 24h).
      </Callout>
    </article>
  );
}
