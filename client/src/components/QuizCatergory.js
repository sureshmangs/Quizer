import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class QuizCategory extends Component {
    render() {
        return (
            <div style={{
                background: 'rgb(179 106 126)'
            }} className="pb-5">
                < div className="container py-5" >
                    <div className="row text-center text-white">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="display-4">QUIZER</h1>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-4 mb-4">
                            <div className="bg-dark rounded shadow-sm py-5 px-4"><img src={require('../images/quiz.jpg')} alt="" style={{ width: '100px', height: '100px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="text-white">APTITUDE</h5>
                                <Link to="/quiz/aptitude"><button className="btn btn-sm bg-danger text-white">START</button></Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4">
                            <div className="bg-dark rounded shadow-sm py-5 px-4"><img src={require('../images/quiz.jpg')} alt="" style={{ width: '100px', height: '100px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="text-white">PROGRAMMING</h5>
                                <Link to="/quiz/programming"><button className="btn btn-sm bg-danger text-white">START</button></Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4">
                            <div className="bg-dark rounded shadow-sm py-5 px-4"><img src={require('../images/quiz.jpg')} alt="" style={{ width: '100px', height: '100px' }} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="text-white">GENERAL KNOWLEDGE</h5>
                                <Link to="/quiz/general_knowledge"><button className="btn btn-sm bg-danger text-white">START</button></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </ div >
        )
    }
}


export default QuizCategory
