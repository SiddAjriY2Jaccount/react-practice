import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1> CLASS COMPONENTS:- Introducing {this.props.superstar} with Gimmick: {this.props.gimmick} </h1>
                {this.props.children}
            </div>
            
        )
    }
}

export default Welcome;