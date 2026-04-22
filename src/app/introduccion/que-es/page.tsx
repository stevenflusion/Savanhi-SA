import Link from "next/link";
import Callout from "@/components/ui/Callout";
import MetricCard from "@/components/ui/MetricCard";

export default function QueEsPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        ¿Qué es Savanhi?
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Savanhi es una plataforma digital que conecta tiendas de barrio con marcas de consumo masivo
        mediante cupones digitales inteligentes. Nuestra misión es revitalizar el comercio de
        proximidad, devolviendo competitividad a los tenderos frente a la expansión de los
        supermercados de descuento.
      </p>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Somos una startup ecuatoriana con sede en Quito, construida desde el barrio para el barrio.
        Entendemos que las tiendas de conveniencia no son solo puntos de venta: son centros
        comunitarios, fuentes de empleo local y pilares de la economía informal que sostiene a
        millones de familias en Ecuador y Latinoamérica.
      </p>

      <Callout type="info" title="Dato clave">
        En Ecuador existen más de 85.000 tiendas de barrio. Representan el 42% del canal tradicional
        de consumo masivo y emplean a más de 200.000 personas directamente.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Los 4 pilares del producto
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <MetricCard
          value="1"
          label="Descubrimiento Hiperlocal"
          change="El cliente encuentra su tienda más cercana con promos activas en tiempo real"
          gradient="from-[#7A5197] via-[#BB5098] to-[#F47F6B]"
        />
        <MetricCard
          value="2"
          label="Motor de Promociones"
          change="Marcas financian cupones digitales que el tendero ejecuta sin inversión propia"
          gradient="from-[#BB5098] via-[#F47F6B] to-[#F86624]"
        />
        <MetricCard
          value="3"
          label="Pagos Digitales DeUna"
          change="Integración con DeUna para pagos cashless, reembolsos automáticos y control de caja"
          gradient="from-[#F47F6B] via-[#F86624] to-[#FFB32B]"
        />
        <MetricCard
          value="4"
          label="Delivery Hiperlocal"
          change="Repartidores del barrio entregan pedidos en minutos, no en horas"
          gradient="from-[#FFB32B] via-[#F5C63C] to-[#2BA84A]"
        />
      </div>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cómo funciona en 3 pasos
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          <strong>La marca crea una campaña</strong> — define producto, descuento, zonas geográficas
          y presupuesto desde el panel web de Savanhi.
        </li>
        <li>
          <strong>El tendero activa el cupón</strong> — recibe una notificación en su app, acepta
          la campaña con un toque y el cupón aparece en la app del consumidor de su barrio.
        </li>
        <li>
          <strong>El consumidor redime y paga</strong> — encuentra la promo, va a la tienda (o pide
          delivery), muestra el cupón y paga con DeUna. La marca recibe datos de redención en
          tiempo real.
        </li>
      </ul>

      <Callout type="success" title="Resultado">
        Un modelo donde todos ganan: el consumidor ahorra, el tendero vende más sin arriesgar
        capital y la marca accede a un canal digital medible en tiendas de barrio por primera vez.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Visión a largo plazo
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Savanhi aspira a convertirse en la infraestructura digital del comercio de proximidad en
        Latinoamérica. Nuestro objetivo es que cada tienda de barrio, sin importar su tamaño,
        tenga acceso a las mismas herramientas digitales que una gran cadena de retail: promociones
        inteligentes, pagos cashless, delivery local y crédito basado en datos reales de venta.
      </p>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Para profundizar en el problema que resolvemos, visita{" "}
        <Link href="/introduccion/problema-solucion" className="text-[#BB5098] hover:underline">
          Problemática y Resolución
        </Link>
        . Para entender el valor que entregamos a cada actor, revisa{" "}
        <Link href="/negocio/propuesta-valor" className="text-[#BB5098] hover:underline">
          Propuesta de Valor
        </Link>
        .
      </p>
    </article>
  );
}
