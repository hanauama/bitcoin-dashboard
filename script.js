
const forecastData = [
  { month: "Lipiec", low: 125000, base: 138000, high: 150000 },
  { month: "Sierpień", low: 130000, base: 145000, high: 165000 },
  { month: "Wrzesień", low: 135000, base: 150000, high: 170000 },
  { month: "Październik", low: 138000, base: 155000, high: 175000 },
  { month: "Listopad", low: 140000, base: 160000, high: 185000 },
  { month: "Grudzień", low: 145000, base: 165000, high: 200000 },
];

async function fetchPrice() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await res.json();
    const price = data.bitcoin.usd;
    document.getElementById('price').innerHTML = `💰 Aktualna cena BTC: <strong>$${price.toLocaleString()}</strong>`;
    updateAlerts(price);
  } catch (e) {
    document.getElementById('price').innerHTML = "Błąd pobierania ceny";
  }
}

function updateAlerts(price) {
  const alerts = [];
  if (price >= 145000) alerts.push("BTC przekroczył 145 000 USD!");
  if (price >= 175000) alerts.push("BTC zbliża się do scenariusza optymistycznego!");
  if (price <= 125000) alerts.push("BTC blisko dolnego zakresu scenariusza negatywnego.");
  if (alerts.length === 0) alerts.push("Brak alertów.");
  document.getElementById('alerts').innerHTML = '<h2>🔔 Alerty</h2><ul>' + alerts.map(a => `<li>${a}</li>`).join('') + '</ul>';
}

function renderForecastChart() {
  const ctx = document.getElementById('forecastChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: forecastData.map(d => d.month),
      datasets: [
        { label: 'Negatywny', data: forecastData.map(d => d.low), borderColor: '#f87171', fill: false },
        { label: 'Bazowy', data: forecastData.map(d => d.base), borderColor: '#60a5fa', fill: false },
        { label: 'Optymistyczny', data: forecastData.map(d => d.high), borderColor: '#34d399', fill: false },
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        y: {
          ticks: {
            callback: value => `$${(value/1000).toFixed(0)}k`
          }
        }
      }
    }
  });
}

window.onload = () => {
  fetchPrice();
  renderForecastChart();
  setInterval(fetchPrice, 60000);
};
