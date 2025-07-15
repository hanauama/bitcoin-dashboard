
const forecastData = [
  {
    "date": "2025-07-15",
    "price": 68657.88
  },
  {
    "date": "2025-07-31",
    "price": 68692.1
  },
  {
    "date": "2025-08-15",
    "price": 67399.14
  },
  {
    "date": "2025-08-31",
    "price": 60305.76
  },
  {
    "date": "2025-09-15",
    "price": 69343.13
  },
  {
    "date": "2025-09-30",
    "price": 64154.96
  },
  {
    "date": "2025-10-15",
    "price": 70666.23
  },
  {
    "date": "2025-10-31",
    "price": 60572.73
  },
  {
    "date": "2025-11-15",
    "price": 61499.17
  },
  {
    "date": "2025-11-30",
    "price": 63359.29
  },
  {
    "date": "2025-12-15",
    "price": 63822.88
  },
  {
    "date": "2025-12-31",
    "price": 71403.88
  }
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
            },
            legend: {
                display: true
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
