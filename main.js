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
