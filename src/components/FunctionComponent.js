function First(){
    return(
        <h2>Hello from First function</h2>
    );
}

function Second({name}){
    return(
        <h2>Hello {name}  from Second function</h2>
    );
} 

function Third(props){
    return(
        <h2>I am {props.name} from {props.address}</h2>
    );
}

function Fourth(props){
    return(
        <h2>I am a {props.dept} Student.</h2>
    )
}





export default First;
export {Second,Third,Fourth};