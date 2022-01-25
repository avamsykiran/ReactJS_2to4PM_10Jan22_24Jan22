
  export const WAIT = "wait";
  export const ERR = "error";
  export const SET_DATA = "set data";
  export const MARK_EDIT_TXN = 'mark edit txn';
  export const UNMARK_EDIT_TXN = 'unmark edit txn';
  
  export const createWaitAction = () => ({type:WAIT});
  export const createErrAction = errMsg => ({type:ERR,errMsg});
  export const createSetDataAction = txns => ({type:SET_DATA,txns});
  export const createMarkEditTxnAction = id => ({type:MARK_EDIT_TXN,id});
  export const createUnMarkEditTxnAction = id => ({type:UNMARK_EDIT_TXN,id});

