import Img from "../../assets/2.jpg"; //Importamos la imagen
function Sumar(props) {
  const sumarNumeros = () => {
    //Metodo en el que voy a sumar dos numeros introducidos como parametro
    var num1 = parseInt(props.Numero1);
    var num2 = parseInt(props.Numero2);
    var resultado = "";
    resultado = num1 + num2;
    console.log(resultado);
  };

  //const { Numero1, Numero2 } = props; Esto es si lo quisiera usar globalmente

  return (
    <div>
      <h1 style={{ margin: "1em" }}> Ejemplo 1 Sumar numeros e imagen </h1>
      <button
        style={{
          padding: "2px",
          margin: "1em",
        }}
        onClick={() => sumarNumeros()} //Llamo a la funcion con los numeros introducidos como parametro
      >
        Pulsar para sumar
      </button>
      <div>
        <h3 style={{ margin: "1em" }}>Imagen</h3>
        <img
          src={Img}
          alt={"imagenPrueba"}
          style={{ width: "500px", height: "350px", margin: "1em" }}
        ></img>
      </div>
    </div>
  );
}

export default Sumar;
