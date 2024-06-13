document.addEventListener('DOMContentLoaded', (event) => {

    const toggleDarkMode = document.getElementById('toggle-dark-mode');
    
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleDarkMode.checked = true;
    }

    toggleDarkMode.addEventListener('change', () => {
        if (toggleDarkMode.checked) {
            document.body.classList.add('dark-mode');
            document.querySelector('.container').classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('.container').classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});