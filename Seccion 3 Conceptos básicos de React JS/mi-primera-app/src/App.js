import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
// import HolaMundo from './components/HolaMundo';
// import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

const user = {
  // nombre: "Tulio Triviño",
  edad: 26,
  color: 'Amarillo'
}

const saludarFn = ( name = "Anónimo", edad ) => {
  console.log(`Hola ${ name }, tiene ${ edad } años.`);
}

function App() {

  const [ stateCar, setStateCar ] = useState(false)
  const [ contar, setContar ] = useState(0)

  useEffect(() => {
    console.log("Total:", contar);
  }, [ contar ])


  const encenderApagar = () => {
    // setStateCar( stateCar ? false : true )

    // Lo anterior minimizado:
    // setStateCar( !stateCar )

    // Accediendo al estado previo en caso de no poder acceder a "stateCar"
    setStateCar( prevValue => !stateCar )
    setContar( contar + 1 )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Pasando datos literales como props */}
        {/* <Saludar name="Tulio" edad="26" />
        <Saludar name="Policarpio" edad="56" /> */}

        {/* Pasando objetos como props */}
        {/* <Saludar userInfo={ user } /> */}

        {/* Pasando props de función */}
        {/* <Saludar saludarFn={ () => { saludarFn( user.nombre, user.edad ) } } /> */}

        {/* Hook useState, encendiendo y apagando un coche */}
        <h3>El coche esta: { stateCar ? "Encendido" : "Apagado" }</h3>

        <h4>Click: { contar }</h4>

        <button onClick={ encenderApagar }>Encender / Apagar</button>


      </header>
    </div>
  );
}

export default App;
