document.getElementById('no').addEventListener('mouseover', function(event) {
    const x = Math.random() * 300 - 50;
    const y = Math.random() * 300 - 50;
    event.target.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById('yes-1').addEventListener('click', function() {
    window.open('ura.html', '_blank');
});