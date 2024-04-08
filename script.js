// var istatus = document.querySelectorAll("h5");
// var addFriend = document.querySelectorAll(".add");
// var removeFriend = document.querySelectorAll(".remove");

// //to addd friend
// addFriend.addEventListener("click", function() {
//   istatus.innerHTML = "Friends";
//   istatus.style.color = "green";
//   istatus.style.backgroundColor="rgb(70, 177, 255)";
// })

// // to removeFriend

// removeFriend.addEventListener("click", function() {
//   istatus.innerHTML = "Stranger";
//   istatus.style.color = "red";
//   istatus.style.backgroundColor="rgb(201, 228, 253)";

// })
var istatuses = document.querySelectorAll("h5");
var addFriends = document.querySelectorAll(".add");
var removeFriends = document.querySelectorAll(".remove");

// Function to update status to 'Friends'
function addFriendStatus(istatus) {
  istatus.innerHTML = "Friends";
  istatus.style.color = "green";
  istatus.style.backgroundColor = "rgb(70, 177, 255)";
}

// Function to update status to 'Stranger'
function removeFriendStatus(istatus) {
  istatus.innerHTML = "Stranger";
  istatus.style.color = "red";
  istatus.style.backgroundColor = "rgb(201, 228, 253)";
}

// Loop through all '.add' buttons
addFriends.forEach(function(addFriend, index) {
  addFriend.addEventListener("click", function() {
    addFriendStatus(istatuses[index]);
  });
});

// Loop through all '.remove' buttons
removeFriends.forEach(function(removeFriend, index) {
  removeFriend.addEventListener("click", function() {
    removeFriendStatus(istatuses[index]);
  });
});

