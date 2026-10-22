const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
const css=`
/* Button spacing and header integrated with the hero */
.button,.button.dark,.banner .button,.nav-cta{padding:8px 8px 8px 24px;gap:24px}
header{position:absolute;top:0;left:0;width:100%;z-index:50;background:transparent;border:0;backdrop-filter:none}
.hero-copy{padding-top:210px}
@media(max-width:650px){.button,.button.dark,.banner .button,.nav-cta{padding:8px 8px 8px 24px;gap:24px}.hero-copy{padding-top:145px}.navlinks.open{background:var(--paper)}}
`;
h=h.replace('</style>',css+'</style>');fs.writeFileSync('outputs/index.html',h);console.log('Applied exact button spacing and transparent overlaid header.');
