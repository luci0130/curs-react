import React from "react";
import './App.css';
import UserAddForm from "./components/UserAddForm";
import UserList from "./components/UserList";
import PostList from "./components/PostList";

class App extends React.Component {
    constructor() {
        console.log("App.js Constructor has been called.");
        super();
        this.state = {
            background: 'grey',
            color: 'white',
            typeList: 'users'
        };
    }

    handleBackgroundChange(event) {
        const userBackground = event.target.value;
        this.setState({background: userBackground});
    }

    handleTextChange(event) {
        this.setState({color: event.target.value});
    }

    showList(typeOfList) {
        if (typeOfList === 'users') {
            return <UserList/>
        } else if (typeOfList === 'posts') {
            return <PostList/>
        } else {
            return null;
        }
    }

    toggleList = () => {
        this.setState({
            typeList: this.state.typeList === 'users' ? 'posts' : 'users',
        });
    };


    render() {
        console.log("App.js render has been called.");
        return (
            <div className="App" style={{background: this.state.background, color: this.state.color}}>
                <h1>User List</h1>
                <UserAddForm></UserAddForm>

                <div>
                    <input type="color" id="background" name="background"
                           onChange={(event) => this.handleBackgroundChange(event)}/>
                    <label htmlFor="background">Background</label>

                    <input type="color" id="text" name="text" onChange={(event) => this.handleTextChange(event)}/>
                    <label htmlFor="text">Text</label>
                </div>

                <div className="container">
                    <div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={this.state.typeList === 'posts'}
                                onChange={this.toggleList}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>

                {this.showList(this.state.typeList)}
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
