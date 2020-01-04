var message = document.querySelector('.user-message');
var submit = document.querySelector('#message-user');
var userInput = document.querySelector('.user-search');
var messageBox = document.querySelector(".grid-select");
var searchContainer = document.querySelector(".search-container");
var messageAgain = document.querySelector('#message-again');
var confirmation1 = document.querySelector('.confirmation-1');
var confirmation2 = document.querySelector('.confirmation-2');
var userMessage1 = document.querySelector('.userMessage1');






submit.addEventListener('click', function(event){
  event.preventDefault()
  searchContainer.style.display = "none";
  userInput.style.display = "none";
  message.style.display = "none";
  submit.style.display = "none";
  confirmation1.style.display = "block";
  confirmation1.style.display = "block";
  messageAgain.style.display = "block";
  createAlert('Victoria accepted your friend request.', 'NEW');


})

messageAgain.addEventListener('click', function(){
  searchContainer.style.display = "block";
  userInput.style.display = "block";
  message.style.display = "block";
  confirmation1.style.display = "none";
  confirmation1.style.display = "none";
  messageAgain.style.display = "none";
})
