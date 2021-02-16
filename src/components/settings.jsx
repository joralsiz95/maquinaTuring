import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { convertirEnVector, generarRecorrido, convertirEnVectorAux, cadenaProcesada, obtenerVelocidad } from '../library/funciones';
import { red } from '../library/vis';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Settings = ({ cadenaAMontar,  recorrido, establecerCadenaEnLaCinta, establecerRecorrido }) => {
    
    const [ cadena, setCadena ] = useState('');
    const [ pasos, setPasos ] = useState(false);
    const [ velocidad, setVelocidad ] = useState(50);
    const [ sms, setSms ] = useState('Solo se aceptan a y b(minusculas).');
    const [ j, setJ ] = useState(0);
    const regex = /^[a-b]{2,18}$/;


    //contador del paso a paso

    

    useEffect(()=>{
        // console.log(cadenaProcesada(["#","a","b","b","b","#"]));
        if(pasos){
            if(document.getElementById("cargar").classList.contains("cargado") && !cadenaProcesada(cadenaAMontar)){
                document.getElementById("siguiente").classList.remove("desactivado")
            }
        }
             
        if(!pasos){
            if(document.getElementById("cargar").classList.contains("cargado") && !cadenaProcesada(cadenaAMontar)){
                document.getElementById("iniciar").classList.remove("desactivado")
            }
        }
         
    },[pasos]);

    useEffect(()=>{
        console.log("entro en el effect de toggle");
        if(!pasos){
            if(regex.test(document.getElementById("entrada").value)){
                document.getElementById("cadena").classList.add("bien");
                document.getElementById("cadena").classList.remove("mal");
                document.getElementById("icono").classList.add("fa-check-circle");
                document.getElementById("icono").classList.remove("fa-times-circle");               
                document.getElementById("cargar").classList.remove("desactivado");
                setSms("OK Puedo trabajar con esta cadena");
                setCadena(document.getElementById("entrada").value);
            }
            else{
                document.getElementById("cadena").classList.add("mal");
                document.getElementById("cadena").classList.remove("bien");
                document.getElementById("icono").classList.remove("fa-check-circle");
                document.getElementById("icono").classList.add("fa-times-circle");
                document.getElementById("cargar").classList.add("desactivado");
                setSms("Esta cadena no es correcta...!");
            }
        }
        else{
            if(regex.test(document.getElementById("entrada").value)){
                document.getElementById("cadena").classList.add("bien");
                document.getElementById("cadena").classList.remove("mal");
                document.getElementById("icono").classList.add("fa-check-circle");
                document.getElementById("icono").classList.remove("fa-times-circle");
                document.getElementById("cargar").classList.remove("desactivado");
                setSms("OK Puedo trabajar con esta cadena");
                setCadena(document.getElementById("entrada").value);
            }
            else{
                document.getElementById("cadena").classList.add("mal");
                document.getElementById("cadena").classList.remove("bien");
                document.getElementById("icono").classList.remove("fa-check-circle");
                document.getElementById("icono").classList.add("fa-times-circle");
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
                    document.getElementById("cargar").classList.remove("desactivado");
                    setSms("OK Puedo trabajar con esta cadena");
                    setCadena(e.target.value);
                }
                else{
                    document.getElementById("cadena").classList.add("mal");
                    document.getElementById("cadena").classList.remove("bien");
                    document.getElementById("icono").classList.remove("fa-check-circle");
                    document.getElementById("icono").classList.add("fa-times-circle");
                    document.getElementById("cargar").classList.add("desactivado");
                    setSms("Esta cadena no es correcta...!");
                }
            }
            else{
                if(regex.test(e.target.value)){
                    document.getElementById("cadena").classList.add("bien");
                    document.getElementById("cadena").classList.remove("mal");
                    document.getElementById("icono").classList.add("fa-check-circle");
                    document.getElementById("icono").classList.remove("fa-times-circle");
                    document.getElementById("cargar").classList.remove("desactivado");
                    setSms("OK Puedo trabajar con esta cadena");
                    setCadena(e.target.value);
                }
                else{
                    document.getElementById("cadena").classList.add("mal");
                    document.getElementById("cadena").classList.remove("bien");
                    document.getElementById("icono").classList.remove("fa-check-circle");
                    document.getElementById("icono").classList.add("fa-times-circle");
                    document.getElementById("cargar").classList.add("desactivado");
                    setSms("Esta cadena no es correcta...!");
                }
            }
        } 
    }

    const construirNuevoVector = (index,element,vector) => {
        let vectorRetornar = vector;
        for (let x = 0; x < vectorRetornar.length; x++) {
            if(x === index){
                vectorRetornar[x] = element
            }
        }
        return vectorRetornar;
    }

    const handleClick = e => {

        if(e.target.id.includes("cargar")){
            console.log("Clickaste => ","cargar");
            if(document.getElementById("cargar").classList.contains("desactivado")){
               MySwal.fire({
                title: "Error al cargar la maquina",
                html: <p>No se puede cargar la máquina<br/>
                        Esto puede estar pasando por una de dos razones:<br/><br/>
                        1.) Mientras la cadena de entrada este vacia o sea incorrecta.<br/><br/>
                        2.) Empezaste un proceso: si sea manual debes terminarlo y si es automático espera a que termine.
                      </p>,
                footer: "ERROR",
                icon: 'error',
              });
            }
            else{
                //ejecuta la funcion que pone los datos en la cinta
                establecerCadenaEnLaCinta(convertirEnVector(cadena));
                establecerRecorrido(generarRecorrido(convertirEnVector(cadena)));
                if(!pasos) document.getElementById("iniciar").classList.remove("desactivado");
                else document.getElementById("siguiente").classList.remove("desactivado");                
                document.getElementById("cargar").classList.add("cargado");
            }
        } 

        if(e.target.id.includes("iniciar")){
            console.log("Clickaste => ","inicar");
            if(document.getElementById("iniciar").classList.contains("desactivado")){
                //alert("Mientras la cadena de entrada este vacia o sea incorrecta, no puedes iniciar\nRecuerda cargar la maquina antes de iniciar");
                if(document.getElementById("cargar").classList.contains("desactivado")){
                    MySwal.fire({                        
                        title: "Error al iniciar",
                        html: <p>Ten en cuenta las siguientes recomendaciones: <br/><br/>
                            1.) Recuerda cargar la maquina y mientras la cadena de entrada este vacia o sea    incorrecta, no puedes iniciar. <br/><br/>
                            2.) Si ya iniciaste un proceso debes esperar a que este finalice. 
                        </p>,
                        footer: "ERROR",
                        icon: 'error'
                    });
                }
                else{
                    if(!document.getElementById("cargar").classList.contains("cargado") && (cadenaAMontar.length === 0)){
                        MySwal.fire({
                            title: "Oops...",
                            html: <p>Oye debes cargar la maquina </p>,
                            icon: "warning"
                        });
                    }
                    if (!document.getElementById("cargar").classList.contains("cargado") && (cadenaAMontar.length !== 0)) {                        
                        MySwal.fire({
                            title: "Opps....",
                            html: "Si notas que la cinta ahora solo tiene 'a', debes cargar la maquina de nuevo. ",
                            icon: "warning"
                       });

                    }
                    if(document.getElementById("iniciar").classList.contains("corriendo")){                     
                        MySwal.fire({
                            title: "Opps....",
                            html: "La simulacion esta corriendo, deja que termine. ",
                            icon: "warning"
                       });
                    }
                }
            }
            else{
                if(recorrido.length === 0){
                    MySwal.fire({
                        title: "Opps....",
                        html: "No has cargado la maquina no puedes iniciar el proceso. ",
                        icon: "warning"
                   });
                }
                else{
                    console.log("iniciar:> ",recorrido);
                    //obteniendo velocidad
                    console.log(velocidad);
                    let rapidez = obtenerVelocidad(velocidad);
                    //desactiva cuando se le da click he inicia el proceso
                    document.getElementById("iniciar").classList.add("desactivado");
                    document.getElementById("iniciar").classList.add("corriendo");
                    //desactivando botones de toggle y cargar
                    document.getElementById("cargar").classList.add("desactivado");
                    document.getElementById("palanca").classList.add("desactivado");
                    var i = 0;
                    var network = red();                    
                    var idInterval = setInterval(()=>{                        
                        if(i < recorrido.length){
                            //resaltando estado
                            network.setSelection({nodes:recorrido[i].resalta.nodo, edges:recorrido[i].resalta.enlace});
                            setTimeout(()=>{
                                network.setSelection({nodes:[4]});
                            },rapidez-100)

                            //cambiando lo que hay en el vector
                            let parcial = construirNuevoVector(recorrido[i].indice,recorrido[i].reemplazaPor,cadenaAMontar);                            
                            console.log("cadenaParcial => ",parcial);
                            establecerCadenaEnLaCinta(convertirEnVectorAux(parcial.join('')));
                            console.log("intervalo     => ",i);
                            //muevete
                            document.getElementById(recorrido[i].clickEn).click();    
                            i++;
                        }
                        else{
                            
                            document.getElementById("iniciar").classList.remove("corriendo");
                            document.getElementById("cargar").classList.remove("cargado");
                            //activando nuevamente botones cargar y toggle
                            if(regex.test(document.getElementById("entrada").value)){
                                document.getElementById("cargar").classList.remove("desactivado");
                            }
                            document.getElementById("palanca").classList.remove("desactivado");

                            //cuando termine queda en el ultimo estado
                            network.setSelection({nodes:[3]})
                            MySwal.fire({
                                title: "Finalizado",
                                text: "Proceso terminado con exito.",
                                icon: "success"
                            });

                            clearInterval(idInterval);
                        }
                    },rapidez);
                }
            }
        }



        if(e.target.id.includes("siguiente")){
            console.log("Clickaste => ","siguiente");
            if(document.getElementById("siguiente").classList.contains("desactivado")){                               
                if(document.getElementById("cargar").classList.contains("desactivado")){   
                    MySwal.fire({
                        title: "Error",
                        html: <p>Recuerda cargar la maquina <br></br> y mientras la cadena de entrada este vacia o sea incorrecta, no puedes hacer el paso a paso.</p>,
                        footer: "ERROR",
                        icon: 'error',
                    });
                }
                else{
                    if(!document.getElementById("cargar").classList.contains("cargado") && (cadenaAMontar.length === 0)){
                        MySwal.fire({
                            title: "Opps...",
                            html: "Oye debes cargar la maquina",
                            icon: "warning"
                        });
                    }
                    if (!document.getElementById("cargar").classList.contains("cargado") && (cadenaAMontar.length !== 0)) {                       
                       MySwal.fire({
                            title: "Opps....",
                            html: "si notas que la cinta ahora solo tiene 'a', debes cargar la maquina de nuevo ",
                            icon: "warning"
                       });
                    }
                }

            }
            else{
                if(recorrido.length === 0){                    
                    MySwal.fire({
                        title: "Opps....",
                        text: "No puedes inicar el paso a paso sin antes cargar la maquina.",
                        icon: "warning"
                    });
                }
                else{
                    console.log("pasos:> ",recorrido);
                    console.log("loongitud del recorrido",recorrido.length);
                    
                    //desactivando botones de toggle y cargar
                    document.getElementById("cargar").classList.add("desactivado");
                    document.getElementById("palanca").classList.add("desactivado");
                                        
                    var network = red();
                    if(j < recorrido.length){
                        //resaltando estado
                        network.setSelection({nodes:recorrido[j].resalta.nodo, edges:recorrido[j].resalta.enlace});
                        setTimeout(()=>{
                            network.setSelection({nodes:[4]});
                        },400)
                        setTimeout(()=>{
                            network.setSelection({nodes:recorrido[j].resalta.nodo});
                        },500)

                        //cambiando lo que hay en el vector
                        let parcial = construirNuevoVector(recorrido[j].indice,recorrido[j].reemplazaPor,cadenaAMontar);                        
                        console.log("cadenaParcial => ",parcial);                        
                        establecerCadenaEnLaCinta(convertirEnVectorAux(parcial.join('')));
                        console.log("intervalo     => ",j);
                        //muevete
                        document.getElementById(recorrido[j].clickEn).click();

                        setJ(j+1);
                    }
                    else{
                        document.getElementById("siguiente").classList.add("desactivado");
                        document.getElementById("cargar").classList.remove("cargado");

                        //activando nuevamente botones cargar y toggle
                        if(regex.test(document.getElementById("entrada").value)){
                            document.getElementById("cargar").classList.remove("desactivado");
                        }
                        document.getElementById("palanca").classList.remove("desactivado");

                        //aqui termina el recorrido ps
                        MySwal.fire({
                            title: "Finalizado",
                            text: "Proceso terminado con exito.",
                            icon: "success"
                        });
                        setJ(0);
                    }

                }
            }
        }

    }

    const handleClickPasos = e => {
        if(!document.getElementById("palanca").classList.contains("desactivado")){
            setPasos(!pasos)
            // console.log(pasos);
        }
        else{
            e.preventDefault();
        }
    }

    const muestraBotones = () => {
        if(pasos){
            return(
                <div className="pack-botones-pasos">
                    <p>Para que la ejecución avance haga click en el siguiente boton:</p>
                    <a id="siguiente" name="siguiente" onClick={handleClick} className="siguiente desactivado">
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
                        <a href="#title_red" id="iniciar" name="iniciar" onClick={handleClick} className="iniciar desactivado">
                            <p id="t_iniciar" >Iniciar</p>
                            <img id="i_iniciar" src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png"/>
                        </a>
                        {/* <a id="pausar" name="pausar" onClick={handleClick} className="pausar">
                            <p id="t_pausar" >Pausar</p>
                            <img id="i_pausar" src="https://img.icons8.com/android/48/000000/pause.png"/>
                        </a> */}
                        {/* <a id="reIniciar" name="reiniciar" onClick={handleClick} className="reiniciar">
                            <p id="t_reIniciar" >Reiniciar</p>
                            <img id="i_reIniciar" src="https://img.icons8.com/metro/52/000000/restart.png"/>
                        </a> */}
                    </div>
                </div>
            );
        }
    }

    const retorna = () => (
        <form>
            <p>Configuración y parametrización</p>
            <div className="wrapper__input">
                <label className="label-cadena" htmlFor="cadena">Ingresa aqui la cadena a analizar<br></br> (Solo se admiten minusculas).</label>
                <div id="cadena" className="input">
                    <input id="entrada" onChange={handleChange} type="text" autoComplete="off" name="cadena" placeholder="aabbb, min: 2, max: 18" />
                    <i id="icono" className="fas fa-times-circle"></i>
                    <p className="sms activo">{sms}</p>
                </div>
            </div>
            <div className="wrapper__input">
                <p>¿DESEAS HACER EL PASO A PASO MANUAL?</p>
                <input className="toggle-button" onClick={handleClickPasos} type="checkbox" name="porPasos" id="porPasos"/>
                <label id="toggleState" id="palanca" className="label-custom" htmlFor="porPasos"></label>
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
    cadenaAMontar: state.cadenaAMontar,
    recorrido: state.recorrido
})

const mapDispathcToProps = dispatch => ({

    establecerCadenaEnLaCinta(cadena){
        dispatch({
            type: 'ESTABLECER_CADENA',
            cadena
        })
    },

    establecerRecorrido(vector){
        dispatch({
            type: 'ESTABLECER_RECORRIDO',
            vector
        })
    }

})

export default connect(mapStateToProps,mapDispathcToProps)(Settings);