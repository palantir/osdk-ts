import{j as o}from"./iframe-BXTBckj4.js";import{B as e}from"./PdfViewer-DwbNwr93.js";import"./preload-helper-OEshUzXa.js";import"./index-B7qC8qa2.js";import"./PdfViewer.module.css-DnDGGOQX.js";import"./PdfViewerAnnotationLayer-BRWn_-hx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJoe8eMW.js";import"./PdfViewerOutlineSidebar-0tB7jizB.js";import"./PdfViewerSidebarHeader-Lwh28F5C.js";import"./useBaseUiId-BK7ZDxqU.js";import"./useControlled-BhUU6tD1.js";import"./CompositeRoot-D5BEHQzT.js";import"./CompositeItem-CH6tW51C.js";import"./ToolbarRootContext-iT_XxTtv.js";import"./composite--58kAkxe.js";import"./svgIconContainer-MOVoJIGV.js";import"./PdfViewerSearchBar-pbA0q6fN.js";import"./chevron-up-DfATuppe.js";import"./chevron-down-BLbNGkV7.js";import"./cross-CDJbKg2x.js";import"./PdfViewerSidebar-DCLFreb9.js";import"./index-j-0-4QOm.js";import"./index-CmuTEpoL.js";import"./index-Dmw_GRR5.js";import"./PdfViewerToolbar-CatCMuQs.js";import"./Button-JQlrvaVF.js";import"./chevron-right-VYsjSJKw.js";import"./Input-C0ed5el1.js";import"./minus-CdfOrsdS.js";import"./search-BKI0fima.js";import"./spin-Ctb1N_am.js";import"./error-CyyUFRto.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3594/980368cad4c27778ab31940840f0736030e1618d/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
/>`}}}};var i,a,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["CustomAnnotation"];export{n as CustomAnnotation,$ as __namedExportsOrder,Y as default};
