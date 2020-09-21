import React, { Component } from 'react';

class Login extends Component {
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
                                                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fa fa-google mr-2"></i> Sign in with Google</button>
                                                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fa fa-facebook-f mr-2"></i> Sign in with Facebook</button>
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


export default Login
