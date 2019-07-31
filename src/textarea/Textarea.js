import React, {Component} from 'react';

class TextArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:'Static Value after submit',
            area:'Dynamic value from text area:'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            //value: value
            [name]: value
        });
    }

    handleSubmit(event){
        document.getElementById("showAnswer").innerHTML = this.state.value;
        event.preventDefault();
    }

    render(){


        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="area" onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                <div id="showAnswer">{this.state.area}</div>
            </div>
        );
    };
}

export default TextArea;