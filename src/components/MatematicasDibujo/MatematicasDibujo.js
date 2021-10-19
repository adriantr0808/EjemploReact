import React, { useState } from "react";

function MatematicasDibujo(props) {
  const { Num1, Num2, Multiplicar } = props;

  const [Resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(parseInt(Num1) + parseInt(Num2));
  };

  return (
    <div className="App">
      <h1>Sumar Hijo, multiplicar padre</h1>
      <h2>
        Soy {Num1} y {Num2}
      </h2>
      <button onClick={() => sumar()}>Sumar los numeros</button>
      <span style={{ margin: "1em", color: "red" }}>{Resultado}</span>
      <button onClick={() => Multiplicar(Num1, Num2)}>
        Multiplicar los numeros
      </button>
      <span style={{ margin: "1em", color: "blue" }}>{Multiplicar}</span>
    </div>
  );
}

export default MatematicasDibujo;
