import DataTable from "@/components/ui/DataTable";
import CodeBlock from "@/components/ui/CodeBlock";
import Callout from "@/components/ui/Callout";
import StatusBadge from "@/components/ui/StatusBadge";

export default function PilotoCalderonPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Fases de Ejecución y Piloto Calderón
      </h1>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Secuencia de movimientos
      </h2>

      <CodeBlock
        language="text"
        code={`FASE 0 → Preparación interna
FASE 1 → GAD Calderón (primero, sin MVP terminado)
FASE 2 → Piloto 90 días en Calderón
FASE 3 → Banco Pichincha (solo con datos reales del piloto)`}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        FASE 0 — Preparación interna
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <em>Mientras el MVP está en desarrollo</em>
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Deck de 10 slides máximo (diferenciado por actor, no genérico)</li>
        <li>Zona piloto específica definida: un sector de Calderón (ej. Carapungo)</li>
        <li>Número objetivo concreto: <em>&quot;50 tiendas activas en 90 días&quot;</em></li>
        <li>Métricas de éxito del piloto definidas antes de arrancar</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        FASE 1 — GAD Calderón
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <em>Con demo funcional o wireframes, no requiere MVP completo</em>
      </p>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Por qué primero el GAD
      </h3>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Menor exigencia de tracción. Actor de impacto social, no financiero. Su aval es
        el argumento para llegar al Banco.
      </p>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Qué se firma en esta fase
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Carta de intención de cooperación <em>(no convenio todavía)</em></li>
        <li>Acceso al padrón comercial de la parroquia</li>
        <li>Compromiso de difusión en sus canales</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Qué NO se firma
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Reportes obligatorios antes de tener datos reales</li>
        <li>Nada que les dé voz en decisiones de producto</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Interlocutor correcto dentro del GAD
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Dirección de Desarrollo Económico o Economía Popular</li>
        <li>No firmar nada solo con comunicación o RRPP</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        FASE 2 — Piloto 90 días en Calderón
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <em>Con MVP funcionando</em>
      </p>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Métricas mínimas para ir al Banco
      </h3>

      <DataTable
        headers={["Métrica", "Target"]}
        rows={[
          ["Tiendas activas", "50"],
          ["Transacciones registradas", "500+"],
          ["Tenderos con historial 60+ días", "20"],
          ["Zona cubierta", "1 sector definido"],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Rol del GAD en esta fase
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Convocatorias en juntas parroquiales</li>
        <li>Presencia en ferias de emprendimiento</li>
        <li>Validación ante tenderos desconfiados</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Lo que se construye en estos 90 días
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Historial transaccional real por tienda</li>
        <li>Score de comportamiento comercial</li>
        <li>Casos de éxito concretos (al menos 1 tendero documentado)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        FASE 3 — Banco Pichincha
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <em>Solo después de tener datos del piloto</em>
      </p>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Cómo llegar
      </h3>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Contacto de RRHH → presentación a Gerencia de Banca Comunal o Innovación Digital.
        El contacto abre la puerta, no negocia.
      </p>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Áreas correctas dentro del Banco
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          Gerencia de Banca Comunal / Microfinanzas → para el producto de crédito
        </li>
        <li>
          Gerencia de Innovación o Transformación Digital → para la alianza tecnológica
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Qué se lleva a esa reunión
      </h3>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Datos del piloto de Calderón</li>
        <li>Aval del GAD firmado</li>
        <li>Propuesta concreta de producto financiero (lending embebido)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Concepto clave: Lending Embebido
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Savanhi no es solo una app. Con historial transaccional se convierte en{" "}
        <strong>originador de crédito</strong>:
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>El Banco no le presta al tendero desconocido</li>
        <li>Le presta al tendero con 6 meses de historial en Savanhi</li>
        <li>Savanhi cobra comisión por cada crédito colocado</li>
      </ul>

      <Callout type="success" title="Valor económico negociable">
        Esto tiene valor económico negociable desde la primera conversación con el Banco.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Riesgos y mitigaciones
      </h2>

      <DataTable
        headers={["Riesgo", "Mitigación"]}
        rows={[
          [
            "GAD cambia autoridades",
            "Convenio firmado institucionalmente, no acuerdo verbal personal",
          ],
          [
            "Banco pide exclusividad",
            "Nunca. Máximo co-branding preferencial por 12 meses",
          ],
          [
            "Piloto fracasa en Calderón",
            "Definir métricas de éxito desde el día 1, no después",
          ],
          [
            "Contacto del Banco no tiene llegada real",
            "Pedirle explícitamente una presentación, no que intermedie",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Próximos pasos inmediatos
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Terminar el MVP (o llegar a demo funcional)</li>
        <li>Armar el deck diferenciado por actor</li>
        <li>Primer contacto informal con GAD Calderón</li>
        <li>Usar contacto del Banco solo para conseguir nombre y mail de la persona correcta en Banca Comunal</li>
      </ol>
    </article>
  );
}
