import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid pt-5">
                <div className="row pt-5 mb-5">
                    <div className="col-md-6">
                        <img src={require('../images/quiz.jpg')} className="mx-auto d-block img-fluid rounded-circle" style={{ width: '400px', height: '400px' }} alt="Quiz" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="pt-3" id="showus1">Show us</h1>
                        <h1 className="pt-2 pb-3" id="showus2">What you got</h1>
                        <Link to="/quiz_types"><button className="btn bg-danger text-white">START</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default HomePage
