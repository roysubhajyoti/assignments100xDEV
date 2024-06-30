/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
        {
		id: 2,
		timestamp: 1656076800100,
		price: 20,
		category: 'Food',
		itemName: 'Korean snow chicken',
	}
  Output - [{ category: 'Food', totalSpent: 30 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let newMap={};
  transactions.forEach(transactions => {
    let {catagoty,price}=transactions;
    if(!newMap[catagoty]){
      newMap[catagoty]=0;
    }else{
      newMap[catagoty] +=price;
    }

    
  });
  let result = Object.keys(newMap).map(catagoty=>{
      catagoty,
      newMap[catagoty];
  })
  // return []
  return result;
}

module.exports = calculateTotalSpentByCategory;
