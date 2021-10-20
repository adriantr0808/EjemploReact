import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import Sumar from "./components/SumarNumeros/SumarNumeros";
//import Saludo from "./components/Saludo/Saludo";
//import Metodos from "./components/Metodos/Metodos";
import Padre from "./components/Padre/Padre";
//import Contador from "./components/Contador/Contador";
import PadreDibujo from "./components/PadreDibujo/PadreDibujo";
import reportWebVitals from "./reportWebVitals";
import Car from "./components/Car/Car";

ReactDOM.render(
  <div className="App">
    {/* <Saludo nombre="Adrián" edad="20" /> */}
    {/* <Metodos /> */}
    {/* <Sumar Numero1="5" Numero2="88" />
    <Sumar Numero1="999" Numero2="777" />
    <Sumar Numero1="789" Numero2="7821" /> */}
    {/* <Padre /> */}
    {/* <Contador Inicio="5" />
    <Contador Inicio="19" />
    <Contador Inicio="22" />
    <Contador Inicio="44" /> */}
    {/* <PadreDibujo /> */}

    <Car
      Marca="Pontiac"
      Modelo="Firebird"
      Aceleracion="20"
      VelocidadMax="210"
    />
    <Car Marca="Seat" Modelo="600" Aceleracion="2" VelocidadMax="90" />
    <Car Marca="Ferrari" Modelo="F40" Aceleracion="30" VelocidadMax="240" />
  </div>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
