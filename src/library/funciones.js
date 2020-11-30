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

// export const generaRecorrido = (entrada) => {

// }