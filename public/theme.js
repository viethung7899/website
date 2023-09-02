let theme = 'system';
if (typeof localStorage !== 'undefined') {
  const localTheme = localStorage.getItem('theme');
  if (localTheme === 'light') theme = 'light';
  if (localTheme === 'dark') theme = 'dark';
  if (theme === 'system') localStorage.removeItem('theme');
}

const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (
  theme === 'dark' ||
  (theme === 'system' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

darkQuery.addEventListener('change', (e) => {
  if ('theme' in localStorage) return;
  if (e.matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
