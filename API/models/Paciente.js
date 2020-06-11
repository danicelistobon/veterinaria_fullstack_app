const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
  nombre: { type: String, trim: true },
  propietario: { type: String, trim: true },
  phone: { type: String, trim: true },
  fecha: { type: String, trim: true },
  hora: { type: String, trim: true },
  consulta: { type: String, trim: true }
});

module.exports = mongoose.model('Paciente', pacientesSchema);
