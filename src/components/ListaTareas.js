import React from 'react';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <ul className="list-group">
            {/* para escribir codigo JS va entre {} */}
            {
                // MAP recorre cada elem del arreglo y llama a la funcion ItemTarea, para armar la lista de tareas
                // key hace que cada componente ItemTarea sea unico
                // props.arregloTareas.map((valor,indice)=><ItemTarea key={indice} dato={valor} borrarTarea={props.borrarTarea}></ItemTarea>)
                props.arregloTareas.map((valor,indice)=><ItemTarea key={indice} indice={indice} dato={valor} borrarTarea={props.borrarTarea}></ItemTarea>)
            }
        </ul>
    );
};

export default ListaTareas;