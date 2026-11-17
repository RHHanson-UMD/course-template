'use strict';
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const theme = (() => { try { return localStorage.getItem('learning-lab-theme'); } catch { return null; } })();
if(theme === 'light' || theme === 'dark') root.dataset.theme = theme;
function syncTheme() {
  toggle.textContent = root.dataset.theme === 'dark' ? '\u263e' : '\u2600';
  toggle.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}
syncTheme();
toggle.addEventListener('click',()=>{
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('learning-lab-theme',root.dataset.theme); } catch {}
  syncTheme();
});
