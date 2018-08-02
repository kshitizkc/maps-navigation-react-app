import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageOneForm from './PageOneForm';
import { fetchUser } from './../../actions/user.actions';
import { addAddress } from './../../actions/address.actions';

class PageOne extends Component {
    componentWillMount() {
        this.props.fetchUser();
    }

    render() {

        return <PageOneForm addAddress={this.props.addAddress}/>
    }
}

PageOne.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    addAddress: PropTypes.func.isRequired
}

export default connect(null, { fetchUser, addAddress })(PageOne);
