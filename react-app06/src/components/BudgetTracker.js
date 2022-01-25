import { connect } from "react-redux";
import { useEffect } from 'react';
import TxnFormRow from "./TxnFormRow";
import TxnRow from "./TxnRow";
import TxnSummary from "./TxnSummary";
import txnThunks from '../stateManagement/txnThunks';

const BudgetTracker = ({ txns, shallWait, errMsg, loadData }) => {

    useEffect(loadData, []);

    return (
        <section className="container-fluid p-4">

            {shallWait && (
                <div className="alert alert-info p-2">
                    <strong>Please wait executing the requested operation....</strong>
                </div>
            )}

            {errMsg && (
                <div className="alert alert-danger p-2">
                    <strong>{errMsg}</strong>
                </div>
            )}

            <table className="table table-bordered table-stripped ">
                <thead>
                    <tr>
                        <th>Txn#</th>
                        <th>Header</th>
                        <th>Credit</th>
                        <th>Debit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TxnFormRow isNew={true} />
                    {
                        (txns && txns.length>0) && txns.map(
                            txn => (txn.isEditing ?
                                <TxnFormRow key={txn.id} isNew={false} txn={txn} /> :
                                <TxnRow key={txn.id} txn={txn} />
                            )
                        )
                    }
                </tbody>
                <TxnSummary />
            </table>
        </section>
    );
};

const mapStateToProps = globalState => ({ 
    txns: globalState.txns,
    shallWait:globalState.shallWait,
    errMsg:globalState.errMsg    
});

const mapDispatchToProps = disptach => ({
    loadData : () => disptach(txnThunks.loadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(BudgetTracker);