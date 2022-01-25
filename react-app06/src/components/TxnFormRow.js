import { useState } from 'react';
import { connect } from 'react-redux';
import { createUnMarkEditTxnAction} from '../stateManagement/actions';
import txnThunks from '../stateManagement/txnThunks';

const TxnFormRow = ({ isNew, txn, addTxn, editTxn, unMarkEditable }) => {

    let [id, setId] = useState(isNew ? 0 : txn.id);
    let [header, setHeader] = useState(isNew ? '' : txn.header);
    let [amount, setAmount] = useState(isNew ? 0 : txn.amount);
    let [type, setType] = useState(isNew ? '' : txn.type);

    const updateValue = e => {

        let { name, value } = e.target;

        switch (name) {
            case 'id': setId(parseInt(value)); break;
            case 'header': setHeader(value); break;
            case 'creditAmount': setAmount(parseInt(value)); break;
            case 'debitAmount': setAmount(parseInt(value)); break;
        }
    }

    const updateType = e => {
        setType(e.target.name === "creditAmount" ? "CREDIT" : "DEBIT");
    }

    const saveTxn = e => {
        let txn = { id, header, amount, type };

        //validation code can go here.......

        if (isNew) {
            addTxn(txn);
            setId(0);
            setHeader('');
            setAmount(0);
            setType('');
        } else {
            editTxn(txn);
        }
    }

    return (
        <tr>
            <td>
                <input type="number" value={id} name="id"
                    onChange={updateValue} readOnly={!isNew} />
            </td>
            <td>
                <input type="text" value={header} name="header" onChange={updateValue} />
            </td>
            <td>
                <input type="number" value={type === "CREDIT" ? amount : 0} name="creditAmount"
                    readOnly={type !== "CREDIT"} onFocus={updateType} onChange={updateValue} />
            </td>
            <td>
                <input type="number" value={type === "DEBIT" ? amount : 0} name="debitAmount"
                    readOnly={type !== "DEBIT"} onFocus={updateType} onChange={updateValue} />
            </td>

            {isNew ?
                <td>
                    <button className="btn btn-sm btn-primary" onClick={saveTxn}>ADD</button>
                </td> :
                <td>
                    <button className="btn btn-sm btn-secondary" onClick={saveTxn}>SAVE</button>
                    <button className="btn btn-sm btn-danger"
                        onClick={e => unMarkEditable(id)}>CANCEL</button>
                </td>
            }

        </tr>
    );
}

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
    addTxn: txn => dispatch(txnThunks.addTxn(txn)),
    editTxn: txn => dispatch(txnThunks.updateTxn(txn)),
    unMarkEditable: id => dispatch(createUnMarkEditTxnAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TxnFormRow);