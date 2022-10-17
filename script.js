const {dataStore} = require("./txn")
//console.log(dataStore);

//get all transactions
function getAllTransactions () {
   return dataStore
}


// Add a new transaction
function addNewTransactions (trans) {
   return dataStore.push(trans)
}


// Update an existing Transaction
function updateTransaction (position, trans) {
    return {...dataStore[position], trans}  
}
//const a = updateTransaction(0, 'key: 6')
//console.log(a);


//delete a transaction
function deleteTrans (trans) {
  return dataStore.filter((cur, i) => i !== trans)
}


//get transaction by ID
function getTranctionsID (trans) {
   return dataStore.trans;
}


//get transaction by type
function getTransactionType (trans) {
if (trans === 'DEPOSIT') return dataStore.filter(cur => cur.TransactionType === trans);
if(trans === 'WITHDRAWAL') return dataStore.filter(cur => cur.TransactionType === trans);
}
//console.log(getTransactionType('DEPOSIT'));



