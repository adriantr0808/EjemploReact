function Matematicas(props) {
  const { Numero, triple } = props;

  const doble = () => {
    //Creamos el metodo doble en el hijo para
    //para hacer el doble de un numero
    //El numero del que queremos el doble es el que esta en la propiedad
    //Por tanto cogemos Numero que es la propiedad
    var doble = Numero * 2;
    console.log(doble);
  };

  return (
    //Al ejecutar el metodo triple le pasamos como parametro la propiedad Numero
    <div>
      <h1>Doble y triple de un numero</h1>
      <h2>Soy mates {Numero}</h2>
      <button onClick={() => doble()}>Doble</button>
      <button onClick={() => triple(Numero)}>Triple</button>
    </div>
  );
}

export default Matematicas;
