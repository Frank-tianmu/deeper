"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{82658:(e,t,l)=>{l.d(t,{YD:()=>N,iH:()=>L,p0:()=>P});var n=l(16266),o=l(30040),a=l(80238),i=l(34499),r=l(60572),d=l(61323),c=Object.defineProperty,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,l)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,g=(e,t)=>{for(var l in t||(t={}))s.call(t,l)&&m(e,l,t[l]);if(u)for(var l of u(t))p.call(t,l)&&m(e,l,t[l]);return e};function v(e,t){return Object.assign(e,{meta:g({package:"@milkdown/components"},t)}),e}var f=Object.defineProperty,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,$=(e,t,l)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,k=(e,t)=>{for(var l in t||(t={}))h.call(t,l)&&$(e,l,t[l]);if(b)for(var l of b(t))y.call(t,l)&&$(e,l,t[l]);return e};let w="image-block",N=(0,n.Yh)("image-block",()=>({inline:!1,group:"block",selectable:!0,draggable:!0,isolating:!0,marks:"",atom:!0,priority:100,attrs:{src:{default:""},caption:{default:""},ratio:{default:1}},parseDOM:[{tag:`img[data-type="${w}"]`,getAttrs:e=>{var t;if(!(e instanceof HTMLElement))throw(0,o.Ik)(e);return{src:e.getAttribute("src")||"",caption:e.getAttribute("caption")||"",ratio:Number(null!=(t=e.getAttribute("ratio"))?t:1)}}}],toDOM:e=>["img",k({"data-type":w},e.attrs)],parseMarkdown:{match:({type:e})=>"image-block"===e,runner:(e,t,l)=>{let n=t.url,o=t.title,a=Number(t.alt||1);(Number.isNaN(a)||0===a)&&(a=1),e.addNode(l,{src:n,caption:o,ratio:a})}},toMarkdown:{match:e=>"image-block"===e.type.name,runner:(e,t)=>{e.openNode("paragraph"),e.addNode("image",void 0,void 0,{title:t.attrs.caption,url:t.attrs.src,alt:`${Number.parseFloat(t.attrs.ratio).toFixed(2)}`}),e.closeNode()}}}));function x(e){return(0,a.YR)(e,"paragraph",(e,t,l)=>{var n,o;if((null==(n=e.children)?void 0:n.length)!==1)return;let a=null==(o=e.children)?void 0:o[0];if(!a||"image"!==a.type)return;let{url:i,alt:r,title:d}=a;l.children.splice(t,1,{type:"image-block",url:i,alt:r,title:d})})}v(N.node,{displayName:"NodeSchema<image-block>",group:"ImageBlock"});let I=(0,n.lz)("remark-image-block",()=>()=>x);v(I.plugin,{displayName:"Remark<remarkImageBlock>",group:"ImageBlock"}),v(I.options,{displayName:"RemarkConfig<remarkImageBlock>",group:"ImageBlock"});let P=(0,n.Qx)({imageIcon:()=>"\uD83C\uDF0C",captionIcon:()=>"\uD83D\uDCAC",uploadButton:()=>(0,i.qy)`Upload file`,confirmButton:()=>(0,i.qy)`Confirm ⏎`,uploadPlaceholderText:"or paste the image link ...",captionPlaceholderText:"Image caption",onUpload:e=>Promise.resolve(URL.createObjectURL(e))},"imageBlockConfigCtx");v(P,{displayName:"Config<image-block>",group:"ImageBlock"});var U=(e,t,l)=>new Promise((n,o)=>{var a=e=>{try{r(l.next(e))}catch(e){o(e)}},i=e=>{try{r(l.throw(e))}catch(e){o(e)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,i);r((l=l.apply(e,t)).next())});let B=0,O=(0,r.d_)("abcdefg",8),E=({src:e="",caption:t="",ratio:l=1,selected:n=!1,readonly:o=!1,setAttr:a,config:r})=>{let c=(0,i.li)(),u=(0,i.li)(),s=(0,i.li)(),[p,m]=(0,i.J0)(t.length>0),[g,v]=(0,i.J0)(0!==e.length),[f]=(0,i.J0)(O()),[b,h]=(0,i.J0)(!1),[y,$]=(0,i.J0)(e);!function({image:e,resizeHandle:t,ratio:l,setRatio:n,src:o,readonly:a}){let r=(0,i.KT)(),d=(0,i.Kr)(()=>r.current.getRootNode(),[r]);(0,i.vJ)(()=>{let t=e.current;t&&(delete t.dataset.origin,delete t.dataset.height,t.style.height="")},[o]),(0,i.vJ)(()=>{let o=t.current,i=e.current;if(!o||!i)return;let c=e=>{e.preventDefault();let t=i.getBoundingClientRect().top,l=e.clientY-t,n=Number(l<100?100:l).toFixed(2);i.dataset.height=n,i.style.height=`${n}px`},u=()=>{d.removeEventListener("pointermove",c),d.removeEventListener("pointerup",u);let e=Number(i.dataset.origin),t=Number.parseFloat(Number(Number(i.dataset.height)/e).toFixed(2));Number.isNaN(t)||n(t)},s=e=>{a||(e.preventDefault(),d.addEventListener("pointermove",c),d.addEventListener("pointerup",u))},p=e=>{let t=r.current.getBoundingClientRect().width;if(!t)return;let n=e.target,o=n.height,a=n.width,d=a<t?o:o/a*t,c=(d*l).toFixed(2);i.dataset.origin=d.toFixed(2),i.dataset.height=c,i.style.height=`${c}px`};return i.addEventListener("load",p),o.addEventListener("pointerdown",s),()=>{i.removeEventListener("load",p),o.removeEventListener("pointerdown",s)}},[])}({image:c,resizeHandle:u,ratio:l,setRatio:e=>null==a?void 0:a("ratio",e),src:e,readonly:o}),(0,i.vJ)(()=>{n||m(t.length>0)},[n]);let k=()=>{var e,t;null==a||a("src",null!=(t=null==(e=s.current)?void 0:e.value)?t:"")},N=e=>{e.preventDefault(),e.stopPropagation()};return(0,i.qy)`<host class=${(0,d.A)(n&&"selected")}>
    <div class=${(0,d.A)("image-edit",e.length>0&&"hidden")}>
      <div class="image-icon">${null==r?void 0:r.imageIcon()}</div>
      <div class=${(0,d.A)("link-importer",b&&"focus")}>
        <input
          ref=${s}
          draggable="true"
          ondragstart=${N}
          disabled=${o}
          class="link-input-area"
          value=${y}
          oninput=${e=>{let t=e.target.value;v(0!==t.length),$(t)}}
          onkeydown=${e=>{"Enter"===e.key&&k()}}
          onfocus=${()=>h(!0)}
          onblur=${()=>h(!1)}
        />
        <div class=${(0,d.A)("placeholder",g&&"hidden")}>
          <input
            disabled=${o}
            class="hidden"
            id=${f}
            type="file"
            accept="image/*"
            onchange=${e=>U(void 0,null,function*(){var t;let l=null==(t=e.target.files)?void 0:t[0];if(!l)return;let n=yield null==r?void 0:r.onUpload(l);n&&(null==a||a("src",n),v(!0))})}
          />
          <label class="uploader" for=${f}>
            ${null==r?void 0:r.uploadButton()}
          </label>
          <span class="text" onclick=${()=>{var e;return null==(e=s.current)?void 0:e.focus()}}>
            ${null==r?void 0:r.uploadPlaceholderText}
          </span>
        </div>
      </div>
      <div
        class=${(0,d.A)("confirm",0===y.length&&"hidden")}
        onclick=${()=>k()}
      >
        ${null==r?void 0:r.confirmButton()}
      </div>
    </div>
    <div class=${(0,d.A)("image-wrapper",0===e.length&&"hidden")}>
      <div class="operation">
        <div class="operation-item" onpointerdown=${e=>{e.preventDefault(),e.stopPropagation(),o||m(e=>!e)}}>
          ${null==r?void 0:r.captionIcon()}
        </div>
      </div>
      <img
        ref=${c}
        data-type=${w}
        src=${e}
        alt=${t}
        ratio=${l}
      />
      <div ref=${u} class="image-resize-handle"></div>
    </div>
    <input
      draggable="true"
      ondragstart=${N}
      class=${(0,d.A)("caption-input",!p&&"hidden")}
      placeholder=${null==r?void 0:r.captionPlaceholderText}
      oninput=${e=>{let t=e.target.value;B&&window.clearTimeout(B),B=window.setTimeout(()=>{null==a||a("caption",t)},1e3)}}
      onblur=${e=>{let t=e.target.value;B&&(window.clearTimeout(B),B=0),null==a||a("caption",t)}}
      value=${t}
    />
  </host>`};E.props={src:String,caption:String,ratio:Number,selected:Boolean,readonly:Boolean,setAttr:Function,config:Object},function(e,t){let l=customElements.get(e);if(null==l){customElements.define(e,t);return}l!==t&&console.warn(`Custom element ${e} has been defined before.`)}("milkdown-image-block",(0,i.c)(E));let A=(0,n.m5)(N.node,e=>(t,l,n)=>{let o=document.createElement("milkdown-image-block"),a=e.get(P.key),i=a.proxyDomURL,r=e=>{if(i){let t=i(e.attrs.src);"string"==typeof t?o.src=t:t.then(e=>{o.src=e})}else o.src=e.attrs.src;o.ratio=e.attrs.ratio,o.caption=e.attrs.caption,o.readonly=!l.editable};return r(t),o.selected=!1,o.setAttr=(e,t)=>{let o=n();null!=o&&l.dispatch(l.state.tr.setNodeAttribute(o,e,t))},o.config=a,{dom:o,update:e=>e.type===t.type&&(r(e),!0),stopEvent:e=>e.target instanceof HTMLInputElement,selectNode:()=>{o.selected=!0},deselectNode:()=>{o.selected=!1},destroy:()=>{o.remove()}}});v(A,{displayName:"NodeView<image-block>",group:"ImageBlock"});let L=[I,N,A,P].flat()},70249:(e,t,l)=>{l.d(t,{defineFeature:()=>N});var n=l(82658),o=l(16266),a=l(34499),i=l(11920),r=l(60572),d=l(61323),c=Object.defineProperty,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,l)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,g=(e,t)=>{for(var l in t||(t={}))s.call(t,l)&&m(e,l,t[l]);if(u)for(var l of u(t))p.call(t,l)&&m(e,l,t[l]);return e};function v(e,t){return Object.assign(e,{meta:g({package:"@milkdown/components"},t)}),e}let f=(0,o.Qx)({imageIcon:()=>"\uD83C\uDF0C",uploadButton:()=>(0,a.qy)`Upload`,confirmButton:()=>(0,a.qy)`⏎`,uploadPlaceholderText:"/Paste",onUpload:e=>Promise.resolve(URL.createObjectURL(e))},"inlineImageConfigCtx");v(f,{displayName:"Config<image-inline>",group:"ImageInline"});var b=(e,t,l)=>new Promise((n,o)=>{var a=e=>{try{r(l.next(e))}catch(e){o(e)}},i=e=>{try{r(l.throw(e))}catch(e){o(e)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,i);r((l=l.apply(e,t)).next())});let h=(0,r.d_)("abcdefg",8),y=({src:e="",selected:t=!1,alt:l,title:n,setAttr:o,config:i})=>{let r=(0,a.li)(),[c]=(0,a.J0)(h()),[u,s]=(0,a.J0)(!1),[p,m]=(0,a.J0)(0!==e.length),[g,v]=(0,a.J0)(e),f=()=>{var e,t;null==o||o("src",null!=(t=null==(e=r.current)?void 0:e.value)?t:"")};return(0,a.qy)`<host class=${(0,d.A)(t&&"selected",!e&&"empty")}>
    ${e?(0,a.qy)`<img class="image-inline" src=${e} alt=${l} title=${n} />`:(0,a.qy)`<div class="empty-image-inline">
          <div class="image-icon">${null==i?void 0:i.imageIcon()}</div>
          <div class=${(0,d.A)("link-importer",u&&"focus")}>
            <input
              draggable="true"
              ref=${r}
              ondragstart=${e=>{e.preventDefault(),e.stopPropagation()}}
              class="link-input-area"
              value=${g}
              oninput=${e=>{let t=e.target.value;m(0!==t.length),v(t)}}
              onkeydown=${e=>{"Enter"===e.key&&f()}}
              onfocus=${()=>s(!0)}
              onblur=${()=>s(!1)}
            />
            <div class=${(0,d.A)("placeholder",p&&"hidden")}>
              <input
                class="hidden"
                id=${c}
                type="file"
                accept="image/*"
                onchange=${e=>b(void 0,null,function*(){var t;let l=null==(t=e.target.files)?void 0:t[0];if(!l)return;let n=yield null==i?void 0:i.onUpload(l);n&&(null==o||o("src",n),m(!0))})}
              />
              <label class="uploader" for=${c}>
                ${null==i?void 0:i.uploadButton()}
              </label>
              <span class="text" onclick=${()=>{var e;return null==(e=r.current)?void 0:e.focus()}}>
                ${null==i?void 0:i.uploadPlaceholderText}
              </span>
            </div>
          </div>
          <div
            class=${(0,d.A)("confirm",0===g.length&&"hidden")}
            onclick=${()=>f()}
          >
            ${null==i?void 0:i.confirmButton()}
          </div>
        </div>`}
  </host>`};y.props={src:String,alt:String,title:String,selected:Boolean,setAttr:Function,config:Object},function(e,t){let l=customElements.get(e);if(null==l){customElements.define(e,t);return}l!==t&&console.warn(`Custom element ${e} has been defined before.`)}("milkdown-image-inline",(0,a.c)(y));let $=(0,o.m5)(i.Fi.node,e=>(t,l,n)=>{let o=document.createElement("milkdown-image-inline"),a=e.get(f.key),i=a.proxyDomURL,r=e=>{if(i){let t=i(e.attrs.src);"string"==typeof t?o.src=t:t.then(e=>{o.src=e})}else o.src=e.attrs.src;o.alt=e.attrs.alt,o.title=e.attrs.title};return r(t),o.selected=!1,o.setAttr=(e,t)=>{let o=n();null!=o&&l.dispatch(l.state.tr.setNodeAttribute(o,e,t))},o.config=a,{dom:o,update:e=>e.type===t.type&&(r(e),!0),stopEvent:e=>!!(o.selected&&e.target instanceof HTMLInputElement),selectNode:()=>{o.selected=!0},deselectNode:()=>{o.selected=!1},destroy:()=>{o.remove()}}});v($,{displayName:"NodeView<image-inline>",group:"ImageInline"});let k=[f,$];var w=l(85836);let N=(e,t)=>{e.config(e=>{e.update(f.key,e=>{var l,n,o,a,i,r;return{uploadButton:null!=(l=null==t?void 0:t.inlineUploadButton)?l:()=>"Upload",imageIcon:null!=(n=null==t?void 0:t.inlineImageIcon)?n:()=>w.i,confirmButton:null!=(o=null==t?void 0:t.inlineConfirmButton)?o:()=>w.g,uploadPlaceholderText:null!=(a=null==t?void 0:t.inlineUploadPlaceholderText)?a:"or paste link",onUpload:null!=(r=null!=(i=null==t?void 0:t.inlineOnUpload)?i:null==t?void 0:t.onUpload)?r:e.onUpload,proxyDomURL:null==t?void 0:t.proxyDomURL}}),e.update(n.p0.key,e=>{var l,n,o,a,i,r,d,c;return{uploadButton:null!=(l=null==t?void 0:t.blockUploadButton)?l:()=>"Upload file",imageIcon:null!=(n=null==t?void 0:t.blockImageIcon)?n:()=>w.i,captionIcon:null!=(o=null==t?void 0:t.blockCaptionIcon)?o:()=>w.j,confirmButton:null!=(a=null==t?void 0:t.blockConfirmButton)?a:()=>"Confirm",captionPlaceholderText:null!=(i=null==t?void 0:t.blockCaptionPlaceholderText)?i:"Write Image Caption",uploadPlaceholderText:null!=(r=null==t?void 0:t.blockUploadPlaceholderText)?r:"or paste link",onUpload:null!=(c=null!=(d=null==t?void 0:t.blockOnUpload)?d:null==t?void 0:t.onUpload)?c:e.onUpload,proxyDomURL:null==t?void 0:t.proxyDomURL}})}).use(n.iH).use(k)}}}]);