import { Component } from 'react';

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 100 }
        console.log("Component1 constructor got executed!");
    }

    componentDidMount() {
        console.log("Component1 componentDidMount got executed!");
    }

    componentDidUpdate() {
        console.log("Component1 componentDidUpdate got executed!");
    }

    componentWillUnmount(){
        console.log("Component1 componentWillUnmount got executed!");
    }

    render() {
        console.log("Component1 render got executed!");
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={e => this.setState({ count: this.state.count + 1 })}>UP</button>
            </div>
        );
    }
}

export default Component1;