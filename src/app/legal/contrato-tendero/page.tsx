import DataTable from "@/components/ui/DataTable";
import TierTable from "@/components/ui/TierTable";
import Callout from "@/components/ui/Callout";

export default function ContratoTenderoPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold gradient-heading mb-6">
        Contrato de Prestación de Servicios Comerciales — Tendero
      </h1>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>SAVANHI S.A.S.</strong>
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Partes
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>PRESTADOR DEL SERVICIO (EL TENDERO):</strong>
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Nombre del establecimiento: <strong>[NOMBRE DE LA TIENDA]</strong></li>
        <li>Propietario/Titular: <strong>[NOMBRE COMPLETO]</strong></li>
        <li>Cédula de identidad: <strong>[NÚMERO DE CÉDULA]</strong></li>
        <li>Dirección de la tienda: <strong>[DIRECCIÓN COMPLETA]</strong></li>
        <li>Teléfono: <strong>[NÚMERO DE TELÉFONO]</strong></li>
        <li>En lo sucesivo: <strong>"EL TENDERO"</strong></li>
      </ul>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>PRESTATARIO DEL SERVICIO (SAVANHI):</strong>
      </p>
      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Razón Social: <strong>SAVANHI S.A.S.</strong></li>
        <li>RUC: <strong>[NÚMERO DE RUC SAVANHI]</strong></li>
        <li>Representante Legal: <strong>[NOMBRE DEL REPRESENTANTE]</strong></li>
        <li>Dirección: <strong>[DIRECCIÓN SAVANHI]</strong></li>
        <li>En lo sucesivo: <strong>"SAVANHI"</strong></li>
      </ul>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        Las partes acuerdan celebrar el presente <strong>Contrato de Prestación de Servicios Comerciales</strong> (en adelante, el "Contrato") que se regirá por las siguientes cláusulas:
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Primera: Objeto del Contrato
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>El presente Contrato tiene por objeto establecer los términos y condiciones bajo los cuales EL TENDERO se registrará en la plataforma tecnológica de SAVANHI y participará como establecimiento aliado para la aceptación y redención de cupones de descuento emitidos por marcas clientes de SAVANHI.</li>
        <li>SAVANHI actúa como intermediario tecnológico y comercial, conectando a EL TENDERO con marcas que desean promocionar sus productos a través del canal de tiendas de barrio.</li>
        <li>La participación de EL TENDERO en la plataforma es voluntaria y no genera exclusividad.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Segunda: Registro y Verificación de la Tienda
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Registro:</strong> EL TENDERO deberá completar el proceso de registro en la aplicación SAVANHI, proporcionando información veraz y completa sobre:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Datos de identificación del establecimiento</li>
            <li>Datos del propietario o representante legal</li>
            <li>Ubicación precisa del negocio (geolocalización)</li>
            <li>Fotografías del establecimiento (fachada, interior, área de cajas)</li>
            <li>Información de la cuenta bancaria o billetera digital para reembolsos</li>
          </ul>
        </li>
        <li><strong>Verificación:</strong> SAVANHI realizará un proceso de verificación que podrá incluir:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Visitas presenciales al establecimiento</li>
            <li>Verificación de documentos de identidad y comerciales</li>
            <li>Confirmación de la dirección y existencia del negocio</li>
          </ul>
        </li>
        <li><strong>Aprobación:</strong> Una vez completado el registro y verificada la información, SAVANHI aprobará o rechazará la solicitud de incorporación. El rechazo podrá ocurrir por información falsa, incumplimiento de requisitos mínimos, o por criterios operativos de SAVANHI.</li>
        <li><strong>Cuenta única:</strong> Cada establecimiento (tienda) requiere una cuenta única. No se permite el registro múltiple de un mismo negocio bajo diferentes cuentas.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Tercera: Obligaciones del Tendero
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Aceptación de cupones:</strong> EL TENDERO se compromete a aceptar y procesar correctamente todos los cupones de descuento presentados por consumidores válidos, respetando los términos y condiciones de cada cupón (descuento aplicado, monto mínimo de compra, productos válidos, fecha de vigencia).</li>
        <li><strong>Verificación de cupones:</strong> EL TENDERO deberá verificar la validez del cupón escaneando el código QR o ingresando el número de cupón en la aplicación SAVANHI antes de aplicar el descuento.</li>
        <li><strong>Registro de redención:</strong> EL TENDERO es responsable de registrar cada redención de cupón en el sistema de SAVANHI inmediatamente después de concretarse la transacción.</li>
        <li><strong>Mantenimiento de stock:</strong> EL TENDERO se compromete a mantener disponibilidad razonable de los productos promocionados durante las campañas activas. En caso de desabastecimiento, deberá notificar a SAVANHI con anticipación.</li>
        <li><strong>Atención al consumidor:</strong> EL TENDERO deberá mantener una conducta profesional con los consumidores, atendiendo sus consultas y resolviendo problemas de manera amable y eficiente.</li>
        <li><strong>Información actualizada:</strong> EL TENDERO mantendrá sus datos actualizados en la plataforma, incluyendo información de contacto, horarios, y datos bancarios.</li>
        <li><strong>Operación de la app:</strong> EL TENDERO o su personal designado deberá saber operar la aplicación SAVANHI para la verificación y registro de cupones.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Cuarta: Sistema de Tiers y Métricas
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        SAVANHI implementa un sistema de clasificación de tenderos en tres categorías, basado en su desempeño:
      </p>

      <TierTable
        tiers={[
          {
            name: "GOLD",
            color: "#FFB32B",
            requirements: [
              ">=95% cupones verificados correctamente",
              ">=90% disponibilidad de productos",
              ">=4.5 estrellas rating consumidores",
            ],
            benefits: [
              "Prioridad en campañas",
              "Mayor visibilidad en app",
              "Fee de procesamiento reducido",
              "Acceso anticipado a nuevas campañas",
            ],
          },
          {
            name: "SILVER",
            color: "#A0A0A0",
            requirements: [
              ">=85% cupones verificados correctamente",
              ">=80% disponibilidad de productos",
              ">=3.5 estrellas rating consumidores",
            ],
            benefits: [
              "Acceso a campañas estándar",
              "Visibilidad regular en app",
            ],
          },
          {
            name: "BRONZE",
            color: "#CD7F32",
            requirements: [
              ">=70% cupones verificados correctamente",
              ">=3.0 estrellas rating consumidores",
            ],
            benefits: [
              "Acceso a campañas básicas",
              "Visibilidad limitada",
            ],
          },
        ]}
      />

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Métricas evaluadas:</strong> SAVANHI evaluará las siguientes métricas para la clasificación por tiers:
      </p>

      <ul className="list-disc list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li>Tasa de redenciones correctas (cupones verificados vs. presentados)</li>
        <li>Disponibilidad de productos promocionados</li>
        <li>Rating promedio de consumidores</li>
        <li>Tiempo promedio de procesamiento de cupones</li>
        <li>Frecuencia de problemas reportados (fraude, productos no disponibles, etc.)</li>
      </ul>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Actualización de tier:</strong> La clasificación por tiers se actualizará <strong>[mensual / semanal]</strong> basándose en el promedio de los últimos <strong>[30]</strong> días de operación.
      </p>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Notificación de cambio:</strong> SAVANHI notificará a EL TENDERO cuando su clasificación cambie, indicando las métricas que debe mejorar para escalar de tier.
      </p>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Quinta: Reembolso por Cupones Redimidos
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Mecanismo de reembolso:</strong> SAVANHI reembolsará a EL TENDERO el valor de los descuentos aplicados a través de cupones redimidos, según la siguiente periodicidad:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li><strong>Frecuencia:</strong> Semanal (cada <strong>[7]</strong> días)</li>
            <li><strong>Período de corte:</strong> De <strong>[DÍA]</strong> a <strong>[DÍA]</strong> de cada semana</li>
            <li><strong>Fecha de pago:</strong> Dentro de los <strong>[3]</strong> días hábiles siguientes al período de corte</li>
          </ul>
        </li>
        <li><strong>Medio de pago:</strong> Los reembolsos se realizarán exclusivamente a través de <strong>DeUna</strong> (billetera digital) o <strong>[OTRO MÉTODO ACORDADO]</strong>, a la cuenta registrada por EL TENDERO.</li>
        <li><strong>Monto del reembolso:</strong> El reembolso corresponderá al valor exacto del descuento aplicado según el cupón. Por ejemplo, si el cupón es de 15% de descuento y el consumidor compra USD 10, el reembolso será de USD 1.50.</li>
        <li><strong>Verificación de transacciones:</strong> SAVANHI verificará las transacciones reportadas antes de procesar el reembolso. En caso de discrepancias, se contactará a EL TENDERO para aclarar.</li>
        <li><strong>Comisión de plataforma:</strong> SAVANHI podrá retener una comisión por el uso de la plataforma, la cual será comunicada previamente a EL TENDERO y detallada en el anexo de este Contrato.</li>
        <li><strong>Impuestos:</strong> EL TENDERO es responsable del cumplimiento de sus obligaciones tributarias. SAVANHI no retendrá impuestos a menos que así lo exija la ley.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Sexta: Penalidades por Fraude
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Conductas consideradas fraude:</strong> Se consideran conductas fraudulentas, entre otras:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Registrar redenciones de cupones sin que el consumidor haya realizado la compra</li>
            <li>Aceptar cupones vencidos, ya utilizados, o manipulados</li>
            <li>Simular transacciones para generar reembolsos ficticios</li>
            <li>Manipular el sistema de verificación de cupones</li>
            <li>Divulgar códigos de cupones a terceros para su uso indebido</li>
            <li>Generar múltiples cuentas para un mismo establecimiento</li>
          </ul>
        </li>
        <li><strong>Investigación:</strong> Ante sospecha de fraude, SAVANHI podrá suspender temporalmente la cuenta de EL TENDERO mientras realiza la investigación correspondiente.</li>
        <li><strong>Sanciones:</strong> En caso de confirmarse fraude, SAVANHI podrá aplicar las siguientes sanciones:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li><strong>Primera infracción:</strong> Suspensión de la cuenta por <strong>[7]</strong> días y requerimiento de devolución de fondos indebidos.</li>
            <li><strong>Segunda infracción:</strong> Suspensión definitiva de la cuenta y remisión a las autoridades competentes si correspondiera.</li>
            <li><strong>Reembolso:</strong> EL TENDERO deberá devolver los montos obtenidos fraudulentamente. En caso de negativa, SAVANHI podrá iniciar acciones legales y/o compensatorias.</li>
          </ul>
        </li>
        <li><strong>Presunción de fraude:</strong> El registro sistemático de transacciones fuera del horario normal de operación, o en ubicaciones diferentes a las coordenadas registradas, podrá ser presumido como fraudulento.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Séptima: Protección de Datos Personales
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Cumplimiento LOPDP:</strong> SAVANHI y EL TENDERO se comprometen a cumplir con la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador y sus reglamentos.</li>
        <li><strong>Datos del tendero:</strong> Los datos personales proporcionados por EL TENDERO (nombre, cédula, dirección, teléfono, datos bancarios) serán tratados por SAVANHI exclusivamente para:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Verificación de la identidad del tendero</li>
            <li>Gestión de pagos y reembolsos</li>
            <li>Comunicación relacionada con el servicio</li>
            <li>Cumplimiento de obligaciones legales</li>
          </ul>
        </li>
        <li><strong>Consentimiento:</strong> EL TENDERO otorga su consentimiento expreso para el tratamiento de sus datos personales conforme a lo establecido en la Política de Privacidad de SAVANHI.</li>
        <li><strong>Derechos del titular:</strong> EL TENDERO podrá ejercer sus derechos de acceso, rectificación, eliminación, y oposición conforme a la LOPDP, mediante solicitud a través de los canales de atención de SAVANHI.</li>
        <li><strong>Confidencialidad:</strong> EL TENDERO se compromete a mantener estricta confidencialidad sobre cualquier información personal de consumidores que obtenga a través de la plataforma SAVANHI.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Octava: Obligaciones de SAVANHI
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Plataforma tecnológica:</strong> Proveer una plataforma funcional para el registro, verificación, y procesamiento de cupones.</li>
        <li><strong>Soporte:</strong> Brindar soporte técnico y operacional a EL TENDERO a través de <strong>[CANAL DE SOPORTE]</strong> en horario <strong>[HORARIO]</strong>.</li>
        <li><strong>Capacitación:</strong> Proporcionar materiales de capacitación y entrenamiento para el uso adecuado de la plataforma.</li>
        <li><strong>Pagos puntuales:</strong> Procesar los reembolsos en los plazos establecidos en la Cláusula Quinta.</li>
        <li><strong>Notificaciones:</strong> Comunicar a EL TENDERO sobre nuevas campañas, cambios en políticas, y actualizaciones del sistema con razonable anticipación.</li>
        <li><strong>Panel de métricas:</strong> Proveer acceso a un panel donde EL TENDERO pueda consultar sus estadísticas de desempeño, redenciones, y reembolsos.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Novena: Vigencia y Terminación
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Vigencia:</strong> El presente Contrato tendrá una vigencia indefinida, comenzando desde la fecha de aprobación del registro de EL TENDERO en la plataforma.</li>
        <li><strong>Terminación por EL TENDERO:</strong> EL TENDERO podrá terminar el Contrato en cualquier momento mediante notificación escrita a SAVANHI con al menos <strong>[15]</strong> días de anticipación. Durante este período, deberá completar todas las transacciones pendientes.</li>
        <li><strong>Terminación por SAVANHI:</strong> SAVANHI podrá terminar el Contrato en los siguientes casos:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Incumplimiento de las obligaciones de EL TENDERO</li>
            <li>Conducta fraudulenta o prácticas indebidas</li>
            <li>Inactividad prolongada (sin transacciones durante <strong>[90]</strong> días consecutivos)</li>
            <li>Por criterio operativo de SAVANHI, con <strong>[30]</strong> días de notificación previa</li>
          </ul>
        </li>
        <li><strong>Efectos de la terminación:</strong>
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Al terminar, SAVANHI suspenderá el acceso de EL TENDERO a la plataforma.</li>
            <li>Se procesarán los reembolsos pendientes correspondientes a transacciones verificadas.</li>
            <li>EL TENDERO deberá dejar de representarse como aliado de SAVANHI.</li>
          </ul>
        </li>
        <li><strong>Datos post-terminación:</strong> SAVANHI retendrá los datos de EL TENDERO durante el período legalmente requerido y eliminará el resto conforme a su política de retención de datos.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima: Responsabilidades y Limitación
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Responsabilidad de SAVANHI:</strong> SAVANHI será responsable únicamente de la provisión de la plataforma tecnológica y la gestión del sistema de cupones. No será responsable de:
          <ul className="list-disc list-inside space-y-1 text-[#F4F4F4]/90 mt-2 ml-4">
            <li>Conflictos entre EL TENDERO y los consumidores</li>
            <li>La calidad o disponibilidad de los productos de las marcas</li>
            <li>Pérdidas económicas derivadas de la operación del negocio de EL TENDERO</li>
          </ul>
        </li>
        <li><strong>Limitación de responsabilidad:</strong> La responsabilidad máxima de SAVANHI bajo este Contrato no excederá el monto de los reembolsos promedios mensuales recibidos por EL TENDERO en los últimos <strong>[6]</strong> meses.</li>
        <li><strong>Fuerza mayor:</strong> Ninguna de las partes será responsable por retrasos o incumplimientos derivados de circunstancias fuera de su control razonable.</li>
        <li><strong>Seguridad de la cuenta:</strong> EL TENDERO es responsable de mantener la confidencialidad de sus credenciales de acceso a la aplicación. Cualquier actividad realizada con su cuenta será considerada realizada por EL TENDERO.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima Primera: Solución de Controversias
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Negociación directa:</strong> Las partes intentarán resolver cualquier controversia mediante negociación directa.</li>
        <li><strong>Mediación:</strong> Si no se alcanzare acuerdo, cualquiera de las partes podrá someterse a mediación en <strong>[QUITO / GUAYAQUIL / OTRA CIUDAD]</strong>.</li>
        <li><strong>Arbitraje:</strong> Las controversias no resueltas mediante mediación serán sometidas a arbitraje institucional de <strong>[CENTRO DE ARBITRAJE]</strong>, con sede en <strong>[CIUDAD]</strong>.</li>
        <li><strong>Régimen legal:</strong> El presente Contrato se regirá por las leyes de la República del Ecuador.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Cláusula Décima Segunda: Disposiciones Generales
      </h2>

      <ol className="list-decimal list-inside space-y-2 text-[#F4F4F4]/90 mb-6">
        <li><strong>Modificaciones:</strong> SAVANHI podrá modificar los términos de este Contrato. Las modificaciones serán comunicadas con al menos <strong>[15]</strong> días de anticipación. La continuación del uso de la plataforma implica aceptación de las modificaciones.</li>
        <li><strong>Cesión:</strong> EL TENDERO no podrá ceder sus derechos u obligaciones bajo este Contrato sin autorización previa y por escrito de SAVANHI.</li>
        <li><strong>Renuncia:</strong> La tolerancia de SAVANHI ante incumplimientos de EL TENDERO no se considerará como renuncia a sus derechos.</li>
        <li><strong>Notificaciones:</strong> Las notificaciones serán enviadas a la dirección de correo electrónico y/o número de teléfono registrado por EL TENDERO.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Anexo: Comisiones y Condiciones Económicas
      </h2>

      <DataTable
        headers={["Concepto", "Valor"]}
        rows={[
          ["Comisión de plataforma por transacción", "[X]% o USD $[MONTO]"],
          ["Periodicidad de reembolso", "Semanal"],
          ["Costo de verificación (si aplica)", "USD $[MONTO]"],
          ["Otros cargos", "[DESCRIBIR]"],
        ]}
      />

      <h2 className="text-2xl font-semibold text-[#F4F4F4] mt-10 mb-4">
        Firmas
      </h2>

      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4">
        <strong>Por EL TENDERO:</strong>
      </p>
      <p className="text-[#F4F4F4]/90 leading-relaxed mb-4 font-mono">
        _____________________________<br />
        Nombre: ______________________<br />
        Cédula: _______________________<br />
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
