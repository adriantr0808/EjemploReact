import React, { useState } from "react";

function MatematicasDibujo(props) {

  //Empezamos por aqui!!
  //Creamos la variable de estado Resultado, para poder cambiar los resultados dinamicamente
  const [Resultado, setResultado] = useState(0); 

  const { Num1, Num2, Multiplicar } = props; // Configuamos las propieades que vamos a tener
  //Los numeros para relaizar las operaciones, y Multipliicar que servirá para realizar la 
  //operación de multiplicar

  

  const sumar = () => { //Método para sumar los numeros que tenemos en las propieadades
    setResultado(parseInt(Num1) + parseInt(Num2)); //Utilizamos set Resultado para cambiar 
    //el valor dinamicamente
  };

  var margen = {
    margin: '1em'
  }
  return (
    <div className="App">
      <h1 style={margen}>Sumar Hijo, multiplicar padre</h1>
      <h2 style={margen}>
        Soy {Num1} y {Num2}
      </h2>
      <button style={margen} onClick={() => sumar()}>Sumar los numeros</button> {/*LLamamos a la función sumar que se ejecutará cuando pulsemos el boton*/}
      <span style={{ margin: "1em", color: "red" }}>{Resultado}</span>  {/*LLamamos a la variable de estado resultaddo, que cambiará cuando pulsemos el boton de sumar*/}
      <button style={margen} onClick={() => Multiplicar(Num1, Num2)}>   {/* Llamamos al metodo multiplicar del padre que lo recibimos como propiedad mas arriba y le  
                                                                        pasamos como parametros los numeros queremos mutliplicar */}
      Multiplicar los numeros
      </button>
    
    
    </div>
  );
}

export default MatematicasDibujo;
