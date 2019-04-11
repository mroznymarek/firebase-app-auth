import React from 'react'

import { auth, googleProvider } from '../firebaseConf'

import Forms from './Forms'

class Auth extends React.Component {
    state = {
        isUserLoggedIn: false,
        email: 'email',
        password: 'password'
    }

    componentDidMount() {
        auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }


    onEmailChange = (event) => this.setState({ email: event.target.value })
    onPasswordChange = (event) => this.setState({ password: event.target.value })
    onLogInClick = () => {
        auth.signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
            .catch(console.log)
    }
    
    onLogOutClick = () => {
        auth.signOut()
    }
    
    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                        <div>
                            <button
                            onClick={this.onLogOutClick}
                            >
                            LOG OUT
                            </button>
                            {this.props.children}
                        </div>
                        :
                        <Forms
                            email={this.state.email}
                            password={this.state.password}
                            onEmailChange={this.onEmailChange}
                            onPasswordChange={this.onPasswordChange}
                            onLogInClick={this.onLogInClick}

                            onLogInByGoogleClick={this.onLogInByGoogleClick}

                        />
                }
            </div>
        )
    }
}

export default Auth
