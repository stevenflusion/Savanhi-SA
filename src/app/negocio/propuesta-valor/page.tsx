import Link from "next/link";
import DataTable from "@/components/ui/DataTable";
import Callout from "@/components/ui/Callout";

export default function PropuestaValorPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Propuesta de Valor por Actor
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Savanhi opera un marketplace de tres lados: tendero, consumidor y marca. Cada actor
        recibe un valor diferenciado que solo es posible porque los otros dos participan activamente
        en la plataforma. A continuación, desglosamos el valor entregado a cada uno.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Para el Tendero
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          <strong>Su tienda en el bolsillo del cliente del barrio.</strong> Savanhi posiciona la
          tienda del tendero en la app del consumidor, con horarios, productos disponibles y
          promociones activas.
        </li>
        <li>
          <strong>Ofertas de marcas sin poner dinero propio.</strong> La marca financia el
          descuento; el tendero ejecuta la campaña y recibe el reembolso semanalmente en su cuenta
          DeUna.
        </li>
        <li>
          <strong>Visibilidad digital sin necesitar saber de tecnología.</strong> El onboarding
          lo hace un Embajador de Barrio presencialmente. La app está diseñada para usuarios con
          baja alfabetización digital.
        </li>
        <li>
          <strong>Acceso futuro a crédito basado en historial real de ventas.</strong> Cada
          transacción genera un score crediticio. A los 6 meses, el tendero puede acceder a
          préstamos de capital de trabajo con tasas preferenciales.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Para el Consumidor
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          <strong>Ofertas reales de marcas en tiendas de su barrio.</strong> Igual que en el
          supermercado, pero a pasos de casa. Sin filas, sin estacionamiento, sin exponerse a
          inseguridad.
        </li>
        <li>
          <strong>Notificaciones cuando hay una promo activa cerca.</strong> Geolocalización
          inteligente que alerta al consumidor cuando una tienda de su ruta habitual tiene una
          campaña vigente.
        </li>
        <li>
          <strong>Compra desde casa, retiro en tienda.</strong> Modalidad pick-and-go: el
          consumidor pide por la app, paga con DeUna y recoge en la tienda sin esperar. En
          ciertos barrios, también está disponible delivery hiperlocal.
        </li>
        <li>
          <strong>Comparación de precios entre tiendas del barrio.</strong> El consumidor ve
          quién tiene la promo más conveniente en su zona y elige dónde redimir.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Para la Marca
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          <strong>Canal digital medible en tiendas de barrio por primera vez.</strong> Hoy las
          marcas invierten en trade marketing tradicional (volantes, displays, promotoras) sin
          saber cuánto vendieron realmente. Savanhi cambia eso.
        </li>
        <li>
          <strong>Datos de sell-out en tiempo real por zona, tienda y producto.</strong> El panel
          web muestra redenciones, ticket promedio, frecuencia de compra y mapa de calor
          geográfico.
        </li>
        <li>
          <strong>Presupuesto de trade marketing con ROI comprobable.</strong> La marca paga solo
          por cupones redimidos, no por impresiones. Cada dólar invertido tiene un resultado
          directamente medible.
        </li>
        <li>
          <strong>Panel superior a NielsenIQ.</strong> Datos en tiempo real vs. estimaciones
          periódicas. Savanhi ofrece granularidad a nivel de tienda individual, no solo a nivel
          de canal o región.
        </li>
      </ul>

      <Callout type="info" title="Equilibrio de valor">
        La plataforma solo funciona si los tres actores obtienen valor simultáneamente. Un
        desequilibrio en cualquiera de los lados colapsa el modelo. Por eso el diseño de
        incentivos y la operación de onboarding son tan críticos.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Definiciones Operativas — Actores Savanhi
      </h2>

      <DataTable
        headers={["Término", "Definición"]}
        rows={[
          [
            <strong key="tendero">Tendero</strong>,
            "Dueño o encargado de una tienda de barrio registrada en Savanhi. Actor central del modelo.",
          ],
          [
            <strong key="consumidor">Consumidor</strong>,
            "Usuario final que busca productos y promos en tiendas de su barrio.",
          ],
          [
            <strong key="marca">Marca</strong>,
            "Empresa de consumo masivo que financia campañas de promoción en tiendas. Accede solo al panel web, no a la app móvil.",
          ],
          [
            <strong key="repartidor">Repartidor</strong>,
            "Persona del barrio que ejecuta entregas en modalidad Delivery. En MVP es asignado manualmente por el tendero.",
          ],
          [
            <strong key="embajador">Embajador de Barrio</strong>,
            "Persona contratada por Savanhi para hacer el onboarding presencial de tenderos en los barrios piloto.",
          ],
          [
            <strong key="marca-ancla">Marca Ancla</strong>,
            "Primera marca con la que Savanhi cierra un contrato de campaña. Define la viabilidad del modelo.",
          ],
          [
            <strong key="admin">Admin</strong>,
            "Rol interno de Savanhi con acceso total al sistema para operación y soporte.",
          ],
        ]}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Para conocer cómo generamos ingresos a partir de este modelo de valor, revisa{" "}
        <Link href="/negocio/monetizacion" className="text-[#BB5098] hover:underline">
          Modelo de Monetización
        </Link>
        .
      </p>
    </article>
  );
}
