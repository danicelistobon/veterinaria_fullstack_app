import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios';
// componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App () {
  // state de la app
  const [citas, guardarCitas] = useState([]);
  const [consulta, guardarConsulta] = useState(true);

  useEffect(() => {
    if (consulta) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(res => {
            // colocar en el state el resultado
            guardarCitas(res.data);
            // deshabilitar la consulta
            guardarConsulta(false);
          })
          .catch(error => {
            console.log(error);
          });
      };
      consultarAPI();
    }
  }, [consulta]);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Pacientes citas={citas} />}
        />
        <Route
          exact
          path='/nueva'
          component={() => <NuevaCita guardarConsulta={guardarConsulta} />}
        />
        <Route
          exact
          path='/cita/:id'
          render={(props) => {
            const cita = citas.filter(cita => cita._id === props.match.params.id);
            return (
              <Cita
                cita={cita[0]}
                guardarConsulta={guardarConsulta}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
