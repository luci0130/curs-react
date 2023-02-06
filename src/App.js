import React from "react";
import './App.css';
import UserItem from "./components/UserItem";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            background: 'orange'
        };
    }

    handleBackgroundChange(event) {
        console.log(event.target.value);
        const userBackground = event.target.value;
        this.setState({background: userBackground});
    }

    render() {
        console.log(this.state)
        return (
            <div className="App" style={{background: this.state.background}}>
                <h1>User List</h1>
                <UserItem
                    name="Mohamed Salah"
                    email="mohamed.salah@gmail.com"
                />
                <UserItem
                    name="Roberto Firminio"
                    email="roberto.firminio@gmail.com"
                />
                <UserItem
                    name="Sadio Mane"
                    email="sadio.mane@gmail.com"
                />

                <input type="color" onChange={ (event) => this.handleBackgroundChange(event)}/>
            </div>
        );
    }
}

export default App;
