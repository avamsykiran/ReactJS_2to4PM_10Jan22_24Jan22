import { Component } from "react";
import TxnFormRow from "./TxnFormRow";
import TxnRow from "./TxnRow";
import TxnSummary from "./TxnSummary";

class BudgetTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txns: [
                { id: 1, header: "Salary", amount: 67000, type: "CREDIT" },
                { id: 2, header: "House Rent", amount: 7000, type: "DEBIT" },
                { id: 3, header: "SB Interest", amount: 4000, type: "CREDIT" },
                { id: 4, header: "Car Fuel", amount: 4000, type: "DEBIT" },
                { id: 5, header: "Mobile and Internet", amount: 3000, type: "DEBIT" }
            ]
        };
    }

    delTxn = txnId => {
        if (window.confirm(`Are you sure of deleting txn#${txnId} ?`)) {
            this.setState({ txns: this.state.txns.filter(t => t.id !== txnId) });
        }
    }

    addTxn = txn => {
        this.setState({ txns: [...this.state.txns, txn] });
    }

    editTxn= txn => {
        this.setState({txns:this.state.txns.map(t => t.id===txn.id?{...txn,isEditing:undefined}:t)});
    }

    markEditable = id => {
        this.setState({txns:this.state.txns.map(t => t.id===id?{...t,isEditing:true}:t)});
    }

    unMarkEditable = id => {
        this.setState({txns:this.state.txns.map(t => t.id===id?{...t,isEditing:undefined}:t)});
    }

    render() {
        return (
            <section className="container-fluid p-4">
                <table className="table table-bordered table-stripped ">
                    <thead>
                        <th>Txn#</th>
                        <th>Header</th>
                        <th>Credit</th>
                        <th>Debit</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <TxnFormRow isNew={true} addTxn={this.addTxn} />
                        {
                            this.state.txns.map(
                                txn => (txn.isEditing ?
                                    <TxnFormRow key={txn.id} isNew={false} txn={txn} 
                                        editTxn={this.editTxn} unMarkEditable={this.unMarkEditable} /> :
                                    <TxnRow key={txn.id} txn={txn} delTxn={this.delTxn} markEditable={this.markEditable} />
                                )
                            )
                        }
                    </tbody>
                    <TxnSummary txns={this.state.txns} />
                </table>
            </section>
        );
    }
}

export default BudgetTracker;