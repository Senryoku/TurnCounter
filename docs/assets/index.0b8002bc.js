import{d as f,o as u,c as l,a as o,t as d,w as m,b as c,v as p,e as v,f as y,T as _,p as C,g,F as w,r as b,n as S,h as T,i as k}from"./vendor.5405fdbd.js";const I=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}};I();var N=(e,n)=>{const i=e.__vccOpts||e;for(const[a,r]of n)i[a]=r;return i};const O=f({data(){return{counters:[],turnCount:1,newCounter:{id:0,character:"",effect:"",count:1},lastId:0}},methods:{add(){this.counters.push(JSON.parse(JSON.stringify(this.newCounter))),this.newCounter={id:this.lastId++,character:"",effect:"",count:1}},endTurn(){for(let e of this.counters)--e.count;this.counters=this.counters.filter(e=>e.count>0),++this.turnCount},reset(){this.counters=[],this.turnCount=1}}}),h=e=>(C("data-v-09f9a3ca"),e=e(),g(),e),V=h(()=>o("button",{type:"submit"},"Add",-1)),L={class:"counters"},E={class:"table"},$=h(()=>o("div",{class:"thead"},[o("div",{class:"th"},"Character"),o("div",{class:"th"},"Effect"),o("div",{class:"th"},"Duration")],-1)),A={class:"td"},B={class:"td"},D={class:"td"};function F(e,n,i,a,r,s){return u(),l("div",null,[o("h1",null,"Turn "+d(e.turnCount),1),o("div",null,[o("form",{onSubmit:n[3]||(n[3]=m((...t)=>e.add&&e.add(...t),["prevent"]))},[c(o("input",{type:"text",placeholder:"Character","onUpdate:modelValue":n[0]||(n[0]=t=>e.newCounter.character=t)},null,512),[[p,e.newCounter.character]]),c(o("input",{type:"text",placeholder:"Effect","onUpdate:modelValue":n[1]||(n[1]=t=>e.newCounter.effect=t)},null,512),[[p,e.newCounter.effect]]),c(o("input",{type:"number",min:"1",max:"999","onUpdate:modelValue":n[2]||(n[2]=t=>e.newCounter.count=t)},null,512),[[p,e.newCounter.count]]),V],32)]),o("div",null,[o("button",{onClick:n[4]||(n[4]=(...t)=>e.reset&&e.reset(...t)),style:{"background-color":"red"}},"Reset"),o("button",{onClick:n[5]||(n[5]=(...t)=>e.endTurn&&e.endTurn(...t))},"End Turn")]),o("div",L,[o("div",E,[$,v(_,{name:"list",class:"tbody"},{default:y(()=>[(u(!0),l(w,null,b(e.counters,t=>(u(),l("div",{class:S(["tr list-item",{fading:t.count==1}]),key:t.id},[o("div",A,d(t.character),1),o("div",B,d(t.effect),1),o("div",D,d(t.count),1)],2))),128))]),_:1})])])])}var H=N(O,[["render",F],["__scopeId","data-v-09f9a3ca"]]);const M=f({setup(e){return(n,i)=>(u(),T(H,{msg:"Hello Vue 3 + TypeScript + Vite"}))}});k(M).mount("#app");
