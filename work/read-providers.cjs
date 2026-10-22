const h=require('fs').readFileSync('outputs/index.html','utf8');console.log(h.match(/<section class="detail-section reveal" id="for-providers">[\s\S]*?<\/section>/)[0]);
