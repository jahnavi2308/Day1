import React from "react";
class Five extends React.Component{
    a = 0;
    name="reactJS";

    constructor(){
        super();
        this.state ={
            number : 1
        };
        console.log("Constructor is called");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.a);
        
    }
    componentDidUpdate(){
        console.log("Component updated");
    }
    componentWillUnmount(){
        console.log("Will be mounted");
    }
    funcBtn =() =>{
        console.log("Button clicked");
        console.log(this.a+1);
        this.setState({number: this.state.number+1});

    }
    render(){
        
        return(
            <div>
                <h3>This is a class component and {this.a} {this.name} {this.state.number}</h3>
                <button className="btn btn-primary" onClick={this.funcBtn}>Click Here</button>
            </div>
        );
    }
}
export default Five;