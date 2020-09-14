import React from 'react'
import Person from './Person'

function NameList() {

    const names = [
        {   
            id: 1,
            name : "Bruce Prichard",
            show : "Friday Night SmackDown",
            debut : "Paul Bosch' Houston Wrestling"
        },

        {
            id: 2,
            name : "Paul Heyman",
            show : "Monday Night RAW",
            debut : "WCW NWA: The Dangerous Alliance"
        }
    ]

    const nameList = names.map(name => <Person key={name.id} person={name}></Person>)

    return (
        <div>
                {nameList}   
        </div>
    )
}

export default NameList
