import{r as a,R as n,j as w}from"./iframe-h1qnQQVx.js";import{c as F}from"./index-DD5KPom6.js";import{u as U,a as j,b as L,s as t,P as z}from"./BasePdfViewer.module.css-CYTvYHYd.js";import{E as P}from"./constants-DsXMS3N3.js";import{S as M}from"./spin-EKFZA19f.js";import{E as Y}from"./error-DJpMatiu.js";import"./preload-helper-ADovFD1C.js";import"./PdfViewerAnnotationLayer-AWh8kJjx.js";import"./usePdfDocument-DKd31f_Y.js";import"./svgIconContainer-Ca3ASY3c.js";function h({src:m,annotations:k=P,onAnnotationClick:_,initialPage:A=1,initialScale:O=1,onPageChange:u,onScaleChange:f,formData:T,onFormChange:B,className:D}){const e=U({src:m,initialPage:A,initialScale:O}),I=j(k);L({pdfViewerRef:e.pdfViewerRef,eventBusRef:e.eventBusRef,document:e.document,formData:T,onFormChange:B});const o=a.useRef(u);o.current=u;const s=a.useRef(f);s.current=f;const d=a.useRef(!0);a.useEffect(function(){var r;d.current||(r=o.current)==null||r.call(o,e.currentPage)},[e.currentPage]),a.useEffect(function(){var r;d.current||(r=s.current)==null||r.call(s,e.scale)},[e.scale]),a.useEffect(function(){d.current=!1},[]);const i=F(t.pdfViewer,D);return e.loading?n.createElement("div",{className:i},n.createElement("div",{className:t.loadingContainer},n.createElement(M,{className:t.spinnerIcon}),"Loading…")):e.error!=null?n.createElement("div",{className:i},n.createElement("div",{className:t.errorContainer},n.createElement(Y,{className:t.errorIcon}),"Failed to load PDF: ",e.error.message)):e.document==null?n.createElement("div",{className:i},n.createElement("div",{className:t.loadingContainer},"No document")):n.createElement("div",{className:i},n.createElement("div",{className:t.scrollContainerWrapper},n.createElement("div",{ref:e.containerRef,className:t.scrollContainer},n.createElement("div",{ref:e.viewerRef,className:"pdfViewer"}),e.portalTargets.map(r=>{const g=I[r.pageNumber]??P;return g.length===0?null:n.createElement(z,{key:r.pageNumber,target:r,annotations:g,onAnnotationClick:_})}))))}const{fn:C}=__STORYBOOK_MODULE_TEST__,Z="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",ne={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Content",component:h,tags:["beta"],args:{src:Z,onPageChange:C(),onScaleChange:C()},render:m=>w.jsx("div",{style:{height:"600px"},children:w.jsx(h,{...m})}),argTypes:{src:{description:"PDF source — URL string, ArrayBuffer, Uint8Array, or Blob",control:!1},initialPage:{description:"Initial page number (1-indexed)",control:{type:"number",min:1}},initialScale:{description:"Initial zoom scale",control:{type:"number",min:.25,max:5,step:.25}}}},c={parameters:{docs:{source:{code:`import { PdfViewerContent } from "@osdk/react-components/experimental/pdf-viewer";

// The scrolling page canvas on its own — no toolbar, sidebar, or search.
// Use it when you want to supply your own chrome around the pages.
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={(page) => setCurrentPage(page)}
  onScaleChange={(scale) => setScale(scale)}
/>`}}}},l={args:{initialScale:2},parameters:{docs:{source:{code:`import { PdfViewerContent } from "@osdk/react-components/experimental/pdf-viewer";

// initialScale is uncontrolled — later zooming reports through onScaleChange
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={(scale) => setScale(scale)}
/>`}}}},p={args:{initialPage:5},parameters:{docs:{source:{code:`import { PdfViewerContent } from "@osdk/react-components/experimental/pdf-viewer";

// Deep-link into a document by scrolling straight to a page (1-indexed)
<PdfViewerContent
  src="/whitepaper.pdf"
  initialPage={5}
  onPageChange={(page) => setCurrentPage(page)}
/>`}}}};var S,E,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerContent } from "@osdk/react-components/experimental/pdf-viewer";

// The scrolling page canvas on its own — no toolbar, sidebar, or search.
// Use it when you want to supply your own chrome around the pages.
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={(page) => setCurrentPage(page)}
  onScaleChange={(scale) => setScale(scale)}
/>\`
      }
    }
  }
}`,...(v=(E=c.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var y,V,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    initialScale: 2
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerContent } from "@osdk/react-components/experimental/pdf-viewer";

// initialScale is uncontrolled — later zooming reports through onScaleChange
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={(scale) => setScale(scale)}
/>\`
      }
    }
  }
}`,...(N=(V=l.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var x,R,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    initialPage: 5
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerContent } from "@osdk/react-components/experimental/pdf-viewer";

// Deep-link into a document by scrolling straight to a page (1-indexed)
<PdfViewerContent
  src="/whitepaper.pdf"
  initialPage={5}
  onPageChange={(page) => setCurrentPage(page)}
/>\`
      }
    }
  }
}`,...(b=(R=p.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};const re=["Default","ZoomedIn","StartOnPage5"];export{c as Default,p as StartOnPage5,l as ZoomedIn,re as __namedExportsOrder,ne as default};
