const switchClass = document.querySelector('.custom-switch-class');
const matUISwitch = document.querySelector('.MuiSwitch-root');

matUISwitch.addEventListener('click', function () {
  if (matUISwitch.classList.contains('Mui-checked')) {
    switchClass.classList.add('dark-mode');
    console.log('mode sombre ajoutez');
  } else {
    switchClass.classList.remove('dark-mode');
    console.log('mode sombre remove');
  }
});
