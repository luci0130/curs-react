import React from "react";
import './App.css';
import UserAddForm from "./components/UserAddForm";
import UserList from "./components/UserList";

class App extends React.Component {
    constructor() {
        console.log("App.js Constructor has been called.");
        super();
        this.state = {
            background: 'grey',
            color: 'white',
            users: [
                {
                    name: 'Mohamed Salah',
                    email: 'mohamed.salah@gmail.com',
                    imageSrc: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRllHUNrwAWlEok2FzOYQIIuCm16E-ZjCLY3RrJ5_FHawkLwLXVWl9T-84Wu5c2CwEB4Zg7BeY-5J9QrXA',
                    salary: '100.000$',
                    isGoldClient: true
                },
                {
                    name: 'Roberto Firminio',
                    email: 'roberto.firminio@gmail.com',
                    imageSrc: 'https://talksport.com/wp-content/uploads/sites/5/2022/10/liverpools-brazilian-striker-roberto-firmino-767549102.jpg?strip=all&quality=100&w=960',
                    salary: '200.000$',
                    isGoldClient: true
                },
                {
                    name: 'Sadio Mane',
                    email: 'sadio.mane@gmail.com',
                    imageSrc: 'https://bayernstrikes.com/wp-content/uploads/getty-images/2017/07/1240962810.jpeg',
                    salary: '50.000$'
                }
            ]
        };
    }

    handleBackgroundChange(event) {
        const userBackground = event.target.value;
        this.setState({background: userBackground});
    }

    handleTextChange(event) {
        this.setState({color: event.target.value});
    }

    render() {
        console.log("App.js render has been called.");
        return (
            <div className="App" style={{background: this.state.background, color: this.state.color}}>
                <h1>User List</h1>
                <UserAddForm></UserAddForm>

                {
                    this.state.background !== '#000000'
                        ? <UserList users={this.state.users}></UserList>
                        : null
                }

                <div>
                    <input type="color" id="background" name="background"
                           onChange={(event) => this.handleBackgroundChange(event)}/>
                    <label htmlFor="background">Background</label>

                    <input type="color" id="text" name="text" onChange={(event) => this.handleTextChange(event)}/>
                    <label htmlFor="text">Text</label>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log("App.js componentDidMount has been called.");
    }

    componentDidUpdate() {
        console.log("App.js componentDidUpdate has been called.");

    }
}

export default App;
