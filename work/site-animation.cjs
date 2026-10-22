const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
const css=`
/* Site-wide staggered scroll reveals */
.js .reveal{opacity:1;transform:none}
.js .scroll-reveal{opacity:0;transform:translateY(28px);transition:opacity .8s var(--ease),transform .8s var(--ease);transition-delay:var(--reveal-delay,0ms)}
.js .scroll-reveal.in-view{opacity:1;transform:translateY(0)}
@media(prefers-reduced-motion:reduce){.js .scroll-reveal{opacity:1;transform:none;transition:none}}
`;
h=h.replace('</style>',css+'</style>');
const script=`
const revealTargets=document.querySelectorAll('#testing .section-label,#testing .section-head h2,#testing .section-head>.text-link,#testing .card,.why .section-label,.why h2,.why .tile,.banner h2,.banner .lead,.banner .button,.banner .contact-line,.detail-section .wrap>*,footer .wrap>*');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){const scrollObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');scrollObserver.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -24px 0px'});revealTargets.forEach(el=>{el.classList.add('scroll-reveal');let delay=0;if(el.matches('.card,.tile'))delay=Array.from(el.parentElement.children).indexOf(el)%4*120;else if(el.previousElementSibling)delay=70;el.style.setProperty('--reveal-delay',delay+'ms');scrollObserver.observe(el)});}
`;
h=h.replace('</script></body>',script+'</script></body>');fs.writeFileSync('outputs/index.html',h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Scroll-triggered staggered fade-up applied site-wide; JavaScript syntax verified.');
