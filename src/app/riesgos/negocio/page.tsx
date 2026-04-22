import DataTable from "@/components/ui/DataTable";
import StatusBadge from "@/components/ui/StatusBadge";
import Callout from "@/components/ui/Callout";

export default function RiesgosNegocioPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Riesgos de Negocio — Validación Completa
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Tabla actualizada con co-agents: co-embajador, co-investigador, co-negocios, co-finanzas. Abril 2026.
      </p>

      <DataTable
        headers={["#", "Riesgo", "Prob.", "Imp.", "Mitigación validada", "Status", "Acción"]}
        rows={[
          [
            "1",
            "La marca no paga el reembolso al tendero",
            "Media",
            "Alto",
            "Buffer $1,200–$18,000 + cláusula garantía + 50% upfront",
            <StatusBadge key="s1" status="validado">VALIDADO</StatusBadge>,
            "Contrato con penalty clause",
          ],
          [
            "2",
            "El tendero desconfía del reembolso",
            "Alta piloto",
            "Alto",
            "Early demonstrator + 48-72hr demo + referencia local",
            <StatusBadge key="s2" status="confirmado">CONFIRMADO</StatusBadge>,
            "Demo speed + testimony",
          ],
          [
            "3",
            "Fraude en cupones",
            "Media",
            "Medio",
            "Código único por usuario-campaña + escaneo",
            <StatusBadge key="s3" status="owner">YA TIENE OWNER</StatusBadge>,
            "Dev implementa",
          ],
          [
            "4",
            "La marca no renueva",
            "Media",
            "Alto",
            "Pitch week 6 + early signal week 3-4 + KPIs (ROAS ≥3x)",
            <StatusBadge key="s4" status="validado">VALIDADO</StatusBadge>,
            "Datos reales POST-piloto",
          ],
          [
            "5",
            "TuTi/B-Sí lanza canal digital",
            "Baja",
            "Alto",
            "~~vs. TuTi/B-Sí~~ → vs. OTROS players. First-mover = barrera",
            <StatusBadge key="s5" status="reformulado">REFORMULADO</StatusBadge>,
            "No es riesgo real",
          ],
          [
            "6",
            "Tía Go se expande a Quito",
            "Media",
            "Medio",
            "Monitorear Q3-Q4 2026. Diferentes segmentos.",
            <StatusBadge key="s6" status="confirmado">SOBREESTIMADO</StatusBadge>,
            "No es existencial",
          ],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Información Regulatoria — LOPDP Ecuador
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Info integrada desde dosc/Privacidad y LOPDP — Decisiones de Diseño (actualizada abril 2026).
      </p>

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Datos Sensibles que Savanhi Procesa
      </h3>

      <DataTable
        headers={["Actor", "Tipo de dato", "Sensibilidad", "Observación"]}
        rows={[
          [
            "Consumidor",
            "Ubicación GPS en tiempo real",
            "🔴 Alta",
            "Muestra dónde está la persona. Requiere consentimiento explícito.",
          ],
          [
            "Consumidor",
            "Historial de compras por barrio",
            "🟡 Media",
            "Permite inferir hábitos, nivel económico, zona de residencia.",
          ],
          [
            "Consumidor",
            "Teléfono (OTP login)",
            "🟡 Media",
            "Identificador único. Nunca exponer en responses de API.",
          ],
          [
            "Tendero",
            "Cédula de identidad",
            "🔴 Alta",
            "Dato de identificación. Solo requerido en Fase 2 para SRI. Almacenar cifrado.",
          ],
          [
            "Tendero",
            "Coordenadas exactas de la tienda",
            "🟡 Media",
            "Ubica un negocio real. Exposición controlada (solo radio de búsqueda).",
          ],
          [
            "Repartidor",
            "Cédula + datos bancarios",
            "🔴 Alta",
            "Requerido para pagos formales en Fase 2. Almacenar cifrado, acceso solo admin.",
          ],
          [
            "Marca",
            "RUC + datos de contacto",
            "🟡 Media",
            "Datos empresariales. Requieren cláusula de tratamiento en el contrato.",
          ],
        ]}
      />

      <h3 className="text-xl font-semibold text-[#F4F4F4] mt-6 mb-3">
        Multas LOPDP — Régimen Sancionatorio Vigente (desde mayo 2023)
      </h3>

      <DataTable
        headers={["Tipo de infracción", "Rango de multa"]}
        rows={[
          [
            "Infracciones leves",
            "0.1% a 0.7% del volumen de negocio",
          ],
          [
            "Infracciones graves",
            "0.7% a 1% del volumen de negocio",
          ],
        ]}
      />

      <Callout type="warning" title="Nota regulatoria">
        Las primeras sanciones públicas fueron divulgadas en diciembre 2025. La SPDP (Superintendencia de Protección de Datos Personales) es la autoridad reguladora.
      </Callout>
    </article>
  );
}
