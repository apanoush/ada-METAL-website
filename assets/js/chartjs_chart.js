// assets/js/chartjs_chart.js

window.onload = function() {
    var ctx = document.getElementById('chartjs-chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
          borderColor: ['darkred', 'darkblue', 'darkyellow', 'darkgreen', 'darkpurple', 'darkorange'],
          borderWidth: 1
        }]
      }
    });
  };
  