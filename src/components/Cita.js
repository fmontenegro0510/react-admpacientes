import React from 'react';
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => {
    return (  

        <div className="cita">
            <p> Mascota: <span>{cita.mascota}</span></p>
            <p> Dueño: <span>{cita.propietario}</span></p>
            <p> Fecha: <span>{cita.fecha}</span></p>
            <p> Hora: <span>{cita.hora}</span></p>
            <p> Sintomas: <span>{cita.sintomas}</span></p>
            <button
                className="button eliminar u-full-width"
                //lo llamo como una arrow function para esperar q el evento suceda, de lo contrario si
                //llamo a la funcion sin arrow function me arrojaria un error dado q se ejecutaria por la llamada sin esperar el evento
                onClick={()=> eliminarCita(cita.id) }
            >
                Eliminar
            </button>
        </div>

    );
}

Cita.propTypes ={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;