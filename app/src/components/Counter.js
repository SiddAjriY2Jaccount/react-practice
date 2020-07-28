import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        //this.state.count = this.state.count + 1;  --> won't work outside constructor, therefore must use setState method
        /* this.setState(
            { 
                count: this.state.count + 1 
            }, 
            () => {
                console.log("Inside callback, value:", this.state.count)
            }
        ) */

        this.setState((prevState, props) => ({
            count: prevState.count + 1 // prevState.count + props.someValue
        }),
        () => {
            console.log("Inside callback, value:", this.state.count)
        })
        
        //console.log(this.state.count) --> asynchronous log (so one step behind)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    

    render() {
        return (
            <div>
                <div>Counter: {this.state.count}</div>
                <button onClick={ () => this.incrementFive() }>Increase count</button>
            </div>
        )
    }
}

export default Counter
