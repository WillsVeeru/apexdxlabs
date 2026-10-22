const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
const css=`
/* Whole-section entrances, with independently staggered cards */
.js .section-entrance{opacity:0;transform:translateY(40px);transition:opacity 1s var(--ease),transform 1s var(--ease)}
.js .section-entrance.section-visible{opacity:1;transform:translateY(0)}
@media(prefers-reduced-motion:reduce){.js .section-entrance{opacity:1;transform:none;transition:none}}
`;
h=h.replace('</style>',css+'</style>');
const js=`
if(!reduceMotion){const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('section-visible');sectionObserver.unobserve(entry.target)}}),{threshold:0,rootMargin:'0px 0px -40px 0px'});document.querySelectorAll('main>section:not(.hero),footer').forEach(section=>{section.classList.add('section-entrance');sectionObserver.observe(section)});}
`;
h=h.replace('</script></body>',js+'</script></body>');fs.writeFileSync('outputs/index.html',h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Whole sections now fade upward; existing staggered card reveals preserved.');
