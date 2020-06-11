const { app, BrowserWindow } = require('electron');

let appWindow;

function createWindow () {
  appWindow = new BrowserWindow({
    //para establecer un tamaño
    width: 1200,
    height: 800,
    // para evitar que el usuario modifique el tamaño
    // resizable: false,
    // para establecer un tamaño mínimo
    minWidth: 800,
    minHeight: 500,
    // para cargar la app siempre al centro
    center: true,
    // para evitar que se muestre una pantalla en blanco mientras se carga la app
    show: false,
    // para mostrar un icono
    icon: 'icon.png'
  });
  // cuando la app es cerrada
  appWindow.on('closed', () => {
    appWindow = null;
  });
  // cargar HTML
  appWindow.loadFile('./index.html');
  // cuando la app este lista, mostrar la ventana
  appWindow.once('ready-to-show', () => {
    appWindow.show();
  });
}

app.on('ready', createWindow);
