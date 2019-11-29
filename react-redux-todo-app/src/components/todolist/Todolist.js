import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodolistStyle.css';
import TodoItem from './TodoItem';

class ToDoList extends Component {

    render() {
        return (
            <div class="card px-3">
                <div class="card-body">
                    <div className="list-wrapper">
                        <ul className="d-flex flex-column-reverse todo-list">
                            {this.props.initState.todos.map((el, i) => <TodoItem todo={el}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        initState: state.Reducer
    };
};

export default connect(mapStateToProps)(ToDoList);


