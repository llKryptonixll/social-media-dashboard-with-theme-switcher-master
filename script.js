const toggleButton = document.getElementById('toggle-switch');
toggleButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const root = document.documentElement;
  const isDarkMode = root.getAttribute('data-dark-mode') === 'true';
  root.setAttribute('data-dark-mode', !isDarkMode);
  localStorage.setItem('darkMode', !isDarkMode);
}

function updateToggleCheckedState(isDarkMode) {
  const checkbox = document.getElementById('checkbox');
  checkbox.checked = isDarkMode;
}

const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode !== null) {
  const root = document.documentElement;
  root.setAttribute('data-dark-mode', storedDarkMode);
  updateToggleCheckedState(storedDarkMode === 'true');
}