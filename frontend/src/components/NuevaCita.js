import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';

const NuevaCita = (props) => {
  // generar state como objeto
  const [cita, guardarCita] = useState({
    nombre: '',
    propietario: '',
    phone: '',
    fecha: '',
    hora: '',
    consulta: ''
  });
  // lee los datos del form
  const actualizarState = event => {
    guardarCita({
      ...cita,
      [event.target.name]: event.target.value
    });
  };
  // enviar una petición a la API
  const crearNuevaCita = event => {
    event.preventDefault();
    // enviar la petición por axios
    clienteAxios.post('/pacientes', cita)
      .then(res => {
        console.log(res);
        props.guardarConsulta(true);
        // redirection
        props.history.push('/');
      });
  };

  return (
    <>
      <h1 className='my-5'>Crear nueva cita</h1>
      <div className='container mt-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5 d-flex justify-content-center'>
            <Link to='/' className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'>Volver</Link>
          </div>
          <div className='col-md-8 mx-auto'>
            <form onSubmit={crearNuevaCita} className='bg-white p-5 bordered'>
              <div className='form-group'>
                <label htmlFor='nombre'>Nombre mascota</label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='nombre'
                  name='nombre'
                  placeholder='Nombre mascota'
                  onChange={actualizarState}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='propietario'>Nombre propietario</label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='propietario'
                  name='propietario'
                  placeholder='Nombre propietario'
                  onChange={actualizarState}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Teléfono</label>
                <input
                  type='tel'
                  className='form-control form-control-lg'
                  id='phone'
                  name='phone'
                  placeholder='Teléfono'
                  onChange={actualizarState}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='fecha'>Fecha Alta</label>
                <input
                  type='date'
                  className='form-control form-control-lg'
                  id='fecha'
                  name='fecha'
                  onChange={actualizarState}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='hora'>Hora Alta</label>
                <input
                  type='time'
                  className='form-control form-control-lg'
                  id='hora'
                  name='hora'
                  onChange={actualizarState}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='consulta'>Consulta</label>
                <textarea
                  className='form-control'
                  name='consulta'
                  rows='6'
                  onChange={actualizarState}
                />
              </div>
              <input type='submit' className='btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold' value='Crear Cita' />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(NuevaCita);
