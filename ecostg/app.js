// Ecostg — plugin landing page interactions

// ---- Mobile menu ----
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIconOpen = '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>';
const menuIconClose = '<line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>';

menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${open ? menuIconClose : menuIconOpen}</svg>`;
});

mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  menuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${menuIconOpen}</svg>`;
}));

// ---- Leaderboard ----
const players = [
  { name: 'CreeperKing', amount: '84,620' },
  { name: 'MossySteve', amount: '72,180' },
  { name: 'LumaCraft', amount: '61,940' },
  { name: 'NetheriteNora', amount: '48,210' },
  { name: 'BirchBuilder', amount: '39,880' },
];

document.getElementById('leaderboard').innerHTML = players
  .map((p, i) => `
    <div class="lb-row">
      <span class="lb-rank">0${i + 1}</span>
      <div class="lb-head">${p.name.charAt(0)}</div>
      <span class="lb-name">${p.name}</span>
      <span class="lb-amount">$${p.amount}</span>
    </div>`)
  .join('');

// ---- Features ----
const features = [
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>',
    accent: 'lime',
    eyebrow: 'CORE SYSTEM',
    title: 'An economy that feels alive.',
    copy: 'Every coin has a purpose. Build your balance, trade with confidence, and give your server a market worth mastering.',
  },
  {
    icon: '<path d="m14.5 11.5-2.5 2.5-2.5-2.5"/><line x1="12" y1="7" x2="12" y2="14"/><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
    accent: 'amber',
    eyebrow: 'AUCTION HOUSE',
    title: 'The market is always open.',
    copy: 'List loot, find rare drops, and make a deal. A clear confirmation step keeps every purchase intentional.',
  },
  {
    icon: '<path d="M14.531 12.469 6.619 20.382a1 1 0 1 1-3-3l7.913-7.912"/><path d="M15.939 9.682 22.5 3.119a1 1 0 0 0-3-3l-6.561 6.563"/><path d="M10.439 11.561 7.5 8.621a1 1 0 0 0-3 3L7.439 14.561"/><path d="M12.5 6.5 9.561 3.561a1 1 0 0 0-3 3L9.5 9.5"/>',
    accent: 'blue',
    eyebrow: 'PLAYER JOBS',
    title: 'Work toward something bigger.',
    copy: 'Choose a role, complete your quota, and earn a worker discount across the entire auction house.',
  },
];

document.getElementById('featuresGrid').innerHTML = features.map(f => `
  <article class="feature">
    <div class="feature-icon ${f.accent}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${f.icon}</svg>
    </div>
    <div class="feature-eyebrow">${f.eyebrow}</div>
    <h2>${f.title}</h2>
    <p>${f.copy}</p>
    <div class="feature-line"></div>
  </article>`).join('');

// ---- Commands ----
const playerCommands = [
  ['/pay', 'Open the player payment menu'],
  ['/shop', 'Browse the auction house'],
  ['/sell', 'Sell items for their worth'],
  ['/job', 'Choose or view your active job'],
  ['/jobsell', 'Hand in your job items'],
  ['/moneytop', 'View the richest players'],
  ['/jobinfo', 'Show your job and quota info'],
];

const adminCommands = [
  ['/ecoset', 'Set a player\'s balance', true],
  ['/ecogive', 'Give money without spending yours', true],
  ['/ecostg toggle', 'Toggle economy for a player', true],
  ['/jobcancel', 'Cancel a player\'s active job', true],
  ['/job-timer-reset', 'Reset a fired player\'s timer', true],
  ['/activejobs', 'View each player\'s job status', true],
];

document.getElementById('panel-player').innerHTML = playerCommands.map(([cmd, desc], i) => `
  <div class="cmd-row">
    <span class="cmd-num">${String(i + 1).padStart(2, '0')}</span>
    <code class="cmd-code">${cmd}</code>
    <span class="cmd-desc">${desc}</span>
  </div>`).join('');

document.getElementById('panel-admin').innerHTML = adminCommands.map(([cmd, desc, op], i) => `
  <div class="cmd-row">
    <span class="cmd-num">${String(i + 1).padStart(2, '0')}</span>
    <code class="cmd-code">${cmd}</code>
    <span class="cmd-desc">${desc}</span>
    ${op ? '<span class="cmd-op">OP</span>' : ''}
  </div>`).join('');

// ---- Command tabs ----
document.querySelectorAll('.cmd-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.cmd-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.cmd-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
  });
});
