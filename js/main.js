document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  const getStartedButton = document.getElementById('get-started');

  // Toggle dark/light mode
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeIcon.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌞';
  });

  // Scroll to the "Our Aim" section
  getStartedButton.addEventListener('click', () => {
    document.querySelector('.our-aim').scrollIntoView({ behavior: 'smooth' });
  });

  // Render graph
  const ctx = document.getElementById('progress-graph').getContext('2d');
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Progress',
        data: [10, 90, 20, 60, 10],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
});