import{j as o}from"./iframe-CcA7-Rjw.js";import{B as n}from"./PdfViewer-DLkkXC71.js";import"./preload-helper-nvkubxzv.js";import"./index-AvY0EKRf.js";import"./PdfViewer.module.css-Bn6_E93t.js";import"./PdfViewerAnnotationLayer-D1QOqniP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bws8Tdw-.js";import"./PdfViewerOutlineSidebar-BEPxNbBE.js";import"./PdfViewerSidebarHeader-OS2r2TX1.js";import"./useBaseUiId-BjFl5fKj.js";import"./useControlled-nd8aPGMS.js";import"./CompositeRoot-YqnSEZap.js";import"./CompositeItem-BPuGHInU.js";import"./ToolbarRootContext-BiU2w5wb.js";import"./composite-2XJp13CO.js";import"./svgIconContainer-DckiNDXi.js";import"./PdfViewerSearchBar-DAMSyeFQ.js";import"./chevron-up-BFVKzna6.js";import"./chevron-down-hciG8vuR.js";import"./cross-ChHYC8Yw.js";import"./PdfViewerSidebar-D7Gp99eo.js";import"./index-Zn-uiKn9.js";import"./index-vSBXvFMR.js";import"./index-Bp3ioUAC.js";import"./PdfViewerToolbar-CHy3RHLG.js";import"./Button-ol1baUYT.js";import"./chevron-right-BHsbbP4D.js";import"./Input-CWdjMBiV.js";import"./search-poOCX-UW.js";import"./spin-CXCOOtFg.js";import"./error-bsTt9ox-.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3644/0bb4366aa502f2fd2caa99d9d5eca5370e1cc72f/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Y=["CustomAnnotation"];export{e as CustomAnnotation,Y as __namedExportsOrder,F as default};
