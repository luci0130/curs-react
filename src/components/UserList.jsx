import React from "react";
import UserItem from "./UserItem";

function UserList(props) {
    const {users} = props;

    return (

        <div className="user-list">
            {
                users.map((user, index) => {
                    return <UserItem
                        name={user.name}
                        email={user.email}
                        imageSrc={user.imageSrc}
                        salary={user.salary}
                        isGoldClient={user.isGoldClient}
                        key={index}
                    />
                })
            }
        </div>
    );
}

export default UserList;