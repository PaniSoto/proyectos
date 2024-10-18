import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl border-b-[4px] text-[#1d81ecfc] font-black" pb-4>Información general: convalidaciones, exenciones y títulos </h1>
      <p className="text-black">
        Antes de empezar debemos aclarar la diferencia entre convalidación, exención y traslado de calificación. La convalidación es el procedimiento por el cual se reconoce como superado un módulo que contiene los contenidos del módulo, módulos profesionales, asignatura o unidad de competencia que se aporta. La exención solo se aplica al módulo profesional de formación en centros de trabajo y se debe aportar una experiencia profesional acreditable y de duración definida. El traslado de calificaciones es la calificación que se asigna a un módulo que posee el mismo código y denominación que otro ya cursado y superado.

        A continuación, se muestra información tutorial que esperamos que te sea de utilidad.
      </p>
    </div>
  );
}