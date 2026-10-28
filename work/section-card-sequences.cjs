const fs=require('fs');const f='outputs/index.html';let h=fs.readFileSync(f,'utf8');h=h.replace('</style>',`
/* Shared sequential card entrances */
.js #testing .cards.sequential-ready>.card,.js #for-providers .providers-grid.sequential-ready>.provider-card{opacity:0;transform:translateY(40px);transition:opacity .9s var(--ease),transform .9s var(--ease),background .35s var(--ease),box-shadow .35s var(--ease);transition-delay:var(--sequence-delay,0ms)}
.js #testing .cards.sequence-visible>.card,.js #for-providers .providers-grid.sequence-visible>.provider-card{opacity:1;transform:translateY(0)}
@media(prefers-reduced-motion:reduce){.js #testing .cards.sequential-ready>.card,.js #for-providers .providers-grid.sequential-ready>.provider-card{opacity:1;transform:none;transition:none}}
</style>`);h=h.replace('</script></body>',`
if(!reduceMotion){const sequenceObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('sequence-visible');sequenceObserver.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('#testing .cards,#for-providers .providers-grid').forEach(group=>{group.classList.add('sequential-ready');Array.from(group.children).forEach((card,index)=>card.style.setProperty('--sequence-delay',index*280+'ms'));sequenceObserver.observe(group)});}
</script></body>`);fs.writeFileSync(f,h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Sequential 900ms fade-up with 280ms stagger applied to Testing and visible Providers card groups.');
