import {ADD_TO_DO, TO_UPDATE} from './actionstype';
import {DELETE} from './actionstype';
import {RENOMMER} from './actionstype';
import {COMPLETE} from './actionstype';

export const add = (newtodo) => {
    return{
        type: ADD_TO_DO,
        payload: newtodo,
    }
}
export const remove = (id) => {
    return{
        type: DELETE,
        payload: id,
    }
}


export const renommer = (todo) => {
    return{
        type: RENOMMER,
        payload: todo, 
    }
}


export const complete = (todo) => {
    return{
        type: COMPLETE,
        payload: todo, 
    }
}