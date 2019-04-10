// The "key" (representing a property or method name) and its "value" are separated from each other by a colon
// The key: value pairs are separated from each other by commas
// The entire object is wrapped inside curly braces { }.

var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};
// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

// printing message to object that returns total balnace plus interest rate
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

// Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 
// your code goes here
var facebookProfile = {
  name: "Xavier Carty",
  friends: 927,
  messages: ["In Buenos Aires!", "In Stockholm!", "In New York!"],
  postMessage(message) {
    facebookProfile.messages.push(message); 
  }, 
  deleteMessage(index) {
    facebookProfile.messages.splice(index,1);  
  }, 
  addFriend() {
    facebookProfile.friends += 1; 
  },
  removeFriend() {
   facebookProfile.friends = facebookProfile.friends -1; 
  }, 
}; 

facebookProfile.removeFriend();
facebookProfile.friends;