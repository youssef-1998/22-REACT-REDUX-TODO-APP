import React, { Component } from 'react'
import './AddStyle.css'

class Add extends Component {
    render() {
        return (
            // <div className="container">
            // </div>
            <div class="card px-3">
                <div class="card-body">
                    <h4 class="card-title">Daily Todo Lists</h4>
                    <div className="add-items d-flex">
                        <input type="text" className="form-control todo-list-input" placeholder="Add your todo" />
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Add;
