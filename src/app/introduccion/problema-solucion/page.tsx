import Link from "next/link";
import Callout from "@/components/ui/Callout";
import DataTable from "@/components/ui/DataTable";

export default function ProblemaSolucionPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Problemática y Resolución
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        El comercio de barrio en Ecuador enfrenta una crisis estructural sin precedentes. La
        llegada masiva de cadenas de hard discount, sumada a la inflación y al cambio de hábitos
        del consumidor, ha puesto en jaque el modelo de subsistencia de más de 85.000 familias.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        El cierre masivo de tiendas de barrio
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Entre agosto 2024 y febrero 2025 cerraron <strong>1.943 tiendas de barrio</strong> en
        Ecuador — un promedio de <strong>11 por día</strong>. La tendencia se aceleró en 2025:
        más de <strong>5.000 tiendas cerraron</strong> solo ese año, mientras la participación de
        marcas propias en la canasta básica creció un <strong>+42%</strong> según datos de
        NielsenIQ.
      </p>

      <Callout type="info" title="Dato actualizable">
        Cifra de cierre de tiendas 2025: 5.000+ tiendas. Fuente: proyección basada en tendencia
        de cierres reportados por Asobanca y análisis de campo Savanhi. Actualizar trimestralmente.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Contexto 2025-2026: la invasión del hard discount
      </h2>

      <DataTable
        headers={["Indicador", "Dato", "Impacto"]}
        rows={[
          [
            "Penetración hard discount",
            "88% de hogares ecuatorianos (Q1 2025)",
            "Las tiendas de barrio pierden frecuencia de visita",
          ],
          [
            "Efecto TuTi / Tía Go / B-Sí",
            "30–40% caída de ventas en primeros 6 meses",
            "Márgenes insostenibles para el tendero",
          ],
          [
            "Lanzamiento B-Sí (Corporación Favorita)",
            "Quito, enero 2026",
            "Competencia directa en la capital con respaldo de retail gigante",
          ],
          [
            "Marcas propias (private label)",
            "+42% en canasta básica (NielsenIQ 2025)",
            "Menor rotación de productos de marca nacional en tiendas de barrio",
          ],
        ]}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Los modelos de hard discount como{" "}
        <strong>TuTi</strong>, <strong>Tía Go</strong> y <strong>B-Sí</strong> han alcanzado una
        penetración del <strong>88% en hogares ecuatorianos</strong> en el primer trimestre de 2025.
        Las tiendas de barrio ubicadas a menos de 500 metros de uno de estos puntos experimentan
        caídas de ventas del <strong>30% al 40%</strong> durante los primeros seis meses.
      </p>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        En enero de 2026, <strong>B-Sí de Corporación Favorita</strong> lanzó operaciones en Quito,
        consolidando una amenaza directa para el comercio de proximidad en la capital. Con el
        respaldo logístico y financiero del retail más grande del país, este formato de descuento
        agresivo acelera la consolidación del mercado en pocas manos.
      </p>

      <Callout type="warning" title="Efecto en cadena">
        Cuando una tienda de barrio cierra, no solo pierde una familia su sustento. El barrio
        pierde un punto de encuentro, crédito informal, delivery informal y empleo para jóvenes
        locales. El impacto social es multiplicador.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Savanhi como intermediario digital
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Savanhi es el intermediario digital que revitaliza las tiendas de barrio conectando al
        consumidor con su tienda más cercana. Llevamos ofertas reales de marcas de consumo masivo
        al canal tradicional y generamos datos de sell-out que hoy simplemente no existen.
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          <strong>Para el consumidor:</strong> acceso a promociones de marca en tiendas a pasos de
          casa, sin exponerse a inseguridad ni hacer largas filas en supermercados.
        </li>
        <li>
          <strong>Para el tendero:</strong> una herramienta digital que atrae clientes, financia
          promociones con capital de marca y genera un historial de ventas verificable.
        </li>
        <li>
          <strong>Para la marca:</strong> un canal digital medible en tiendas de barrio, con datos
          de redención por zona, tienda y SKU en tiempo real.
        </li>
      </ul>

      <Callout type="success" title="Diferenciador clave">
        Savanhi no compite con los supermercados de descuento: les quita su ventaja. Cuando el
        consumidor puede encontrar ofertas de marca en la tienda del barrio a 2 cuadras, la
        diferencia de precio deja de ser el único factor de decisión. La conveniencia, la confianza
        y la comunidad vuelven a pesar.
      </Callout>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Para entender cómo monetizamos este modelo, visita{" "}
        <Link href="/negocio/monetizacion" className="text-[#BB5098] hover:underline">
          Modelo de Monetización
        </Link>
        .
      </p>
    </article>
  );
}
