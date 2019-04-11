import React from 'react'

import Forms from './Forms'

class Auth extends React.Component {
    state = {
        isUserLoggedIn: false,
        email: 'email',
        password: 'password'
    }

    onEmailChange = (event) => this.setState({ email: event.target.value })
    onPasswordChange = (event) => this.setState({ password: event.target.value })
    onLogInClick = () => {}


    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                        this.props.children
                        :
                        <Forms
                            email={this.state.email}
                            password={this.state.password}
                            onEmailChange={this.onEmailChange}
                            onPasswordChange={this.onPasswordChange}
                            onLogInClick={this.onLogInClick}
                        />
                }
            </div>
        )
    }
}

export default Auth
