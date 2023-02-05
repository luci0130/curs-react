import React from "react";

function UserItem(props) {
    console.log(props);

    const {name, email} = props;
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default UserItem;