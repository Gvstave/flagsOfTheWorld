document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  const stickyBar = document.getElementById('bar');

  const light = document.getElementById('light');
  const dark = document.getElementById('dark');

  const sort = document.getElementById('sort');
  const menu = document.getElementById('menu');

  const loading = document.getElementById('loading');

  window.addEventListener('scroll', () => {
    const barPosition = stickyBar.getBoundingClientRect().top;
    barPosition <= 0 ? stickyBar.classList.add('scrolled') : stickyBar.classList.remove('scrolled');
  });

  const setLoadEffect = () => {
    setTimeout(() => {
    loading.classList.add('hide-loading')
   }, 2000);
  }

  //Light and dark theme setup
  const setDark = () => {
    body.classList.add('dark-mode');
    light.style.display = 'none';
    dark.style.display = 'block';
  }

  const setLight = () => {
    body.classList.remove('dark-mode');
    light.style.display = 'block';
    dark.style.display = 'none';
  }

  const toggleMode = (mode) => {
    mode === 'dark' ? setDark() : setLight();
  };

  const toggleMenu = () => {
    menu.classList.toggle('show-menu');
  }

  light.addEventListener('click', () => toggleMode('dark'));
  dark.addEventListener('click', () => toggleMode('light'));

  sort.addEventListener('click', () => toggleMenu());
  setLoadEffect();
});
