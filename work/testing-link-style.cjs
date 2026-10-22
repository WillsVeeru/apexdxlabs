const fs=require('fs');const file='outputs/index.html';let h=fs.readFileSync(file,'utf8');const section=h.match(/<section class="section reveal" id="testing">[\s\S]*?<\/section>/);if(!section)throw Error('Testing section missing');let updated=section[0].replace(/Learn More <span aria-hidden="true">↗<\/span>/g,'Learn More <span aria-hidden="true">↗</span>');h=h.replace(section[0],updated);h=h.replace('</style>',`
/* Testing card links: text plus a gold circular arrow */
#testing .card .text-link{display:inline-flex;align-items:center;gap:12px;font-size:12px;font-weight:500;line-height:1.4;padding:0;margin-top:auto;border:0;color:var(--ink)}
#testing .card .text-link span{display:grid;place-items:center;flex:0 0 34px;width:34px;height:34px;border-radius:50%;background:var(--gold);color:var(--ink);font-size:20px;line-height:1;transition:transform .3s var(--ease),background .3s var(--ease)}
#testing .card .text-link:hover{color:var(--ink)}#testing .card .text-link:hover span{background:var(--gold-light);transform:rotate(45deg)}
.horizontal-test-link{font-size:12px;font-weight:500;gap:12px}.horizontal-test-link>span{width:34px;height:34px;flex:0 0 34px;font-size:20px;background:var(--gold);color:var(--ink)}
</style>`);fs.writeFileSync(file,h);console.log('Testing card Learn More links now match reference.');
