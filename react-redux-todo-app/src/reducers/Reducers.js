import { ADD_TO_DO, TO_UPDATE, DELETE, RENOMMER, COMPLETE } from "../actions/actionstype";

const initState = {
    todos: [],
    toUpdate: {}
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            return {
                ...state,
                todos: state.todos.concat(action.payload)
                }
        case DELETE:
            return {
                ...state,
                todos: state.todos.filter(el => el.id !== action.payload)
            }
        case RENOMMER:
            return {
                ...state,
                todos: state.todos.map(el => el.id === action.payload.id ? action.payload : el )
            }
        case COMPLETE:
            return {...state , todos : state.todos.map(el => el.id === action.payload ? {...el, complete: !el.complete} : el)};    
        default:
            return state;
    }
};

export default Reducer;