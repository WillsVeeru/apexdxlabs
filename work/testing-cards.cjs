const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');let count=0;
h=h.replace(/<article class="card">/g,()=>'<article class="card"><span class="service-number" aria-hidden="true">0'+(++count)+'</span>');
const css=`
/* Testing services — spacious numbered cards */
#testing .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px;border:0;align-items:stretch}
#testing .card,#testing .card:first-child,#testing .card:last-child{position:relative;display:flex;flex-direction:column;padding:40px 36px;border:1px solid var(--line);border-radius:26px;background:#faf9f6;min-height:590px;transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
#testing .card:hover{transform:translateY(-6px);box-shadow:0 18px 40px #0d0d0c08}
#testing .service-number{position:absolute;right:36px;top:39px;font-size:25px;font-weight:400;line-height:1.5;color:#aaa397}
#testing .card-art,#testing .card:nth-child(2) .card-art,#testing .card:nth-child(3) .card-art{display:flex;align-items:center;justify-content:center;flex:0 0 48px;width:48px;height:48px;border-radius:50%;background:var(--ink);margin:0 0 64px;overflow:hidden}
#testing .card-art:after{display:none}
#testing .card-art svg{width:25px;height:28px;stroke:var(--gold-light);stroke-width:2.5}
#testing .card .tag{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:1.7px;line-height:1.7;color:#a47e38;min-height:34px}
#testing .card h3{font-family:var(--sans);font-size:clamp(25px,2.4vw,35px);font-weight:500;line-height:1.3;letter-spacing:-1px;margin:12px 0 22px}
#testing .card p{font-size:15px;line-height:1.65;margin:0 0 22px;color:var(--muted)}
#testing .card .resistance{border-top:1px solid var(--line);padding-top:25px;margin-top:26px;margin-bottom:30px;font-size:12px!important;line-height:1.8}
#testing .card .text-link{align-self:flex-start;margin-top:auto;padding-top:16px;padding-bottom:0;border:0;font-family:var(--sans);font-size:13px;font-weight:600;color:var(--ink)}
@media(max-width:950px){#testing .cards{gap:18px}#testing .card,#testing .card:first-child,#testing .card:last-child{padding:30px 24px;min-height:620px}#testing .service-number{right:24px;top:29px}#testing .card .tag{font-size:9px}}
@media(max-width:650px){#testing .cards{grid-template-columns:1fr;gap:22px}#testing .card,#testing .card:first-child,#testing .card:last-child{padding:32px;min-height:500px}#testing .card-art{margin-bottom:52px}#testing .service-number{right:32px;top:31px}#testing .card h3{font-size:31px}#testing .card .tag{min-height:0;font-size:10px}#testing .card .text-link{margin-top:auto}}
`;
h=h.replace('</style>',css+'</style>');fs.writeFileSync('outputs/index.html',h);console.log('Updated '+count+' testing service cards.');
