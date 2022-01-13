import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    changeCount = event => {
        if(event.target.name==='btn1')
            this.setState({count:this.state.count-1});
        else
            this.setState({count:this.state.count+1});
    }

    render(){
        return (
            <div>
                <button onClick={this.changeCount} name="btn1">DOWN</button>
                <strong>{this.state.count}</strong>
                <button onClick={this.changeCount} name="btn2">UP</button>
            </div>
        );
    }
}

export default Counter;