import React from "react";

function UserItem(props) {
    const {name, email, isGoldClient} = props;
    return (
        <div className="user-item">
            <p>{name}</p>
            <p>{email}</p>
            {
                isGoldClient
                ? <p>Liverpool</p>
                : null
            }
        </div>
    );
}

export default UserItem;