import { createStore } from 'redux';

const initialState = {
    cadenaAMontar: [],
    recorrido: []
}

const reducer = (state = initialState,action) => {
    
    switch(action.type){

        case "ESTABLECER_CADENA":
            console.log("parametro",action.cadena);
            return {
                ...state,
                cadenaAMontar: action.cadena
            }

        case "ESTABLECER_RECORRIDO":
            return {
                ...state,
                recorrido: action.vector
            }

    }
    
    return state;
}

export default createStore(reducer);