//import logo from './logo.svg';
import Saludo1 from "../Saludo/Saludo";
import "./App.css";

function App() {
  const metodoPadre = (descripcion) => {
    console.log("Soy " + descripcion);
  };

  return (
    <div className="App">
      <Saludo1 nombre="Adrian" edad="21" metodoPadre={metodoPadre} />
      <Saludo1 nombre="Lucia" edad="18" metodoPadre={metodoPadre} />
    </div>
  );
}

export default App;
