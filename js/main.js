function buy(){window.location.href='https://buy.stripe.com/test_12345'}
let v=184; setInterval(()=>{ v+=Math.floor(Math.random()*3)-1; let e=document.getElementById('live'); if(e) e.innerText=v; },2500);
