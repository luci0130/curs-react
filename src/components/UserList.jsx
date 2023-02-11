import React from "react";
import UserItem from "./UserItem";

class UserList extends React.Component {

    constructor(props) {
        console.log("UserList.js Constructor has been called.");
        super(props);
        this.state = {
            users: []
        };
    }

    render() {
        console.log("UserList.js render has been called.");
        return <div className="user-list">
            {
                this.state.users.map((user) => {
                    return <UserItem
                        name={user.name}
                        email={user.email}
                        isGoldClient={user.isGoldClient}
                        key={user.id}
                    />
                })
            }
        </div>;
    }

    componentDidMount() {
        console.log("UserList.js componentDidMount has been called.");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            }).then((users) => {
            this.setState({
                'users': users.filter((user, index) => {
                        user.isGoldClient = true;
                        return index < 3;
                    }
                )
            })
        })
    }

    componentWillUnmount() {
        console.log("UserList.js componentWillUnmount has been called.");
    }
}

export default UserList;