const forecastData = [
  { date: "2025-07-15", price: 60750 },
  { date: "2025-07-31", price: 61200 },
  { date: "2025-08-15", price: 61800 },
  { date: "2025-08-31", price: 63000 },
  { date: "2025-09-15", price: 64150 },
  { date: "2025-09-30", price: 65300 },
  { date: "2025-10-15", price: 66500 },
  { date: "2025-10-31", price: 67600 },
  { date: "2025-11-15", price: 68450 },
  { date: "2025-11-30", price: 69200 },
  { date: "2025-12-15", price: 70500 },
  { date: "2025-12-31", price: 71800 }
];

const ctx = document.getElementById('btcChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: forecastData.map(point => point.date),
    datasets: [{
      label: 'Prognozowana cena BTC (USD)',
      data: forecastData.map(point => point.price),
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: function(context) {
            return 'Data: ' + context[0].label;
          },
          label: function(context) {
            return 'Cena: $' + context.formattedValue;
          }
        }
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Data'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Cena w USD'
        }
      }
    }
  }
});
