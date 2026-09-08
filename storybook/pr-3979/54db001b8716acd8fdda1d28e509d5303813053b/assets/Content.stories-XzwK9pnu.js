import{r as t,j as e}from"./iframe-Xc_JH78I.js";import"./pdf-viewer-C33F1GDH.js";import{c as L}from"./svgIconContainer-CQmggZ37.js";import{f as M,g as U,h as Y,s as a,E as P,i as k}from"./PdfViewer-DFM3n76K.js";import{S as z}from"./spin-BsDWnG40.js";import{E as Z}from"./error-D-Pc-XbV.js";import"./preload-helper-AYl1pujm.js";import"./withOsdkMetrics-CzAtW5Pc.js";import"./useBaseUiId-BI3SiDaB.js";import"./Input-BFx2x6nA.js";import"./index-BLCrQc9J.js";import"./index-CsuxBpJ0.js";import"./CompositeRoot-DQx8BA1N.js";import"./CompositeItem-B_3aLVYQ.js";import"./ToolbarRootContext-we2pFgZ9.js";import"./index-Bp1R9O-s.js";import"./chevron-right-B5er9inO.js";function h({src:m,annotations:E=P,onAnnotationClick:_,defaultPage:A,initialPage:O,defaultScale:b,initialScale:B,onPageChange:f,onScaleChange:g,formData:I,onFormChange:T,className:D}){const r=M({src:m,defaultPage:A,initialPage:O,defaultScale:b,initialScale:B}),F=U(E);Y({pdfViewerRef:r.pdfViewerRef,eventBusRef:r.eventBusRef,document:r.document,formData:I,onFormChange:T});const o=t.useRef(f);o.current=f;const i=t.useRef(g);i.current=g;const u=t.useRef(!0);t.useEffect(function(){var n;u.current||(n=o.current)==null||n.call(o,r.currentPage)},[r.currentPage]),t.useEffect(function(){var n;u.current||(n=i.current)==null||n.call(i,r.scale)},[r.scale]),t.useEffect(function(){u.current=!1},[]);const c=L(a.pdfViewer,D);return r.loading?e.jsx("div",{className:c,children:e.jsxs("div",{className:a.loadingContainer,children:[e.jsx(z,{className:a.spinnerIcon}),"Loading…"]})}):r.error!=null?e.jsx("div",{className:c,children:e.jsxs("div",{className:a.errorContainer,children:[e.jsx(Z,{className:a.errorIcon}),"Failed to load PDF: ",r.error.message]})}):r.document==null?e.jsx("div",{className:c,children:e.jsx("div",{className:a.loadingContainer,children:"No document"})}):e.jsx("div",{className:c,children:e.jsx("div",{className:a.scrollContainerWrapper,children:e.jsxs("div",{ref:r.containerRef,className:a.scrollContainer,children:[e.jsx("div",{ref:r.viewerRef,className:"pdfViewer"}),r.portalTargets.map(s=>{const n=F[s.pageNumber]??P;return n.length===0?null:e.jsx(k,{target:s,annotations:n,onAnnotationClick:_},s.pageNumber)})]})})})}const{fn:C}=__STORYBOOK_MODULE_TEST__,K="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",de={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Content",component:h,tags:["beta"],args:{src:K,onPageChange:C(),onScaleChange:C()},render:m=>e.jsx("div",{style:{height:"600px"},children:e.jsx(h,{...m})}),argTypes:{src:{description:"PDF source — URL string, ArrayBuffer, Uint8Array, or Blob",control:!1},defaultPage:{description:"Initial page number (1-indexed)",control:{type:"number",min:1}},defaultScale:{description:"Initial zoom scale",control:{type:"number",min:.25,max:5,step:.25}}}},d={parameters:{docs:{source:{code:`
<PdfViewerContent
  src="/whitepaper.pdf"
  onPageChange={setCurrentPage}
  onScaleChange={setScale}
/>`}}}},l={args:{defaultScale:2},parameters:{docs:{source:{code:`
<PdfViewerContent
  src="/whitepaper.pdf"
  initialScale={2}
  onScaleChange={setScale}
/>`}}}},p={args:{defaultPage:5},parameters:{docs:{source:{code:`
<PdfViewerContent
  src="/whitepaper.pdf"
  initialPage={5}
  onPageChange={setCurrentPage}
/>`}}}};var S,w,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var N,j,v;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(v=(j=l.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var R,V,y;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(y=(V=p.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};const le=["Default","ZoomedIn","StartOnPage5"];export{d as Default,p as StartOnPage5,l as ZoomedIn,le as __namedExportsOrder,de as default};
