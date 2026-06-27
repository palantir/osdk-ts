import{j as o}from"./iframe-DRQbuWSS.js";import{B as e}from"./PdfViewer-BYP3v1V6.js";import"./preload-helper-BCULYioV.js";import"./index-HtiMarMp.js";import"./PdfViewer.module.css-Di9sI36I.js";import"./PdfViewerAnnotationLayer-HVB3_EZc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOdpwLby.js";import"./PdfViewerOutlineSidebar-D2PV8u7v.js";import"./PdfViewerSidebarHeader-BS1KAVdN.js";import"./useBaseUiId-DUa3o3xz.js";import"./useControlled-OzUH7HOT.js";import"./CompositeRoot-C8Ixmp0e.js";import"./CompositeItem-D4OBRrKb.js";import"./ToolbarRootContext-CQBMomMx.js";import"./composite-B9XfsfgZ.js";import"./svgIconContainer-DLwfGwbU.js";import"./PdfViewerSearchBar-BY8MhuG6.js";import"./chevron-up-Bjug5qje.js";import"./chevron-down-B_cwpV0X.js";import"./cross-CKfMKyM1.js";import"./PdfViewerSidebar-CSS3auBa.js";import"./index-nf8Aj80m.js";import"./index-CAXzKFcJ.js";import"./index-DUz8mwtP.js";import"./PdfViewerToolbar-B9zQsLC5.js";import"./Button-G-FNaIS-.js";import"./chevron-right-ChM5iluC.js";import"./Input-DRi-o083.js";import"./minus-DzazGIXC.js";import"./search-DW1JGNDR.js";import"./spin-Cgg31hMC.js";import"./error-DGIoZa85.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/4d2cad6cd66b92db2997c6eb456ca17b6647234a/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
