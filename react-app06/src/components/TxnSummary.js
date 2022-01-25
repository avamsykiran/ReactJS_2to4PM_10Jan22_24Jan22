import { connect } from 'react-redux';

const TxnSummary = ({ totalCredit, totalDebit, balance }) => (
    <tfoot>
        <tr>
            <th colSpan="2">Total</th>
            <th className="text-end">{totalCredit}</th>
            <th className="text-end">{totalDebit}</th>
            <th></th>
        </tr>
        <tr>
            <th colSpan="3">Balance</th>
            <th className="text-end">{balance}</th>
            <th></th>
        </tr>
    </tfoot>
);

const mapStateToProps = globalState => ({
    totalCredit:globalState.totalCredit, 
    totalDebit:globalState.totalDebit, 
    balance:globalState.balance
});

const mapDispatchToProps = undefined;

export default connect(mapStateToProps,mapDispatchToProps)(TxnSummary);