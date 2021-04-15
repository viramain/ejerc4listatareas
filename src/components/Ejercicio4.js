import React, { Fragment, useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const Ejercicio4 = () => {
    //========= ZONA de logica de JS, antes del return()============
    let tareasLocalStorage = JSON.parse(localStorage.getItem('almacenTareas'));
    if(!tareasLocalStorage){
        tareasLocalStorage=[];
    }

    // ...... creamos los STATE ........
    const [tareas, setTareas] = useState(tareasLocalStorage);
    const [tareaIndividual, setTareaIndividual] = useState('');
    //..... fin creación states ......


    //---- CICLO DE VIDA otro hock: useEfect ----
    useEffect(()=>{
        // aqui va la logica que quiero ejecutar en montaje y actualizacion
        localStorage.setItem('almacenTareas',JSON.stringify(tareas));
    },[tareas]);

    // cada vez que presiona ENTER, agrega en la lista de tareas
    const agregarLista = (e) => {
        if (e.charCode === 13){
            e.preventDefault();
            // guardar una tarea en el arrelo de tareas
            setTareas([...tareas, tareaIndividual]);

            // limpiar input
            setTareaIndividual('');
        }
    };

    const borrarTarea = (codigo) =>{
        // filter toma "i" como indice del arreglo (valor de la 2da posicion)
        console.log("codigo:"+codigo)
        let arregloModificado = tareas.filter((dato,i)=>i!==codigo);
        setTareas(arregloModificado);
    }

    return ( 
        <Fragment>
            {/* ======== codigo HTML (dentro de la primera etiqueta HTML o usar FRAGMENT) =========== */}
            <section className="container shadow text-center w-50 mt-5">
                <h1 className='display-4 text-dark text-center my-3'>Bienvenido</h1>
                <form className="my-3 mx-5 text-center text-dark">
                    <label className='lead fw-bold my-3'>Ingresa tus tareas</label>
                    <input
                        type="text"
                        placeholder="Tarea 1..."
                        className="form-control"
                        onChange={(e) => setTareaIndividual(e.target.value)}
                        onKeyPress={agregarLista}
                        value={tareaIndividual}
                    />
                </form>
    
                <section className='container py-3'>
                    <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
                </section>
            </section>
        </Fragment>
    );
};

export default Ejercicio4;