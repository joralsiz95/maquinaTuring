import React from 'react';
import Diagramas from '../components/diagramas';
import Settings from '../components/settings';

const Cuerpo = () => {
    return(
        <div className="wrap">
            <h3>Titulo del cuerpo</h3>
            <div className="contenedor">
                <div className="contenedor__izquierda">
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