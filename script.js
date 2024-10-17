document.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;

  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #cacaca, #ffcccb)`;
});

document.addEventListener('keydown', function() {
  const letter = document.getElementById('letter');

  letter.classList.add('grow');
  
  setTimeout(() => {
      letter.classList.remove('grow');
  }, 300);
});

