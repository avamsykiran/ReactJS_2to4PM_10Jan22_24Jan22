
import { WAIT, ERR, SET_DATA, MARK_EDIT_TXN, UNMARK_EDIT_TXN } from './actions'

const initialState = () => ({
    txns: null,
    totalDebit: 0,
    totalCredit: 0,
    balance: 0,
    shallWait: false,
    errMsg: null
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
    let modifiedState;

    switch (action.type) {
        case SET_DATA:
            let txns = action.txns;
            let totalCredit = sumOfAll(txns, "CREDIT");
            let totalDebit = sumOfAll(txns, "DEBIT");
            let balance = totalCredit - totalDebit;

            modifiedState = { txns, totalCredit, totalDebit, balance, shallWait: false, errMsg: null };
            break;
        case WAIT:
            modifiedState = { ...state, shallWait: true, errMsg: null };
            break;
        case ERR:
            modifiedState = { ...state, shallWait: false, errMsg: action.errMsg };
            break;
        case MARK_EDIT_TXN:
            modifiedState = { ...state, txns: state.txns.map(t => t.id == action.id ? { ...t, isEditing: true } : t) };
            break;
        case UNMARK_EDIT_TXN:
            modifiedState = { ...state, txns: state.txns.map(t => t.id == action.id ? { ...t, isEditing: undefined } : t) };
            break;
        default:
            modifiedState = { ...state };
            break;
    }

    return modifiedState;
};

export default txnReducer;