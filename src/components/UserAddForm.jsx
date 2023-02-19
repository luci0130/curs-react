import React from "react";
import './UserAddForm.css';

class UserAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            nameError: '',
            emailError: ''
        }
    }

    handleNameChange(event) {
        const nameField = event.target;
        this.setState({name: nameField.value});

        if (nameField.value === '') {
            this.setState({ nameError: 'Name is required' });
            nameField.className = "invalid";
        } else {
            this.setState({ nameError: '' });
            nameField.className = "valid";
        }
    }

    handleEmailChange(event) {
        const emailField = event.target;
        this.setState({ email: emailField.value });
        // Validate email input
        if (!event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({ emailError: 'Invalid email address' });
            emailField.className = "invalid";
        } else {
            this.setState({ emailError: '' });
            emailField.className = "valid";
        }

    }

    handleGoldClientChange(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    validateName(name) {
        return true;
    }

    validateEmail(email) {
        return true;
    }

    validateForm(newUser) {

    }

    handleFormSubmit(event) {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            isGoldClient: this.state.isGoldClient,
            imageSrc: `${process.env.PUBLIC_URL}/administrator-user.png`,
            salary: Math.floor(Math.random() * 1000) + 100,
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
                {this.state.nameError && <div className="error">{this.state.nameError}</div>}


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
                {this.state.emailError && <div className="error">{this.state.emailError}</div>}


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

                <input className="button add-button" type="submit" value="Create User"/>
            </form>
        );
    }
}

export default UserAddForm;
