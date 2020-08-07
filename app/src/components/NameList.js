import React from 'react'

function NameList() {

    const names = [
        {
            name : "Bruce Prichard",
            show : "Friday Night SmackDown",
            debut : "Paul Bosch' Houston Wrestling"
        },

        {
            name : "Paul Heyman",
            show : "Monday Night RAW",
            debut : "WCW NWA: The Dangerous Alliance"
        }
    ]

    const nameList = names.map(name => (
    <h2> My name is {name.name}. I run {name.show}. I debuted with {name.debut}.</h2>
    ))

    return (
        <div>
                {nameList}   
        </div>
    )
}

export default NameList
