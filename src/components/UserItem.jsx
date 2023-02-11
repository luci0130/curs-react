import React from "react";

function UserItem(props) {
    const {name, email, imageSrc, salary, isGoldClient} = props;
    return (
        <div className="user-item">
            <p>{name}</p>
            <p>{email}</p>
            <img src={imageSrc} alt={name} height="200"></img>
            <p>{salary}</p>
            {
                isGoldClient
                ? <p>Liverpool</p>
                : null
            }
        </div>
    );
}

export default UserItem;