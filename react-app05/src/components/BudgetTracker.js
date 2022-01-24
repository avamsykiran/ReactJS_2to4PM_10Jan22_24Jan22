import { connect } from "react-redux";
import TxnFormRow from "./TxnFormRow";
import TxnRow from "./TxnRow";
import TxnSummary from "./TxnSummary";

const BudgetTracker = ({ txns }) => (
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
                <TxnFormRow isNew={true} />
                {
                    txns.map(
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

const mapStateToProps = globalState => ({txns:globalState.txns});

const mapDispatchToProps = undefined;

export default connect(mapStateToProps,mapDispatchToProps)(BudgetTracker);