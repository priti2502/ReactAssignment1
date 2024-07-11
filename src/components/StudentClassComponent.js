import { Component } from "react";

export class Student1 extends Component{
    render(){
        return(
            <h2>My name is {this.props.name}. My native place is {this.props.address}.I got {this.props.score} in 10th class.</h2>
        )
    }
}