import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from './components/Cita'

function App() {

  //arreglo de citas
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }
  const [citas, guardarCitas] =  useState(citasIniciales)

  //El Hook useEfect se utiliza para realizar ciertas operaciones cuando es state cambia
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales])



  //Funcion que toma las citas del formulario y las agrega al arreglo de citas
  const crearCita = cita =>{
    guardarCitas([...citas, cita])
  }

  //Funcion que elimina una cita por su ID
  const eliminarCita = id =>{
    console.log(id)
    //hago la condicion del filter de forma negada para q elimine la q coincida y deje
    //las citas q tenia en el arreglo, de lo contrario, solo quedarian las citas q tienen el id
    //pasado por parametro
    const nuevasCitas = citas.filter( cita => cita.id !== id )
    guardarCitas(nuevasCitas)
  }

   const leyendaTitulo = citas.length === 0 ? 'No Hay Citas' : 'Administra Tus Citas'


  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita = {crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{leyendaTitulo}</h2>
            {citas.map(cita =>(
              <Cita
                key= {cita.id}
                cita={cita}
                eliminarCita = {eliminarCita}
              />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
 