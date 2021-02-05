/* Pagina para controles normales */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import {appGetLSAction, appUpdateLSAction, appDeleteLSAction, appStartInsertLSAction} from '../../actions/appActionsLS'

export const ThirdScreen = () => {

     const dispatch = useDispatch()
    const {register, handleSubmit} = useForm();

    const {lista} = useSelector(state => state.appReducerLS)
    
    const onClickGET = () => {
        dispatch(appGetLSAction());
    }

    const onClickINSERT = (register) => {
        const {elementoInput} = register;
        dispatch(appStartInsertLSAction(new Date().getTime(),elementoInput));
    }

    const onClickDELETE = (register) => {
        const {idelement} = register;
       dispatch(appDeleteLSAction(parseInt(idelement)));
    }

    const onClickEDIT = (register) => {
        const {elementoInput, idelement} = register;
       dispatch(appUpdateLSAction(parseInt(idelement),{value: elementoInput}));
    }

    

    return (
        <div>
            <h1>Tercer componente con Local Storage</h1>

            <hr/>
            <br/><br/>
            <input type="text" className="form-control" placeholder="ID" name="idelement" ref={register} autoComplete='off' />
            <br/>
            <input type="text" className="form-control" placeholder="Contenido" name="elementoInput" ref={register} />
            <br/>
            <button type="button" className="btn btn-primary" onClick={onClickGET}>Obtener lista</button>
            <br/>
            <button type="button" className="btn btn-success" onClick={handleSubmit(onClickINSERT)}>Click para insertar mensaje</button>
            <br/>
            <button type="button" className="btn btn-warning" onClick={handleSubmit(onClickEDIT)}>Editar de la lista</button>
            <br/>
            <button type="button" className="btn btn-danger" onClick={handleSubmit(onClickDELETE)}>Eliminar de la lista</button>

            <ul className='mt-3'>
                {
                                
                    lista.map( element => (
                        <li key={ element.id }
                        { ...element }>{element.id} - {element.value}</li>
                    ))
                }
            </ul>
            

        </div>
    )
}
