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