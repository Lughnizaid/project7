const areaLine = document.getElementById('lineChart').getContext('2d');
const fillPattern = areaLine.createLinearGradient(0,300,0,0);
  fillPattern.addColorStop(0,"rgba(216, 38, 38, 1)");
  fillPattern.addColorStop(0.5,"rgba(216, 38, 38, 0.2)");
  fillPattern.addColorStop(1,"rgba(76, 75, 112, 0.3)");
const lineChart = new Chart(areaLine, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: 'In thousands',
        backgroundColor: fillPattern,
        borderColor: '#555',
        data: [155, 2222, 513, 1789, 2456, 456, 1146, 250],
        fill: true,
        pointBorderWidth: 3,
        pointHoverBorderWidth: 4,
        pointRadius: 5,
        pointHoverRadius: 7,
        lineTension: 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#555',

      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      display: false
    }
  }
});



// Bar chart
const areaBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(areaBar, {
  type: 'bar',
  data: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'In thousands',
        backgroundColor: ['rgba(76,75,112, 0.8)', 'rgba(76,75,112, 0.7)', 'rgba(76,75,112, 0.8)', 'rgba(76,75,112, 0.7)', 'rgba(76,75,112, 0.8)', 'rgba(76,75,112, 0.7)', 'rgba(76,75,112, 0.8)'],
        borderColor: '#555',
        data: [24, 57,72, 74, 43, 25, 15],
        fill: true,
        lineTension: 0,


      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      display: false
    }
  }
});


// doughnut
const areaDoughnut = document.getElementById('doughnutChart');
const doughnutChart = new Chart(areaDoughnut, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Dekstop'],
    datasets: [
      {
        label: 'In Thousands',
        backgroundColor: ['#4577ba', '#92CCA1', '#7377ba'],
        borderColor: '#555',
        data: [65, 20, 15],
        fill: true,
        lineTension: 0,


      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'right',
      labels: {
          boxWidth: 15,
          padding:20

        }
    }
  }
});


// message
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



// menuconst menuIcon = document.querySelector(".menu-bar");
const ulBar = document.querySelector(".ul-bar");
const iconBar = document.querySelector(".icon-bar");
const niceBar = document.querySelector(".nice-try");
const cancelIcon = document.querySelector(".cancel-icon");



function myFunction() {
  document.getElementById("ulul").classList.toggle("ul-bar");
}


//
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
