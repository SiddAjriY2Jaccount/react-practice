import React from 'react'

function FunctionClick() {

    const clickHandler = () => {
        console.log("(func) button clicked")
    }

    return (
        <div>
            <button onClick={ clickHandler }> Click here '(func)' </button>
        </div>
    )
}

export default FunctionClick
