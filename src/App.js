import React,{useEffect} from 'react';
import Navegacion from './components/navegacion';
import Footer from './components/footer';
import Cuerpo from './components/cuerpo';

import { Provider } from 'react-redux';
import store from './store';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
function App() {
    
  useEffect(()=>{
    
    MySwal.fire({
        
      title: "Bienvenidos",
      html: <p>Te damos la bienvenida a la Maquina de Turing Web,
            que te permite ingresar las letras a y b en minúscula,
            posterior a ello se ejecutara la máquina de Turing que cambiara cada letra b por una letra a,
            además permitirá cambiar de modo automático a manual y viceversa,
            por ultimo esta la opción de cambiar la velocidad del modo automatico.
            </p>
    
    });
  
  },[])
    
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