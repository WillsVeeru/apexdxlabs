const fs=require('fs');let h=fs.readFileSync('outputs/index.html','utf8');
h=h.replace(/(<a class="text-link" href="#services">)Learn More ↗(<\/a>)/g,'$1Learn More <span aria-hidden="true">↗</span>$2');
h=h.replace('</style>',`/* Service card link spacing and gold hover */
#testing .card .text-link{display:inline-flex;align-items:center;gap:12px;transition:color .25s var(--ease)}
#testing .card .text-link:hover,#testing .card .text-link:focus-visible{color:var(--gold)}
#testing .card .text-link span{display:inline-block;transition:transform .25s var(--ease)}
#testing .card .text-link:hover span{transform:translate(2px,-2px)}
</style>`);fs.writeFileSync('outputs/index.html',h);console.log('Card link arrows separated by 12px; hover color set to brand gold.');
