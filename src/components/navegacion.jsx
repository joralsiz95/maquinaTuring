import React from 'react';
import imagen from '../imagenes/web-hook.svg';

const Navegacion = () => (
    <div className="navegacion">
        <div className="navegacion__izquierda">
            <img src={imagen} alt="Logo"/>
            <h2><span>M</span>AQUINA DE <span>T</span>URING</h2>
        </div>
        <div className="navegacion__derecha">
            <h2> <span>U</span>nimagdalena <span>2</span>0<span>2</span>0</h2>
        </div>
    </div>
);

export default Navegacion;