const forecastDates = [
  "2025-07-15", "2025-07-31",
  "2025-08-15", "2025-08-31",
  "2025-09-15", "2025-09-30",
  "2025-10-15", "2025-10-31",
  "2025-11-15", "2025-11-30",
  "2025-12-15", "2025-12-31"
];

// Prognozy w USD (start około 117000 USD na 15 lipca)
const baseScenario = [117000, 118500, 125000, 127500, 135000, 137000, 150000, 155000, 170000, 175000, 190000, 200000];
const pessimisticScenario = [117000, 116000, 110000, 108000, 105000, 102000, 100000, 98000, 95000, 92000, 90000, 85000];
const optimisticScenario = [117000, 120000, 130000, 135000, 150000, 160000, 180000, 190000, 210000, 220000, 240000, 260000];

const ctx = document.getElementById('btcChart').getContext('2d');

const btcChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: forecastDates,
    datasets: [
      {
        label: 'Scenariusz bazowy',
        data: baseScenario,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        tension: 0.3,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Scenariusz pesymistyczny',
        data: pessimisticScenario,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        tension: 0.3,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Scenariusz optymistyczny',
        data: optimisticScenario,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        tension: 0.3,
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 7,
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          title: ctx => {
            const dateStr = ctx[0].label;
            const date = new Date(dateStr);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return date.toLocaleDateString('pl-PL', options);
          },
          label: ctx => `Cena: $${ctx.formattedValue}`
        }
      },
      legend: {
        position: 'top',
        labels: { boxWidth: 15, padding: 15 }
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Data'
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Cena BTC (USD)'
        },
        beginAtZero: false
      }
    }
  }
});
