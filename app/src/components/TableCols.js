import React from 'react'

function TableCols() {
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

    //const nameList = names.map(name => <Person key={name.id} person={name}></Person>)
    
    return (
        <React.Fragment>
            {/* <td>Name</td>
            <td>Sidd</td> */}
            {
                names.map(name => (
                    <React.Fragment>
                        <React.Fragment key={name.id}>
                    
                            <tr>
                                <td>{name.name}</td>
                                <td>{name.show}</td>
                                <td>{name.debut}</td>
                            </tr>
                    
                        </React.Fragment>
                    </React.Fragment>
                    
                ))
            }
        </React.Fragment>
    )
}

export default TableCols
