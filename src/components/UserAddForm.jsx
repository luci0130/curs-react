import React from "react";

function UserAddForm() {

    return (
        <form className="user-form">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required></input>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required></input>
            </div>

            <input type="submit" value="Create User" />
        </form>
    );
}

export default UserAddForm;