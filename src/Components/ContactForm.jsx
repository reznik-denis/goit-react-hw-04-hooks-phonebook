import React, { Component } from 'react';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '', id: '' })
    };

    render() {
        const { name, number } = this.state;
        return (<form className="formBlock" onSubmit={this.handleSubmit}>
        <label className="labelBlock">
              Name <input
                type="text"
                value={name}
                onChange={this.handleChange}
                name="name"
                className="inputStyles" />
        </label>
        <label className="labelBlock">
              Number <input
                type="tel"
                value={number}
                onChange={this.handleChange}
                name="number"
                className="inputStyles" />
        </label>
        <button type="submit" className="button" disabled={!name || !number}>Add contact</button>
      </form> )
    }
}

export default ContactForm;