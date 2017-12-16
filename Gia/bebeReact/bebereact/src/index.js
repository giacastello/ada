import React from 'react'; //importo react para poder usar componentes aca.
import ReactDOM from 'react-dom'; // Se encarga de hacer render en el DOM
import './index.css';
import Counter from './counter'; // llamo a la App
import registerServiceWorker from './registerServiceWorker'; //guarda cosas en cache.


//renderizamos
ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
