import n from"https://esm.run/localforage";const c=t=>n.createInstance({name:t}),l=async t=>{const s=c(t);let e=[];return await s.iterate(function(o,r,a){console.log(o,r),e.push({name:r,cid:o})}),console.log(t,"items",e),e};export{c as g,l as r};
