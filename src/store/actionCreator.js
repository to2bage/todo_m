import {
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