// theme-toggle.js

document.addEventListener('DOMContentLoaded', function() {
  
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }
  
  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the theme preference to localStorage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
  
});
