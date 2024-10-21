function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  
  // Call changeObject with the new theme to update the icon
  changeObject(newTheme);
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);

function changeObject(theme) {
  // Change the button icon based on the theme
  const icon = document.querySelector('.theme-toggle');
  
  if (theme === 'dark') {
    icon.innerHTML = '&#127769;'; // Moon emoji for dark theme
  } else {
    icon.innerHTML = '&#127775;'; // Sun emoji for light theme
  }
}
