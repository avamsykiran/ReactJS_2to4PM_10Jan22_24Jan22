import axios from 'axios';
import { createErrAction,createWaitAction,createSetDataAction} from './actions';

const txnsEndPoint = "http://localhost:9999/txns";

const txnThunks = {
    loadData: () => dispatch => {
        dispatch(createWaitAction());
        axios.get(txnsEndPoint).then(
            txns => dispatch(createSetDataAction(txns)),
            err => {console.log(err); dispatch(createErrAction("unable to fetech data")); }
        );
    },

    addTxn: txn => dispatch => {
        dispatch(createWaitAction());
        axios.post(txnsEndPoint,txn).then(
            txn => loadData()(dispatch),
            err => {console.log(err); dispatch(createErrAction("unable to add data")); }
        );
    },

    updateTxn: txn => dispatch => {
        dispatch(createWaitAction());
        axios.put(`${txnsEndPoint}/${txn.id}`,txn).then(
            txn => loadData()(dispatch),
            err => {console.log(err); dispatch(createErrAction("unable to update data")); }
        );
    },

    deleteTxn: id => dispatch => {
        dispatch(createWaitAction());
        axios.delete(`${txnsEndPoint}/${id}`).then(
            txn => loadData()(dispatch),
            err => {console.log(err); dispatch(createErrAction("unable to delete data")); }
        );
    }
};

export default txnThunks;