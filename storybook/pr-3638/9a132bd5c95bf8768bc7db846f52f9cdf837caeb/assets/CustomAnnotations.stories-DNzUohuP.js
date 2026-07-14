import{j as o}from"./iframe-CgaSJGms.js";import{B as e}from"./PdfViewer-ClQmX2Gp.js";import"./preload-helper-DlGsqh-w.js";import"./index-p12yqEBA.js";import"./PdfViewer.module.css-Bqb6gt6-.js";import"./PdfViewerAnnotationLayer-CX1pJ0E_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiYmJB6a.js";import"./PdfViewerOutlineSidebar-CmtoPVNj.js";import"./PdfViewerSidebarHeader-BATO0Khf.js";import"./useBaseUiId-D39DBVIB.js";import"./useControlled-B0Odcszh.js";import"./CompositeRoot-BCwsK1QP.js";import"./CompositeItem-BD5vHMJe.js";import"./ToolbarRootContext-ByCsV2PG.js";import"./composite-CHM_Xrlu.js";import"./svgIconContainer-C3Ibj-cG.js";import"./PdfViewerSearchBar-BuM51hYO.js";import"./chevron-up-CDRFS2Ow.js";import"./chevron-down-C_cLuLFO.js";import"./cross-DRCEb7OP.js";import"./PdfViewerSidebar-BLPKbKFs.js";import"./index-DOHBMT4I.js";import"./index-C8zT0CUI.js";import"./index-D9n3c3GT.js";import"./PdfViewerToolbar-D9z0oOZ9.js";import"./Button-BrX3zqVY.js";import"./chevron-right-B8nrAix0.js";import"./Input-cn_9g4lx.js";import"./search-egRdoocF.js";import"./spin-CAJH_Vxt.js";import"./error-Dn_buZBL.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3638/9a132bd5c95bf8768bc7db846f52f9cdf837caeb/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Y=["CustomAnnotation"];export{n as CustomAnnotation,Y as __namedExportsOrder,F as default};
