import MatematicasDibujo from "../MatematicasDibujo/MatematicasDibujo";

import React, { useState } from "react";
function PadreDibujo() {
  const [Resultado, setResultado] = useState(0);
  const multiplicar = (num1, num2) => {
    setResultado(num1 * num2);
    console.log({ Resultado });
  };

  return (
    <div>
      <MatematicasDibujo Num1="2" Num2="5" Multiplicar={multiplicar} />
      <MatematicasDibujo Num1="5" Num2="7" Multiplicar={multiplicar} />
    </div>
  );
}

export default PadreDibujo;
