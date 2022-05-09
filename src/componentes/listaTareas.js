import React from 'react';
import Tarea from './tarea';

const ListaTareas = ({tareas, cambiarTareas}) => {

    const toggleCompletada = (id) => {
        console.log('Estamos editando la tarea con id ', id);
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id) {
                return {...tarea, completado: !tarea.completado}
            }
            return tarea;
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if(tarea.id === id) {
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
        }));
    }

    return ( 
        <ul className='lista-tareas'>
            {tareas.length > 0 ? tareas.map((tarea) => {
                return <Tarea 
                            key={tarea.id}
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}>
                        </Tarea>
            })
            : <div className='lista-tareas__mensaje'>No hay tareas agregadas.</div>
            }
        </ul>

    );
}
 
export default ListaTareas;