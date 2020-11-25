import React, { Fragment } from 'react';
import Navegacion from './components/navegacion';
import Footer from './components/footer';
import Cuerpo from './components/cuerpo';

function App() {
    return (
      <Fragment>
        <Navegacion/>
        <Cuerpo/>
        <Footer/>
      </Fragment>
    );
}

export default App;