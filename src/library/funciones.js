export const convertirEnVector = (cadena) => {
    var vector = [];
    for (let i = 0; i < cadena.length; i++) {
        vector[i] = cadena[i];   
    }
    vector.unshift("#");
    vector.push("#");
    // el vecot queda ['#',...,'#']
    return vector.filter(e => e !== ' ');
}

export const convertirEnVectorAux = (cadena) => {
    var vector = [];
    for (let i = 0; i < cadena.length; i++) {
        vector[i] = cadena[i];   
    }
    // el vecot queda ['#',...,'#']
    return vector.filter(e => e !== ' ');
}

export const generarRecorrido = (entrada) => {

    let vector = entrada;
    let vectorRetorno = [];

    for (let i = 1; i < vector.length; i++) {

        let objetoIndicaciones = {
            indice: 0,
            lee: "",
            reemplazaPor: "a",
            resalta: {
                nodo: [],
                enlace: []
            },
            clickEn: ""
        }

        if(vector[i] === "a"){
                
            objetoIndicaciones.indice = i;
            objetoIndicaciones.lee = vector[i];
            // objetoIndicaciones.reemplazaPor = "a";
            objetoIndicaciones.resalta.nodo = [1];
            objetoIndicaciones.resalta.enlace = [11];
            objetoIndicaciones.clickEn = "btn__next"

        }
        if(vector[i] === "b"){
            
            objetoIndicaciones.indice = i;
            objetoIndicaciones.lee = vector[i];
            // objetoIndicaciones.reemplazaPor = "a";
            objetoIndicaciones.resalta.nodo = [1];
            objetoIndicaciones.resalta.enlace = [112];
            objetoIndicaciones.clickEn = "btn__next"
            vector[i] = "a"
        }

        if(vector[i] === "#"){
            
            objetoIndicaciones.indice = i;
            objetoIndicaciones.lee = vector[i];
            objetoIndicaciones.reemplazaPor = "#";
            objetoIndicaciones.resalta.nodo = [2];
            objetoIndicaciones.resalta.enlace = [12];
            objetoIndicaciones.clickEn = "btn__prev"

        }
        
        vectorRetorno.push(objetoIndicaciones)
    }

    for (let i = vector.length-2 ; i >= 0 ; i--) {
        // console.log(vector.length);
        // console.log(vector[i]," => ",i);
        let objetoIndicaciones = {
            indice: 0,
            lee: "",
            reemplazaPor: "a",
            resalta: {
                nodo: [],
                enlace: []
            },
            clickEn: ""
        }

        if(vector[i] === "a"){
                
            objetoIndicaciones.indice = i;
            objetoIndicaciones.lee = vector[i];
            // objetoIndicaciones.reemplazaPor = "a";
            objetoIndicaciones.resalta.nodo = [2];
            objetoIndicaciones.resalta.enlace = [22];
            objetoIndicaciones.clickEn = "btn__prev"

        }
        
        if(vector[i] === "#"){
            
            objetoIndicaciones.indice = i;
            objetoIndicaciones.lee = vector[i];
            objetoIndicaciones.reemplazaPor = "#";
            objetoIndicaciones.resalta.nodo = [3];
            objetoIndicaciones.resalta.enlace = [23];
            objetoIndicaciones.clickEn = "btn__next"

        }

        vectorRetorno.push(objetoIndicaciones)
    }

    return vectorRetorno;
}



export const cadenaProcesada = (array) => {
    // console.log(array);
    let procesado = true;
    for (let i = 1; i < array.length-1; i++) {
        // console.log(array[i]);
        if(array[i] !== "a"){
            return false;
        }
    }
    return procesado;
}

export const obtenerVelocidad = (porcentaje) => {
    
    let relaciones = [
        {
            porcentaje: 100,
            velocidad: 300
        },
        {
            porcentaje: 90,
            velocidad: 500
        },
        {
            porcentaje: 80,
            velocidad: 700
        },
        {
            porcentaje: 70,
            velocidad: 800
        },
        {
            porcentaje: 60,
            velocidad: 900
        },
        {
            porcentaje: 50,
            velocidad: 1000
        },
        {
            porcentaje: 40,
            velocidad: 1100
        },
        {
            porcentaje: 30,
            velocidad: 1400
        },
        {
            porcentaje: 20,
            velocidad: 1600
        },
        {
            porcentaje: 10,
            velocidad: 1800
        },
        {
            porcentaje: 0,
            velocidad: 2000
        }
    ]

    let retorno = 300;
    for (let i = 0; i < relaciones.length; i++) {
        if(relaciones[i].porcentaje === porcentaje){
            retorno = relaciones[i].velocidad;
        }
    }

    return retorno;
}