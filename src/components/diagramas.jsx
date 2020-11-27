import React, { Fragment, useRef, useEffect } from 'react';
import { crearRed, red } from '../library/vis';

import Glide from '@glidejs/glide';

const Diagramas = () => {
    
    const contenedor_grafo = useRef(null);

    //ejemplo de la cinta
    useEffect(()=>{

      var glide = new Glide('.glide',{
        type: "carousel",
        startAt: 15,
        perView: 11,
        focusAt: "center",
        gap: -1,
        animationDuration: 100
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
        crearRed(contenedor_grafo.current);

        const grafo = red();
        
        var x=0;
        function iniciar(){
            if(x < 12){
                ejecutaEsto(x+1,grafo);
                x++;
            }
            else{
                console.log("ya limite > 12");
                clearInterval(idInterval)
            }
        }

        var idInterval = setInterval(iniciar,500);
      
    },[])

    function ejecutaEsto(p,network){
        switch(p){
          case 1:
            network.setSelection({nodes:[1],edges:[11]})
            break;

          case 2:
            network.setSelection({nodes:[5]})  
            // network.unselectAll();
            break;
          
          case 3:
            network.setSelection({nodes:[1],edges:[11]})  
            // network.unselectAll();
            break;
          
          case 4:
            network.setSelection({nodes:[5]})  
            // network.unselectAll();
            break;
          
          case 5:
            network.setSelection({nodes:[2],edges:[12]})  
            // network.unselectAll();
            break;
          
          case 6:
            network.setSelection({nodes:[5]})  
            // network.unselectAll();
            break;
          case 7:
            network.setSelection({nodes:[3], edges:[23]})  
            // network.unselectAll();
            break;
          case 8:
            network.setSelection({nodes:[5]})  
            // network.unselectAll();
            break;
          case 9:
            network.setSelection({nodes:[3], edges:[33]})  
            // network.unselectAll();
            break;
          case 10:
            network.setSelection({nodes:[5]})  
            // network.unselectAll();
            break;
          case 11:
            network.setSelection({nodes:[4], edges:[34]})  
            // network.unselectAll();
            break;
          case 12:
            network.setSelection({nodes:[5]})  
            // network.unselectAll();
            break;
        }  
      }


    return(
        <Fragment>
            {/* Contenedor del grafo */}
            <div className="wrapper__grafo">
                <div id="red" ref={contenedor_grafo}></div>
            </div> 

            {/* Contenedor de la cinta */}
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">0</li>
                        <li class="glide__slide">1</li>
                        <li class="glide__slide">2</li>
                        <li class="glide__slide">3</li>
                        <li class="glide__slide">4</li>
                        <li class="glide__slide">5</li>
                        <li class="glide__slide">6</li>
                        <li class="glide__slide">7</li>
                        <li class="glide__slide">8</li>
                        <li class="glide__slide">9</li>
                        <li class="glide__slide">10</li>
                        <li class="glide__slide">11</li>
                        <li class="glide__slide">12</li>
                        <li class="glide__slide">13</li>
                        <li class="glide__slide">14</li>
                        <li class="glide__slide">15</li>
                        <li class="glide__slide">16</li>
                        <li class="glide__slide">17</li>
                        <li class="glide__slide">18</li>
                        <li class="glide__slide">19</li>
                        <li class="glide__slide">20</li>
                        <li class="glide__slide">21</li>
                        <li class="glide__slide">22</li>
                        <li class="glide__slide">23</li>
                        <li class="glide__slide">24</li>
                        <li class="glide__slide">25</li>
                        <li class="glide__slide">26</li>
                        <li class="glide__slide">27</li>
                        <li class="glide__slide">28</li>
                        <li class="glide__slide">29</li>
                        <li class="glide__slide">30</li>
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