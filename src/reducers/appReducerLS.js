/* Reducer para controles normales */

import { types } from '../types/types';

const initialState = {
    lista: [
                {id:25, value:'lhkgh'}, {id:26, value:'hgkhj'}
           ]
};

export const appReducerLS = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.appGetLS:
            return {
                ...state
            }
            
        case types.appInsertLS:
            return {
                ...state,
                lista: [action.payload, ...state.lista]
            }

        case types.appDeleteLS:
            return {
                ...state,
                lista: state.lista.filter( note => note.id !== action.payload )
            }
            
        case types.appUpdateLS:
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
