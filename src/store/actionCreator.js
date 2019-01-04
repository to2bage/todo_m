import axios from "axios";
import {
    INIT_TODO_LIST,
    INPUT_VALUE_CHANGE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM
} from "./actionTypes";

// const url = "http://vue.studyit.io/api/getlunbo";
// const url = "http://api.douban.com/v2/movie/in_theaters?start=0&count=25";
const url = "in_theaters?start=0&count=25";

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
        axios.get(url).then(res => {
            const data = res.data;
            // console.log("==> \n", data.subjects);

            const result = [];
            data.subjects.forEach(item => {
                result.push(item.title);
            });
            console.log("==>>> \n", result);

            dispatch(get_init_todo_list_action(result));
        }).catch(err => console.log(err));
        //
        // fetch(url).then(res => {
        //     console.log(res);
        // }).catch(err => console.log(err));
    }
};