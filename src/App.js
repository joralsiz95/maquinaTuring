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
        
      title: "Bienvenido",
      html: <p> <strong>Te damos la bienvenida a este simulador de la Maquina de Turing</strong> <br/><br/>
            
            Este simulador tiene un caso de uso especifico:<br/><br/>
            ➤ Te permitirá ingresar una cadena con combinaciones cualesquiera de a y b en minúscula. <br/><br/>
            ➤ Luego debes cargar la máquina para la simulación (La cadena que escribiste se ubicara en la cinta). <br/><br/>
            ➤ Posterior a ello tendrás que seleccionar el modo en que deseas ver el proceso, puedes hacerlo paso a paso 
            de forma manual o puedes dejar que la simulación sea automática, en caso de que optes por esta última opción 
            tendrás que establecer una velocidad de simulación en el slider, la máxima son 300 milisegundos y la mínima son 1000.<br/><br/> 
            ➤ Puedes cambiar de modo automático a manual y viceversa. <br/><br/>
            ➤ Al dar click en los botones de "iniciar" y "siguiente" de cada modo podrás notar que la simulación convierte la cadena de 
            <strong> a</strong>es y <strong>b</strong>es que escribiste en una cadena que solo contiene <strong>a</strong>es a medida
            que ocurre magia en el grafo y en la cinta.<br/><br/>

            ⏩ Puedes ver la asignación formal <a href="https://docs.google.com/document/d/1bIvmPI2RZjalk3Hjvaf1gIRp8JKRpL7LtfM8W0IQ5Po/edit" target="_black" ><strong>aquí</strong></a> ⏪ <br/><br/>
            ⏩ y el repositorio de este proyecto <a href="https://github.com/joralsiz95/maquinaTuring" target="_black" ><strong>aquí</strong></a> ⏪ <br/><br/>

            <strong>✌ DISFRUTALO ✌</strong> 
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