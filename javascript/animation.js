function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => el.style.opacity = 1);
}