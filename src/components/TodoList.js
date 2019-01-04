import React, { Component } from "react";
import { store } from "../store/index.js";
import { Input, Button, List } from "antd";
import {
    get_input_value_change_action,
    get_add_todo_item_action,
    get_delete_todo_item_action
} from "../store/actionCreator.js";


export default class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
        console.log(this.state);

        this.handleStoreChanged = this.handleStoreChanged.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);

        store.subscribe(this.handleStoreChanged)
    }

    handleStoreChanged () {
        this.setState(store.getState());
    }

    handleInputChange (e) {
        // console.log(e.target.value);
        store.dispatch(get_input_value_change_action(e.target.value));
    }

    handleBtnClick () {
        store.dispatch(get_add_todo_item_action());
    }

    handleItemClick (idx) {
        // console.log(idx);
        store.dispatch(get_delete_todo_item_action(idx));
    }

    render () {
        return (
            <div style={{ marginTop: 10, marginLeft: 10}}>
                <div>
                    <Input
                        style={{ width: 300, marginRight: 10}}
                        placehodler="请输入接下来要做的事情"
                        value={ this.state.inputValue }
                        onChange={ this.handleInputChange }
                    />
                    <Button
                        type="primary"
                        onClick={ this.handleBtnClick }
                    >提交</Button>
                </div>
                <div>
                    <List
                        style={{ width: 300}}
                        bordered
                        dataSource={ this.state.todolist }
                        renderItem={(item, idx) => (
                            <List.Item
                                onClick={ () => {
                                    this.handleItemClick(idx)
                                } }
                            >
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}