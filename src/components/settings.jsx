import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { convertirEnVector } from '../library/funciones';
import { generaRecorrido } from '../library/funciones';

const Settings = ({ cadenaMontar, establecerCadenaEnLaCinta }) => {
    
    const [ cadena, setCadena ] = useState('');
    const [ pasos, setPasos ] = useState(false);
    const [ velocidad, setVelocidad ] = useState(50);
    const [ sms, setSms ] = useState('');
    const regex = /^[a-b]{2,18}$/;

    useEffect(()=>{
        console.log("entro en el effect de toggle");
        if(!pasos){
            if(regex.test(document.getElementById("entrada").value)){
                document.getElementById("cadena").classList.add("bien");
                document.getElementById("cadena").classList.remove("mal");
                document.getElementById("icono").classList.add("fa-check-circle");
                document.getElementById("icono").classList.remove("fa-times-circle");
                
                document.getElementById("iniciar").classList.remove("desactivado");
                document.getElementById("pausar").classList.remove("desactivado");
                document.getElementById("reIniciar").classList.remove("desactivado");
                document.getElementById("cargar").classList.remove("desactivado");
                // document.getElementById("toggleState").classList.remove("desactivado");
                setSms("OK Puedo trabajar con esta cadena");
                setCadena(document.getElementById("entrada").value);
            }
            else{
                document.getElementById("cadena").classList.add("mal");
                document.getElementById("cadena").classList.remove("bien");
                document.getElementById("icono").classList.remove("fa-check-circle");
                document.getElementById("icono").classList.add("fa-times-circle");

                document.getElementById("iniciar").classList.add("desactivado");
                document.getElementById("pausar").classList.add("desactivado");
                document.getElementById("reIniciar").classList.add("desactivado");
                document.getElementById("cargar").classList.add("desactivado");
                // document.getElementById("toggleState").classList.add("desactivado");
                setSms("Esta cadena no es correcta...!");
            }
        }
        else{
            if(regex.test(document.getElementById("entrada").value)){
                document.getElementById("cadena").classList.add("bien");
                document.getElementById("cadena").classList.remove("mal");
                document.getElementById("icono").classList.add("fa-check-circle");
                document.getElementById("icono").classList.remove("fa-times-circle");

                document.getElementById("siguiente").classList.remove("desactivado");
                document.getElementById("cargar").classList.remove("desactivado");

                setSms("OK Puedo trabajar con esta cadena");
                setCadena(document.getElementById("entrada").value);
            }
            else{
                document.getElementById("cadena").classList.add("mal");
                document.getElementById("cadena").classList.remove("bien");
                document.getElementById("icono").classList.remove("fa-check-circle");
                document.getElementById("icono").classList.add("fa-times-circle");

                document.getElementById("siguiente").classList.add("desactivado");
                document.getElementById("cargar").classList.add("desactivado");

                setSms("Esta cadena no es correcta...!");
            }
        }

    },[pasos])

    useEffect(()=>{document.getElementById("cadena").classList.remove("mal")},[]);

    const handleChange = e => {
        console.log(e.target.name," => ",e.target.value);
        
        if(e.target.name === "deslizante") setVelocidad(e.target.value);
        
        if(e.target.name === "cadena"){
            if(!pasos){
                if(regex.test(e.target.value)){
                    document.getElementById("cadena").classList.add("bien");
                    document.getElementById("cadena").classList.remove("mal");
                    document.getElementById("icono").classList.add("fa-check-circle");
                    document.getElementById("icono").classList.remove("fa-times-circle");
                    
                    document.getElementById("iniciar").classList.remove("desactivado");
                    document.getElementById("pausar").classList.remove("desactivado");
                    document.getElementById("reIniciar").classList.remove("desactivado");
                    document.getElementById("cargar").classList.remove("desactivado");

                    // document.getElementById("toggleState").classList.remove("desactivado");
                    setSms("OK Puedo trabajar con esta cadena");
                    setCadena(e.target.value);
                }
                else{
                    document.getElementById("cadena").classList.add("mal");
                    document.getElementById("cadena").classList.remove("bien");
                    document.getElementById("icono").classList.remove("fa-check-circle");
                    document.getElementById("icono").classList.add("fa-times-circle");

                    document.getElementById("iniciar").classList.add("desactivado");
                    document.getElementById("pausar").classList.add("desactivado");
                    document.getElementById("reIniciar").classList.add("desactivado");
                    document.getElementById("cargar").classList.add("desactivado");

                    // document.getElementById("toggleState").classList.add("desactivado");
                    setSms("Esta cadena no es correcta...!");
                }
            }
            else{
                if(regex.test(e.target.value)){
                    document.getElementById("cadena").classList.add("bien");
                    document.getElementById("cadena").classList.remove("mal");
                    document.getElementById("icono").classList.add("fa-check-circle");
                    document.getElementById("icono").classList.remove("fa-times-circle");

                    document.getElementById("siguiente").classList.remove("desactivado");
                    document.getElementById("cargar").classList.remove("desactivado");

                    setSms("OK Puedo trabajar con esta cadena");
                    setCadena(e.target.value);
                }
                else{
                    document.getElementById("cadena").classList.add("mal");
                    document.getElementById("cadena").classList.remove("bien");
                    document.getElementById("icono").classList.remove("fa-check-circle");
                    document.getElementById("icono").classList.add("fa-times-circle");

                    document.getElementById("siguiente").classList.add("desactivado");
                    document.getElementById("cargar").classList.add("desactivado");

                    setSms("Esta cadena no es correcta...!");
                }
            }
        } 
    }

    const handleClick = e => {

        if(e.target.id.includes("cargar")){
            console.log("Clickaste => ","cargar");
            if(document.getElementById("cargar").classList.contains("desactivado")){
                alert("Mientras la cadena de entrada este vacia o sea incorrecta, no puedes cargar la maquina")
            }
            else{
                //ejecuta la funcion que pone los datos en la cinta
                establecerCadenaEnLaCinta(convertirEnVector(cadena));
                // generarRecorrido(cadenaMontar);
            }
        } 

        if(e.target.id.includes("iniciar")){
            console.log("Clickaste => ","inicar");
            if(document.getElementById("iniciar").classList.contains("desactivado") && !document.getElementById("cargar").classList.contains("cargada")){
                alert("Mientras la cadena de entrada este vacia o sea incorrecta, no puedes iniciar\nRecuerda cargar la maquina antes de iniciar");
                //falta validar mas
            }
        }

        if(e.target.id.includes("pausar")){
            console.log("Clickaste => ","pausar");
            if(document.getElementById("pausar").classList.contains("desactivado") && !document.getElementById("cargar").classList.contains("cargada")){
                alert("Mientras la cadena de entrada este vacia o sea incorrecta, no puedes pausar\nRecuerda cargar la maquina");
                //falta validar mas
            }
        }

        if(e.target.id.includes("reIniciar")){
            console.log("Clickaste => ","reinicar");
            if(document.getElementById("reIniciar").classList.contains("desactivado") && !document.getElementById("cargar").classList.contains("cargada")){
                alert("Mientras la cadena de entrada este vacia o sea incorrecta, no puedes reiniciar\nRecuerda cargar la maquina");
                //falta validar mas
            }
        }

        if(e.target.id.includes("siguiente")){
            console.log("Clickaste => ","siguiente");
            if(document.getElementById("siguiente").classList.contains("desactivado") && !document.getElementById("cargar").classList.contains("cargada")){
                alert("Mientras la cadena de entrada este vacia o sea incorrecta, no puedes seguir el proceso por pasos\nRecuerda cargar la maquina");
                //falta validar mas
            }
        }

    }

    const muestraBotones = () => {
        if(pasos && !document.getElementById("toggleState").classList.contains("desactivado")){
            return(
                <div className="pack-botones-pasos">
                    <p>Para que la ejecución avance haga click en el siguiente boton:</p>
                    <a id="siguiente" name="siguiente" onClick={handleClick} className="siguiente">
                        <p id="t_siguiente" >Siguiente</p>
                        <img id="i_siguiente" src="https://img.icons8.com/material-sharp/48/000000/circled-chevron-right.png"/>
                    </a>
                </div>
            );
        }
        else{
            return(
                <div className="pack-botones-sin_pasos">
                    <p className="titulo__slider">Seleciona aqui la velocidad de ejecución</p>
                    <div className="contenedor_deslizable">
                        <input onChange={handleChange} name="deslizante" className="deslizante" type="range" min="0" max="100" step="10"/>
                        <p id="value_deslizable" className="value_deslizable">{velocidad}%</p>
                    </div>
                    <div className="contenedor__botones">
                        <a id="iniciar" name="iniciar" onClick={handleClick} className="iniciar">
                            <p id="t_iniciar" >Iniciar</p>
                            <img id="i_iniciar" src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png"/>
                        </a>
                        <a id="pausar" name="pausar" onClick={handleClick} className="pausar">
                            <p id="t_pausar" >Pausar</p>
                            <img id="i_pausar" src="https://img.icons8.com/android/48/000000/pause.png"/>
                        </a>
                        <a id="reIniciar" name="reiniciar" onClick={handleClick} className="reiniciar">
                            <p id="t_reIniciar" >Reiniciar</p>
                            <img id="i_reIniciar" src="https://img.icons8.com/metro/52/000000/restart.png"/>
                        </a>
                    </div>
                </div>
            );
        }
    }

    const retorna = () => (
        <form>
            <p>Configuración y parametrización</p>
            <div className="wrapper__input">
                <label className="label-cadena" htmlFor="cadena">Ingresa aqui la cadena a analizar</label>
                <div id="cadena" className="input">
                    <input id="entrada" onChange={handleChange} type="text" autoComplete="off" name="cadena" placeholder="aabbb, min: 2, max: 18" />
                    <i id="icono" className="fas fa-times-circle"></i>
                    <p className="sms activo">{sms}</p>
                </div>
            </div>
            <div className="wrapper__input">
                <p>¿ Deseas ver el paso a paso del proceso ?</p>
                <input className="toggle-button" onClick={()=>setPasos(!pasos)} type="checkbox" name="porPasos" id="porPasos"/>
                <label id="toggleState" className="label-custom" htmlFor="porPasos"></label>
                <a id="cargar" name="cargar" onClick={handleClick} className="cargar">
                    <p id="t_cargar" >Cargar Maquina</p>
                    <img id="i_cargar" src="https://img.icons8.com/metro/52/000000/submit-progress.png"/>
                </a>
            </div>
            {
                muestraBotones()
            }
        </form>
    );
    return retorna();
}

const mapStateToProps = state => ({
    cadenaMontar: state.cadenaAMontar
})

const mapDispathcToProps = dispatch => ({

    establecerCadenaEnLaCinta(cadena){
        dispatch({
            type: 'ESTABLECER_CADENA',
            cadena
        })
    }

})

export default connect(mapStateToProps,mapDispathcToProps)(Settings);