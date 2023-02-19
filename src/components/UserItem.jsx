import React from "react";

function UserItem(props) {
    const {id, name, email, imageSrc, salary, isGoldClient} = props;

    const handleDeleteClick = () => {
        console.log("delete - UserItem");
        console.log(props);
        props.deleteUser(id);
    };

    return (
        <div className="user-item">
            <p>{name}</p>
            <p>{email}</p>
            <img src={imageSrc} alt={name} height="200"></img>
            <p>{salary}</p>
            {
                isGoldClient
                ? <p>Gold Client</p>
                : null
            }
            <button className="button delete-button" onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}

export default UserItem;