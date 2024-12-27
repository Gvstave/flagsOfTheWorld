document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
const stickyBar = document.getElementById('bar');
const light = document.getElementById('light');
const dark = document.getElementById('dark');

window.addEventListener('scroll', () => {

  const barPosition = stickyBar.getBoundingClientRect().top;
  
  if (barPosition <= 0) {
    stickyBar.classList.add('scrolled');
  } else {
    stickyBar.classList.remove('scrolled'); 
  }
});

const toggleMode = (mode) => {
  if (mode === 'dark') {
    body.classList.add('dark-mode');
    light.style.display = 'none';
    dark.style.display = 'block';
  } else {
    body.classList.remove('dark-mode');
    light.style.display = 'block';
    dark.style.display = 'none';
  }
};

light.addEventListener('click', () => toggleMode('dark'));
dark.addEventListener('click', () => toggleMode('light'));

})