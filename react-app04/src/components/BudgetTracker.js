import { useState } from "react";
import TxnFormRow from "./TxnFormRow";
import TxnRow from "./TxnRow";
import TxnSummary from "./TxnSummary";

const BudgetTracker = () => {

    let [txns, setTxns] = useState([
        { id: 1, header: "Salary", amount: 67000, type: "CREDIT" },
        { id: 2, header: "House Rent", amount: 7000, type: "DEBIT" },
        { id: 3, header: "SB Interest", amount: 4000, type: "CREDIT" },
        { id: 4, header: "Car Fuel", amount: 4000, type: "DEBIT" },
        { id: 5, header: "Mobile and Internet", amount: 3000, type: "DEBIT" }
    ]);

    const delTxn = txnId => {
        if (window.confirm(`Are you sure of deleting txn#${txnId} ?`)) {
            setTxns(txns.filter(t => t.id !== txnId));
        }
    }

    const addTxn = txn => setTxns([...txns, txn]);

    const editTxn = txn => setTxns(txns.map(t => t.id === txn.id ? { ...txn, isEditing: undefined } : t));

    const markEditable = id => setTxns(txns.map(t => t.id === id ? { ...t, isEditing: true } : t));

    const unMarkEditable = id => setTxns(txns.map(t => t.id === id ? { ...t, isEditing: undefined } : t));

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
                    <TxnFormRow isNew={true} addTxn={addTxn} />
                    {
                        txns.map(
                            txn => (txn.isEditing ?
                                <TxnFormRow key={txn.id} isNew={false} txn={txn}
                                    editTxn={editTxn} unMarkEditable={unMarkEditable} /> :
                                <TxnRow key={txn.id} txn={txn} 
                                    delTxn={delTxn} markEditable={markEditable} />
                            )
                        )
                    }
                </tbody>
                <TxnSummary txns={txns} />
            </table>
        </section>
    );
}


export default BudgetTracker;