const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
const link='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">';
h=h.replace('<style>',link+'<style>');
h=h.replace('</style>',`/* Project-wide Manrope typography */
:root{--sans:"Manrope",sans-serif;--mono:"Manrope",sans-serif;--brand:"Manrope",sans-serif}
body,button,input,textarea,select,h1,h2,h3,h4,h5,h6,.hero h1,.logo,.logo small,.section-label,.card .tag,.service-heading,.tile .num{font-family:"Manrope",sans-serif}
</style>`);
fs.writeFileSync('outputs/index.html',h);console.log('Manrope applied throughout the HTML project.');
