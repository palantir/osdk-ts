import{j as o}from"./iframe-BoTPPcu9.js";import{B as e}from"./PdfViewer-Bx_a6Y2_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BHd28prX.js";import"./PdfViewer.module.css-BIzVbapr.js";import"./svgIconContainer-CWVdegOE.js";import"./constants-rggtfkKZ.js";import"./usePdfDocument-O4s49y1d.js";import"./index-6dS2oSLn.js";import"./index-_RFUany7.js";import"./PdfViewerAnnotationLayer-DJZJg16y.js";import"./PdfViewerOutlineSidebar-DP0RMoV4.js";import"./PdfViewerSidebarHeader-06EKfLBp.js";import"./useBaseUiId-D1OeP4jf.js";import"./useControlled-DQEIUnln.js";import"./CompositeRoot-j3wTzAS1.js";import"./CompositeItem-DJ1Sqpi9.js";import"./ToolbarRootContext-BU3HZrj-.js";import"./composite-D3vh8493.js";import"./PdfViewerSearchBar-DuGpikf8.js";import"./chevron-up-BOgoC1hM.js";import"./chevron-down-Pyr6sLeM.js";import"./cross-9v7_QM6Y.js";import"./PdfViewerSidebar-CF-wa8Ao.js";import"./index-y5ANZf6t.js";import"./PdfViewerToolbar-CjNHjunQ.js";import"./Button-BlHfCCSe.js";import"./chevron-right-DHjnuM8o.js";import"./Input-CQCUEWOi.js";import"./minus-D5d4WhiW.js";import"./error-C7YKBj8Z.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],W={title:"Experimental/PdfViewer/Recipes",component:e,args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
/>`}}}};var r,a,p;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const F=["CustomAnnotation"];export{n as CustomAnnotation,F as __namedExportsOrder,W as default};
