const fs=require('fs');const file='outputs/index.html';let h=fs.readFileSync(file,'utf8');h=h.replace('</style>',`
/* Diagnostic Services: text first, image emerges after two seconds */
.service-split{position:relative;isolation:isolate}
.js #services .service-content.scroll-reveal{opacity:1;transform:none;position:relative;z-index:2;background:var(--paper)}
.js #services .service-visual.scroll-reveal{opacity:0;transform:translateX(65%) scale(.96);z-index:1;transition:opacity .9s var(--ease),transform 1.25s var(--ease);transition-delay:0s}
.js #services .service-reversed .service-visual.scroll-reveal{transform:translateX(-65%) scale(.96)}
.js #services .service-split.image-emerged .service-visual.scroll-reveal{opacity:1;transform:translateX(0) scale(1)}
@media(max-width:650px){.js #services .service-visual.scroll-reveal,.js #services .service-reversed .service-visual.scroll-reveal{transform:translateY(55px) scale(.96)}}
@media(prefers-reduced-motion:reduce){.js #services .service-visual.scroll-reveal,.js #services .service-reversed .service-visual.scroll-reveal{opacity:1;transform:none;transition:none}}
</style>`);
h=h.replace('</script></body>',`
if(!reduceMotion){const serviceEmergenceObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){const card=entry.target;setTimeout(()=>card.classList.add('image-emerged'),2000);serviceEmergenceObserver.unobserve(card)}}),{threshold:.12});document.querySelectorAll('#services .service-split').forEach(card=>serviceEmergenceObserver.observe(card));}
</script></body>`);fs.writeFileSync(file,h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Text-first reveal with two-second delayed image emergence applied to three diagnostic services.');
