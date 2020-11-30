import React from 'react';
import Diagramas from '../components/diagramas';
import Settings from '../components/settings';

const Cuerpo = () => {  

    return(
        <div className="wrap">
            <div className="contenedor">
                <div className="contenedor__izquierda">
                    <h3>Representación del autómata</h3>
                    <Diagramas/>
                </div>
                <div className="contenedor__derecha">
                    <Settings/>
                </div>
            </div>
        </div>
    );
}

export default Cuerpo;