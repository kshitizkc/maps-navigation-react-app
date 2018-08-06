import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ValidateAddressForm from "./ValidateAddressForm";
import { fetchUser } from "./../../actions/user.actions";
import { addToAddress, addFromAddress } from "./../../actions/address.actions";

class ValidateAddress extends Component {
  constructor(props) {
    super(props);

    this.displayWarnings = this.displayWarnings.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  /** Silimar technique can be used to display errors */
  displayWarnings(toAddressWarnings = [], fromAddressWarnings = []) {
    const warnings = [...toAddressWarnings, ...fromAddressWarnings];
    return (
      <div>
        <h4>{warnings.length ? "Warnings: " : ""}</h4>
        {warnings.map((warning, _id) => <div key={_id}>{warning}</div>)}
      </div>
    );
  }

  render() {
    const { toAddress, fromAddress } = this.props;
    const displayWarning = this.displayWarnings(
      toAddress.warnings,
      fromAddress.warnings
    );

    return (
      <div>
        <ValidateAddressForm
          addToAddress={this.props.addToAddress}
          addFromAddress={this.props.addFromAddress}
        />
        <br />
        <br />
        {displayWarning}
      </div>
    );
  }
}

ValidateAddress.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  addToAddress: PropTypes.func.isRequired,
  addFromAddress: PropTypes.func.isRequired,
  toAddress: PropTypes.object,
  fromAddress: PropTypes.object
};

const mapStateToProps = state => ({
  toAddress: state.address.to,
  fromAddress: state.address.from
});

export default connect(
  mapStateToProps,
  { fetchUser, addToAddress, addFromAddress }
)(ValidateAddress);
