const Paciente = require('../models/Paciente');

exports.nuevoCliente = async (req, res, next) => {
  // crear objeto de paciente con datos de req.body
  const paciente = new Paciente(req.body);
  try {
    await paciente.save();
    res.json({ mensaje: 'El cliente se agregó correctamente' });
  } catch (error) {
    console.log(error);
    next();
  }
};

// obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

// obtiene un paciente por su ID
exports.obtenerPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// actualiza un paciente por su ID
exports.actualizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    });
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// elimina un paciente por su ID
exports.eliminarPaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndDelete({ _id: req.params.id });
    res.json({ mensaje: 'El paciente fue eliminado' });
  } catch (error) {
    console.log(error);
    next();
  }
};
