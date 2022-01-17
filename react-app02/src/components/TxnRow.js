const TxnRow = props => (
    <tr>
        <td className="text-end">{props.txn.id}</td>
        <td>{props.txn.header}</td>
        <td className="text-end">{props.txn.type==="CREDIT"?props.txn.amount:undefined}</td>
        <td className="text-end">{props.txn.type==="DEBIT"?props.txn.amount:undefined}</td>
        <td>
         <button type="button" className="btn btn-sm btn-secondary">EDIT</button>
         <button type="button" className="btn btn-sm btn-danger"
            onClick={e => props.delTxn(props.txn.id) }>DELETE</button>
        </td>
    </tr>
);

export default TxnRow;