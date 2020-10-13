import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/quizAction';
import Spinner from './Spinner';

class Quiz extends Component {
    componentDidMount() {
        this.props.fetchQuiz(1);
    }
    render() {
        return (
            <div>
                {
                    !this.props.quiz ? <Spinner /> :
                        <div className="container mt-5 mb-5">
                            <h3 className="text-center text-primary pb-2"><span className="text-dark">TIME REMAINING - </span> 10:00</h3>
                            <div className="justify-content-center row">
                                <div className="col-md-8 col-lg-10 col-sm-12">
                                    <div className="border">
                                        <div className="question bg-white p-3 border-bottom">
                                            <div className="d-flex flex-row justify-content-between align-items-center">
                                                <h4>Aptitude Quiz</h4><span>(1 of 20)</span>
                                            </div>
                                        </div>
                                        <div className="question bg-white p-3 border-bottom">
                                            <div className="d-flex flex-row align-items-center">
                                                <h3 className="text-danger">Q.</h3>
                                                <h5 className="mt-1 ml-2">Which is the answer of this question ?</h5>
                                            </div>
                                            <div className="ml-2">
                                                <label className="radio"> <input type="radio" name="answer" /> <span>Option A</span>
                                                </label>
                                            </div>
                                            <div className="ml-2">
                                                <label className="radio"> <input type="radio" name="answer" /> <span>Option B</span>
                                                </label>
                                            </div>
                                            <div className="ml-2">
                                                <label className="radio"> <input type="radio" name="answer" /> <span>Option C</span>
                                                </label>
                                            </div>
                                            <div className="ml-2">
                                                <label className="radio"> <input type="radio" name="answer" /> <span>Option D</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                            <button className="btn btn-primary d-flex align-items-center btn-danger" type="button">
                                                <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Previous</button>
                                            <button className="btn btn-primary border-success align-items-center btn-success" type="button">Next
                                <i className="fa fa-angle-right ml-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        quiz: state.quiz
    }
}

export default connect(mapStateToProps, actions)(Quiz)
