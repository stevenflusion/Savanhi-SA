import DataTable from "@/components/ui/DataTable";
import Callout from "@/components/ui/Callout";
import StatusBadge from "@/components/ui/StatusBadge";

export default function PlaybookPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Playbook Operacional — Piloto (1–2 Meses)
      </h1>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Equipo mínimo viable
      </h2>

      <DataTable
        headers={["Rol", "Responsabilidad principal", "Dedicación"]}
        rows={[
          [
            <strong key="f">Fundador / Tech Lead</strong>,
            "MVP, producto, decisiones técnicas e integraciones",
            "Full-time",
          ],
          [
            <strong key="cn">Co-Fundador de Negocios</strong>,
            "Contratos con marcas, supervisión campo, relaciones barriales",
            "Full-time",
          ],
          [
            <strong key="eb">Embajador de Barrio</strong>,
            "Onboarding presencial de tenderos, registro de catálogos, soporte a adultos mayores",
            "Full-time por barrio",
          ],
          [
            <strong key="cf">Co-Fundador de Finanzas</strong>,
            "Reembolsos, SRI, contratos financieros",
            "Part-time durante el piloto",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Perfil del Embajador de Barrio — Lo que se busca
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>No necesita experiencia en tecnología avanzada</li>
        <li>Preferible que sea del mismo barrio o conoce bien la zona</li>
        <li>Habilidad clave: conversación directa con tenderos, paciencia con adultos mayores</li>
        <li>Experiencia previa en campo (promotor de ventas, vendedor de ruta, o perfil similar)</li>
        <li>Salario referencial: $500–700/mes (a confirmar con Co-Fundador de Finanzas)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Semana a semana — Piloto
      </h2>

      <DataTable
        headers={["Semana", "Acción", "Responsable", "Criterio de avance"]}
        rows={[
          [
            "1–2",
            "Field research: visitar 15+ tiendas con encuesta, definir 2 barrios exactos con criterios",
            "Co-Fundador Negocios + Steven",
            "Barrios definidos, encuesta completada",
          ],
          [
            "3–4",
            "Primer contacto con marca ancla (Vita Alimentos o Nutri como primera prioridad)",
            "Co-Fundador Negocios",
            "Reunión agendada con decisor de trade marketing",
          ],
          [
            "5–6",
            "Piloto papel: probar flujo de cupón manualmente antes de codificar",
            "Steven + Co-Fundador Negocios",
            "Flujo validado, ≥ 5 tenderos dispuestos a participar",
          ],
          [
            "7–10",
            "Desarrollo MVP: catalog + discovery + cupón básico",
            "Steven",
            "MVP funcionando en staging",
          ],
          [
            "11–12",
            "Onboarding de tiendas en campo (Embajador de Barrio activo por barrio)",
            "Embajador de Barrio",
            "≥ 80% de tiendas objetivo onboardeadas",
          ],
          [
            "13–14",
            "Primera campaña de marca ancla activa",
            "Co-Fundador Negocios",
            "Primera campaña live, primer cupón redimido",
          ],
          [
            "15–16",
            "Medición completa + primer reporte ejecutivo para la marca",
            "Steven + Co-Fundador Negocios",
            "Reporte entregado, decisión de renovación en proceso",
          ],
          [
            "17+",
            "Escalar al segundo barrio + evaluar incorporar segunda marca",
            "Equipo completo",
            "Métricas de éxito del piloto alcanzadas",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Go-to-Market — Resumen 90 Días
      </h2>

      <DataTable
        headers={["Semana", "Acción"]}
        rows={[
          ["1–2", "Field research: visitar 15+ tenderos con la encuesta de campo"],
          ["3–4", "Primer contacto con marca ancla — Vita Alimentos o Nutri como prioridad"],
          ["5–6", "Piloto papel: probar flujo de cupón manualmente"],
          ["7–10", "Desarrollo MVP mínimo: catalog + discovery + cupón básico"],
          ["11–12", "Lanzamiento soft: 5–10 tiendas + primera campaña de marca ancla"],
          ["13+", "Medir, iterar, escalar al segundo barrio"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Panorama Competitivo Actualizado
      </h2>

      <DataTable
        headers={["Competidor", "Tiendas", "Presencia", "Amenaza Savanhi"]}
        rows={[
          [
            <strong key="t">TuTi</strong>,
            "762",
            "99+ ciudades, 88% hogares",
            <StatusBadge key="a1" status="reformulado">ALTA</StatusBadge>,
          ],
          [
            <strong key="b">B-Sí</strong>,
            "2 (piloto)",
            "Quito norte",
            <StatusBadge key="a2" status="validado">BAJA</StatusBadge>,
          ],
          [
            <strong key="tg">Tía Go</strong>,
            "114",
            "22 provincias",
            <StatusBadge key="a3" status="confirmado">MEDIA</StatusBadge>,
          ],
          [
            <strong key="c">Coralito</strong>,
            "piloto",
            "Cuenca → Quito",
            <StatusBadge key="a4" status="validado">BAJA</StatusBadge>,
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Conclusión Competitiva
      </h2>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>
          <strong>TuTi</strong>: Competidor principal. NO es digital — modelo físico hard discount.
          9/10 hogares regresan.
        </li>
        <li>
          <strong>B-Sí</strong>: Piloto, NO competidor. Corporación Favorita dijo "no hay idea de
          crecimiento".
        </li>
        <li>
          <strong>Tía Go</strong>: Crecimiento acelerado pero segmento diferente (conveniencia vs
          reposición).
        </li>
      </ul>

      <Callout type="info" title="Barrera real">
        La barrera real NO es vs. TuTi/B-Sí — es ser{" "}
        <strong>EL PRIMERO</strong> en plataforma digital de canal tradicional en Ecuador.
      </Callout>
    </article>
  );
}
