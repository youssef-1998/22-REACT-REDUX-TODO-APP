import React, { Component } from 'react'
import { remove, renommer, complete } from '../../actions/actionsTodo';
import { connect } from 'react-redux'

export class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.todo.text,
            disabled: true,
            id: this.props.todo.id,
            complete: this.props.todo.complete
        }
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    turnOnEditMode = () => {
        if(!this.state.disabled){
            this.props.modifier(this.state)
            this.setState({disabled: !this.state.disabled})
        }else{
            this.setState({disabled: !this.state.disabled})
        }
    }
    
    render() {
        return (
            <li key={this.props.todo.id}>
                <div className="form-check" style={{ display: 'flex' }}>
                    <label className="form-check-label">
                        <input className="checkbox" type="checkbox" onClick={() => this.props.completed(this.state.id)}/>
                        <i className="checkbox" type="checkbox"  className="input-helper" />
                    </label>
                    <input className={this.props.todo.complete ? 'completed' : undefined} onChange={this.handleChange} type="text" value={this.state.text} disabled={this.state.disabled ? true : false} />
                </div>
                <i onClick={this.turnOnEditMode} className="far fa-edit remove mdi "></i>
                <i onClick={() => this.props.deleteTodo(this.state.id)} className="mar re mdi mdi-close-circle-outline"></i>
            </li>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: id => dispatch(remove(id)),
        modifier: text => dispatch(renommer(text)),
        completed: x => dispatch(complete(x))
    };
};
export default connect(null, mapDispatchToProps)(TodoItem)
