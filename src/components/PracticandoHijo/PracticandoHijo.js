
function PracticandoHijo(props){

    const [Numero] = props;

    const doble = (Numero) =>{
        var doble = Numero * 2;
        console.log(doble);
    }

    return(
        <div>
          <h1>Hola soy el doble</h1>
        </div>
    );


}

export default PracticandoHijo