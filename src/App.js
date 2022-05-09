import React, {useState} from 'react';
import './App.css';
import Header from './componentes/header';
import FormularioTareas from './componentes/formularioTareas';
import ListaTareas from './componentes/listaTareas';

const App = () => {
  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completado: false
      },
      {
        id: 2,
        texto: 'Grabar tutorial',
        completado: true
      }
    ]
  )

  console.log(tareas);

  return (
   <div className='contenedor'>
     <Header></Header>
     <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}></FormularioTareas>
     <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} ></ListaTareas>
    </div>
  );
}

export default App;