import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodolistStyle.css';
import { remove, renommer, complete } from '../../actions/actionsTodo';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            editMode: false
        }
    }
    
    turnOnEditMode = todo => {
        if(this.state.editMode){
            this.setState({text: this.state.text, editMode: false}, () =>  this.props.modifier({...this.state, id: todo.id, complete: todo.complete}))
        }else{
            this.setState({
                editMode: !todo.editMode,
                text: todo.text
            })
        }
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div class="card px-3">
                <div class="card-body">
                    <div className="list-wrapper">
                        <ul className="d-flex flex-column-reverse todo-list">
                               {this.props.initState.todos.map((el, i) => ( <li key={i}>  {/* {el.complete === true ? "completed" : ""} */} 
                                    <div className="form-check" style={{display: 'flex'}}>
                                        <label className="form-check-label">
                                            <input className="checkbox" type="checkbox" /> 
                                            <i className="input-helper"></i>
                                        </label>
                                        <input onChange={this.handleChange} type="text" value={this.state.editMode ? this.state.text : el.text} disabled={this.state.editMode ? false : true}/>
                                    </div>    
                                    <i onClick={() => this.turnOnEditMode(el)} className="far fa-edit remove mdi "></i>
                                    <i onClick={() => this.props.deleteTodo(el.id)} className="mar re mdi mdi-close-circle-outline"></i>
                             </li>))}
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
const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => dispatch(remove(id)),
        modifier: text => dispatch(renommer(text)),
        completed: id => dispatch(complete(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);


