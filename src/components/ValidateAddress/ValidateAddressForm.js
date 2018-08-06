import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class ValidateAddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: "",
      from: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitToAddress = this.onSubmitToAddress.bind(this);
    this.onSubmitFromAddress = this.onSubmitFromAddress.bind(this);
  }

  onChange(e) {
    const field = e.target.name;
    const value = e.target.value;

    this.setState({ [field]: value });
  }

  onSubmitToAddress(e) {
    e.preventDefault();
    const { to } = this.state;
    const addressFormat = { formatted_address: to };
    this.props.addToAddress(addressFormat);
  }

  onSubmitFromAddress(e) {
    e.preventDefault();
    const { from } = this.state;
    const addressFormat = { formatted_address: from };
    this.props.addFromAddress(addressFormat);
  }

  render() {
    return (
      <div className="page-form">
        <form onSubmit={this.onSubmitToAddress}>
          <label>To: </label>
          <input
            type="text"
            name="to"
            onChange={this.onChange}
            value={this.state.to}
          />
          <button type="submit">Validate</button>
        </form>
        <br />
        <form onSubmit={this.onSubmitFromAddress}>
          <label>From: </label>
          <input
            type="text"
            name="from"
            onChange={this.onChange}
            value={this.state.from}
          />
          <button type="submit">Validate</button>
        </form>
        <br />
        <br />
        <NavLink to="/map">View Direction</NavLink>
      </div>
    );
  }
}

ValidateAddressForm.propTypes = {
  addToAddress: PropTypes.func.isRequired,
  addFromAddress: PropTypes.func.isRequired
};

export default ValidateAddressForm;
