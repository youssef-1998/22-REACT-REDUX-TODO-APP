import {ADD_TO_DO} from './actionstype'

export const add = (newtodo) => {
    return{
        type: ADD_TO_DO,
        payload: newtodo
    }
}