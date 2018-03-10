import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class ErrorAuth extends React.Component {

    render() {

        const { role } = this.props;

        return (
            <div>
                <h1>
                    UNAUTHORIZED USER<hr/>
                    YOUR ROLE IS: {role}
                </h1>
            </div>
        )
    }
};


function mapStateToProps(state) {
    return {
      role: state.user.role
    };
}

export default connect(mapStateToProps, { login })(ErrorAuth);