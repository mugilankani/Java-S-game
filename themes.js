const themes = document.querySelectorAll('.theme');

themes.forEach(theme => {
    theme.addEventListener('click', function() {
        const selectedTheme = this.src;

        localStorage.setItem('selectedTheme', selectedTheme);

        window.location.href = 'game.html';
    });
});