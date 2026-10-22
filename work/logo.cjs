const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
h=h.replace(/(<a href="#home" class="logo" aria-label="Apex DX Labs home">)[\s\S]*?(<\/a>)/,'$1<img src="apex-logo.png" alt="Apex DX Labs" width="931" height="94">$2');
h=h.replace('<a class="logo" href="#home">APEX DX <small>LABS</small></a>','<a class="logo" href="#home"><img src="apex-logo.png" alt="Apex DX Labs" width="931" height="94" loading="lazy"></a>');
h=h.replace('</style>',`/* Supplied Apex DX Labs brand logo */
.logo img{display:block;width:235px;max-width:100%;height:auto;object-fit:contain}
header.scrolled .logo img{filter:drop-shadow(0 1px 1px rgba(13,13,12,.65))}
footer .logo img{width:280px}
@media(max-width:1050px){header .logo img{width:190px}}
@media(max-width:650px){header .logo img{width:220px}footer .logo img{width:250px}}
</style>`);
fs.writeFileSync('outputs/index.html',h);console.log('Header and footer updated with supplied logo.');
