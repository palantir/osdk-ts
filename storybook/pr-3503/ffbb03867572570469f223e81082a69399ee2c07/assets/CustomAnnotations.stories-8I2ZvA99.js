import{j as o}from"./iframe-f66FgX7Y.js";import{B as n}from"./PdfViewer-CXILDob7.js";import"./preload-helper-raEF4RES.js";import"./index-DPqglQtc.js";import"./PdfViewer.module.css-B0tjT3lG.js";import"./PdfViewerAnnotationLayer-sr_MeMkp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cie3vSfY.js";import"./PdfViewerOutlineSidebar-RGWkl7kP.js";import"./PdfViewerSidebarHeader-BfkBNqy5.js";import"./useBaseUiId-D571T0a4.js";import"./useControlled-Bu7YFQSN.js";import"./CompositeRoot-CCYVz86_.js";import"./CompositeItem-QGELHeCS.js";import"./ToolbarRootContext-COAEHk7J.js";import"./composite-CJwo4Axb.js";import"./svgIconContainer-vQy4jNvU.js";import"./PdfViewerSearchBar-zzf2UaQr.js";import"./chevron-up-CmfMs_yN.js";import"./chevron-down-DWGAvGlj.js";import"./cross-BghbwRkQ.js";import"./PdfViewerSidebar-D1c2lq6j.js";import"./index-CJK0sv1Y.js";import"./index-njRI7QSI.js";import"./index-CcMjMhdC.js";import"./PdfViewerToolbar-DKtyVyKm.js";import"./Button-TDsMSWT0.js";import"./chevron-right-Z5zXT18y.js";import"./Input-CAFxf21S.js";import"./minus-WViEeZnY.js";import"./search-B8vnpBH9.js";import"./spin-DQNpdcbd.js";import"./error-CE2K4tlB.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d="/osdk-ts/storybook/pr-3503/ffbb03867572570469f223e81082a69399ee2c07/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:d,annotations:l,onAnnotationClick:s()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
