const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
const css=`
/* Sticky navigation and hero text contrast */
header{position:fixed;transition:background .3s var(--ease),box-shadow .3s var(--ease)}
header.scrolled{background:rgba(247,246,243,.96);backdrop-filter:blur(18px);box-shadow:0 1px 0 var(--line)}
header:not(.scrolled) .logo,header:not(.scrolled) .navlinks>a:not(.button),header:not(.scrolled) .menu{color:var(--on-dark)}
.hero .eyebrow{color:var(--gold)}
.hero h1,.hero h1 em{color:#fff}
.hero .lead{color:#eeede9}
.hero .text-link{color:var(--gold);border-color:var(--gold)}
.hero .eyebrow:before{box-shadow:none;background:var(--gold);border-color:var(--gold)}
@media(max-width:650px){header:not(.scrolled) .navlinks.open>a:not(.button){color:var(--ink)}}
`;
h=h.replace('</style>',css+'</style>');
h=h.replace('</script></body>',"const siteHeader=document.querySelector('header');const updateHeader=()=>siteHeader.classList.toggle('scrolled',window.scrollY>24);window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();</script></body>");
fs.writeFileSync('outputs/index.html',h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Sticky header and requested hero colors applied; script syntax checked.');
