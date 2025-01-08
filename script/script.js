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
  const setDarkMode = () => {
    body.classList.add('dark-mode');
    light.style.display = 'none';
    dark.style.display = 'block';
    localStorage.setItem('theme', 'dark')
  }

  const setLightMode = () => {
    body.classList.remove('dark-mode');
    light.style.display = 'block';
    dark.style.display = 'none';
    localStorage.setItem('theme', 'light')
  }

  const toggleMode = (mode) => {
    mode === 'dark' ? setDarkMode() : setLightMode();
  };

  const toggleMenu = () => {
    menu.classList.toggle('show-menu');
  }

  // This function stores and retrieves
  // user's previous selected theme.
  function applySavedMode() {
    const savedTheme = localStorage.getItem('theme');
    savedTheme === 'dark' ? toggleMode('dark') : toggleMode('light');
  }

  light.addEventListener('click', () => toggleMode('dark'));
  dark.addEventListener('click', () => toggleMode('light'));

  sort.addEventListener('click', () => toggleMenu());

  applySavedMode();
  setLoadEffect();
});
