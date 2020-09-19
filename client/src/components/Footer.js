import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid p-4 mt-3 text-white bg-dark">
                <ul className="d-flex justify-content-end ">
                    <li className="list-unstyled pl-5 "><Link className="text-white" to='/priyacy'>Privacy</Link></li>
                    <li className="list-unstyled pl-5"><Link className="text-white" to='/terms'>Terms</Link></li>
                    <li className="list-unstyled pl-5"><Link className="text-white" to='/contact'>Contact</Link></li>
                </ul>
                <span className="d-flex justify-content-end small" >Copyright 2020, Quizers</span>
            </footer>
        )
    }
}

export default Footer
