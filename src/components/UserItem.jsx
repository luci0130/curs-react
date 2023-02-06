import React from "react";

function UserItem(props) {
    console.log(props);

    const {name, email, imageSrc, salary} = props;
    return (
        <div className="user-item">
            <p>{name}</p>
            <p>{email}</p>
            <img src={imageSrc} alt={name} height="200"></img>
            <p>{salary}</p>
        </div>
    );
}

export default UserItem;