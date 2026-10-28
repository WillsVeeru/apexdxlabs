const fs=require('fs');const file='outputs/index.html';let h=fs.readFileSync(file,'utf8');h=h.replace("'.about-title,.about-story,.about-values>.section-label,.values-title,.value-card,.about-accreditation>div,.about-accreditation>p'","'.about-title,.about-story,.about-values>.section-label,.values-title,.about-accreditation>div,.about-accreditation>p'");h=h.replace('</style>',`
/* Values cards enter in a smooth sequence */
.js #about-us .value-card{opacity:0;transform:translateY(42px);transition:opacity .9s var(--ease),transform .9s var(--ease),background .35s var(--ease);transition-delay:var(--value-delay,0ms)}
.js #about-us .value-grid.values-visible .value-card{opacity:1;transform:translateY(0)}
@media(prefers-reduced-motion:reduce){.js #about-us .value-card{opacity:1;transform:none;transition:none}}
</style>`);h=h.replace('</script></body>',`
if(!reduceMotion){const valuesGrid=document.querySelector('#about-us .value-grid');if(valuesGrid){valuesGrid.querySelectorAll('.value-card').forEach((card,index)=>card.style.setProperty('--value-delay',index*280+'ms'));const valuesObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('values-visible');valuesObserver.unobserve(entry.target)}}),{threshold:.08});valuesObserver.observe(valuesGrid);}}
</script></body>`);fs.writeFileSync(file,h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Values cards staggered by 280ms with 900ms fade-up animations; JavaScript syntax checked.');
