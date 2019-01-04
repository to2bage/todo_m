import axios from "axios";
import {
    INIT_TODO_LIST,
    INPUT_VALUE_CHANGE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM
} from "./actionTypes";

export const get_input_value_change_action = (value) => ({
    type: INPUT_VALUE_CHANGE,
    value
});

export const get_add_todo_item_action = () => ({
    type: ADD_TODO_ITEM
});

export const get_delete_todo_item_action = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const get_init_todo_list_action = (data) => ({
    type: INIT_TODO_LIST,
    data
});

// use redux-thunk
export const get_todo_list = () => {
    return (dispatch) => {
        axios.get("").then(res => {
            const data = res.data;
            console.log("==> \n", data);
            dispatch(get_init_todo_list_action(data));
        }).catch(err => console.log(err));
    }
};