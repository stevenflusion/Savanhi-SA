import Link from "next/link";
import DataTable from "@/components/ui/DataTable";
import StatusBadge from "@/components/ui/StatusBadge";
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";

export default function AlianzasPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Estrategia de Alianzas Institucionales
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        La estrategia de alianzas de Savanhi se construye sobre un principio simple: cada actor reduce su riesgo porque el anterior ya validó. Esto se llama <strong>efecto ancla institucional</strong>.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Los 3 actores y sus roles
      </h2>

      <DataTable
        headers={["Actor", "Tiene", "Necesita", "Teme"]}
        rows={[
          [
            <strong key="s">Savanhi</strong>,
            "Tech + datos + canal",
            "Adopción rápida + credibilidad",
            "No llegar al tendero",
          ],
          [
            <strong key="g">GAD Calderón</strong>,
            "Legitimidad + padrón + alcance comunitario",
            "Métricas de impacto social",
            "Asociarse a algo que falle",
          ],
          [
            <strong key="b">Banco Pichincha</strong>,
            "Capital + infraestructura financiera",
            "Cartera nueva bancarizada con bajo riesgo",
            "Riesgo de impago + reputación",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Lógica de encadenamiento
      </h2>

      <CodeBlock
        code={`GAD Calderón
└── Legitima ante el Banco y ante los tenderos

    Banco Pichincha ve:
    └── Aval institucional ✓
    └── Base de tenderos real ✓
    └── Datos transaccionales ✓
    └── ENTRA

        Marcas ven:
        └── Banco respaldando ✓
        └── GAD avalando ✓
        └── Tenderos activos ✓
        └── ENTRAN`}
        language="text"
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Cada actor reduce su riesgo porque el anterior ya validó. Esto se llama <strong>efecto ancla institucional</strong>.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Qué ofrece Savanhi a cada actor
      </h2>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">Al GAD Calderón</h3>
      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Mapa georreferenciado de tiendas activas en la parroquia</li>
        <li>Métricas de impacto social medibles (tenderos digitalizados, transacciones, cobertura por zona)</li>
        <li>Narrativa de gestión: <em>"digitalizamos el comercio popular de Calderón"</em></li>
        <li>Visibilidad política sin costo para la administración</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">Al Banco Pichincha</h3>
      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Score de comportamiento comercial por tendero (historial transaccional real)</li>
        <li>Canal de distribución ya instalado y onboarding hecho</li>
        <li>Originación de microcréditos: Savanhi pre-califica, el Banco presta</li>
        <li>Clientes nuevos bancarizados con riesgo ya reducido</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Qué pide Savanhi a cada actor
      </h2>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">Al GAD Calderón</h3>
      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Acceso al padrón de tiendas registradas en la parroquia</li>
        <li>Difusión en canales oficiales, redes y boletines</li>
        <li>Presencia en ferias y eventos de emprendimiento que ya organizan</li>
        <li>Carta de respaldo institucional (documento, no co-ownership)</li>
        <li>Conexión con otros GADs para expansión futura</li>
      </ul>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">Al Banco Pichincha</h3>
      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Comisión por originación de cada crédito colocado vía Savanhi (1–3%)</li>
        <li>Co-branding en la app (ellos pagan visibilidad)</li>
        <li>Condiciones preferenciales en procesamiento de pagos</li>
        <li>Fondo piloto de crédito: $50K–$100K para 20 tenderos seleccionados con historial</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        El límite que no se cruza nunca
      </h2>

      <DataTable
        headers={["❌ Nunca aceptar", "✅ En cambio"]}
        rows={[
          [
            <StatusBadge key="n1" status="reformulado">Co-administración de la plataforma</StatusBadge>,
            <StatusBadge key="y1" status="validado">Aliado de difusión institucional</StatusBadge>,
          ],
          [
            <StatusBadge key="n2" status="reformulado">Aprobación previa de contenidos</StatusBadge>,
            <StatusBadge key="y2" status="validado">Acceso a reportes de impacto trimestral</StatusBadge>,
          ],
          [
            <StatusBadge key="n3" status="reformulado">Participación en decisiones técnicas</StatusBadge>,
            <StatusBadge key="y3" status="validado">Mesa de seguimiento consultiva sin voto</StatusBadge>,
          ],
          [
            <StatusBadge key="n4" status="reformulado">Propiedad compartida de datos</StatusBadge>,
            <StatusBadge key="y4" status="validado">Acceso a dashboards públicos agregados</StatusBadge>,
          ],
          [
            <StatusBadge key="n5" status="reformulado">Exclusividad para el Banco</StatusBadge>,
            <StatusBadge key="y5" status="validado">Co-branding preferencial por 12 meses máximo</StatusBadge>,
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Framing para las reuniones
      </h2>

      <Callout type="info" title="Con el GAD">
        <em>"Nosotros digitalizamos el comercio de barrio. Ustedes tienen el mandato de fortalecer la economía popular. Esto es una alianza de objetivos comunes. Nosotros operamos, ustedes validan y difunden."</em>
      </Callout>

      <Callout type="info" title="Con el Banco">
        <em>"Tenemos X tiendas con 90 días de historial transaccional verificado. Podemos ser el canal de originación de microcréditos para ese segmento. Vos ponés el capital y el producto, nosotros ponemos el score y el canal."</em>
      </Callout>
    </article>
  );
}
