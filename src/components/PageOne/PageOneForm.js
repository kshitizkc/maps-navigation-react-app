import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageOneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            to: '',
            from: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const field = e.target.name;
        const value = e.target.value;

        this.setState({ [field]: value });
    }

    onSubmit(e) {
        e.preventDefault();
        const { to, from } = this.state;
        const addresses = { to, from }
        
        this.props.addAddress(addresses);
    }

    render() {
        return (
            <div className="page-form">
                <form onSubmit={this.onSubmit}>
                        <label>To: </label>
                        <input type="text" name="to" onChange={this.onChange} value={this.state.to}/>
                        <label>From: </label>
                        <input type="text" name="from" onChange={this.onChange} value={this.state.from}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PageOneForm.propTypes = {
    addAddress: PropTypes.func.isRequired
}

export default PageOneForm;
