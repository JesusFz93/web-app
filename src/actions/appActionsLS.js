/* Actions para controles normales */

import { types } from "../types/types";

export const appGetLSAction = () => ({
    type: types.appGetLS
});

export const appStartInsertLSAction = ( param1, param2 ) => {
    return ( dispatch ) => {

        const newNote = {
            value: param2
        }

        dispatch( appInsertLSAction( param1, newNote ) );
        localStorage.setItem('lista', JSON.stringify({id:param1, value: param2}));
    }
}

const appInsertLSAction = (id, element) => ({
    type: types.appInsertLS,
    payload: {
        id, ...element
    }
});




export const appDeleteLSAction = (param1) => ({
    type: types.appDeleteLS,
    payload: param1
});

export const appUpdateLSAction = (id, element) => ({
    type: types.appUpdateLS,
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


