import axios from 'axios';
import { createErrAction, createWaitAction, createSetDataAction } from './actions';

const txnsEndPoint = "http://localhost:9999/txns";

const loadData = () => dispatch => {
    dispatch(createWaitAction());
    axios.get(txnsEndPoint).then(
        resp => dispatch(createSetDataAction(resp.data)),
        err => { console.log(err); dispatch(createErrAction("unable to fetech data")); }
    );
};

const addTxn = txn => dispatch => {
    dispatch(createWaitAction());
    axios.post(txnsEndPoint, txn).then(
        resp => loadData()(dispatch),
        err => { console.log(err); dispatch(createErrAction("unable to add data")); }
    );
};

const updateTxn = txn => dispatch => {
    dispatch(createWaitAction());
    axios.put(`${txnsEndPoint}/${txn.id}`, txn).then(
        resp => loadData()(dispatch),
        err => { console.log(err); dispatch(createErrAction("unable to update data")); }
    );
};

const deleteTxn = id => dispatch => {
    dispatch(createWaitAction());
    axios.delete(`${txnsEndPoint}/${id}`).then(
        resp => loadData()(dispatch),
        err => { console.log(err); dispatch(createErrAction("unable to delete data")); }
    );
};

const txnThunks = { loadData, addTxn, updateTxn, deleteTxn };

export default txnThunks;