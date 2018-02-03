import React, { Component } from 'react';

export default class TableRow extends Component {
    deletePerson(id){
        this.props.onDelete(id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.person.fname}</td>
                <td>{this.props.person.lname}</td>
                <td>{this.props.person.email}</td>
                <td><button type="button" className="btn btn-danger btn-sm" onClick={this.deletePerson.bind(this, this.props.person.id)}>Delete</button></td>
            </tr>
        );
    }
}