import React, { useState, useEffect } from 'react';

const Settings = () => {
    
    const [ cadena, setCadena ] = useState('');
    const [ pasos, setPasos ] = useState(false);
    const [ velocidad, setVelocidad ] = useState(50);

    const regex = /^[0-9]{5}$/;
    // console.log(regex.test("123"));
    // console.log(regex.test("1234"));

    useEffect(()=>{

        if(!pasos){
            if(regex.test(document.getElementById("cadena").value)){
                document.getElementById("cadena").classList.add("bien");
                document.getElementById("cadena").classList.remove("mal");
                
                document.getElementById("iniciar").classList.remove("desactivado");
                document.getElementById("pausar").classList.remove("desactivado");
                document.getElementById("reiniciar").classList.remove("desactivado");
                // document.getElementById("toggleState").classList.remove("desactivado");
                
                setCadena(document.getElementById("cadena").value);
            }
            else{
                document.getElementById("cadena").classList.add("mal");
                document.getElementById("cadena").classList.remove("bien");

                document.getElementById("iniciar").classList.add("desactivado");
                document.getElementById("pausar").classList.add("desactivado");
                document.getElementById("reiniciar").classList.add("desactivado");
                // document.getElementById("toggleState").classList.add("desactivado");
            }
        }
        else{
            if(regex.test(document.getElementById("cadena").value)){
                document.getElementById("cadena").classList.add("bien");
                document.getElementById("cadena").classList.remove("mal");

                document.getElementById("siguiente").classList.remove("desactivado");
                setCadena(document.getElementById("cadena").value);
            }
            else{
                document.getElementById("cadena").classList.add("mal");
                document.getElementById("cadena").classList.remove("bien");

                document.getElementById("siguiente").classList.add("desactivado");
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
                    
                    document.getElementById("iniciar").classList.remove("desactivado");
                    document.getElementById("pausar").classList.remove("desactivado");
                    document.getElementById("reiniciar").classList.remove("desactivado");
                    // document.getElementById("toggleState").classList.remove("desactivado");
                    
                    setCadena(e.target.value);
                }
                else{
                    document.getElementById("cadena").classList.add("mal");
                    document.getElementById("cadena").classList.remove("bien");

                    document.getElementById("iniciar").classList.add("desactivado");
                    document.getElementById("pausar").classList.add("desactivado");
                    document.getElementById("reiniciar").classList.add("desactivado");
                    // document.getElementById("toggleState").classList.add("desactivado");
                }
            }
            else{
                if(regex.test(e.target.value)){
                    document.getElementById("cadena").classList.add("bien");
                    document.getElementById("cadena").classList.remove("mal");
    
                    document.getElementById("siguiente").classList.remove("desactivado");
                    setCadena(e.target.value);
                }
                else{
                    document.getElementById("cadena").classList.add("mal");
                    document.getElementById("cadena").classList.remove("bien");

                    document.getElementById("siguiente").classList.add("desactivado");
                }
            }
        } 
    }

    const muestraBotones = () => {
        if(pasos && !document.getElementById("toggleState").classList.contains("desactivado")){
            return(
                <div className="pack-botones-pasos">
                    <p>Para que la ejecución avance haga click en el sguiente boton:</p>
                    <a id="siguiente" className="siguiente">
                        <p>Siguiente</p>
                        <img src="https://img.icons8.com/material-sharp/48/000000/circled-chevron-right.png"/>
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
                        <a id="iniciar" className="iniciar">
                            <p>Iniciar</p>
                            <img src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png"/>
                        </a>
                        <a id="pausar" className="pausar">
                            <p >Pausar</p>
                            <img src="https://img.icons8.com/android/48/000000/pause.png"/>
                        </a>
                        <a id="reiniciar" className="reiniciar">
                            <p >Reiniciar</p>
                            <img src="https://img.icons8.com/metro/52/000000/restart.png"/>
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
                <input onChange={handleChange} type="text" id="cadena" name="cadena" placeholder="Ej: aabbb, máximo 18 caracteres" />
            </div>
            <div className="wrapper__input">
                <p>¿ Deseas ver el paso a paso del proceso ?</p>
                <input className="toggle-button" onClick={()=>setPasos(!pasos)} type="checkbox" name="porPasos" id="porPasos"/>
                <label id="toggleState" className="label-custom" htmlFor="porPasos"></label>
            </div>
            {
                muestraBotones()
            }
        </form>
    );
    return retorna();
}

export default Settings;