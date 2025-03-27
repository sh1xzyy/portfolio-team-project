import{a as g,i as p,S,N as L,K as b}from"./assets/vendor-BcmNZR9L.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();g.defaults.baseURL="https://portfolio-js.b.goit.study/api";const x=async()=>{try{return(await g.get("/reviews/")).data}catch(e){throw console.log("Something went wrong with receiving feedback"),e}},k=async e=>{try{return(await g.post("/requests/",e)).data}catch(r){throw console.log("Something went wrong with posting data"),r}},t={body:document.querySelector("body"),projectsList:document.querySelector(".projects-list"),loadMoreBtn:document.querySelector("#loadMoreBtn"),contactForm:document.querySelector(".contact-form"),list:document.querySelector(".swiper-wrapper"),buttons:document.querySelector(".swiper-buttons"),errorMsg:document.querySelector(".review-not-found"),inputWrapper:document.querySelector(".input-wrapper"),textareaWrapper:document.querySelector(".textarea-wrapper"),modalOverlay:document.querySelector(".modal-overlay"),burgerMenuBtn:document.querySelector("#burgerMenu"),menuOverlay:document.querySelector(".menu-overlay"),themeSwitchBtn:document.querySelector("#themeSwitchBtn")},E=async e=>{e.preventDefault();const r=e.target,o=r.elements.userEmail.value.trim(),c=r.elements.userMessage.value.trim(),s=o.endsWith("@gmail.com")&&o.length>10,i=c.length>5;if(s||t.inputWrapper.classList.add("is-error"),i||t.textareaWrapper.classList.add("is-error"),!(!s||!i))try{await k({email:o,comment:c}),t.modalOverlay.classList.add("is-open"),t.body.classList.add("no-scroll"),t.inputWrapper.classList.remove("is-correct"),t.modalOverlay.addEventListener("click",u),document.addEventListener("keydown",v),r.reset()}catch{p.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong with posting form",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}},B=e=>{const r=e.target;if(r.id==="userEmail"){const o=r.value.endsWith("@gmail.com")&&r.value.length>10;t.inputWrapper.classList.toggle("is-correct",o),t.inputWrapper.classList.toggle("is-error",!o)}if(r.id==="userMessage"){const o=r.value.length>5;t.textareaWrapper.classList.toggle("is-error",!o)}},u=e=>{(e.target===e.currentTarget||e.target.closest("#modalCloseBtn"))&&(h(),t.modalOverlay.removeEventListener("click",u))},v=e=>{e.key==="Escape"&&(h(),document.removeEventListener("keydown",v))},h=()=>{t.modalOverlay.classList.remove("is-open"),t.body.classList.remove("no-scroll")},M=({target:e})=>{const r=e.checked?"dark":"light";localStorage.setItem("userTheme",r),y(r)},C=()=>{const e=localStorage.getItem("userTheme")||"light";t.themeSwitchBtn.checked=e==="dark",y(e)},y=e=>{t.body.classList.toggle("theme-dark",e==="dark"),t.body.classList.toggle("theme-light",e==="light")},J=()=>{t.menuOverlay.classList.add("is-open"),t.body.classList.add("no-scroll"),t.menuOverlay.addEventListener("click",w)},w=({target:e})=>{e.closest("#menuCloseBtn")&&m(),e.closest(".menu-list-item")&&m()},m=()=>{t.menuOverlay.classList.remove("is-open"),t.body.classList.remove("no-scroll"),t.menuOverlay.removeEventListener("click",w)},q=({author:e,avatar_url:r,review:o})=>`
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${o}</p>
    <div class="swiper-user-info">
      <img
        class="swiper-user-img"
        src="${r}"
        alt="${e}"
        width="40"
        height="40"
        loading="lazy"
      />
      <h3 class="swiper-user-name">${e}</h3>
    </div>
  </li>`,O=({title:e,url1:r,url2:o,technologies:c})=>`
    <li class="projects-list-item">
      <img class="projects-img" src="${r}" srcset="${r} 1x, ${o} 2x" alt="${e}" loading="lazy">
      <p class="projects-technologies">${c}</p>
      <div class="projects-container">
        <h3 class="projects-name">${e}</h3>
        <div class="projects-link-wrapper">
          <a href="#" class="projects-visit-link">visit
            <svg class="projects-visit-svg">
              <use href="./img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  `,N=e=>{const r=e.map(q).join("");t.list.insertAdjacentHTML("beforeend",r)},j=e=>{const r=e.map(O).join("");t.projectsList.insertAdjacentHTML("beforeend",r)},l=[{title:"Wallet webservice",url1:"./img/projectimages/wallet@1x.jpg",url2:"./img/projectimages/wallet@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:"./img/projectimages/green-harvest@1x.jpg",url2:"./img/projectimages/green-harvest@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:"./img/projectimages/english-excelence@1x.jpg",url2:"./img/projectimages/english-excelence@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:"./img/projectimages/power-pulse@1x.jpg",url2:"./img/projectimages/power-pulse@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:"./img/projectimages/mimino@1x.jpg",url2:"./img/projectimages/mimino@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:"./img/projectimages/reviving-traditions@1x.jpg",url2:"./img/projectimages/reviving-traditions@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:"./img/projectimages/chego@1x.jpg",url2:"./img/projectimages/chego@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:"./img/projectimages/energy-flow@1x.jpg",url2:"./img/projectimages/energy-flow@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:"./img/projectimages/fruitbox@1x.jpg",url2:"./img/projectimages/fruitbox@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:"./img/projectimages/turn-on@1x.jpg",url2:"./img/projectimages/turn-on@2x.jpg",technologies:"React, JavaScript, Node JS, Git"}];let d=0,n=3;const R=()=>{n=3,j(l.slice(d,n))},f=e=>{d+=3,n+=3,j(l.slice(d,n));const r=document.querySelector(".projects-list-item").getBoundingClientRect();window.scrollBy({top:r.height,behavior:"smooth"}),n>=l.length&&(e.currentTarget.style.display="none",t.loadMoreBtn.removeEventListener("click",f))};t.loadMoreBtn.addEventListener("click",f);const F=()=>{new S(".swiper",{modules:[L,b],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},G=async()=>{try{const e=await x();if(!e.length){t.buttons.classList.add("is-hidden"),t.errorMsg.classList.remove("is-hidden");return}N(e),F()}catch{p.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),t.buttons.classList.add("is-hidden"),t.errorMsg.classList.remove("is-hidden")}},P=()=>{document.querySelectorAll(".faq-list-item").forEach(r=>{r.addEventListener("click",({target:o})=>{const c=o.closest("li"),s=document.querySelector(".is-active");c.classList.toggle("is-active"),s&&s.classList.remove("is-active")})})};document.addEventListener("DOMContentLoaded",()=>{R(),G(),P(),C()});t.burgerMenuBtn.addEventListener("click",J);t.contactForm.addEventListener("input",B);t.contactForm.addEventListener("submit",E);t.themeSwitchBtn.addEventListener("click",M);
//# sourceMappingURL=index.js.map
