function Saludo(props){
    //var nombre = props.nombre;
    //var edad = props.edad;
    const {nombre, edad}=props;
    var dato="Y mañana será martes...";
    return (
    <div>
    <h1>Hoy es super Lunes de React!!!, {nombre} con {edad} años</h1>
    </div>
    );
    
}

export default Saludo;