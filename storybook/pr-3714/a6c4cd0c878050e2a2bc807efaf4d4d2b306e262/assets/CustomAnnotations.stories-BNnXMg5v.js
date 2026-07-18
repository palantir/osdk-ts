import{j as o}from"./iframe-CAHBdCq1.js";import{B as n}from"./PdfViewer-mNrUwOcS.js";import"./preload-helper-C93BjOpu.js";import"./index-Dqhelv5t.js";import"./PdfViewer.module.css-CT2Sg-jx.js";import"./PdfViewerAnnotationLayer-orHRl5Hn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVXsYeAR.js";import"./PdfViewerOutlineSidebar-CmWJ5Ac7.js";import"./PdfViewerSidebarHeader-C0CDy8yC.js";import"./useBaseUiId-C9UEEuYY.js";import"./useControlled-DCrjw_eX.js";import"./CompositeRoot-GzJHz9in.js";import"./CompositeItem-DP-2Pynq.js";import"./ToolbarRootContext-CDnt2Uxp.js";import"./composite-Cw8iKrah.js";import"./svgIconContainer-DOYhvU8O.js";import"./PdfViewerSearchBar-BR_jGLof.js";import"./chevron-up-HUBtivGs.js";import"./chevron-down-BZWaRd4L.js";import"./cross-BQ_JGAQt.js";import"./PdfViewerSidebar-Bk94oPOm.js";import"./index-BsrN4B4I.js";import"./index-B6rpGcbO.js";import"./index-CBm27cPC.js";import"./PdfViewerToolbar-Zvw67C3G.js";import"./Button-CtYeFmPN.js";import"./chevron-right-DzxCKkeB.js";import"./Input-BRiED6IK.js";import"./search-qXyA5VAY.js";import"./spin-DI3_14cK.js";import"./error-DWFWgzPi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3714/a6c4cd0c878050e2a2bc807efaf4d4d2b306e262/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
