import{j as o}from"./iframe-CYzPhqNF.js";import{B as n}from"./PdfViewer-0UvinBJy.js";import"./preload-helper-tzg7hJyQ.js";import"./index-aPgoDgP6.js";import"./PdfViewer.module.css-CjNGAz_E.js";import"./PdfViewerAnnotationLayer-QFkZxu02.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiUR8e-r.js";import"./PdfViewerOutlineSidebar-CA4zkJ6J.js";import"./PdfViewerSidebarHeader-DaXjDQK3.js";import"./useBaseUiId-CCxAf9XS.js";import"./useControlled-eQzq91Xt.js";import"./CompositeRoot-Cgywoybj.js";import"./CompositeItem-DaTODz3c.js";import"./ToolbarRootContext-DDnigm3W.js";import"./composite-D4ZsZXjU.js";import"./svgIconContainer-DRztJJ-n.js";import"./PdfViewerSearchBar-jb6T2msA.js";import"./chevron-up-FjcC8_A8.js";import"./chevron-down-DqSk9KM1.js";import"./cross-WNLTNtZf.js";import"./PdfViewerSidebar-vKKVQIjc.js";import"./index-qCO_ViKL.js";import"./index-Dtstj2gu.js";import"./index-zTYoqu0b.js";import"./PdfViewerToolbar-BRPay8TZ.js";import"./Button-BKbrB7tN.js";import"./chevron-right-Do8KFo1r.js";import"./Input-BNKW669K.js";import"./minus-DmVykcjm.js";import"./search-D7-70Oq1.js";import"./spin-C-DtirFd.js";import"./error-fLAgbys2.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3586/8fe9eae843327676e15309df25b15665fe7adf26/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: (props) => <TooltipAnnotation {...props} />,
    },
  ]}
  onAnnotationClick={(annotation) => console.log("Clicked:", annotation.id)}
/>`}}}};var i,a,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
import { BasePdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: (props) => <TooltipAnnotation {...props} />,
    },
  ]}
  onAnnotationClick={(annotation) => console.log("Clicked:", annotation.id)}
/>\`
      }
    }
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["CustomAnnotation"];export{e as CustomAnnotation,$ as __namedExportsOrder,Y as default};
