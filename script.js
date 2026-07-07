// Finance Chart Example
const ctx = document.getElementById('financeChart').getContext('2d');
const financeChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Income', 'Expenses', 'Savings'],
    datasets: [{
      data: [12500, 8200, 4300],
      backgroundColor: ['#38bdf8', '#ef4444', '#22c55e']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Example refresh button
document.getElementById('refresh').addEventListener('click', () => {
  alert("Finance data refreshed!");
});
