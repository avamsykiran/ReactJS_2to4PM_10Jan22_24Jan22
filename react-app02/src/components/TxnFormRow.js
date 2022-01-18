import { Component } from 'react';

class TxnFormRow extends Component {

    constructor(props) {
        super(props);
        this.state={
            id:0,
            header:'',
            amount:0,
            type:''
        }
    }

    updateValue = e => {
        
        let {name,value} = e.target;

        switch(name){
            case 'id':this.setState({id:parseInt(value)}); break;
            case 'header':this.setState({header:value}); break;
            case 'creditAmount':this.setState({amount:parseInt(value)}); break;
            case 'debitAmount':this.setState({amount:parseInt(value)}); break;
        }
    }

    updateType= e => {
        this.setState({type:e.target.name==="creditAmount"?"CREDIT":"DEBIT"});
    }

    addTxn = e => {
        let txn = {...this.state};
        this.props.addTxn(txn);
        this.setState({id:0,header:'',amount:0,type:''});
    }

    render() {
        let txn = this.state;
        return (
            <tr>
                <td>
                    <input type="number" value={txn.id} name="id" onChange={this.updateValue} />
                </td>
                <td>
                    <input type="text" value={txn.header} name="header" onChange={this.updateValue} />
                </td>
                <td>
                    <input type="number" value={txn.type==="CREDIT"?txn.amount:0} name="creditAmount"
                        readOnly={txn.type!=="CREDIT"} onFocus={this.updateType} onChange={this.updateValue} />
                </td>
                <td>
                    <input type="number" value={txn.type==="DEBIT"?txn.amount:0} name="debitAmount"
                        readOnly={txn.type!=="DEBIT"} onFocus={this.updateType} onChange={this.updateValue} />
                </td>
                <td>
                    <button className="btn btn-sm btn-primary" onClick={this.addTxn}>ADD</button>
                </td>
            </tr>
        );
    }
}

export default TxnFormRow;