import{r as t,R as r,j as P}from"./iframe-B0aax5t4.js";import{c as k}from"./index-CA_7V0ln.js";import{u as M,a as U,b as Y,s as a,P as z}from"./BasePdfViewer.module.css-B6kbXRso.js";import{E as C}from"./constants-DsXMS3N3.js";import{S as Z}from"./spin-CIOAQIJM.js";import{E as K}from"./error-DSukmTRO.js";import"./preload-helper-B_i0Odcu.js";import"./PdfViewerAnnotationLayer-DQcwMMKT.js";import"./usePdfDocument-D169rm64.js";import"./svgIconContainer-DSeQyMEd.js";function E({src:m,annotations:b=C,onAnnotationClick:x,defaultPage:O,initialPage:B,defaultScale:I,initialScale:T,onPageChange:p,onScaleChange:f,formData:D,onFormChange:F,className:j}){const e=M({src:m,defaultPage:O,initialPage:B,defaultScale:I,initialScale:T}),L=U(b);Y({pdfViewerRef:e.pdfViewerRef,eventBusRef:e.eventBusRef,document:e.document,formData:D,onFormChange:F});const s=t.useRef(p);s.current=p;const o=t.useRef(f);o.current=f;const u=t.useRef(!0);t.useEffect(function(){var n;u.current||(n=s.current)==null||n.call(s,e.currentPage)},[e.currentPage]),t.useEffect(function(){var n;u.current||(n=o.current)==null||n.call(o,e.scale)},[e.scale]),t.useEffect(function(){u.current=!1},[]);const c=k(a.pdfViewer,j);return e.loading?r.createElement("div",{className:c},r.createElement("div",{className:a.loadingContainer},r.createElement(Z,{className:a.spinnerIcon}),"Loading…")):e.error!=null?r.createElement("div",{className:c},r.createElement("div",{className:a.errorContainer},r.createElement(K,{className:a.errorIcon}),"Failed to load PDF: ",e.error.message)):e.document==null?r.createElement("div",{className:c},r.createElement("div",{className:a.loadingContainer},"No document")):r.createElement("div",{className:c},r.createElement("div",{className:a.scrollContainerWrapper},r.createElement("div",{ref:e.containerRef,className:a.scrollContainer},r.createElement("div",{ref:e.viewerRef,className:"pdfViewer"}),e.portalTargets.map(n=>{const g=L[n.pageNumber]??C;return g.length===0?null:r.createElement(z,{key:n.pageNumber,target:n,annotations:g,onAnnotationClick:x})}))))}const{fn:w}=__STORYBOOK_MODULE_TEST__,W="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",ae={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Content",component:E,tags:["beta"],args:{src:W,onPageChange:w(),onScaleChange:w()},render:m=>P.jsx("div",{style:{height:"600px"},children:P.jsx(E,{...m})}),argTypes:{src:{description:"PDF source — URL string, ArrayBuffer, Uint8Array, or Blob",control:!1},defaultPage:{description:"Initial page number (1-indexed)",control:{type:"number",min:1}},defaultScale:{description:"Initial zoom scale",control:{type:"number",min:.25,max:5,step:.25}}}},i={parameters:{docs:{source:{code:`
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={setCurrentPage}
  onScaleChange={setScale}
/>`}}}},l={args:{defaultScale:2},parameters:{docs:{source:{code:`
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={setScale}
/>`}}}},d={args:{defaultPage:5},parameters:{docs:{source:{code:`
<PdfViewerContent
  src="/whitepaper.pdf"
  initialPage={5}
  onPageChange={setCurrentPage}
/>`}}}};var S,h,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={setCurrentPage}
  onScaleChange={setScale}
/>\`
      }
    }
  }
}`,...(N=(h=i.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var R,v,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultScale: 2
  },
  parameters: {
    docs: {
      source: {
        code: \`
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={setScale}
/>\`
      }
    }
  }
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var y,_,A;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultPage: 5
  },
  parameters: {
    docs: {
      source: {
        code: \`
<PdfViewerContent
  src="/whitepaper.pdf"
  initialPage={5}
  onPageChange={setCurrentPage}
/>\`
      }
    }
  }
}`,...(A=(_=d.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const te=["Default","ZoomedIn","StartOnPage5"];export{i as Default,d as StartOnPage5,l as ZoomedIn,te as __namedExportsOrder,ae as default};
