import MatematicasDibujo from "../MatematicasDibujo/MatematicasDibujo";

import React, { useState } from "react";

function PadreDibujo() {
  const [Resultado, setResultado] = useState(0); //Creamos la variabe de estado resultado

  const multiplicar = (num1, num2) => { //Creamos el metodo multiplicar con dos parametros
    setResultado(num1 * num2); //Hacemos un set de resultado para cambiarlo dinamicamente
    
  };

  return (
    <div className="App">
      <MatematicasDibujo Num1="2" Num2="5" Multiplicar={multiplicar} /> {/*Importamos matematicas y le pasamos las propiedades necesarias (pasamos la funcion multiplicar como parametro*/}
      <MatematicasDibujo Num1="5" Num2="7" Multiplicar={multiplicar} />
      <h1 style={{color:'green', margin: '1em'}}>Multiplicación: {Resultado}</h1> 
      {/* Sacamos el valor de la variable resultado, que cambiará cuando pulse el boton en el hijo */}
    </div>
    
  );
}

export default PadreDibujo;
