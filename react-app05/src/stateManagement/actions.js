
  export const ADD_TXN = 'add txn';
  export const UPD_TXN = 'update txn';
  export const DEL_TXN = 'del txn';
  export const MARK_EDIT_TXN = 'mark edit txn';
  export const UNMARK_EDIT_TXN = 'unmark edit txn';
  
  export const createAddTxnAction = txn => ({type:ADD_TXN,txn});
  export const createUpdTxnAction = txn => ({type:UPD_TXN,txn});
  export const createDelTxnAction = id => ({type:DEL_TXN,id});
  export const createMarkEditTxnAction = id => ({type:MARK_EDIT_TXN,id});
  export const createUnMarkEditTxnAction = id => ({type:UNMARK_EDIT_TXN,id});

