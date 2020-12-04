import React, { Fragment, useRef, useEffect } from 'react';
import { crearRed, red } from '../library/vis';
import { connect } from 'react-redux';

import Glide from '@glidejs/glide';

const Diagramas = ({ cadenaMontar }) => {
    
    const contenedor_grafo = useRef(null);
    //vector base
    var vector = []; for (let i = 0; i < 40; i++) vector.push("x");

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
        // keyboard: false
      })
      // glide.disable(); //suspende interaccion
      glide.mount();

    },[])

    //ejemplo del grafo
    //prueba de funcionamiento del grafo
    useEffect(()=>{
        console.log(contenedor_grafo.current);
        //crea el grafo
        crearRed(contenedor_grafo.current);

      
    },[])

    useEffect(()=>{
      console.log("Actualizo cadena en la cinta");
      console.log("Effect diagramas => ",cadenaMontar);
    },[cadenaMontar])

    const mostrarElementosEnLaCinta = () => { 

      if(cadenaMontar.length === 0){
        return vector.map((elem,i)=>(
          <li className="glide__slide" key={i} ></li>
        ));
      }
      else{
        var aux = 9;
        return vector.map((elem,i)=>{
          if(i === 9){
            return <li className="glide__slide" key={i} >{cadenaMontar[0]}</li>
          }
          if(i>=10 && i <= 10+(cadenaMontar.length-2)) {
            return <li className="glide__slide" key={i} >{cadenaMontar[i-aux]}</li>
          }
          else return <li className="glide__slide" key={i} ></li>
        }); 
      }
      
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
                    {/* <img src="https://img.icons8.com/fluent/48/000000/sort-up.png"/> */}
                      <p>Una vez cargues la maquina, aparecera la cadena en esta cinta ...!</p>
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

const mapStateToProps = state => ({
  cadenaMontar: state.cadenaAMontar
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps,mapDispatchToProps)(Diagramas);

