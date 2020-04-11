import React, { Fragment, useState } from "react";
import uuid  from 'uuid/v4'
import PropTypes from 'prop-types'


const Formulario = ({crearCita}) => {

    //creo el state de la Cita
    //se inicializa con llaves porque es un objeto
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //defino un state para manejar el error de los inputs y lo defino directamente 
    //porque solo lo utilizo para controlar no enviar el form con algun campo vacio
    const [error, setError] = useState(false)

    //Funcion q se ejecuta cada vez q el usuario escribe en un input

    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraigo los valores de citas aplicando Object.Destructuring
    const {mascota, propietario, fecha, hora, sintomas} = cita

    //cuando el Usuario presiona agregar una cita

    const submitCita = e =>{
        e.preventDefault()
        //validamos los datos
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {  
            setError(true)
            return
        }
        setError(false)

        //Asignamos un ID
        cita.id = uuid()
        // console.log(cita)


        //creamos la Cita
        crearCita(cita)

        //Reiniciamos el Form, con el modificador del state, siguiendo las buenas practicas de React
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

        //esto es sencillo porque ReactJS se da cuenta q cada value se pone en blanco y esto hace que cada componente se ponga en blanco
        
        
    }

  return (
    <Fragment>
      <h2>Crear una cita</h2>
      { error ? <p className="alerta-error">Todos los campos son obligatorios</p>:null }
      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value= {mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={actualizarState}
          value= {propietario}
        />
        <div className="row">
            <div className="six columns">
                <label>Fecha Consulta</label>
                <input 
                type="date" 
                name="fecha" 
                className="u-full-width"
                onChange={actualizarState}
                value={fecha} 
                />
            </div>
            <div className="six columns">
                <label>Hora</label>
                <input 
                type="time" 
                name="hora" 
                className="u-full-width" 
                onChange={actualizarState}
                value={hora}
                />
            </div>
        </div>
        <label>Sintomas</label>
        <textarea 
        type="time" 
        name="sintomas" 
        className="u-full-width"
        onChange={actualizarState}
        value={sintomas} 
        ></textarea>
        <button
        type="submit"
        className="u-full-width button-primary"
        >
            Agregar Cita
        </button>
        
      </form>
    </Fragment>
  );
};

Formulario.propTypes ={
  crearCita: PropTypes.func.isRequired
}


export default Formulario;
