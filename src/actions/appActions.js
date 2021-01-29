/* Actions para controles normales */

import { types } from "../types/types";

export const appGetListaAction = () => ({
    type: types.appGetLista
});

export const appStartInsertListaAction = ( param1, param2 ) => {
    return ( dispatch ) => {

        const newNote = {
            value: param2
        }

        dispatch( appInsertListaAction( param1, newNote ) );

    }
}

export const appInsertListaAction = (id, element) => ({
    type: types.appInsertLista,
    payload: {
        id, ...element
    }
});




export const appDeleteListaAction = (param1) => ({
    type: types.appDeleteLista,
    payload: param1
});

export const appUpdateListaAction = (id, element) => ({
    type: types.appUpdateLista,
    payload: {
        id, ...element
    }
});










export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});


export const eventDeleted = () => ({ type: types.eventDeleted });


