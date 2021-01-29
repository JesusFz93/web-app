/* Reducer para controles normales */

import { types } from '../types/types';

const initialState = {
    saludo: 'Hola que hace',
    lista: [
                {id:15, value:'pols'}, {id:16, value:'robsad'}
           ]
};

export const appReducerFB = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.appGetFB:
            return {
                ...state
            }
            
        case types.appInsertFB:
            return {
                ...state,
                lista: [action.payload, ...state.lista]
            }

        case types.appDeleteFB:
            return {
                ...state,
                lista: state.lista.filter( note => note.id !== action.payload )
            }
            
        case types.appUpdateFB:
            return {
                ...state,
                lista: state.lista.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }

        default:
            return state;
    }


}
