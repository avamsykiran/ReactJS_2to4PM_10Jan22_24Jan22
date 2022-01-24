
import { ADD_TXN, DEL_TXN, UPD_TXN, MARK_EDIT_TXN, UNMARK_EDIT_TXN } from './actions'

const initialState = () => ({
    txns: [
        { id: 1, header: "Salary", amount: 67000, type: "CREDIT" },
        { id: 2, header: "House Rent", amount: 7000, type: "DEBIT" },
        { id: 3, header: "SB Interest", amount: 4000, type: "CREDIT" },
        { id: 4, header: "Car Fuel", amount: 4000, type: "DEBIT" },
        { id: 5, header: "Mobile and Internet", amount: 3000, type: "DEBIT" }
    ],
    totalDebit: 71000,
    totalCredit: 14000,
    balance: 57000
});

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

const txnReducer = (state = initialState(), action) => {
    let txns;

    switch (action.type) {
        case ADD_TXN: txns = [...state.txns, action.txn]; break;
        case UPD_TXN: txns = state.txns.map(t => t.id == action.txn.id ? { ...action.txn,isEditing:undefined } : t); break;
        case DEL_TXN: txns = state.txns.filter(t => t.id != action.id); break;
        case MARK_EDIT_TXN: state.txns.map(t => t.id == action.id ? { ...t,isEditing:true } : t); break;
        case UNMARK_EDIT_TXN: state.txns.map(t => t.id == action.id ? { ...t,isEditing:undefined } : t); break;
        default: txns = [...state.txns]; break;
    }

    let totalCredit = sumOfAll(txns, "CREDIT");
    let totalDebit = sumOfAll(txns, "DEBIT");
    let balance = totalCredit - totalDebit;

    return { txns, totalCredit, totalDebit, balance };
};

export default txnReducer;