window.createConfetti = function() {
    const confettiContainer = document.createElement('canvas');
    confettiContainer.id = 'confetti';
    document.body.appendChild(confettiContainer);
  
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const confettiPieces = [];
  
    function createConfettiPiece(x, y) {
      return {
        x,
        y,
        size: Math.random() * 5 + 1,
        xSpeed: Math.random() * 6 - 3,
        ySpeed: Math.random() * -3 - 3,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      };
    }
  
    for (let i = 0; i < 100; i++) {
      confettiPieces.push(createConfettiPiece(Math.random() * canvas.width, Math.random() * canvas.height));
    }
  
    function updateConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      confettiPieces.forEach((piece) => {
        piece.x += piece.xSpeed;
        piece.y += piece.ySpeed + piece.size * 0.1;
        piece.ySpeed += 0.1;
  
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, piece.size, 0, 2 * Math.PI);
        ctx.fillStyle = piece.color;
        ctx.fill();
      });
  
      requestAnimationFrame(updateConfetti);
    }
  
    updateConfetti();
  }
  