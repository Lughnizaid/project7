// Notifications var
const notButton = document.querySelector(".bell");
const alert = document.querySelector(".alert");
var reviewalert = document.querySelector(".reviewalert");
const newalert = document.querySelector(".newalert");
const greenNot = document.querySelector(".new");
const nicecool = document.querySelector(".nicecool");


// Notifications var
const x = document.querySelector(".x-alert");
const y = document.querySelector(".x-new");
const z = document.querySelector(".x-review");


// Notification listener and one time only
notButton.addEventListener("click", function()
{
if (greenNot.style.display = "block") {
  reviewalert.style.display = "grid";
  newalert.style.display = "grid";
  greenNot.style.display = "none";
}
},{once : true});


// remove X listener
      x.addEventListener("click", function(){
        alert.style.display = "none";
      });

      y.addEventListener("click", function(){
        newalert.style.display = "none";
      });

      z.addEventListener("click", function(){
        reviewalert.style.display = "none";
      });

// notification not working after clicked
