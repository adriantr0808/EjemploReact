//Para poder utilizar estados dentro de react
//Necesitamos importar useState de la libreia react

import React, { useState } from "react";

function Contador(props) {
  //Necesitamos declarar una variable para el estado
  //Y le indicamos el tipo (State) y su valor por defecto
  const { Inicio } = props;
  const [numero, setNumero] = useState(parseInt(Inicio));

  const SumarContador = () => {
    //Debemos cambiar el valor del contador
    setNumero(numero + 1);
  };

  return (
    <div className="App">
      <h1>Ejemplo State React</h1>
      <h2 style={{ color: "blue" }}>Valor del contador: {numero}</h2>
      <button onClick={() => SumarContador()}>Sumar contador</button>
      <button
        onClick={() => {
          setNumero(numero - 1);
        }}
      >
        Restar contador
      </button>
    </div>
  );
}

export default Contador;
