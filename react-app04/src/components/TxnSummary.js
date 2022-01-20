
const sumOfAll = (txns, type) => {
    let sum = 0;
    if (txns && txns.length > 0) {
        let filteredTxns = txns.filter(t => t.type === type);
        if (filteredTxns && filteredTxns.length > 0) {
            sum = filteredTxns.map(t => t.amount).reduce((a1, a2) => a1 + a2);
        }
    }
    return sum;
};

const TxnSummary = ({txns}) => {

    let totalCredit = sumOfAll(txns, "CREDIT");
    let totalDebit = sumOfAll(txns, "DEBIT");

    return (
        <tfoot>
            <tr>
                <th colSpan="2">Total</th>
                <th className="text-end">{totalCredit}</th>
                <th className="text-end">{totalDebit}</th>
                <th></th>
            </tr>
            <tr>
                <th colSpan="3">Balance</th>
                <th className="text-end">{totalCredit - totalDebit}</th>
                <th></th>
            </tr>
        </tfoot>
    );
};

export default TxnSummary;