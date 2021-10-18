function Metodos(){
    var ejemplo = "Soy una vairable de ejemplo";

    const mostrarMensaje = () =>{
        alert('Has pulsado un botón');
      
    }

    //Metodo con parametros
    const dobleNumero= (numero) =>{
        var doble = numero *2;
        alert(doble);
    }

    const cambiarVariable = () =>{
        ejemplo="He cambiado!!";
        console.log(ejemplo);
    }
    var margen = {
        margin: '1em'
    }
    return(
    <div>
        {/* {mostrarMensaje()}   */}
        <h1>Ejemplo de métodos React</h1>
        <h2 style={{color:'red'}}>{ejemplo}</h2>
        <button style={{margen}} onClick={() => mostrarMensaje()} hasMargin>
            Pulsar para mensaje
        </button>
        <button style={{margen}} onClick={() => dobleNumero(5)}>
            Pulsar para ver el doble del numero 5
        </button>
        <button style={{margen}} onClick={() => cambiarVariable()}>
            Pulsar para cambiar 
        </button>
    </div>);
}

export default Metodos;