import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { CLIENT_ID } from '../config/keys'

import * as actions from '../actions/index';



class Login extends Component {
    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    async responseGoogle(res) {
        console.log('responseGoogle is ', res);
        console.log('typeof res ', typeof res);
        console.log('access token is ', res.accessToken)
        console.log('google id', res.profileObj.googleId)

        await this.props.oauthGoogle(res.accessToken);
        if (!this.props.errorMessage) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="container-fluid pt-5">
                <div className="row pt-5 mb-5">
                    <div className="col-md-6">
                        <img src={require('../images/quiz.jpg')} className="mx-auto d-block img-fluid rounded-circle" style={{ width: '400px', height: '400px' }} alt="Quiz" />
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-sm-12 col-md-8">
                                    <div className="card card-signin my-5">
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Sign In</h5>
                                            <form className="form-signin">
                                                <GoogleLogin
                                                    clientId={CLIENT_ID}
                                                    render={renderProps => (
                                                        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fa fa-google mr-2"></i> Sign in with Google</button>
                                                    )}
                                                    scope="openid profile email"
                                                    onSuccess={this.responseGoogle}
                                                    onFailure={this.responseGoogle}
                                                    isSignedIn={true}
                                                />
                                                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fa fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage,
        accessTokenG: state.auth.accessTokenG
    }
}

export default connect(mapStateToProps, actions)(Login)