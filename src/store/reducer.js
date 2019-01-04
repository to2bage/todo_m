import {
    INIT_TODO_LIST,
    INPUT_VALUE_CHANGE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM
} from "./actionTypes.js";

const defaultState = {
    inputValue: "",
    todolist: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ]
};

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case INIT_TODO_LIST:
            newState.todolist = action.data;
            return newState;
        case INPUT_VALUE_CHANGE:
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState.todolist.push(newState.inputValue);
            newState.inputValue = "";
            return newState;
        case DELETE_TODO_ITEM:
            newState.todolist.splice(action.index, 1);
            return newState;
        default:
            return state;
    }
    // return state;
}