import React, { Fragment, useRef, useEffect } from 'react';
import { crearRed, red } from '../library/vis';

import Glide from '@glidejs/glide';

const Diagramas = () => {
    
    const contenedor_grafo = useRef(null);

    //ejemplo de la cinta
    useEffect(()=>{

      var glide = new Glide('.glide',{
        type: "slider",
        startAt: 10,
        perView: 11,
        focusAt: "center",
        gap: 5,
        // animationTimingFunc: "bounce",
        animationDuration: 100,
        peek: 20,
        keyboard: false
      })
      // glide.disable(); //suspende interaccion
      glide.mount();

      var x = 0;
      var idInterval = setInterval(()=>{
        if(x < 3){
          document.getElementById("btn__next").click();
          x++;
        }
        else if(x >= 3 && x <= 6){
          document.getElementById("btn__prev").click();
          x++
        }
        else{
          clearInterval(idInterval);
        }
      },1000);

    },[])

    //ejemplo del grafo
    //prueba de funcionamiento del grafo
    useEffect(()=>{
        console.log(contenedor_grafo.current);
        //crea el grafo
        crearRed(contenedor_grafo.current);

        // const grafo = red();
        
        // var x=0;
        // function iniciar(){
        //     if(x < 12){
        //         ejecutaEsto(x+1,grafo);
        //         x++;
        //     }
        //     else{
        //         console.log("ya limite > 12");
        //         clearInterval(idInterval)
        //     }
        // }

        // var idInterval = setInterval(iniciar,500);
      
    },[])

    const mostrarElementosEnLaCinta = () => { 
      var vector = [];
      for (let i = 0; i < 40; i++) vector.push("x");
      
      return vector.map((elem,i)=>(
        <li className="glide__slide" key={i} ></li>
      ));
      
    }

    return(
        <Fragment>
            {/* Contenedor del grafo */}
            <div className="wrapper__grafo">
                <div id="red" ref={contenedor_grafo}></div>
            </div> 

            {/* Contenedor de la cinta */}
            <div className="glide">
                <h3>Representación de la cinta</h3>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {
                          mostrarElementosEnLaCinta()
                        }
                    </ul>
                    <div className="señalador">
                    <img src="https://img.icons8.com/fluent/48/000000/sort-up.png"/>
                    </div>
                </div>
                <div data-glide-el="controls">
                  <button id="btn__prev" className="btns" data-glide-dir="<">prev</button>
                  <button id="btn__next" className="btns" data-glide-dir=">">next</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Diagramas;





//pruebas
// function ejecutaEsto(p,network){
    //     switch(p){
    //       case 1:
    //         network.setSelection({nodes:[1],edges:[11]})
    //         break;

    //       case 2:
    //         network.setSelection({nodes:[5]})  
    //         // network.unselectAll();
    //         break;
          
    //       case 3:
    //         network.setSelection({nodes:[1],edges:[11]})  
    //         // network.unselectAll();
    //         break;
          
    //       case 4:
    //         network.setSelection({nodes:[5]})  
    //         // network.unselectAll();
    //         break;
          
    //       case 5:
    //         network.setSelection({nodes:[2],edges:[12]})  
    //         // network.unselectAll();
    //         break;
          
    //       case 6:
    //         network.setSelection({nodes:[5]})  
    //         // network.unselectAll();
    //         break;
    //       case 7:
    //         network.setSelection({nodes:[3], edges:[23]})  
    //         // network.unselectAll();
    //         break;
    //       case 8:
    //         network.setSelection({nodes:[5]})  
    //         // network.unselectAll();
    //         break;
    //       case 9:
    //         network.setSelection({nodes:[3], edges:[33]})  
    //         // network.unselectAll();
    //         break;
    //       case 10:
    //         network.setSelection({nodes:[5]})  
    //         // network.unselectAll();
    //         break;
    //       case 11:
    //         network.setSelection({nodes:[4], edges:[34]})  
    //         // network.unselectAll();
    //         break;
    //       case 12:
    //         network.setSelection({nodes:[5]})  
    //         // network.unselectAll();
    //         break;
    //     }  
    //   }