import Matematicas from "../Matematicas/Matematicas";

function Padre() {
  //Creamos un metodo en la clase padre llamado triple, queremos mandarlo
  //al hijo, para ello creamos creamos el metodo y le pasamos como parametro
  //un numero que será la propiedad Numero
  const triple = (numero) => {
    var triple = parseInt(numero) * 3;
    console.log(triple);
  };

  return (
    //Usamos matematicas y pasamos como propiedad Numero y como queremos
    //que el triple de un numero se haga en el hijo, pasamos como propiedad
    //el propio metodo triple
    <div>
      <Matematicas Numero="2" triple={triple} />
      <Matematicas Numero="8" triple={triple} />
    </div>
  );
}

export default Padre;
