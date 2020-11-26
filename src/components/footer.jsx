import React from 'react';

const Footer = () => (
    <div className="footer">
        <div className="footer__left">
            <h2> <span className="span_2">T</span>aller <span className="span_2">m</span>áquina de <span className="span_2">T</span>uring</h2>
            <p>Objetivo: Implementar el modelo de Turing para transformar una cadena de combinaciones "a" y "b" en solo "a".</p>
            <p>Misión: Construir un programa escrito en JavaScript utilice el automata universal, para resolver el problema establecido.</p>
            <p>Compiladores</p>
            <p>Universidad del magdalena</p>
            <p>
                © 2020 Maquina de Turing, Inc.
                Todos los derechos reservados
            </p>
        </div>
        <div className="footer__right">
            <div className="footer__right__autores">
                <h3><span className="span_2">C</span>readores</h3>
                <p>Andres Felipe Brieva Pinedo</p>
                <p>Jorge Alberto Silva Zambrano</p>
                <p>Sebastian Troncoso Correa</p>
                <p>Luis Eduardo Gamez Maldonado</p>
            </div>
            <div className="footer__right__profesor">
                <h3><span className="span_2">P</span>rofesor</h3>
                <p>Daniel Gonzales Polo</p>
            </div>
        </div>
    </div> 
);

export default Footer;