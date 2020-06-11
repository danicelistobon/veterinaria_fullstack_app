import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Cita = (props) => {
  if (!props.cita) {
    props.history.push('/');
    return null;
  }
  // extraer por props
  const { cita } = props;
  // elimina un registro
  const eliminarCita = id => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínela!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        // alerta de eliminado
        Swal.fire(
          '¡Eliminada!',
          'La cita ha sido eliminada.',
          'success'
        );
        // eliminado de la base de datos
        clienteAxios.delete(`/pacientes/${id}`)
          .then(res => {
            props.guardarConsulta(true);
            // redirection cuando se elimina un registro
            props.history.push('/');
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  return (
    <>
      <h1 className='my-5'>Nombre del paciente: {cita.nombre}</h1>

      <div className='container mt-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5 d-flex justify-content-center'>
            <Link to='/' className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'>Volver</Link>
          </div>
          <div className='col-md-8 mx-auto'>
            <div className='list-group'>
              <div className='p-5 list-group-item list-group-item-action flex-column align-items-center'>
                <div className='d-flex w-100 justify-content-between mb-4'>
                  <h3 className='mb-3'>{cita.nombre}</h3>
                  <small className='fecha-alta'>
                    {cita.fecha} - {cita.hora}
                  </small>
                </div>
                <p className='mb-0'>
                  {cita.consulta}
                </p>
                <div className='contacto py-3'>
                  <p>Propietario: {cita.propietario}</p>
                  <p>Teléfono: {cita.phone}</p>
                </div>
                <div className='d-flex'>
                  <button type='button' className='text-uppercase py-2 px-5 btn btn-danger col' onClick={() => eliminarCita(cita._id)}>
                    Eliminar &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Cita);
