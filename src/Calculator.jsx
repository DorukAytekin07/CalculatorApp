import React from "react";

export default class Calculator extends React.Component{
    state = {
        formula:""
    }

    divide(){
        this.setState({
            formula:this.state.formula+"/"
        })
    }
    plus(){
        this.setState({
            formula:this.state.formula+"+"
        })
    }
    minus(){
        this.setState({
            formula:this.state.formula+"-"
        })
    }
    times(){
        this.setState({
            formula:this.state.formula+"*"
        })
    }
    dot(){
        this.setState({
            formula:this.state.formula+"."
        })
    }
    reset(){
        this.setState({
            formula:""
        })
    }
    calculate(){
        this.setState({
            formula:eval(this.state.formula)
        })
    }
    zero(){
        this.setState({
            formula:this.state.formula+"0"
        })
    }
    one(){
        this.setState({
            formula:this.state.formula+"1"
        })
    }
    two(){
        this.setState({
            formula:this.state.formula+"2"
        })
    }
    three(){
        this.setState({
            formula:this.state.formula+"3"
        })
    }
    four(){
        this.setState({
            formula:this.state.formula+"4"
        })
    }
    five(){
        this.setState({
            formula:this.state.formula+"5"
        })
    }
    six(){
        this.setState({
            formula:this.state.formula+"6"
        })
    }
    seven(){
        this.setState({
            formula:this.state.formula+"7"
        })
    }
    eight(){
        this.setState({
            formula:this.state.formula+"8"
        })
    }
    nine(){
        this.setState({
            formula:this.state.formula+"9"
        })
    }
    render(){
        console.log(this.state.formula)
        return(
            <div className="center">
                <div className="grid-container">
                    <p className="result result-screen">{this.state.formula}</p>
                    <button onClick={this.reset.bind(this)} className="reset-button"><p>AC</p></button>
                    <button onClick={this.divide.bind(this)}><p>/</p></button>
                    <button onClick={this.times.bind(this)}><p>X</p></button>
                    <button onClick={this.seven.bind(this)}><p>7</p></button>
                    <button onClick={this.eight.bind(this)}><p>8</p></button>
                    <button onClick={this.nine.bind(this)}><p>9</p></button>
                    <button onClick={this.minus.bind(this)}><p>-</p></button>
                    <button onClick={this.four.bind(this)}><p>4</p></button>
                    <button onClick={this.five.bind(this)}><p>5</p></button>
                    <button onClick={this.six.bind(this)}><p>6</p></button>
                    <button onClick={this.plus.bind(this)}><p>+</p></button>
                    <button onClick={this.one.bind(this)}><p>1</p></button>
                    <button onClick={this.two.bind(this)}><p>2</p></button>
                    <button onClick={this.three.bind(this)}><p>3</p></button>
                    <button onClick={this.calculate.bind(this)} className="result-button"><p>=</p></button>
                    <button onClick={this.zero.bind(this)} className="zero-button"><p>0</p></button>
                    <button onClick={this.dot.bind(this)}><p>.</p></button>
                </div>
            </div>
        );
    }
    
}