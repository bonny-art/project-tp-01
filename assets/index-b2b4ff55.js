(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function s(){const t=document.getElementById("scrollToTopButton");window.pageYOffset>window.innerHeight?(t.style.visibility="visible",t.style.opacity=1):(t.style.visibility="hidden",t.style.opacity=0)}function i(){window.scrollTo({top:0,behavior:"smooth"})}window.addEventListener("scroll",s);document.getElementById("scrollToTopButton").addEventListener("click",i);new Swiper(".swiper",{slidesPerView:1,spaceBetween:1,breakpoints:{0:{slidesPerView:1,spaceBetween:1},375:{slidesPerView:1,spaceBetween:1},768:{slidesPerView:2,spaceBetween:3},1280:{slidesPerView:3,spaceBetween:8}},centeredSlides:!1,direction:"horizontal",loop:!0,autoHeight:!0,pagination:{el:"button-reviews",clickable:!0},navigation:{nextEl:".btn-next",prevEl:".btn-prev"},scrollbar:{el:".swiper-scrollbar"}});(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(n){for(var r=this,c=(r.document||r.ownerDocument).querySelectorAll(n),e=0;c[e]&&c[e]!==r;)++e;return Boolean(c[e])}),typeof t.closest!="function"&&(t.closest=function(n){for(var r=this;r&&r.nodeType===1;){if(r.matches(n))return r;r=r.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");t.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+o+'"]');l.classList.add("active"),n.classList.add("active")})}),r.forEach(function(c){c.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){var e=c.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});(()=>{const t=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),c=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const o=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};n.addEventListener("click",c),r.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
