document.getElementById('no').addEventListener('mouseover', function(event) {
    const x = Math.random() * 300 - 50;
    const y = Math.random() * 300 - 50;
    event.target.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById('yes').addEventListener('click', function() {
    window.open('kiss.html', '_blank');
});

