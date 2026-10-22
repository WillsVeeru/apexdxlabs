const fs=require('fs');const h=fs.readFileSync('outputs/index.html','utf8');console.log(h.match(/<section class="detail-section reveal" id="about-us">[\s\S]*?<\/section>/)[0]);
