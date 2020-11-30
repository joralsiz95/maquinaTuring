import { createStore } from 'redux';

const initialState = {
    cadenaAMontar: []
}

const reducer = (state = initialState,action) => {
    
    switch(action.type){

        case "ESTABLECER_CADENA":
        return {
            ...state,
            cadenaAMontar: action.cadena
        }

    }
    
    return state;
}

export default createStore(reducer);