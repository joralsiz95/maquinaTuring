import React from 'react';
import Navegacion from './components/navegacion';
import Footer from './components/footer';
import Cuerpo from './components/cuerpo';

import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store} >
          <main>
            <Navegacion/>
            <Cuerpo/>
            <Footer/>
          </main>
        </Provider>
    );
}

export default App;