
const menu = [
    "Información general: convalidaciones, exenciones y títulos",
    "Solicitud de convalidaciones",
    "Convalidaciones en FP",
    "¿Qué necesito para poder convalidar?",
    "¿Qué estudios puedo alegar?",
    "¿Dónde encontrar qué módulos son convalidables?",
    "Condiciones para convalidar FOL",
    "Condiciones para convalidar Empresa e Iniciativa Emprendedora",
    "Condiciones para convalidar Inglés",
    "Condiciones para convalidar Segunda Lengua Extranjera",
    "Condiciones para convalidar las Horas de Libre Configuración",
    "Condiciones para convalidar el módulo de Proyecto",
    "Exención de la FCT",
    "¿Puedo convalidar un módulo acreditando experiencia laboral?",
    "¿Qué organismo resuelve las convalidaciones?",
    "¿Qué documentación debo enviar al centro?",
    "¿Cómo conseguir el programa de una asignatura universitaria?",
    "¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?",
    "¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?",
    "¿Qué efectos tendrá la convalidación en mi expediente?",
    "Enlaces relacionados",
    "Solicitud del título",
    "Solicitud",
    "Tramitación y recogida",
    "Historial de versiones",
    ]

function MenuPrincipal() {
    
    return (
        <div>
            MenuPrincipal
            {
                menu.map(entrada => <p>{entrada}</p>)
            }
        </div>
    );
}

export default MenuPrincipal;
