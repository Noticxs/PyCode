document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  const getStartedButton = document.getElementById('get-started');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle dark/light mode
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeIcon.textContent = body.classList.contains('dark-mode') ? '🌙' : '🌞';
  });

  // Scroll to the "Our Aim" section
  getStartedButton.addEventListener('click', () => {
    document.querySelector('.our-aim').scrollIntoView({ behavior: 'smooth' });
  });

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Close the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove('active');
    }
  });

  // Render graph
  const ctx = document.getElementById('customer-graph').getContext('2d');
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Customer Growth',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
});
