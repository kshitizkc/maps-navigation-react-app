import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MyMapComponent from './PageTwoMap.jsx';

class PageTwo extends Component {
  render() {
    const { user = {}, company = {} } = this.props.user;
    return (
      <div>
        <h2>Name: {user.first_name} {user.last_name}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Phone: {user.phone_number}</h2>
        <h2>Company Name: {company.name}</h2>
        <MyMapComponent address={this.props.address}/>
      </div>
    )
  }
}

PageTwo.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.userInfo.user,
  address: state.addresInfo
});

export default connect(mapStateToProps)(PageTwo);
