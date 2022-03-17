
import React from 'react';
import { FormWrapper } from './form.style';
import { Input } from '../Input';
import { createUser } from '../../service/user';

// firstName
// - lastName
// - email
// - phoneNumber
// - linkedInProfile

const EMAIL_FORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const URL_FORMAT = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

const InputTypes = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    linkedInProfile: 'linkedInProfile',
};

class Form extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            linkedInProfile: '',
            errors: {},
        };
    };

    inputHandler = (type) =>
        (e) => {
            const localState = {};
            if (type === InputTypes.firstName) {
                localState['firstName'] = e.target.value;
            }
            if (type === InputTypes.lastName) {
                localState['lastName'] = e.target.value;
            }
            if (type === InputTypes.email) {
                localState['email'] = e.target.value;
            }
            if (type === InputTypes.phoneNumber) {
                localState['phoneNumber'] = e.target.value;
            }
            if (type === InputTypes.linkedInProfile) {
                localState['linkedInProfile'] = e.target.value;
            }
            this.setState({ ...localState });
        }

    validateEmail = () => this.state.email.match(EMAIL_FORMAT);
    validateUrl = () => this.state.linkedInProfile.match(URL_FORMAT);

    validateInput = () => {

        let errors = {};
        if (!this.state.firstName) {
            errors[InputTypes.firstName] = true;
        }

        if (!this.state.lastName) {
            errors[InputTypes.lastName] = true;
        }

        if (!this.validateEmail()) {
            errors[InputTypes.email] = true;
        }

        if (!this.state.phoneNumber || this.state.phoneNumber.length !== 10) {
            errors[InputTypes.phoneNumber] = true;
        }

        if (!this.validateUrl()) {
            errors[InputTypes.linkedInProfile] = true;
        }

        this.setState({ errors });
        return Object.keys(errors).length;
    }

    hasError = () => {
        return this.validateInput();
    }

    onClickHandler = (e) => {
        e.preventDefault();
        if (this.hasError()) {
            return;
        } else {
            this.props.onSubmit && this.props.onSubmit({
                "first_name": this.state.firstName,
                "last_name": this.state.lastName,
                "email": this.state.email,
                "phone": `+${this.state.phoneNumber}`,
                "linkedInProfile": this.state.linkedInProfile,
            });
        }

    }

    render() {
        return (
            <FormWrapper>
                <Input
                    placeholder="First name"
                    onChangeHandler={this.inputHandler(InputTypes.firstName)}
                    value={this.state.firstName}
                    errorMessage="First Name is invalid field"
                    hasError={this.state.errors[InputTypes.firstName]}
                />
                <Input
                    placeholder="Last name"
                    onChangeHandler={this.inputHandler(InputTypes.lastName)}
                    value={this.state.lastName}
                    errorMessage="Last Name is invalid field"
                    hasError={this.state.errors[InputTypes.lastName]}
                />
                <Input
                    placeholder="Email"
                    onChangeHandler={this.inputHandler(InputTypes.email)}
                    value={this.state.email}
                    errorMessage="Last Name is invalid field"
                    hasError={this.state.errors[InputTypes.email]}
                />
                <Input
                    placeholder="Phone Number"
                    type="number"
                    maxLength="10"
                    onChangeHandler={this.inputHandler(InputTypes.phoneNumber)}
                    value={this.state.phoneNumber}
                    errorMessage="Phone Number is invalid field"
                    hasError={this.state.errors[InputTypes.phoneNumber]}
                />
                <Input
                    placeholder="LinkedIn Profile url"
                    onChangeHandler={this.inputHandler(InputTypes.linkedInProfile)}
                    value={this.state.linkedInProfile}
                    errorMessage="Url is invalid filed"
                    hasError={this.state.errors[InputTypes.linkedInProfile]} />
                <button onClick={this.onClickHandler} >Submit</button>
            </FormWrapper>
        )
    }
}

export default Form;