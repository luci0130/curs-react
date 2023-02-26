import React from "react";
import '../App.css';
import UserAddForm from "../components/UserAddForm";
import UserList from "../components/UserList";
import PostList from "../components/PostList";
import Footer from "../components/Footer";

class Home extends React.Component {
    constructor() {
        console.log("App.js Constructor has been called.");
        super();
        this.state = {
            background: 'linear-gradient(#141e30, #243b55)',
            color: 'white',
            typeList: 'users',
            users: []
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
            return <UserList users={this.state.users} deleteUser={(id) => {this.deleteUser(id)}}/>
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

    getMaxId(users) {
        let maxId = 0;

        users.forEach(user => {
            if (user.id > maxId) {
                maxId = user.id;
            }
        });

        return maxId;
    }

    updateUsersList(user) {
        this.setState((previousState) => {
            const userWithId = {
                ...user,
                id: this.getMaxId(previousState.users) + 1
            }
            return {
                users: [...previousState.users, userWithId]
            }
        });
    }

    deleteUser (id) {
        console.log("delete - App");
        console.log(id);
        this.setState((previousState) => ({
            users: previousState.users.filter((user) => user.id !== id)
        }));
    };


    render() {
        console.log("App.js render has been called.");
        return (
            <div className="App" style={{background: this.state.background, color: this.state.color}}>
                <UserAddForm updateUserList={(user) => {this.updateUsersList(user)}}></UserAddForm>

                <div className="color-picker">
                    <h2>Choose the color</h2>
                    <input type="color" id="background" name="background"
                           onChange={(event) => this.handleBackgroundChange(event)}/>
                    <label htmlFor="background">Background</label>

                    <input type="color" id="text" name="text" onChange={(event) => this.handleTextChange(event)}/>
                    <label htmlFor="text">Text</label>
                </div>

                <h2>Switch Users | Posts</h2>
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

                <h1>User List</h1>
                {this.showList(this.state.typeList)}

                <Footer />
            </div>
        );
    }

    componentDidMount() {
        console.log("App.js componentDidMount has been called.");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            }).then((users) => {
            this.setState({
                'users': users.filter((user, index) => {
                        user.isGoldClient = true;
                        user.imageSrc = `${process.env.PUBLIC_URL}/user-picture.png`;
                        user.salary = Math.floor(Math.random() * 1000) + 100;
                        return index < 3;
                    }
                )
            })
        })
    }

    componentDidUpdate() {
        console.log("App.js componentDidUpdate has been called.");

    }
}

export default Home;
