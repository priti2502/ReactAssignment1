import React, { Component } from 'react'


export class Button extends Component{
    sayHello=()=>{
        alert("Hello");
    }
    sayBye=()=>{
        alert("Bye");
        
    }
    
render(){
    

    return(
        <>
        <button onClick={this.sayHello}>Say Hello</button>
        <button onClick={this.sayBye}>Say Bye</button>
        </>
    )
}
}