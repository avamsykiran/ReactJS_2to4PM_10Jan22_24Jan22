import {connect} from 'react-redux';
import { createMarkEditTxnAction,createDelTxnAction} from '../stateManagement/actions';

const TxnRow = ({txn,markEditable,delTxn}) => (
    <tr>
        <td className="text-end">{txn.id}</td>
        <td>{txn.header}</td>
        <td className="text-end">{txn.type==="CREDIT"?txn.amount:undefined}</td>
        <td className="text-end">{txn.type==="DEBIT"?txn.amount:undefined}</td>
        <td>
         <button type="button" className="btn btn-sm btn-secondary"
            onClick={e => markEditable(txn.id)}> EDIT </button>
         <button type="button" className="btn btn-sm btn-danger"
            onClick={e => delTxn(txn.id) }> DELETE </button>
        </td>
    </tr>
);

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
    markEditable: id => dispatch(createMarkEditTxnAction(id)),
    delTxn: id => dispatch(createDelTxnAction(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(TxnRow);