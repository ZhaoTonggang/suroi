function t(n){let e="";const a=new Date(n.date).toLocaleDateString("default",{month:"long",day:"numeric",year:"numeric"});return e+='<article class="splash-news-entry">',e+=`<h3 class="news-title">${n.title}</h3>`,e+=`<div class="news-date">${a}`,e+=`<br><i>Written by: ${n.author}</i>`,e+="</div>",n.bannerImage!==void 0&&(e+=`<span class="news-banner"><img src="${n.bannerImage}" alt="${n.title}"></span><br>`),n.longContent!==void 0?(e+=`<div class="short-desc">${n.content}</div>`,e+=`<div class="long-desc">${n.longContent}</div>`):e+=`<div class="long-desc">${n.content}</div>`,e+="</article>",e}export{t as p};
