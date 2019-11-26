import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodolistStyle.css';
// import Reducer from '.../reducers/Reducers'


class ToDoList extends Component {
    render() {
        return (
            <div class="card px-3">
                <div class="card-body">
                    <div className="list-wrapper">
                        <ul className="d-flex flex-column-reverse todo-list">
                            <li>
                                <div className="form-check">
                                    <label className="form-check-label">
                                    <input className="checkbox" type="checkbox" /> kkkkk 
                                    <i className="input-helper"></i></label>
                                </div>
                                <i className="far fa-edit remove mdi  "></i>
                                <i className="mar re mdi mdi-close-circle-outline"></i>
                            </li>
                            <li className="completed">
                                <div className="form-check">
                                    <label className="form-check-label">
                                    <input className="checkbox" type="checkbox" checked="" /> Call Rampbo
                                    <i className="input-helper"></i></label>
                                </div>
                                <i className="far fa-edit remove mdi  "></i>
                                <i className="mar re mdi mdi-close-circle-outline"></i>
                            </li>
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

//mapDispatchToProps
export default connect(mapStateToProps)(ToDoList);


