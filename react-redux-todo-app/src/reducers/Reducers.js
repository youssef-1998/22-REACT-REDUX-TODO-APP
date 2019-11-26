import { ADD_TO_DO } from "../actions/actionstype";

const initState = [
    {
        todo: "aaaa",
        complete: false,
    },
    {
        todo: "bbb",
        complete: false,
    },
    {
        todo: "cccc",
        complete: false,
    },
]

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_DO: state.concat(action.payload)
        default: return state;
    }

};

export default Reducer;