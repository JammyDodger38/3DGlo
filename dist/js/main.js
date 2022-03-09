(()=>{"use strict";const e=({timing:e,draw:t,duration:a})=>{let r=performance.now();requestAnimationFrame((function n(o){let l=(o-r)/a;l>1&&(l=1);let c=e(l);t(c),l<1&&requestAnimationFrame(n)}))},t=({formId:e,someElem:t=[]})=>{const a=document.getElementById(e),r=document.createElement("div");try{if(!a)throw new Error("Верните форму!");a.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=a.querySelectorAll("input"),n=new FormData(a),o={};r.textContent="Загрузка...",a.append(r),n.forEach(((e,t)=>{o[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?o[e.id]=t.textContent:"input"===e.type&&(o[e.id]=t.value)})),(e=>{let t=!0;return(e.user_name.length<2||0==e.user_email.length||e.user_phone.length<5||e.user_phone.length>16)&&(t=!1),t})(o)?(async e=>await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())))(o).then((t=>{r.textContent="Спасибо! Наш менеджер с вами свяжется.",e.forEach((e=>{e.value=""}))})).catch((e=>{r.textContent="Ошибка..."})):alert("Данные не валидны")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.querySelector("#timer-hours"),a=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds");let n=setInterval((()=>{let e=(()=>{let e,t,a,r=(new Date("30 march 2022").getTime()-(new Date).getTime())/1e3;return r<=0?(e="00",t="00",a="00"):(e=Math.floor(r/60/60),t=Math.floor(r/60%60),a=Math.floor(r%60),1==e.toString().length&&(e="0"+e),1==t.toString().length&&(t="0"+t),1==a.toString().length&&(a="0"+a)),{timeRemaining:r,hours:e,minutes:t,seconds:a}})();t.textContent=e.hours,a.textContent=e.minutes,r.textContent=e.seconds,e.timeRemaining<=0&&clearInterval(n)}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body"),a=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",(t=>{e.classList.contains("active-menu")?t.target.closest(".active-menu")?(t.target.classList.contains("close-btn")||t.target.matches("ul>li>a"))&&(t.preventDefault(),a()):a():t.target.closest(".menu")&&a()}))})(),(()=>{const t=document.querySelector(".popup"),a=document.querySelectorAll(".popup-btn");window.screen.availWidth;let r=0;a.forEach((a=>{a.addEventListener("click",(()=>{t.style.display="block",e({duration:500,timing:e=>e,draw(e){t.style.opacity=e}})}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none",r=0,t.style.opacity="0")}))})(),(()=>{const e=document.querySelector("#form1-name"),t=document.querySelector("#form1-email"),a=document.querySelector("#form1-phone"),r=document.querySelector("#form2-name"),n=document.querySelector("#form2-email"),o=document.querySelector("#form2-phone"),l=document.querySelector("#form2-message"),c=document.querySelector("#form3-name"),u=document.querySelector("#form3-phone"),s=document.querySelector("#form3-email"),i=document.querySelector(".calc-square"),d=document.querySelector(".calc-count"),g=document.querySelector(".calc-day"),m=e=>{e.target.value=e.target.value.replace(/[\s]{2,}/," "),e.target.value=e.target.value.replace(/[\-]{2,}/,"-"),e.target.value=e.target.value.replace(/^\-/,""),e.target.value=e.target.value.replace(/\-$/,"")},v=e=>{""!=e.target.value?null===e.target.value.toString().match(/^[a-z\d_+.\-]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i)&&(alert("Вы ввели неправильный email"),e.target.value=""):alert("Вы ввели неправильный email")};e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/g,"")})),e.addEventListener("blur",(e=>{m(e),e.target.value=e.target.value.toString().substring("0","1").toUpperCase()+e.target.value.toString().substring("1").toLowerCase()})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/g,"")})),t.addEventListener("blur",(e=>{v(e)})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]+/g,"")})),a.addEventListener("blur",(e=>{m(e)})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/g,"")})),r.addEventListener("blur",(e=>{m(e),e.target.value=e.target.value.toString().substring("0","1").toUpperCase()+e.target.value.toString().substring("1").toLowerCase()})),l.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/g,"")})),l.addEventListener("blur",(e=>{m(e),e.target.value=e.target.value.toString().substring("0","1").toUpperCase()+e.target.value.toString().substring("1").toLowerCase()})),n.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/g,"")})),n.addEventListener("blur",(e=>{v(e)})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]+/g,"")})),o.addEventListener("blur",(e=>{m(e)})),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^А-Яа-я\s\-]+/g,"")})),c.addEventListener("blur",(e=>{m(e),e.target.value=e.target.value.toString().substring("0","1").toUpperCase()+e.target.value.toString().substring("1").toLowerCase()})),s.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\`\*\']+/g,"")})),s.addEventListener("blur",(e=>{v(e)})),u.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]+/g,"")})),u.addEventListener("blur",(e=>{m(e)})),i.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),d.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),g.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}}))})(),((e,t,a="portfolio-item-active",r="dot-active")=>{const n=document.querySelector(e),o=document.querySelectorAll(t),l=document.querySelector(".portfolio-dots");let c;document.addEventListener("DOMContentLoaded",(()=>{if(null==n||null==o)console.log("error");else{for(let e=0;e<o.length;e++){let t=document.createElement("li");t.classList.add("dot"),0==e&&t.classList.add(r),l.appendChild(t)}c=document.querySelectorAll(".dot"),v(u)}}));const u=2e3;let s,i=0;const d=(e,t,a)=>{e[t].classList.remove(a)},g=(e,t,a)=>{e[t].classList.add(a)},m=()=>{d(o,i,a),d(c,i,r),i++,i>=o.length&&(i=0),g(o,i,a),g(c,i,r)},v=(e=1500)=>{s=setInterval(m,2e3)};n.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(d(o,i,a),d(c,i,r),e.target.matches("#arrow-right")?i++:e.target.matches("#arrow-left")?i--:e.target.classList.contains("dot")&&c.forEach(((t,a)=>{e.target===t&&(i=a)})),i>=o.length&&(i=0),i<0&&(i=o.length-1),g(o,i,a),g(c,i,r))})),n.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(s)}),!0),n.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&v(u)}),!0)})(".portfolio-content",".portfolio-item"),((t=100)=>{const a=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),c=document.getElementById("total");a.addEventListener("change",(a=>{a.target!==r&&a.target!==n&&a.target!==o&&a.target!==l||(()=>{const a=+r.options[r.selectedIndex].value,u=n.value;let s=0,i=1,d=1;if(o.value>1&&(i+=o.value/10),l.value&&l.value<5?d=2:l.value&&l.value<10&&(d=1.5),s=r.value&&n.value?t*a*u*i*d:0,s>+c.textContent){let t=+c.textContent,a=s-+c.textContent;e({duration:500,timing:e=>e,draw(e){c.textContent=Math.abs(t+Math.round(a*e))}})}else if(s<+c.textContent){let t=+c.textContent,a=+c.textContent-s;e({duration:500,timing:e=>e,draw(e){c.textContent=Math.abs(t-Math.round(a*e))}})}})()}))})(100),t({formId:"form1"}),t({formId:"form2"}),t({formId:"form3"})})();