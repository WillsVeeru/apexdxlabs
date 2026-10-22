const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
h=h.replace('<a class="button dark" href="#contact">Partner With Us <span aria-hidden="true">↗</span></a></nav>', '</nav><a class="button dark nav-cta" href="#contact">Partner With Us <span aria-hidden="true">↗</span></a>');
h=h.replace('<section class="hero">','<section class="hero"><video class="hero-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true" tabindex="-1"><source src="hero-background.mp4" type="video/mp4"></video><div class="hero-video-shade" aria-hidden="true"></div>');
const css=`
/* Centered navigation, compact pill end cap, and video hero */
.button,.button.dark,.banner .button{padding:12px 12px 12px 24px}
.nav{position:relative}.navlinks{position:absolute;left:50%;transform:translateX(-50%);gap:30px;white-space:nowrap}.nav-cta{margin-left:auto}
.hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0}.hero-video-shade{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(247,246,243,.96) 0%,rgba(247,246,243,.86) 35%,rgba(247,246,243,.4) 65%,rgba(247,246,243,.12) 100%)}.hero>.wrap{position:relative;z-index:2}.hero-art{display:none}
@media(max-width:1050px) and (min-width:651px){.navlinks{gap:16px}.nav-cta{font-size:11px;gap:12px}.nav .logo{font-size:20px}.navlinks{font-size:11px}}
@media(max-width:650px){.button,.button.dark,.banner .button{padding:12px 12px 12px 24px}.nav-cta{display:none}.navlinks{left:calc(-6vw / .88);transform:none;width:100vw;white-space:normal;gap:20px}.nav .menu{margin-left:auto}.hero-copy{padding-bottom:100px}.hero{min-height:740px}.hero-video-shade{background:linear-gradient(90deg,rgba(247,246,243,.94),rgba(247,246,243,.73))}}
@media(prefers-reduced-motion:reduce){.hero-video{display:none}}
`;
h=h.replace('</style>',css+'</style>');h=h.replace("document.documentElement.classList.add('js');","document.documentElement.classList.add('js');const heroVideo=document.querySelector('.hero-video');if(matchMedia('(prefers-reduced-motion: reduce)').matches){heroVideo.pause();heroVideo.removeAttribute('autoplay');}else{heroVideo.muted=true;heroVideo.play().catch(()=>{});}");
fs.writeFileSync('outputs/index.html',h);new(require('vm').Script)(h.match(/<script>([\s\S]*?)<\/script>/)[1]);console.log('Updated padding, centered menu, and local hero video. JavaScript syntax valid.');console.log('Video file: '+fs.statSync('outputs/hero-background.mp4').size+' bytes');
