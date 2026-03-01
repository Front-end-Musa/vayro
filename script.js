document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);

        if (themeToggleIcon) {
            themeToggleIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
        }

        if (themeToggle) {
            themeToggle.setAttribute(
                'aria-label',
                theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            );
        }
    }

    applyTheme(initialTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

            applyTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    const burgerMenu = document.getElementById('burger-menu');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const navList = document.querySelector('.nav-list');
    const burgerBar = document.querySelectorAll('.burger-bar');

    if (burgerMenu && menuWrapper && navList) {
        burgerMenu.addEventListener('click', function () {
            burgerMenu.classList.toggle('burger-open');
            menuWrapper.classList.toggle('menu-open');
            burgerBar.forEach(bar => bar.classList.toggle('active'));
        });

        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                menuWrapper.classList.remove('menu-open');
                burgerMenu.classList.remove('burger-open');
                burgerBar.forEach(bar => bar.classList.remove('active'));
            });
        });
    }

    const nameElements = document.querySelectorAll('#name');
    const name = 'VAYRO';
    nameElements.forEach(nameEl => {
        nameEl.textContent = name;
    });
});
