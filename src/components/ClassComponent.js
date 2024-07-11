import { Component } from "react";

export class First1 extends Component{

    render(){
        return(
            <h2>Hello from First Class component</h2>
        )

    }
}

export class Second2 extends Component{
    render(){
        return(
            <h2>Hello {this.props.name} from Second Class Component </h2>
        )
    }
}
export class Third3 extends Component{
    state={
        name:"Renuka"
    };
    hello=()=>{
        alert("Hello");
    }
    changeText=()=>{
        this.setState({name:"Disha"})
    }
    render(){
        return(
        <>
       
        <h2>Hello {this.state.name} from Third Class Component</h2>
        <button onClick={this.hello}>Click</button>
        <button onClick={this.changeText}>Change text</button>
        </>
        );
    }
}
export class Fourth4 extends Component{
    render(){
        return(
            <h2>Hello from Fourth  Class Component</h2>
        )
    }
}