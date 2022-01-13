import {Component} from 'react';

class Calc extends Component {

    constructor(props){
        super(props);

        this.state={
            n1:0,
            n2:0,
            result:'click any button to see a result'
        };
    }

    compute = event => {
        let action = event.target.name;
        let n1 = this.state.n1;
        let n2 = this.state.n2;
        let res = "";
    
        switch(action){
            case 'sum':res = `sum of ${n1} and ${n2} is ${n1+n2}`; break;
            case 'dif':res = `difference of ${n1} and ${n2} is ${n1-n2}`; break;
            case 'prd':res = `product of ${n1} and ${n2} is ${n1*n2}`; break;
            case 'qut':res = `quitont of ${n1} by ${n2} is ${n1/n2}`; break;
            case 'rem':res = `reminder of ${n1} by ${n2} is ${n1%n2}`; break;
        }

        this.setState({result:res});
    }

    render(){
        return (
            <div>
                <label>Operand 1: 
                    <input type="number" value={this.state.n1} onChange={e => this.setState({n1:parseInt(e.target.value)}) } />
                </label> <br />
                <label>Operand 2: 
                    <input type="number" value={this.state.n2} onChange={e => this.setState({n2:parseInt(e.target.value)}) } />
                </label> <br />
                <p>
                <button name="sum" onClick={this.compute}>ADD</button>
                <button name="dif" onClick={this.compute}>SUBSTRACT</button>
                <button name="prd" onClick={this.compute}>MULTIPLY</button>
                <button name="qut" onClick={this.compute}>DIVIDE</button>
                <button name="rem" onClick={this.compute}>MODULO</button>
                </p>
                <p>
                    <strong>{this.state.result}</strong>
                </p>
            </div>
        );
    }
}

export default Calc;