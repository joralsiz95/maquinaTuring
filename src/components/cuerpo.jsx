import React from 'react';
import Diagramas from '../components/diagramas';
import Settings from '../components/settings';

const Cuerpo = () => {

    return(
            <div className="contenedor">
                <div className="contenedor__izquierda">
                    <h3 id="title_red">Representación del autómata</h3>
                    <Diagramas/>
                </div>
                <div className="contenedor__derecha">
                    <Settings/>
                </div>
            </div>
    );
}

export default Cuerpo;