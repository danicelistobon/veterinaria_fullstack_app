const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function () {
  // agrega un nuevo paciente via POST
  router.post('/pacientes', pacienteController.nuevoCliente);
  // obtiene todos los pacientes de la BD
  router.get('/pacientes', pacienteController.obtenerPacientes);
  // obtiene un paciente por su ID
  router.get('/pacientes/:id', pacienteController.obtenerPaciente);
  // actualizar un paciente por su ID
  router.put('/pacientes/:id', pacienteController.actualizarPaciente);
  // elimina un paciente por su ID
  router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

  return router;
};
