import{r as t,R as n,j as h}from"./iframe-CXrz77U6.js";import{c as F}from"./index-X106RkLU.js";import{u as U,a as j,b as L,s as r,P as z}from"./BasePdfViewer.module.css-lsFasZrY.js";import{E as P}from"./constants-DsXMS3N3.js";import{S as M}from"./spin-CnybUjHn.js";import{E as Y}from"./error-CjxcPcQH.js";import"./preload-helper-CKbgkQtS.js";import"./PdfViewerAnnotationLayer-BDaKcDcs.js";import"./usePdfDocument-DgqTutja.js";import"./svgIconContainer-C1hoWfOl.js";function w({src:d,annotations:_=P,onAnnotationClick:A,initialPage:O=1,initialScale:T=1,onPageChange:u,onScaleChange:g,formData:B,onFormChange:D,className:I}){const e=U({src:d,initialPage:O,initialScale:T}),k=j(_);L({pdfViewerRef:e.pdfViewerRef,eventBusRef:e.eventBusRef,document:e.document,formData:B,onFormChange:D});const o=t.useRef(u);o.current=u;const s=t.useRef(g);s.current=g;const m=t.useRef(!0);t.useEffect(function(){var a;m.current||(a=o.current)==null||a.call(o,e.currentPage)},[e.currentPage]),t.useEffect(function(){var a;m.current||(a=s.current)==null||a.call(s,e.scale)},[e.scale]),t.useEffect(function(){m.current=!1},[]);const c=F(r.pdfViewer,I);return e.loading?n.createElement("div",{className:c},n.createElement("div",{className:r.loadingContainer},n.createElement(M,{className:r.spinnerIcon}),"Loading…")):e.error!=null?n.createElement("div",{className:c},n.createElement("div",{className:r.errorContainer},n.createElement(Y,{className:r.errorIcon}),"Failed to load PDF: ",e.error.message)):e.document==null?n.createElement("div",{className:c},n.createElement("div",{className:r.loadingContainer},"No document")):n.createElement("div",{className:c},n.createElement("div",{className:r.scrollContainerWrapper},n.createElement("div",{ref:e.containerRef,className:r.scrollContainer},n.createElement("div",{ref:e.viewerRef,className:"pdfViewer"}),e.portalTargets.map(a=>{const f=k[a.pageNumber]??P;return f.length===0?null:n.createElement(z,{key:a.pageNumber,target:a,annotations:f,onAnnotationClick:A})}))))}const{fn:C}=__STORYBOOK_MODULE_TEST__,Z="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",ne={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Content",component:w,tags:["beta"],args:{src:Z,onPageChange:C(),onScaleChange:C()},render:d=>h.jsx("div",{style:{height:"600px"},children:h.jsx(w,{...d})}),argTypes:{src:{description:"PDF source — URL string, ArrayBuffer, Uint8Array, or Blob",control:!1},initialPage:{description:"Initial page number (1-indexed)",control:{type:"number",min:1}},initialScale:{description:"Initial zoom scale",control:{type:"number",min:.25,max:5,step:.25}}}},i={parameters:{docs:{source:{code:`// The scrolling page canvas on its own — no toolbar, sidebar, or search.
// Use it when you want to supply your own chrome around the pages.
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={(page) => setCurrentPage(page)}
  onScaleChange={(scale) => setScale(scale)}
/>`}}}},l={args:{initialScale:2},parameters:{docs:{source:{code:`// initialScale is uncontrolled — later zooming reports through onScaleChange
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={(scale) => setScale(scale)}
/>`}}}},p={args:{initialPage:5},parameters:{docs:{source:{code:`// Deep-link into a document by scrolling straight to a page (1-indexed)
<PdfViewerContent
  src="/whitepaper.pdf"
  initialPage={5}
  onPageChange={(page) => setCurrentPage(page)}
/>`}}}};var S,E,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// The scrolling page canvas on its own — no toolbar, sidebar, or search.
// Use it when you want to supply your own chrome around the pages.
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={(page) => setCurrentPage(page)}
  onScaleChange={(scale) => setScale(scale)}
/>\`
      }
    }
  }
}`,...(y=(E=i.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var N,v,R;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    initialScale: 2
  },
  parameters: {
    docs: {
      source: {
        code: \`// initialScale is uncontrolled — later zooming reports through onScaleChange
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={(scale) => setScale(scale)}
/>\`
      }
    }
  }
}`,...(R=(v=l.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var b,V,x;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    initialPage: 5
  },
  parameters: {
    docs: {
      source: {
        code: \`// Deep-link into a document by scrolling straight to a page (1-indexed)
<PdfViewerContent
  src="/whitepaper.pdf"
  initialPage={5}
  onPageChange={(page) => setCurrentPage(page)}
/>\`
      }
    }
  }
}`,...(x=(V=p.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const ae=["Default","ZoomedIn","StartOnPage5"];export{i as Default,p as StartOnPage5,l as ZoomedIn,ae as __namedExportsOrder,ne as default};
