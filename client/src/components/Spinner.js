import React, { Component } from 'react'

class Spinner extends Component {
    render() {
        return (
            <div>
                <h1 className="pt-5 text-center" id="showus1">Quiz is Loading</h1>
                <img
                    src={require("../images/spinner.gif")}
                    style={spinStyle}
                    alt='Loading...' />
            </div>
        )
    }
}

const spinStyle = {
    width: '100px',
    margin: '150px auto 150px auto',
    display: 'block'
}

export default Spinner
