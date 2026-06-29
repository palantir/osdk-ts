import{j as o}from"./iframe-DgoyKrMA.js";import{B as n}from"./PdfViewer-CFy9eu2G.js";import"./preload-helper-B0nQfTcI.js";import"./index-AaUdncAY.js";import"./PdfViewer.module.css-CNr2eY-6.js";import"./PdfViewerAnnotationLayer-ihrLcwed.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5Ntd6Ts7.js";import"./PdfViewerOutlineSidebar-BCuqXeKw.js";import"./PdfViewerSidebarHeader-RcPDEgLS.js";import"./useBaseUiId-DuSsdC-V.js";import"./useControlled-Bf5Je3fS.js";import"./CompositeRoot-Ct4C5fbl.js";import"./CompositeItem-Cr2thBXg.js";import"./ToolbarRootContext-B2lXsL_Q.js";import"./composite-B2UAnxY_.js";import"./svgIconContainer-CjREsQum.js";import"./PdfViewerSearchBar-B7F2_zEI.js";import"./chevron-up-hl68Td60.js";import"./chevron-down-DPt7J5eG.js";import"./cross-DJcC46zn.js";import"./PdfViewerSidebar-CqIMuhZ0.js";import"./index-BgnwFznl.js";import"./index-ClrSkKoK.js";import"./index-ivmBoQou.js";import"./PdfViewerToolbar-CSP4TJtM.js";import"./Button-CnrRhfIU.js";import"./chevron-right-DwvC9L_o.js";import"./Input-BwILyUm2.js";import"./minus-CI3B_Ta0.js";import"./search-DV7KFLuZ.js";import"./spin-CATvyeqF.js";import"./error-B4hvPJmm.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3464/7ec55a88458b1088fca4daf94149185ee272e672/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
