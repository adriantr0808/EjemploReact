import React, { useState } from "react";

function Car(props) {
  //Aqui podemos desestructurar como hemos visto
  //pero tambien podemos crear un objeto con sus propiedades
  //const [Marca, Modelo, Acelearcion, VelocidadMaxima] = props;

  //Objeto coche con estos atributos
  var coche = {
    marca: props.Marca,
    modelo: props.Modelo,
    aceleracion: props.Aceleracion,
    velocidadMaxima: props.VelocidadMax,
  };

  //Variable para saber si el cocche esta arrancado o no
  const [estado, setEstado] = useState(false);

  //Variable para saber la velocidad actual del coche
  const [velocidad, setVelocidad] = useState(0);

  //Los metodos pueden devolver contenido html para ser utilizados en nuestro dibujo
  //del componente
  /*
  const mostrarTitulo = (mensaje) => {
    return <h1 style={{ color: "green" }}>mensaje</h1>;
  };
  */

  //Creamos un metodo que devovlera html
  //con estilo dependiendo del estado
  //de la variable estado

  const comprobarEstado = () => {
    if (estado == true) {
      return <span style={{ color: "green" }}>Arrancado</span>;
    } else {
      return <span style={{ color: "red" }}>Detenido</span>;
    }
  };

  //Metodo para acelerar el coche
  const acelerarCoche = () => {
    if (estado == false) {
      alert("El coche esta parado");
      setVelocidad(0);
    } else {
      if (velocidad >= parseInt(coche.velocidadMaxima)) {
        setVelocidad(coche.velocidadMaxima);
      } else {
        setVelocidad(parseInt(velocidad) + parseInt(coche.aceleracion));
      }
    }
  };

  var estilo = {
    border: "5px solid brown",
    margin: "1em",
    padding: "1em",
    background: "beige",
  };

  return (
    <div style={estilo}>
      <h1 style={{ color: "fuchsia" }}>
        Marca: {coche.marca}, Modelo: {coche.modelo}
      </h1>
      <h3>El coche está...{comprobarEstado()}</h3>
      <h3 style={{ color: "blue" }}>Velocidad actual: {velocidad} km/h</h3>
      <button style={{ margin: "1em" }} onClick={() => setEstado(!estado)}>
        Arrancar/Detener
      </button>
      <button onClick={() => acelerarCoche()}>Acelerar</button>
    </div>
  );
}

export default Car;
