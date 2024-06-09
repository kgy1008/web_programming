const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars(count) {
    for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        const opacity = Math.random();
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
    }
}

function drawMoon() {
    const x = canvas.width * 0.75;
    const y = canvas.height * 0.25;
    const radius = 60;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 220, 100, 0.8)';
    ctx.fill();

    // Add moon glow
    ctx.shadowBlur = 100;
    ctx.shadowColor = 'rgba(255, 220, 100, 0.5)';
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStars(200);
    drawMoon();
    requestAnimationFrame(animate);
}

animate();
