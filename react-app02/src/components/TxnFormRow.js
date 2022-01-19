import { Component } from 'react';

class TxnFormRow extends Component {

    constructor(props) {
        super(props);

        if (props.isNew) {
            this.state = {
                id: 0,
                header: '',
                amount: 0,
                type: ''
            };
        }
        else {
            this.state = { ...props.txn };
        }
    }

    updateValue = e => {

        let { name, value } = e.target;

        switch (name) {
            case 'id': this.setState({ id: parseInt(value) }); break;
            case 'header': this.setState({ header: value }); break;
            case 'creditAmount': this.setState({ amount: parseInt(value) }); break;
            case 'debitAmount': this.setState({ amount: parseInt(value) }); break;
        }
    }

    updateType = e => {
        this.setState({ type: e.target.name === "creditAmount" ? "CREDIT" : "DEBIT" });
    }

    saveTxn = e => {
        let txn = { ...this.state };

        //validation code can go here.......

        if(this.props.isNew){
            this.props.addTxn(txn);
            this.setState({ id: 0, header: '', amount: 0, type: '' });
        }else{
            this.props.editTxn(txn);
        }
    }

    render() {
        let txn = this.state;
        return (
            <tr>
                <td>
                    <input type="number" value={txn.id} name="id"
                        onChange={this.updateValue} readOnly={!this.props.isNew} />
                </td>
                <td>
                    <input type="text" value={txn.header} name="header" onChange={this.updateValue} />
                </td>
                <td>
                    <input type="number" value={txn.type === "CREDIT" ? txn.amount : 0} name="creditAmount"
                        readOnly={txn.type !== "CREDIT"} onFocus={this.updateType} onChange={this.updateValue} />
                </td>
                <td>
                    <input type="number" value={txn.type === "DEBIT" ? txn.amount : 0} name="debitAmount"
                        readOnly={txn.type !== "DEBIT"} onFocus={this.updateType} onChange={this.updateValue} />
                </td>

                {this.props.isNew ?
                    <td>
                        <button className="btn btn-sm btn-primary" onClick={this.saveTxn}>ADD</button>
                    </td> :
                    <td>
                        <button className="btn btn-sm btn-secondary" onClick={this.saveTxn}>SAVE</button>
                        <button className="btn btn-sm btn-danger" 
                            onClick={e => this.props.unMarkEditable(txn.id)}>CANCEL</button>
                    </td>
                }

            </tr>
        );
    }
}

export default TxnFormRow;