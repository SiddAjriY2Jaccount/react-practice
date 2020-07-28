import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log("class click done")
    }

    render() {
        return (
            <div>
               <button onClick={this.clickHandler}> Click here '(class)' </button> 
            </div>
        )
    }
}

export default ClassClick
