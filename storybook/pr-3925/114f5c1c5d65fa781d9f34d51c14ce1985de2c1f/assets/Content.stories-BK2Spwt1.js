import{r as t,R as n,j as h}from"./iframe-CuEjl7Uz.js";import{c as F}from"./index-BYfl2w_f.js";import{u as U,a as j,b as L,s as a,P as z}from"./BasePdfViewer.module.css-2FIs03Vx.js";import{E as P}from"./constants-DsXMS3N3.js";import{S as M}from"./spin-Be3PhZ9-.js";import{E as Y}from"./error-NZ5oWKud.js";import"./preload-helper-Bnv-TItm.js";import"./PdfViewerAnnotationLayer-Bu7rWEl4.js";import"./usePdfDocument-CXsnQS6c.js";import"./svgIconContainer-Dd92hyPw.js";function w({src:m,annotations:_=P,onAnnotationClick:A,initialPage:O=1,initialScale:T=1,onPageChange:u,onScaleChange:g,formData:B,onFormChange:D,className:I}){const e=U({src:m,initialPage:O,initialScale:T}),k=j(_);L({pdfViewerRef:e.pdfViewerRef,eventBusRef:e.eventBusRef,document:e.document,formData:B,onFormChange:D});const o=t.useRef(u);o.current=u;const s=t.useRef(g);s.current=g;const p=t.useRef(!0);t.useEffect(function(){var r;p.current||(r=o.current)==null||r.call(o,e.currentPage)},[e.currentPage]),t.useEffect(function(){var r;p.current||(r=s.current)==null||r.call(s,e.scale)},[e.scale]),t.useEffect(function(){p.current=!1},[]);const i=F(a.pdfViewer,I);return e.loading?n.createElement("div",{className:i},n.createElement("div",{className:a.loadingContainer},n.createElement(M,{className:a.spinnerIcon}),"Loading…")):e.error!=null?n.createElement("div",{className:i},n.createElement("div",{className:a.errorContainer},n.createElement(Y,{className:a.errorIcon}),"Failed to load PDF: ",e.error.message)):e.document==null?n.createElement("div",{className:i},n.createElement("div",{className:a.loadingContainer},"No document")):n.createElement("div",{className:i},n.createElement("div",{className:a.scrollContainerWrapper},n.createElement("div",{ref:e.containerRef,className:a.scrollContainer},n.createElement("div",{ref:e.viewerRef,className:"pdfViewer"}),e.portalTargets.map(r=>{const f=k[r.pageNumber]??P;return f.length===0?null:n.createElement(z,{key:r.pageNumber,target:r,annotations:f,onAnnotationClick:A})}))))}const{fn:C}=__STORYBOOK_MODULE_TEST__,Z="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",ne={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Content",component:w,tags:["beta"],args:{src:Z,onPageChange:C(),onScaleChange:C()},render:m=>h.jsx("div",{style:{height:"600px"},children:h.jsx(w,{...m})}),argTypes:{src:{description:"PDF source — URL string, ArrayBuffer, Uint8Array, or Blob",control:!1},initialPage:{description:"Initial page number (1-indexed)",control:{type:"number",min:1}},initialScale:{description:"Initial zoom scale",control:{type:"number",min:.25,max:5,step:.25}}}},c={parameters:{docs:{source:{code:`// The scrolling page canvas on its own — no toolbar, sidebar, or search.
// Use it when you want to supply your own chrome around the pages.
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={setCurrentPage}
  onScaleChange={setScale}
/>`}}}},l={args:{initialScale:2},parameters:{docs:{source:{code:`// initialScale is uncontrolled — later zooming reports through onScaleChange
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={setScale}
/>`}}}},d={args:{initialPage:5},parameters:{docs:{source:{code:`// Deep-link into a document by scrolling straight to a page (1-indexed)
<PdfViewerContent
  src="/whitepaper.pdf"
  initialPage={5}
  onPageChange={setCurrentPage}
/>`}}}};var S,E,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`// The scrolling page canvas on its own — no toolbar, sidebar, or search.
// Use it when you want to supply your own chrome around the pages.
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={setCurrentPage}
  onScaleChange={setScale}
/>\`
      }
    }
  }
}`,...(y=(E=c.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var N,v,R;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
  onScaleChange={setScale}
/>\`
      }
    }
  }
}`,...(R=(v=l.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var b,V,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  onPageChange={setCurrentPage}
/>\`
      }
    }
  }
}`,...(x=(V=d.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const re=["Default","ZoomedIn","StartOnPage5"];export{c as Default,d as StartOnPage5,l as ZoomedIn,re as __namedExportsOrder,ne as default};
