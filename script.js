const stickyBar = document.getElementById('bar');

window.addEventListener('scroll', () => {

  const barPosition = stickyBar.getBoundingClientRect().top;
  
  if (barPosition <= 0) {
    stickyBar.classList.add('scrolled');
  } else {
    stickyBar.classList.remove('scrolled'); 
  }
});