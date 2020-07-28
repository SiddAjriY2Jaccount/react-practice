import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        console.log(this.props)
        const {name, gimmick} = this.props
        return (
            <div>
                <h1> CLASS COMPONENTS:- Introducing {name} with Gimmick: {gimmick} </h1>
                {this.props.children}
            </div>
            
        )
    }
}

export default Welcome;