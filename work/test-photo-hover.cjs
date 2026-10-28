const fs=require('fs');for(const file of ['outputs/index.html','outputs/hero-option-2.html']){let h=fs.readFileSync(file,'utf8');h=h.replace(/<div class="service-visual service-photo">/g,'<div class="service-visual service-photo" tabindex="0">');h=h.replace('</style>',`
/* Photo first; collection details slide and fade in on hover or focus */
#services .service-photo:before{background:linear-gradient(180deg,rgba(13,13,12,.75),rgba(13,13,12,.9));opacity:0;transition:opacity .5s var(--ease)}
#services .service-photo .test-collection-overlay{opacity:0;transform:translateY(32px);transition:opacity .6s var(--ease),transform .6s var(--ease);pointer-events:none}
#services .service-photo:hover:before,#services .service-photo:focus-visible:before{opacity:1}
#services .service-photo:hover .test-collection-overlay,#services .service-photo:focus-visible .test-collection-overlay{opacity:1;transform:translateY(0)}
#services .service-photo:focus-visible{outline:2px solid var(--gold);outline-offset:5px}
@media(hover:none){#services .service-photo:before{opacity:1}#services .service-photo .test-collection-overlay{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){#services .service-photo:before,#services .service-photo .test-collection-overlay{transition:none;transform:none}}
</style>`);fs.writeFileSync(file,h);console.log(file+': photo-first hover reveal applied.');}
