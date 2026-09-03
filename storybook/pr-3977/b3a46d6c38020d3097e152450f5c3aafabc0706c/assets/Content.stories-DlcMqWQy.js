import{r as t,R as n,j as P}from"./iframe-C-b6oTOJ.js";import{c as j}from"./index-DE1s0YYF.js";import{u as L,a as k,b as M,s as a,P as U}from"./BasePdfViewer.module.css-DjwK060C.js";import{E as C}from"./constants-DsXMS3N3.js";import{S as Y}from"./spin-CYHqXpOb.js";import{E as z}from"./error-ByhaKTr1.js";import"./preload-helper-BeH59gqJ.js";import"./PdfViewerAnnotationLayer-CQ2_MTI6.js";import"./usePdfDocument-D540CxjQ.js";import"./svgIconContainer-OHRV30Tv.js";function E({src:d,annotations:b=C,onAnnotationClick:x,initialPage:O=1,initialScale:B=1,onPageChange:u,onScaleChange:f,formData:I,onFormChange:T,className:D}){const e=L({src:d,initialPage:O,initialScale:B}),F=k(b);M({pdfViewerRef:e.pdfViewerRef,eventBusRef:e.eventBusRef,document:e.document,formData:I,onFormChange:T});const s=t.useRef(u);s.current=u;const o=t.useRef(f);o.current=f;const p=t.useRef(!0);t.useEffect(function(){var r;p.current||(r=s.current)==null||r.call(s,e.currentPage)},[e.currentPage]),t.useEffect(function(){var r;p.current||(r=o.current)==null||r.call(o,e.scale)},[e.scale]),t.useEffect(function(){p.current=!1},[]);const c=j(a.pdfViewer,D);return e.loading?n.createElement("div",{className:c},n.createElement("div",{className:a.loadingContainer},n.createElement(Y,{className:a.spinnerIcon}),"Loading…")):e.error!=null?n.createElement("div",{className:c},n.createElement("div",{className:a.errorContainer},n.createElement(z,{className:a.errorIcon}),"Failed to load PDF: ",e.error.message)):e.document==null?n.createElement("div",{className:c},n.createElement("div",{className:a.loadingContainer},"No document")):n.createElement("div",{className:c},n.createElement("div",{className:a.scrollContainerWrapper},n.createElement("div",{ref:e.containerRef,className:a.scrollContainer},n.createElement("div",{ref:e.viewerRef,className:"pdfViewer"}),e.portalTargets.map(r=>{const g=F[r.pageNumber]??C;return g.length===0?null:n.createElement(U,{key:r.pageNumber,target:r,annotations:g,onAnnotationClick:x})}))))}const{fn:w}=__STORYBOOK_MODULE_TEST__,Z="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",ne={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Content",component:E,tags:["beta"],args:{src:Z,onPageChange:w(),onScaleChange:w()},render:d=>P.jsx("div",{style:{height:"600px"},children:P.jsx(E,{...d})}),argTypes:{src:{description:"PDF source — URL string, ArrayBuffer, Uint8Array, or Blob",control:!1},initialPage:{description:"Initial page number (1-indexed)",control:{type:"number",min:1}},initialScale:{description:"Initial zoom scale",control:{type:"number",min:.25,max:5,step:.25}}}},i={parameters:{docs:{source:{code:`
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={setCurrentPage}
  onScaleChange={setScale}
/>`}}}},l={args:{initialScale:2},parameters:{docs:{source:{code:`
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={setScale}
/>`}}}},m={args:{initialPage:5},parameters:{docs:{source:{code:`
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
    initialScale: 2
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
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var y,_,A;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    initialPage: 5
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
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const re=["Default","ZoomedIn","StartOnPage5"];export{i as Default,m as StartOnPage5,l as ZoomedIn,re as __namedExportsOrder,ne as default};
