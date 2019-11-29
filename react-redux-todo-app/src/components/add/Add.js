import React, { Component } from 'react';
import './AddStyle.css';
import { connect } from 'react-redux';
import { add } from '../../actions/actionsTodo';
import uuid from 'uuid';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            complete: false
        }
    }

    fnchangeinput = (e) => {
        this.setState({
            text: e.target.value
        })
    } 

    Empty = () => {
        this.props.addNewTodo({...this.state, id: uuid()})
        this.setState({text: ''})
    }

    render() {
        return (
            <div class="card px-3">
                <div class="card-body">
                    <h4 class="card-title">Daily Todo Lists</h4>
                    <div className="add-items d-flex">
                        <input onChange={this.fnchangeinput} value={this.state.text} type="text" className="form-control todo-list-input" placeholder="Add your todo" />
                        <button onClick={this.Empty} className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        addNewTodo: x => dispatch(add(x))
    }
}

export default connect(null, mapDispatchToProps)(Add);
