import React, { Component } from 'react';

// function Greet() {
//    return <h1> Siddhanth is BACK! </h1>;
// } 

/* const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1> Func comp:- Introducing {props.superstar} - Gimmick: {props.gimmick} </h1>
            {props.children}
        </div>
    )
    
}
 */


const Greet = (props) => {
    console.log(props);
    const {superstar, gimmick} = props
    return (
        <div>
            <h1> Func comp:- Introducing {superstar} - Gimmick: {gimmick} </h1>
            {props.children}
        </div>
    )
    
}


export default Greet;