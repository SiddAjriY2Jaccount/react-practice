import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             comment: '',
             topic: 'React'
        }
    }

    handleNameChange = (event) => {
    this.setState({ 
        name: event.target.value 
     })        
    }
    
    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.name} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {

        const {name, comment, topic} = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <label>Name: </label>
                        
                        <input 
                        type="text" 
                        value={name} 
                        onChange={this.handleNameChange} 

                        />

                    </div>
                    
                    <div>
                        <label>Comment: </label>
                        <textarea 
                        value={comment} 
                        onChange={this.handleCommentChange}    
                        />
                    </div>

                    <div>
                        <label>Module: </label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default Form
