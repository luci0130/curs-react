import React from "react";
import './UserAddForm.css';

class UserAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleGoldClientChange(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            isGoldClient: this.state.isGoldClient,
            id: Math.floor(Math.random() * 1000) + 100
        }
        this.props.updateUserList(newUser);
    }

    render() {
        return (
            <form className="user-add-form" onSubmit={(event) => {this.handleFormSubmit(event)}}>
                <h2>Add new user</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => {this.handleNameChange(e)}}>
                    </input>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => {this.handleEmailChange(e)}}>
                    </input>
                </div>

                <div>
                    <label htmlFor="gold-client">Gold Client</label>
                    <input
                        type="checkbox"
                        id="gold-client"
                        name="gold-client"
                        checked={this.state.isGoldClient}
                        onChange={(e) => {this.handleGoldClientChange(e)}}>
                    </input>
                </div>

                <input type="submit" value="Create User"/>
            </form>
        );
    }
}

export default UserAddForm;
