function Saludo1(props) {
  //var nombre = props.nombre;
  //var edad = props.edad;

  //Inventamos un nombre de variable
  //que es un metodo para llamar a alguna
  //accion que tengamos en el
  //var metodo = props.metodoPadre;
  const { nombre, edad, metodoPadre } = props;
  // var dato="Y mañana será martes...";
  return (
    <div className="App">
      {/* <h1>Hoy es super Lunes de React!!!, {nombre} con {edad} años  </h1> */}
      <button onClick={() => metodoPadre(nombre + " " + edad)}>
        LLamar al método Padre
      </button>
      <h1>
        Saludando a {nombre} con edad {edad}
      </h1>
    </div>
  );
}

export default Saludo1;
