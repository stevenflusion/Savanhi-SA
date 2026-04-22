import Link from "next/link";
import DataTable from "@/components/ui/DataTable";
import Callout from "@/components/ui/Callout";

export default function MonetizacionPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Modelo de Monetización
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        El modelo de ingresos de Savanhi se basa en una estructura híbrida: un fee fijo por campaña
        más un costo variable por cupón redimido. Este diseño alinea los incentivos de la plataforma
        con los resultados reales de la marca.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Modelo base: fee fijo + costo por redención
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          <strong>Fee fijo al crear la campaña</strong> — cubre el acceso a la plataforma, la
          configuración del panel de analíticas y la distribución de notificaciones push
          geolocalizadas a consumidores en la zona objetivo.
        </li>
        <li>
          <strong>Costo variable por cupón redimido</strong> — la marca solo paga resultado real.
          Cada vez que un consumidor compra con el cupón en una tienda participante, Savanhi
          factura un fee de redención. No hay cobro por impresiones, clicks ni alcance.
        </li>
      </ol>

      <Callout type="info" title="Alinamiento de incentivos">
        Si la campaña no redime, Savanhi no cobra por redención. Esto obliga a la plataforma a
        optimizar la distribución geográfica, el timing de las notificaciones y la selección de
        tiendas para maximizar el sell-out real de la marca.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Capas de ingreso por fase
      </h2>

      <DataTable
        headers={["Fase", "Fuente de ingreso", "Cuándo"]}
        rows={[
          [
            "Piloto (mes 1–2)",
            "Sin ingreso — generación de datos y validación del modelo",
            "Inmediato",
          ],
          [
            "Fase 1 (mes 3–4)",
            "Fee + costo por redención con marca ancla",
            "Con primera marca activa",
          ],
          [
            "Fase 2 (mes 5+)",
            "Datos de tiendas Bronze como producto de inteligencia de mercado hiperlocal",
            "Con 50+ tiendas Bronze con historial",
          ],
          [
            "Fase 3 (mes 6–12)",
            "Reportes ejecutivos premium + crédito a tenderos",
            "Con 6+ meses de historial acumulado",
          ],
          [
            "Fase 4 (año 2+)",
            "API de inteligencia de mercado — datos como producto",
            "Con 500+ tiendas activas",
          ],
        ]}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        La estrategia de monetización está diseñada para escalonar el riesgo. Los primeros meses
        se invierten en generar datos de calidad y validar que el modelo de redención funciona en
        el campo. Una vez que hay tracción con la marca ancla, se activan capas progresivas de
        ingreso que aprovechan la red de tiendas como activo de datos.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Rangos de referencia — Monetización
      </h2>

      <DataTable
        headers={["Componente", "Rango referencial"]}
        rows={[
          ["Fee fijo por campaña", "$200–$600 USD"],
          ["Costo por cupón redimido", "$0.15–$0.60 USD"],
          ["% comisión sobre reembolso", "8%–15%"],
          ["Presupuesto mínimo campaña piloto", "$400–$700 USD"],
          ["LTV estimado por marca (año 1)", "$3,000–$12,000 USD"],
        ]}
      />

      <Callout type="warning" title="Rangos referenciales">
        Los valores presentados son estimaciones para planificación interna. Los precios finales
        se negocian con cada marca ancla y pueden variar según categoría de producto, zona
        geográfica y volumen de redención esperado. No divulgar estos rangos a terceros sin
        autorización del CEO.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Lógica del LTV por marca
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        El Lifetime Value (LTV) estimado por marca en el primer año se calcula sobre la base de
        4–12 campañas anuales, con un fee promedio de $400 y un volumen de 2.000 a 15.000
        redenciones por campaña. Marcas de alta frecuencia de compra (bebidas, snacks, productos
        de limpieza) tienden a ubicarse en el rango superior; marcas de baja frecuencia o alto
        ticket (licores, cuidado personal premium) pueden iniciar con presupuestos menores pero
        margen por redención más alto.
      </p>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Para entender cómo se distribuye el valor entre los actores, visita{" "}
        <Link href="/negocio/propuesta-valor" className="text-[#BB5098] hover:underline">
          Propuesta de Valor
        </Link>
        .
      </p>
    </article>
  );
}
