import React from 'react'
import Person from './Person'

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

    const nameList = names.map(name => <Person person={name}></Person>)

    return (
        <div>
                {nameList}   
        </div>
    )
}

export default NameList
