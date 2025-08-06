// just for fun
// www.thewatcher.me

// Clear the existing page content
document.head.innerHTML = '';
document.body.innerHTML = '';
document.body.style.margin = '0';
document.body.style.overflow = 'hidden'; // Hide scrollbars

// --- 1. Create the Matrix Background ---
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to use for the effect
const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
const chars = matrixChars.split('');

const fontSize = 12;
const columns = canvas.width / fontSize;

// An array to store the y-position of each falling character drop
const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {
  // Set a semi-transparent black background to create the fading trail effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the color for the falling characters
  ctx.fillStyle = '#0F0'; // Green
  ctx.font = `${fontSize}px arial`;

  // Loop through each column
  for (let i = 0; i < drops.length; i++) {
    // Pick a random character
    const text = chars[Math.floor(Math.random() * chars.length)];
    // Draw the character
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop to the top if it goes off-screen, with a random chance
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    // Move the drop down
    drops[i]++;
  }
}

// Start the animation loop for the Matrix effect
setInterval(drawMatrix, 40);

// --- 2. Create the Hacked Text Overlay ---
const overlay = document.createElement('div');
overlay.style.position = 'absolute';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.flexDirection = 'column';
overlay.style.textAlign = 'center';

const hackedText = document.createElement('h1');
hackedText.style.fontFamily = `'Courier New', Courier, monospace`;
hackedText.style.color = '#0F0'; // Green text
hackedText.style.fontSize = 'clamp(2rem, 10vw, 5rem)'; // Responsive font size
hackedText.style.textShadow = '0 0 10px #0F0, 0 0 20px #0F0';
hackedText.style.letterSpacing = '0.5rem';

// Add a cool glitch effect with CSS
const style = document.createElement('style');
style.innerHTML = `
.glitch {
  animation: glitch 1.5s linear infinite;
}

@keyframes glitch {
  2%, 64% { transform: translate(2px, 0) skew(0deg); }
  4%, 60% { transform: translate(-2px, 0) skew(0deg); }
  62% { transform: translate(0, 0) skew(5deg); }
}
`;
document.head.appendChild(style);
hackedText.classList.add('glitch');

overlay.appendChild(hackedText);
document.body.appendChild(overlay);


// --- 3. Typing Effect for the Text ---
const message = 'Hacked By The Watcher';
let index = 0;

function typeMessage() {
  if (index < message.length) {
    hackedText.textContent += message.charAt(index);
    index++;
    setTimeout(typeMessage, 150); // Speed of typing
  }
}

// Start typing after a short delay
setTimeout(typeMessage, 1000);

// --- 4. Original Click Alert ---
window.addEventListener('click', e => alert('You have been hacked by The Watcher'));