import Link from "next/link";
import DataTable from "@/components/ui/DataTable";
import Callout from "@/components/ui/Callout";

export default function MarcaAnclaPage() {
  return (
    <article className="max-w-4xl">
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Estrategia de Marca Ancla
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        La primera marca ancla es el activo estratégico que valida el modelo
        Savanhi en campo. No buscamos la marca más grande, buscamos la marca
        con la combinación correcta de urgencia, presupuesto y disposición al
        cambio.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Perfil ideal de la primera marca
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          Producto de primera necesidad (aceite, arroz, atún, pasta, leche, jabón)
        </li>
        <li>Marca mediana ecuatoriana buscando crecer</li>
        <li>
          Presupuesto de trade marketing mínimo{" "}
          <strong>$400–700/mes</strong> para el piloto
        </li>
        <li>Distribución activa en Quito</li>
        <li>
          Urgencia real: ha perdido participación frente a marcas propias de
          TuTi/B-Sí
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Candidatas concretas
      </h2>

      <DataTable
        headers={["Marca", "Categoría", "Por qué es viable"]}
        rows={[
          [
            <strong key="vita">Vita Alimentos</strong>,
            "Leche, lácteos",
            "#1 lácteos (8 años consecutivos Kantar). Problema: defender participación vs TuTi/B-Sí",
          ],
          [
            <strong key="nutri">Nutri (Lácteos San Antonio)</strong>,
            "Leche, yogurt",
            "#2 lácteos. Sin canal digital propio. Decisión más ágil",
          ],
          [
            <strong key="ales">Ales</strong>,
            "Aceites",
            "Top 8 EKOS 500. Alta rotación en tiendas",
          ],
        ]}
      />

      <Callout type="warning" title="Marcas excluidas">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong>Toni</strong> — multinacional, ciclos de decisión lentos,
            requiere aprobación regional.
          </li>
          <li>
            <strong>La Favorita</strong> — conflicto de interés con B-Sí (marca
            propia del retail competidor).
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Piloto — Definición Operativa
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        El piloto tiene parámetros estrictos para poder medir aprendizajes sin
        ruido estadístico. Cada variable está diseñada para ser observable,
        medible y actionable.
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          <strong>Duración:</strong> 4–8 semanas (meta: 1–2 meses)
        </li>
        <li>
          <strong>Tamaño:</strong> 5–10 tiendas por barrio grande · 3–5 tiendas
          por barrio pequeño
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-8 mb-3">
        Métricas de éxito
      </h3>

      <DataTable
        headers={["Métrica", "Meta", "Descripción"]}
        rows={[
          [
            "Tasa de redención",
            "≥ 15%",
            "Cupones redimidos / cupones activados",
          ],
          [
            "Cupones redimidos",
            "≥ 500",
            "Total acumulado durante el piloto",
          ],
          [
            "Tiendas con actividad",
            "≥ 60%",
            "% de tiendas con al menos 1 pedido/semana",
          ],
          [
            "NPS del tendero",
            "≥ 7/10",
            "Encuesta de satisfacción post-piloto",
          ],
        ]}
      />

      <Callout type="info" title="¿Por qué estas métricas?">
        La tasa de redención ≥15% es el umbral mínimo donde el modelo económico
        empieza a cerrar para la marca. El NPS ≥7/10 valida que el tendero ve
        valor real en la plataforma, no solo en el incentivo económico. Las 500
        redenciones dan volumen suficiente para detectar patrones de barrio y
        horario.
      </Callout>
    </article>
  );
}
