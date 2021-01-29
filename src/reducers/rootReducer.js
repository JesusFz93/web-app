import { combineReducers } from 'redux';

import {appReducer} from './appReducer';
import { appReducerFB } from './appReducerFB';
import { appReducerLS } from './appReducerLS';



export const rootReducer = combineReducers({
    appReducer: appReducer,
    appReducerFB: appReducerFB,
    appReducerLS: appReducerLS
    // TODO: AuthReducer
})

