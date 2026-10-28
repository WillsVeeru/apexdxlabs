const fs=require('fs');const file='outputs/index.html';let h=fs.readFileSync(file,'utf8');const source=h.match(/<section class="providers-section" id="for-providers">[\s\S]*?<\/section>/);if(!source)throw Error('Providers section missing');if(h.includes('id="for-providers-row"'))throw Error('Alternative already exists');const copy=source[0].replace('class="providers-section" id="for-providers"','class="providers-section providers-single-row" id="for-providers-row"');h=h.replace(source[0],source[0]+copy);h=h.replace('</style>',`
/* Additional Providers option: four cards in one row */
#for-providers-row{padding:110px 0;background:#eeede9}
#for-providers-row .providers-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;background:transparent;padding:0}
#for-providers-row .provider-card{padding:30px 24px;border:0;border-radius:22px;background:#f7f6f3}
#for-providers-row .provider-icon{background:#c9a45c4f;color:#0d0d0d;width:46px;height:46px;margin-bottom:38px}
#for-providers-row .provider-number{top:30px;right:24px;font-size:24px}
#for-providers-row .provider-card h3{font-size:23px;line-height:1.35}
#for-providers-row .provider-card p{font-size:13px;line-height:1.8}
#for-providers-row .providers-heading h2{font-size:var(--section-title-size);font-weight:500;line-height:var(--section-title-leading);letter-spacing:var(--section-title-tracking)}
#for-providers-row .providers-action{display:flex;justify-content:center}
@media(max-width:1100px){#for-providers-row .providers-grid{grid-template-columns:repeat(4,minmax(245px,1fr));overflow-x:auto;scroll-snap-type:x mandatory;padding:0 0 18px}#for-providers-row .provider-card{scroll-snap-align:start}}
@media(max-width:650px){#for-providers-row{padding:75px 0}#for-providers-row .providers-grid{grid-template-columns:repeat(4,minmax(260px,85%));gap:16px}}
</style>`);h=h.replace('</script></body>',`if(!reduceMotion){const providerRowObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');providerRowObserver.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('#for-providers-row .providers-heading,#for-providers-row .provider-card,#for-providers-row .providers-action').forEach(el=>{el.classList.add('scroll-reveal');if(el.matches('.provider-card'))el.style.setProperty('--reveal-delay',Array.from(el.parentElement.children).indexOf(el)*100+'ms');providerRowObserver.observe(el)});}</script></body>`);fs.writeFileSync(file,h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Added second Providers section with four cards in a single row.');
