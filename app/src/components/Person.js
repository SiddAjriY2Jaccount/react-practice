import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>My name is {person.name}. I run {person.show}. I debuted with {person.debut}.</h2>
        </div>
    )
}

export default Person
