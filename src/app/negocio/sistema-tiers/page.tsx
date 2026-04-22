import DataTable from "@/components/ui/DataTable";
import TierTable from "@/components/ui/TierTable";
import Callout from "@/components/ui/Callout";

export default function SistemaTiersPage() {
  return (
    <article className="max-w-4xl">
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Sistema de Tiers
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        El sistema de tiers clasifica automáticamente cada tienda según su
        comportamiento, calidad de datos y engagement. No es un sistema de
        castigo: es un mecanismo de incentivos alineados que premia a las
        tiendas comprometidas con mejor acceso a campañas y beneficios.
      </p>

      <TierTable
        tiers={[
          {
            name: "Bronze",
            color: "#8B6914",
            requirements: [
              "Score < 50/100",
              "Sin acceso a campañas de marcas",
              "Sin delivery",
            ],
            benefits: [
              "Accede al Recovery Program",
              "Mini-promos subsidiadas por Savanhi",
              "Reto de 30 días para subir a Silver",
            ],
          },
          {
            name: "Silver",
            color: "#A0A0A0",
            requirements: [
              "Score ≥ 50/100",
              "Máximo 2 campañas activas",
            ],
            benefits: [
              "Acceso a campañas estándar",
              "Puede ofrecer delivery",
              "Soporte estándar",
            ],
          },
          {
            name: "Gold",
            color: "#FFB32B",
            requirements: [
              "Score ≥ 80/100",
              "Máximo 3 campañas activas",
            ],
            benefits: [
              "Prioridad en campañas",
              "Mayor visibilidad en app",
              "Fee de procesamiento reducido",
              "Acceso anticipado a nuevas campañas",
            ],
            highlight: true,
          },
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Definiciones
      </h2>

      <DataTable
        headers={["Término", "Definición"]}
        rows={[
          [
            <strong key="tier">Tier</strong>,
            "Nivel de calidad asignado automáticamente a cada tienda: Gold, Silver o Bronze.",
          ],
          [
            <strong key="gold">Gold</strong>,
            "Tier máximo. Score ≥ 80/100. Máximo 3 campañas activas simultáneas. Puede ofrecer delivery.",
          ],
          [
            <strong key="silver">Silver</strong>,
            "Tier medio. Score ≥ 50/100. Máximo 2 campañas activas. Puede ofrecer delivery.",
          ],
          [
            <strong key="bronze">Bronze</strong>,
            "Tier base. Score < 50/100. Sin acceso a campañas de marcas. Sin delivery. Accede al Recovery Program.",
          ],
          [
            <strong key="score">Tier Score</strong>,
            "Puntaje de 0 a 100 calculado semanalmente. Suma de 5 señales ponderadas.",
          ],
          [
            <strong key="recovery">Recovery Program</strong>,
            "Programa de rescate para tiendas Bronze: mini-promos subsidiadas por Savanhi + reto de 30 días para subir a Silver.",
          ],
          [
            <strong key="degradacion">Degradación</strong>,
            "Bajada de tier. Tiene período de gracia de 1 semana antes de aplicarse.",
          ],
          [
            <strong key="gracia">Período de gracia</strong>,
            "7 días que tiene una tienda después de caer bajo el umbral de su tier antes de que el sistema baje su nivel oficialmente.",
          ],
        ]}
      />

      <Callout type="info" title="Cómo se calcula el Tier Score">
        El score se compone de 5 señales ponderadas: frecuencia de escaneo
        (25%), completitud de catálogo (20%), tasa de redención (20%), NPS del
        tendero (20%) y velocidad de respuesta a campañas (15%). Se recalcula
        cada lunes a las 06:00 EC.
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Gamificación y diagnósticos automáticos por tier
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Cada tier recibe un tipo diferente de diagnóstico automático, diseñado
        para empujarlo al siguiente nivel sin generar fatiga.
      </p>

      <DataTable
        headers={["Tier", "Diagnóstico automático", "Frecuencia", "Objetivo"]}
        rows={[
          [
            <strong key="b" style={{ color: "#8B6914" }}>Bronze</strong>,
            "Recovery Alert: 'Sube X puntos escaneando Y productos esta semana'",
            "Semanal",
            "Activar comportamiento de escaneo",
          ],
          [
            <strong key="s" style={{ color: "#A0A0A0" }}>Silver</strong>,
            "Progress Nudge: 'Estás a Z puntos de Gold. Escanea tus top 5 productos.'",
            "Cada 3 días",
            "Mantener momentum hacia Gold",
          ],
          [
            <strong key="g" style={{ color: "#FFB32B" }}>Gold</strong>,
            "Streak Keeper: 'Llevas N semanas en Gold. Mantén el ritmo para prioridad en campañas.'",
            "Semanal",
            "Reducir churn de tiendas top",
          ],
        ]}
      />

      <Callout type="success" title="Resultado esperado">
        Con este sistema, proyectamos que el 40% de tiendas Bronze suban a
        Silver en los primeros 60 días, y que el churn de tiendas Gold se
        mantenga por debajo del 5% mensual.
      </Callout>
    </article>
  );
}
