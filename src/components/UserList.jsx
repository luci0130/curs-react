import React from "react";
import UserItem from "./UserItem";

class UserList extends React.Component {

    constructor(props) {
        console.log("UserList.js Constructor has been called.");
        super(props);
    }

    render() {
        console.log("UserList.js render has been called.");
        return <div className="user-list">
            {
                this.props.users.map((user) => {
                    return <UserItem
                        id={ user.id }
                        name={user.name}
                        email={user.email}
                        imageSrc={user.imageSrc}
                        salary={user.salary}
                        isGoldClient={user.isGoldClient}
                        key={user.id}
                        deleteUser={this.props.deleteUser}
                    />
                })
            }
        </div>;
    }

    componentDidMount() {
        console.log("UserList.js componentDidMount has been called.");
    }

    componentWillUnmount() {
        console.log("UserList.js componentWillUnmount has been called.");
    }
}

export default UserList;
