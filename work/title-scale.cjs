const fs=require('fs');const file='outputs/index.html';let h=fs.readFileSync(file,'utf8');
const css=`
/* Unified section-title scale throughout the site */
:root{--section-title-size:60px;--section-title-leading:1.12;--section-title-tracking:-2px}
#about-us .about-title h2,#about-us .values-title,#testing .section-head h2,#testing-showcase .showcase-head h2,.why h2,#services .services-header h2,#for-providers .providers-heading h2,#contact .contact-heading h2,.banner h2{font-family:var(--sans);font-size:var(--section-title-size);font-weight:500;line-height:var(--section-title-leading);letter-spacing:var(--section-title-tracking)}
@media(max-width:950px){:root{--section-title-size:48px;--section-title-tracking:-1.6px}}
@media(max-width:650px){:root{--section-title-size:36px;--section-title-tracking:-1.2px}}
`;
h=h.replace('</style>',css+'</style>');fs.writeFileSync(file,h);console.log('Section titles standardized: 60px desktop, 48px tablet, 36px mobile.');
