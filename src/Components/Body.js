import React, { Component } from 'react';
import TableRow from "./Body/TableRow";

export default class Body extends Component {
    handleChange(e){
        if (e.target.value.length >= 20){
            alert("Wooo.. Title too long, calm down...");
        }
        else
            this.props.changeTitle(e.target.value);
    }
    handleSubmit(e){
        e.preventDefault();
        let fname = e.target.fname.value;
        let lname = e.target.lname.value;
        let email = e.target.email.value;
        if(fname.length > 0 && lname.length > 0 && email.length > 0){
            this.props.addPerson(e);
            e.target.fname.value = "";
            e.target.lname.value = "";
            e.target.email.value = "";
        }
        else
            alert("Empty Fields Not Allowed");
    }
    deletePerson(id){
        this.props.onDelete(id);
    }
    render() {
        let tableRows;
        if (this.props.persons) {
            tableRows = this.props.persons.map(person => {
                return (
                    <TableRow key={person.id} person={person} onDelete={this.deletePerson.bind(this)}/>
                );
            });
        }
        return (
            <div className="body">
                <div className="title-form">
                    <div className="container">
                        <form onSubmit={(e) => (e.preventDefault())}>
                            <div className="form-group">
                                <label htmlFor="box">Change Title</label>
                                <input id="box" type="text" className="form-control" value={this.props.title} onChange={this.handleChange.bind(this)}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="table-form">
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="fname">First name</label>
                                        <input id="fname" name="fname" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lname">Last name</label>
                                        <input id="lname" name="lname" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" name="email" type="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-info">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-wrapper" style={{marginTop:'20px'}}>
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table table-dark table-hover">
                                <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {tableRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}