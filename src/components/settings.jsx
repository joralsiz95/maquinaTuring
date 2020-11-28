import React, { useState } from 'react';

const Settings = () => {
    
    const [ cadena, setCadena ] = useState('');
    const [ pasos, setPasos ] = useState(false);

    const handleChange = e => {
        console.log(e.target.name," => ",e.target.value);
        if(e.target.name == "cadena") setCadena(e.target.value);
    }

    const muestraBotones = () => {
        if(pasos){
            return(
                <div className="pack-botones-pasos">
                    <input type="button" value="Siguiente"/>
                </div>
            );
        }
        else{
            return(
                <div className="pack-botones-sin_pasos">
                    <div className="contenedor_deslizable">
                        <h2 id="value_deslizable" className="value_deslizable">50</h2>
                        <input id="deslizante" className="deslizante" type="range" min="0" max="100" step="10"/>
                    </div>
                    <div>
                        <input type="button" value="Iniciar"/>
                    </div>
                </div>
            );
        }
    }

    const retorna = () => (
        <form>
            <h3>Configuración</h3>
            <div className="wrapper__input">
                <label className="label-cadena" htmlFor="cadena">Ingresa aqui la cadena a analizar</label>
                <input onChange={handleChange} type="text" id="cadena" name="cadena" placeholder="Ejemplo: a,a,b,b,b" />
            </div>
            <div className="wrapper__input">
                <p>¿ Deseas ver el paso a paso del proceso ?</p>
                <input className="toggle-button" onClick={() => setPasos(!pasos)} type="checkbox" name="porPasos" id="porPasos"/>
                <label className="label-custom" htmlFor="porPasos"></label>
            </div>
            {
                muestraBotones()
            }
        </form>
    );
    return retorna();
}

export default Settings;