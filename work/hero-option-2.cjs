const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
h=h.replace('<section class="hero">','<section class="hero hero-option-two">');
h=h.replace('<h1>Molecular answers.<br><em>Clinical confidence.</em></h1>','<h1>Molecular answers.<br><em>Clinical confidence.</em></h1>');
const css=`
/* Hero option 2 — centered cinematic composition */
.hero-option-two{height:100vh;min-height:740px;display:flex;align-items:center;justify-content:center;background:#0d0d0c;text-align:center;isolation:isolate}
.hero-option-two .hero-video{transform:scale(1.08);object-position:center;filter:saturate(.55)}
.hero-option-two .hero-video-shade{background:linear-gradient(180deg,rgba(13,13,12,.55) 0%,rgba(13,13,12,.52) 45%,rgba(13,13,12,.9) 100%)}
.hero-option-two>.wrap{width:92%;max-width:1360px}
.hero-option-two .hero-copy{width:100%;padding:130px 0 150px;display:flex;flex-direction:column;align-items:center}
.hero-option-two .eyebrow{border:1px solid rgba(231,214,168,.3);background:rgba(13,13,12,.25);backdrop-filter:blur(10px);border-radius:99px;padding:10px 18px;font-size:9px;letter-spacing:2px;gap:10px;color:var(--gold-light)}
.hero-option-two .eyebrow:before{width:5px;height:5px;flex:0 0 5px;border:0;box-shadow:0 0 12px #c9a45c88;background:var(--gold)}
.hero-option-two h1{font-size:clamp(56px,6.6vw,96px);font-weight:500;line-height:1.08;letter-spacing:-4px;max-width:1200px;margin:36px 0 26px}
.hero-option-two h1 em{color:var(--gold-light);font-weight:400;font-style:normal}
.hero-option-two h1 em:after{display:none}
.hero-option-two .lead{font-size:17px;color:#eeede9;max-width:650px;white-space:normal;line-height:1.7;margin:0}
.hero-option-two .actions{justify-content:center;gap:16px;margin-top:32px}
.hero-option-two .text-link{display:inline-flex;align-items:center;justify-content:center;gap:20px;border:1px solid rgba(231,214,168,.5);padding:17px 26px;border-radius:100px;color:var(--gold-light);background:rgba(13,13,12,.12);font-size:14px;line-height:1.4}
.hero-option-two .text-link:hover{background:rgba(201,164,92,.12)}
.hero-option-two .hero-art{display:none}
.hero-option-two:after{content:'';position:absolute;bottom:35px;left:50%;height:54px;width:1px;background:linear-gradient(var(--gold),transparent);z-index:3}
.hero-option-two .hero-copy:after{content:'';position:absolute;width:75%;max-width:1000px;height:1px;background:linear-gradient(90deg,transparent,rgba(231,214,168,.28),transparent);bottom:110px;left:50%;transform:translateX(-50%)}
@media(max-width:950px){.hero-option-two h1{font-size:70px;letter-spacing:-3px}.hero-option-two .hero-copy{padding-top:150px}}
@media(max-width:650px){.hero-option-two{height:100svh;min-height:650px}.hero-option-two .hero-copy{padding:120px 0 140px}.hero-option-two .eyebrow{font-size:7px;letter-spacing:1px;padding:9px 12px}.hero-option-two h1{font-size:clamp(36px,8.5vw,55px);letter-spacing:-1.8px;margin:30px 0 22px}.hero-option-two .lead{font-size:15px;max-width:320px}.hero-option-two .actions{gap:12px;margin-top:28px}.hero-option-two .text-link{font-size:13px;padding:17px 20px}.hero-option-two .hero-copy:after{bottom:95px}.hero-option-two:after{bottom:25px;height:45px}}
`;
h=h.replace('</style>',css+'</style>');h=h.replace('<title>Apex DX Labs | Molecular Diagnostic Laboratory in Dallas, TX</title>','<title>Apex DX Labs | Hero Option 2</title>');fs.writeFileSync('outputs/hero-option-2.html',h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Created alternate hero preview. Existing index.html unchanged.');
