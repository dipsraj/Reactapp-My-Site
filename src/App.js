import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            title: "My Site",
            lastId: 2,
            persons: [
                {
                    id: '1',
                    fname: 'John',
                    lname: 'Doe',
                    email: 'john@abc.com'
                },
                {
                    id: '2',
                    fname: 'Jane',
                    lname: 'Doe',
                    email: 'jane@abc.com'
                }
            ]
        };
    }
    changeTitle(title) {
        this.setState({title});
    }
    addPerson(e){
        let persons = this.state.persons;
        persons.push({
            id: this.state.lastId + 1,
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            email: e.target.email.value,
        });
        this.setState({
            persons,
            lastId: this.state.lastId +1
        });
    }
    handleDeletePerson(id){
        let persons = this.state.persons;
        let index = persons.findIndex(x => x.id === id);
        persons.splice(index,1);
        this.setState({
            persons,
        });
    }
    render() {
        return (
            <div className="App">
                <Header name={this.state.title}/>
                <Body persons={this.state.persons} onDelete={this.handleDeletePerson.bind(this)} title={this.state.title} changeTitle={this.changeTitle.bind(this)} addPerson={this.addPerson.bind(this)}/>
            </div>
        );
    }
}
