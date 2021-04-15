import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ejercicio4 from './components/Ejercicio4';


function App() {
  // el return esta 
  return (
    // Fragment es para englobar todo el codigoHTML. LOs componentes tienen la primera letra mayuscula
    <Fragment>
      {/* EJERCICIO 4 ok LISTA DE TAREAS*/}
      <Ejercicio4></Ejercicio4>
    </Fragment>
  );
}

export default App;
