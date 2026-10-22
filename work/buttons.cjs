const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');h=h.replace('/* Consistent button padding across screen sizes */ .button,.hero .text-link{padding:12px 24px}', '/* Consistent button padding across screen sizes */ .button,.hero .text-link{padding:12px 24px}');
const css=`
/* Gold pill buttons with a separate circular arrow */
.button,.button.dark,.banner .button{background:var(--gold);color:var(--ink);border:0;border-radius:999px;padding:12px 24px;gap:24px;font-family:var(--sans);font-size:14px;font-weight:500;line-height:1.25;min-height:0;box-shadow:none}
.button span,.button.dark span,.banner .button span{display:inline-flex;align-items:center;justify-content:center;flex:0 0 36px;width:36px;height:36px;border-radius:50%;background:var(--ink);color:var(--on-dark);font-size:20px;line-height:1;transition:transform .3s var(--ease),background .3s var(--ease)}
.button:hover,.button.dark:hover,.banner .button:hover{background:var(--gold-light);color:var(--ink);box-shadow:none;transform:translateY(-2px)}
.button:hover span{transform:rotate(45deg);background:var(--ink-2)}
@media(max-width:650px){.button,.button.dark,.banner .button{padding:12px 24px;gap:20px;font-size:13px}}
`;
h=h.replace('</style>',css+'</style>');h=h.replace('Send Message <span aria-hidden="true">↗</span>','Send Message <span aria-hidden="true">↗</span>');fs.writeFileSync('outputs/index.html',h);console.log('Applied gold pill buttons and dark circular arrows.');
