const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
const css=`
/* Staggered hero entrance from below */
@keyframes heroFadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
.hero-copy>.eyebrow,.hero-copy>h1,.hero-copy>.lead,.hero-copy>.actions{animation:heroFadeUp .9s var(--ease) both}
.hero-copy>.eyebrow{animation-delay:.12s}
.hero-copy>h1{animation-delay:.3s}
.hero-copy>.lead{animation-delay:.5s}
.hero-copy>.actions{animation-delay:.7s}
@media(prefers-reduced-motion:reduce){.hero-copy>.eyebrow,.hero-copy>h1,.hero-copy>.lead,.hero-copy>.actions{animation:none;opacity:1;transform:none}}
`;
h=h.replace('</style>',css+'</style>');fs.writeFileSync('outputs/index.html',h);console.log('Staggered fade-up hero animation applied.');
