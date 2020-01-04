const message = document.querySelector('.user-message');
const submit = document.querySelector('#message-user');
const userInput = document.querySelector('.user-search');
const messageBox = document.querySelector(".grid-select");
const searchContainer = document.querySelector(".search-container");
const messageAgain = document.querySelector('#message-again');
const confirmation1 = document.querySelector('.confirmation-1');
const confirmation2 = document.querySelector('.confirmation-2');




submit.addEventListener('click', function(){
  searchContainer.style.display = "none";
  userInput.style.display = "none";
  message.style.display = "none";
  submit.style.display = "none";
  confirmation1.style.display = "block";
  confirmation1.style.display = "block";
  messageAgain.style.display = "block";

})

message.addEventListener('click', function(){
  searchContainer.style.display = "block";
  userInput.style.display = "block";
  message.style.display = "block";
  confirmation1.style.display = "none";
  confirmation1.style.display = "none";
  messageAgain.style.display = "none";
})











  //   if (userInput.value ='') {
  //     alert('Please select the user you want to message.');
  //   } else if (message.value = '') {
  //     alert('Please enter a message');
  //   } else {
  //     alert('Please enter a message');
  //   }
  // });











  //   if (userInput.value ='') {
  //     alert('Please select the user you want to message.');
  //   } else if (message.value = '') {
  //     alert('Please enter a message');
  //   } else {
  //     alert('Please enter a message');
  //   }
  // });
