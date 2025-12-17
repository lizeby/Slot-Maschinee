// const arm = document.getElementById("arm");
// console.log(arm)

// arm.addEventListener('click', function() {
//     console.log('Arm clicked');
//   arm.classList.toggle('clicked');

//   const slot1 = document.querySelector(".slot1");
//   console.log(slot1)
//   slot1.style.backgroundColor = "blue";
//   // slot 1 background red
 
// })

// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const arm = document.getElementById('arm');
  const slots = Array.from(document.querySelectorAll('.slot1, .slot2, .slot3'));
  if (!arm || slots.length === 0) return;

  const palette = [
    'url(/imgs/6A2D393A-225B-4DE4-9DD4-262E1552617D.jpg)',
    'url(/imgs/IMG_2227.jpg)', 
    'url(/imgs/IMG_2233.jpg)', 
    'url(/imgs/lil_lamb.jpeg)',
    'url(/imgs/alien_woman.jpeg)',
    'url(/imgs/e26ce54e0cab52db80207c81fc5ce573.jpg)',
    
    
  ];


  let spinInterval = null;

  function pickRandomBackground() {
    return palette[Math.floor(Math.random() * palette.length)];
  }

  function applyRandom() {
    slots.forEach(s => {
      s.style.background = pickRandomBackground();
    });
  }

  function startSpin() {
    if (spinInterval) return;
    arm.classList.add('clicked');
    // start fast randomizing
    applyRandom();
    spinInterval = setInterval(applyRandom, 80);
  }

  function stopSpin() {
    if (!spinInterval) return;
    clearInterval(spinInterval);
    spinInterval = null;
    // final slower transition to final colors
    slots.forEach(s => {
      s.style.transition = 'background 300ms ease';
      s.style.background = pickRandomBackground();
    });
    // remove transition after it finishes so future fast changes are immediate
    setTimeout(() => {
      slots.forEach(s => s.style.transition = '');
    }, 350);
    arm.classList.remove('clicked');
  }

  // desktop: hold to spin, release to stop
  arm.addEventListener('mousedown', startSpin);
  document.addEventListener('mouseup', stopSpin);
  arm.addEventListener('mouseleave', stopSpin);

  // touch: hold to spin, lift to stop
  arm.addEventListener('touchstart', (e) => { e.preventDefault(); startSpin(); }, {passive:false});
  document.addEventListener('touchend', stopSpin);

  // click fallback: quick spin if user just clicks
  arm.addEventListener('click', (e) => {
    if (spinInterval) return; // already spinning via hold
    startSpin();
    setTimeout(stopSpin, 700);
  });
});


// ...existing code...
// document.addEventListener('DOMContentLoaded', () => {
//   const arm = document.getElementById('arm');
//   const slots = Array.from(document.querySelectorAll('.slot1, .slot2, .slot3'));
//   if (!arm || slots.length === 0) return;

//   const palette = [
//     '#ff6b6b', '#ffd166', '#6bd7a9', '#84a9ff',
//     '#d0bfff', '#ffaedd', '#ffd700', '#00cc99',
//     '#c49cff', '#ff9fa3'
//   ];

//   let spinInterval = null;

//   function pick() {
//     return palette[Math.floor(Math.random() * palette.length)];
//   }

//   function applyRandom() {
//     slots.forEach(s => {
//       s.style.background = pick();
//     });
//   }

//   function startSpin() {
//     if (spinInterval) return;
//     arm.classList.add('clicked');
//     applyRandom();
//     spinInterval = setInterval(applyRandom, 80);
//   }

//   function stopSpin() {
//     if (!spinInterval) return;
//     clearInterval(spinInterval);
//     spinInterval = null;
//     slots.forEach(s => {
//       s.style.transition = 'background 300ms ease';
//       s.style.background = pick();
//     });
//     setTimeout(() => {
//       slots.forEach(s => s.style.transition = '');
//     }, 350);
//     arm.classList.remove('clicked');
//   }

//   arm.addEventListener('mousedown', startSpin);
//   document.addEventListener('mouseup', stopSpin);
//   arm.addEventListener('mouseleave', stopSpin);
//   arm.addEventListener('touchstart', (e) => { e.preventDefault(); startSpin(); }, {passive:false});
//   document.addEventListener('touchend', stopSpin);
//   arm.addEventListener('click', (e) => {
//     if (spinInterval) return;
//     startSpin();
//     setTimeout(stopSpin, 700);
//   });

  