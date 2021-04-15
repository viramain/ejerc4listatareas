import React from 'react';

const ItemTarea = (props) => {
    return ( 
        <li className='list-group-item d-flex justify-content-between'>
            {props.dato}
            <button className='btn btn-danger lead' onClick={()=>props.borrarTarea(props.indice)}>X</button>
            {/* <button className='btn btn-danger lead' onClick={()=>props.borrarTarea(props.dato)}>X</button> */}
            {/* <i class="fas fa-times-circle"></i> */}
        </li>
    );
};

export default ItemTarea;