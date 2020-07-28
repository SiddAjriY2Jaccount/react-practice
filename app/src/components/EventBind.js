import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "Who is your pick?",
             count: 0
        }

        this.clickHandler = () => {
            //console.log("NOT inside if")
            if (this.state.count % 2 == 0)
            {   
                //console.log("inside if")
                this.setState((prevState, props) => ({ 
                    message: "MJF",
                    count: prevState.count + 1
                }))
            }
            else 
            {   
                //console.log("inside else o.O")
                this.setState((prevState, props) => ({ 
                    message: "Moxley",
                    count: prevState.count + 1
                }))
            }
            
        }
    }


    render() {
        return (
            <div>
                <div>{ this.state.message }</div>
                <button onClick={ this.clickHandler }> AEW: who should be champ? </button>
            </div>
        )
    }
}

export default EventBind
