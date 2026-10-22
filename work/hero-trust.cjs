const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
const trust='<div class="trust">CLIA-Certified · COLA-Accredited · Dallas, TX</div>';
if(!h.includes(trust))throw new Error('Trust text block not found');
h=h.replace('</section>'+trust,trust+'</section>');
h=h.replace('</style>',`/* Credentials anchored within the hero */
.hero .trust{position:absolute;right:6%;bottom:28px;z-index:3;border:0;background:transparent;padding:0;margin:0;text-align:right;color:#eeede9;font-size:10px;letter-spacing:1.5px;max-width:88%}
@media(max-width:650px){.hero .trust{right:6%;bottom:24px;font-size:9px;letter-spacing:.7px}}
</style>`);
fs.writeFileSync('outputs/index.html',h);console.log('Credentials moved inside hero, anchored bottom right.');
