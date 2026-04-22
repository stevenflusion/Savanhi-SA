import DataTable from "@/components/ui/DataTable";
import Callout from "@/components/ui/Callout";

export default function ContratoMarcaPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Contrato de Campaña de Marca Ancla
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>SAVANHI S.A.S.</strong>
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Partes
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>CONTRATANTE (LA MARCA):</strong>
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Razón Social: <strong>[NOMBRE DE LA MARCA]</strong></li>
        <li>RUC/NIT: <strong>[NÚMERO DE RUC]</strong></li>
        <li>Representante Legal: <strong>[NOMBRE]</strong></li>
        <li>Dirección: <strong>[DIRECCIÓN]</strong></li>
        <li>En lo sucesivo: <strong>"LA MARCA"</strong></li>
      </ul>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>CONTRATADA (SAVANHI):</strong>
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Razón Social: <strong>SAVANHI S.A.S.</strong></li>
        <li>RUC: <strong>[NÚMERO DE RUC SAVANHI]</strong></li>
        <li>Representante Legal: <strong>[NOMBRE DEL REPRESENTANTE]</strong></li>
        <li>Dirección: <strong>[DIRECCIÓN SAVANHI]</strong></li>
        <li>En lo sucesivo: <strong>"SAVANHI"</strong></li>
      </ul>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Las partes acuerdan celebrar el presente <strong>Contrato de Campaña de Marca Ancla</strong> (en adelante, el "Contrato") que se regirá por las siguientes cláusulas:
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Primera: Objeto del Contrato
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>El presente Contrato tiene por objeto establecer los términos y condiciones bajo los cuales SAVANHI realizará una campaña de promoción de los productos/servicios de LA MARCA a través de su red de tiendas de barrio aliadas (tenderos) en Ecuador.</li>
        <li>La campaña consiste en la distribución de cupones de descuento digitales a consumidores finales, canjeables exclusivamente en las tiendas de barrio registradas en la plataforma SAVANHI.</li>
        <li>SAVANHI actuará como intermediario tecnológico y operacional, facilitando el acceso al canal de tiendas de barrio (tiendas de proximidad) para LA MARCA.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Segunda: Alcance de la Campaña
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Territorio:</strong> La campaña se ejecutará en las zonas/geografías acordadas entre las partes, priorizando barrios de nivel socioeconómico <strong>[A/B/C/D]</strong> según la clasificación de SAVANHI.</li>
        <li><strong>Tiendas participantes:</strong> SAVANHI garantiza un mínimo de <strong>[NÚMERO]</strong> tiendas activas con capacidad de redención durante el período de la campaña.</li>
        <li><strong>Cupones a distribuir:</strong> LA MARCA define las siguientes características del cupón:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Descuento: <strong>[XX]%</strong> o <strong>$[MONTO]</strong></li>
            <li>Valor mínimo de compra: <strong>$[MONTO]</strong></li>
            <li>Cupones a emitir: <strong>[NÚMERO]</strong></li>
            <li>Período de validez: <strong>[FECHA INICIO]</strong> a <strong>[FECHA FIN]</strong></li>
          </ul>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Tercera: Estructura de Pago
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Fee fijo por campaña:</strong> LA MARCA pagará a SAVANHI un fee fijo de <strong>[USD $200 - $600]</strong> por la gestión operacional de la campaña, que incluye:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Activación de red de tiendas</li>
            <li>Distribución de cupones vía app</li>
            <li>Panel de métricas en tiempo real</li>
            <li>Soporte operacional durante la campaña</li>
            <li>Reconciliación y reporte post-campaña</li>
          </ul>
        </li>
        <li><strong>Costo por cupón redimido (CPO):</strong> Adicionalmente al fee fijo, LA MARCA pagará <strong>USD $[0.15 - 0.60]</strong> por cada cupón efectivamente redimido y verificado en tienda.</li>
        <li><strong>Metodología de conteo:</strong> Se considerará un cupón como "redimido" únicamente cuando:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>El consumidor presente el código del cupón en la tienda</li>
            <li>El tendero registre la redención en la app SAVANHI</li>
            <li>La transacción sea validada por el sistema de SAVANHI</li>
          </ul>
        </li>
        <li><strong>Topes (opcional):</strong>
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Tope máximo de cupones redimidos: <strong>[NÚMERO]</strong> (si aplica)</li>
            <li>Tope máximo de CPO: <strong>USD [MONTO]</strong> (si aplica)</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Cuarta: Forma de Pago y Garantía
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Anticipo (Upfront):</strong> El cincuenta por ciento (50%) del fee fijo deberá ser pagado por LA MARCA a SAVANHI al momento de la firma del presente Contrato, como garantía de compromiso.</li>
        <li><strong>Saldo post-campaña:</strong> El cincuenta por ciento (50%) restante del fee fijo, más el cálculo estimado del CPO basado en las redenciones reales, deberá ser pagado dentro de los <strong>[15]</strong> días calendario posteriores a la finalización de la campaña.</li>
        <li><strong>Facturación:</strong> SAVANHI emitirá la correspondiente factura electrónica por cada pago. Los pagos se realizarán mediante <strong>[TRANSFERENCIA BANCARIA / DEUNA / OTRO]</strong> a la cuenta que SAVANHI indique.</li>
        <li><strong>Ajuste post-campaña:</strong> Dentro de los <strong>[5]</strong> días posteriores al cierre de la campaña, SAVANHI presentará un reporte detallado de cupones redimidos. Si el CPO real excede el estimado, LA MARCA pagará la diferencia. Si es menor, SAVANHI emitirá una nota de crédito por el excedente.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Quinta: Plazo de Pago y Mora
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Plazo de pago:</strong> Los pagos vencidos tendrán un plazo de <strong>[15]</strong> días netto desde la emisión de la factura correspondiente.</li>
        <li><strong>Penalidad por mora:</strong> En caso de incumplimiento en el pago dentro del plazo establecido, LA MARCA deberá pagar un interés moratorio del <strong>uno punto cinco por ciento (1.5%) mensual</strong> sobre el saldo vencido, calculado desde la fecha de vencimiento hasta la fecha efectiva de pago.</li>
        <li><strong>Suspensión de campaña:</strong> Si el pago del anticipo no se realizare en un plazo de <strong>[5]</strong> días hábiles desde la firma del Contrato, SAVANHI podrá suspender la activación de la campaña sin responsabilidad.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Sexta: Derechos de Uso de Datos y Métricas
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Panel de métricas:</strong> SAVANHI proporcionará a LA MARCA acceso a un panel digital (dashboard) con las siguientes métricas en tiempo real:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Número de cupones distribuidos (enviados a consumidores)</li>
            <li>Número de cupones redimidos</li>
            <li>Tasa de conversión (redenciones/distribución)</li>
            <li>Tiendas activas por zona</li>
            <li>Ticket promedio de compra con cupón</li>
            <li>Consumo incremental estimado</li>
          </ul>
        </li>
        <li><strong>Propiedad de los datos:</strong> Los datos recopilados durante la campaña (con excepción de datos personales de consumidores protegidos por la LOPDP) serán propiedad conjunta de las partes, pudiendo ser utilizados para reportes y análisis mutuos.</li>
        <li><strong>Datos agregados:</strong> SAVANHI podrá utilizar datos agregados y anonimizados de la campaña para fines estadísticos y de mejora del servicio, sin revelar información confidencial de LA MARCA.</li>
        <li><strong>Confidencialidad:</strong> Ambas partes se comprometen a no revelar información comercial sensible de la otra parte, incluyendo pero no limitándose a: estrategias de pricing, márgenes, y planes de expansión.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Séptima: Obligaciones de SAVANHI
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Activar red de tiendas:</strong> Gestionar la activación de tiendas participantes en la zona definida, asegurando un mínimo de <strong>[NÚMERO]</strong> tiendas activas.</li>
        <li><strong>Distribución de cupones:</strong> Implementar la distribución de cupones digitales a través de la app SAVANHI a la base de consumidores elegibles.</li>
        <li><strong>Verificación:</strong> Garantizar que el sistema de verificación de cupones funcione correctamente, evitando dobles redenciones y fraude.</li>
        <li><strong>Soporte:</strong> Brindar soporte operacional durante la campaña a través de <strong>[CANAL DE SOPORTE]</strong> en horario <strong>[HORARIO]</strong>.</li>
        <li><strong>Reporte:</strong> Entregar un reporte post-campaña dentro de los <strong>[7]</strong> días posteriores al cierre, con métricas detalladas y reconciliación de cupones.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Octava: Obligaciones de LA MARCA
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Pago oportuno:</strong> Realizar los pagos según lo establecido en la Cláusula Cuarta.</li>
        <li><strong>Stock y disponibilidad:</strong> Garantizar que los productos objeto de la promoción estén disponibles en las tiendas participantes durante todo el período de la campaña.</li>
        <li><strong>Materiales:</strong> Proveer a SAVANHI el material creativo (imágenes, logotipos, copy) necesario para la activación, con al menos <strong>[5]</strong> días hábiles de anticipación.</li>
        <li><strong>Promoción cruzada:</strong> En la medida de lo posible, LA MARCA promoverá la campaña en sus propios canales (redes sociales, punto de venta propio, newsletters).</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Novena: Vigencia y Renovación
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Vigencia inicial:</strong> El presente Contrato tendrá una vigencia de <strong>[NÚMERO DE DÍAS/SEMANAS/MESES]</strong> desde la fecha de firma, correspondiente al período de ejecución de la campaña.</li>
        <li><strong>Renovación automática:</strong> Si ninguna de las partes manifiesta su intención de no renovar con al menos <strong>[15]</strong> días de anticipación, el Contrato se renovará automáticamente por períodos iguales.</li>
        <li><strong>Renegociación de términos:</strong> En caso de renovación, las partes podrán renegociar los términos económicos (fee y CPO) basándose en los resultados de la campaña anterior.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima: Terminación Anticipada
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Terminación por causa:</strong> Cualquiera de las partes podrá terminar anticipadamente el Contrato en los siguientes casos:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Incumplimiento grave de las obligaciones contractuales</li>
            <li>Insolvencia, quiebra o liquidación de cualquiera de las partes</li>
            <li>Fuerza mayor que imposibilite la ejecución del Contrato por más de <strong>[30]</strong> días</li>
          </ul>
        </li>
        <li><strong>Terminación sin causa:</strong> Cualquiera de las partes podrá terminar el Contrato sin causa mediante notificación escrita con al menos <strong>[30]</strong> días de anticipación.</li>
        <li><strong>Efectos de la terminación:</strong>
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>En caso de terminación por causa de LA MARCA, SAVANHI retendrá el anticipo recibido como compensación por daños y perjuicios.</li>
            <li>En caso de terminación por causa de SAVANHI, esta deberá devolver el anticipo prorrateado por los días no ejecutados.</li>
            <li>En caso de terminación sin causa, se liquidarán los servicios efectivamente prestados hasta la fecha de terminación.</li>
          </ul>
        </li>
        <li><strong>Cupones emitidos:</strong> En caso de terminación anticipada, los cupones ya emitidos y no redimidos serán válidos hasta su fecha de expiración original, salvo acuerdo contrario entre las partes.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima Primera: Responsabilidades y Limitación
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Responsabilidad de SAVANHI:</strong> SAVANHI será responsable únicamente de la gestión operacional de la campaña y la distribución de cupones. No será responsable de:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>La calidad o disponibilidad de los productos de LA MARCA</li>
            <li>El comportamiento de los consumidores finales</li>
            <li>Controversias entre LA MARCA y los consumidores por uso de cupones</li>
          </ul>
        </li>
        <li><strong>Limitación de responsabilidad:</strong> La responsabilidad máxima de SAVANHI bajo este Contrato no excederá el monto total efectivamente pagado por LA MARCA en los últimos <strong>[12]</strong> meses de servicio.</li>
        <li><strong>Fuerza mayor:</strong> Ninguna de las partes será responsable por retrasos o incumplimientos derivados de circunstancias fuera de su control razonable, incluyendo pero no limitándose a: desastres naturales, pandemias, huelgas, cambios regulatorios, o fallos de sistemas tecnológicos.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima Segunda: Protección de Datos Personales
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Cumplimiento LOPDP:</strong> Ambas partes se comprometen a cumplir con la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador y sus reglamentos.</li>
        <li><strong>Datos de consumidores:</strong> SAVANHI actúa como encargado del tratamiento de datos personales de los consumidores que reciben cupones. LA MARCA es el responsable del tratamiento respecto a los datos necesarios para la campaña.</li>
        <li><strong>Consentimiento:</strong> SAVANHI garantiza que los consumidores han otorgado su consentimiento para recibir comunicaciones promocionales de LA MARCA a través de la app.</li>
        <li><strong>Retención:</strong> Los datos de consumidores serán eliminados o anonimizados después de <strong>[6]</strong> meses de finalizada la campaña, salvo obligación legal de retención.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima Tercera: Propiedad Intelectual
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Marcas registradas:</strong> Cada parte conserva la propiedad de sus marcas registradas. El uso de las marcas de LA MARCA por SAVANHI se limita exclusivamente a los fines de este Contrato.</li>
        <li><strong>Materiales de LA MARCA:</strong> Los materiales creativos proporcionados por LA MARCA permanecen en propiedad de esta. SAVANHI los utilizará únicamente para los fines de la campaña.</li>
        <li><strong>Plataforma SAVANHI:</strong> La plataforma tecnológica, app, y sistema de cupones son propiedad intelectual exclusiva de SAVANHI.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima Cuarta: Solución de Controversias
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Negociación directa:</strong> Las partes intentarán resolver cualquier controversia derivada del presente Contrato mediante negociación directa y de buena fe.</li>
        <li><strong>Mediación:</strong> Si no se alcanzare un acuerdo en un plazo de <strong>[15]</strong> días, cualquiera de las partes podrá someter la controversia a mediación, la cual será llevada a cabo en <strong>[QUITO / GUAYAQUIL / OTRA CIUDAD]</strong>.</li>
        <li><strong>Arbitraje:</strong> Si la mediación no resolviere la controversia, esta será sometida a arbitraje institucional de <strong>[CENTRO DE ARBITRAJE]</strong>, con sede en <strong>[CIUDAD]</strong>, siendo el laudo arbitral definitivo y vinculante.</li>
        <li><strong>Régimen legal:</strong> El presente Contrato se regirá por las leyes de la República del Ecuador.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima Quinta: Disposiciones Generales
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Integridad del Contrato:</strong> El presente Contrato constituye el acuerdo completo entre las partes respecto a su objeto y reemplaza cualquier acuerdo previo, verbal o escrito.</li>
        <li><strong>Enmiendas:</strong> Cualquier modificación al presente Contrato deberá constar por escrito y ser firmada por representantes legales de ambas partes.</li>
        <li><strong>Cesión:</strong> Ninguna de las partes podrá ceder total o parcialmente sus derechos u obligaciones bajo este Contrato sin el consentimiento previo y por escrito de la otra parte.</li>
        <li><strong>Notificaciones:</strong> Todas las notificaciones relacionadas con este Contrato serán efectivas cuando sean entregadas personalmente, enviadas por correo certificado, o por correo electrónico con acuse de recibo, a las direcciones indicadas en el encabezado.</li>
        <li><strong>Renuncia:</strong> La tolerancia de una parte en caso de incumplimiento de la otra no se considerará como renuncia a sus derechos.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Anexo A: Especificaciones de la Campaña
      </h2>

      <DataTable
        headers={["Campo", "Detalle"]}
        rows={[
          ["Nombre de campaña", ""],
          ["Fecha de inicio", ""],
          ["Fecha de fin", ""],
          ["Territorio (ciudades/barrios)", ""],
          ["Número objetivo de tiendas", ""],
          ["Número de cupones a emitir", ""],
          ["Valor del descuento", ""],
          ["Monto mínimo de compra", ""],
          ["Fee fijo (USD)", ""],
          ["CPO (USD)", ""],
          ["Contacto SAVANHI", ""],
          ["Contacto MARCA", ""],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Firmas
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Por LA MARCA:</strong>
      </p>
      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4 font-mono">
        _____________________________<br />
        Nombre: ______________________<br />
        Cargo: ________________________<br />
        Fecha: ________________________
      </p>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Por SAVANHI S.A.S.:</strong>
      </p>
      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4 font-mono">
        _____________________________<br />
        Nombre: ______________________<br />
        Cargo: ________________________<br />
        Fecha: ________________________
      </p>

      <Callout type="warning" title="Aviso legal">
        Este documento es un borrador base y debe ser revisado por un abogado habilitado en Ecuador antes de su firma. SAVANHI no se hace responsable por consecuencias legales derivadas del uso de este modelo sin revisión profesional.
      </Callout>
    </article>
  );
}
