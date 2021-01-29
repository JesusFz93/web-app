/* Actions para controles normales */

import { types } from "../types/types";

export const appGetFBAction = () => ({
    type: types.appGetFB
});

export const appStartInsertFBAction = ( param1, param2 ) => {
    return ( dispatch ) => {

        const newNote = {
            value: param2
        }

        dispatch( appInsertFBAction( param1, newNote ) );

    }
}

export const appInsertFBAction = (id, element) => ({
    type: types.appInsertFB,
    payload: {
        id, ...element
    }
});




export const appDeleteFBAction = (param1) => ({
    type: types.appDeleteFB,
    payload: param1
});

export const appUpdateFBAction = (id, element) => ({
    type: types.appUpdateFB,
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


