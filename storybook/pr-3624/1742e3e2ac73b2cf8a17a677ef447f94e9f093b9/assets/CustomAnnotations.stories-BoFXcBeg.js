import{j as o}from"./iframe-BeCKStTi.js";import{B as n}from"./PdfViewer-CkoX5nKm.js";import"./preload-helper-BICrzKRt.js";import"./index-BfYzXW_3.js";import"./PdfViewer.module.css-BsuUGzIE.js";import"./PdfViewerAnnotationLayer-fZjGDmfj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DK6unOZt.js";import"./PdfViewerOutlineSidebar-BiT5wcDc.js";import"./PdfViewerSidebarHeader-BReRA7h7.js";import"./useBaseUiId-COsIpFVh.js";import"./useControlled-5Cxw9uoZ.js";import"./CompositeRoot-r5VPPZg3.js";import"./CompositeItem-DkAKuEhG.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./composite-U2ojCD3f.js";import"./svgIconContainer-D-9_AOAs.js";import"./PdfViewerSearchBar-Bl8vV7Dk.js";import"./chevron-up-BthBkyrK.js";import"./chevron-down-BtABU6Ff.js";import"./cross-DDXI9CZ5.js";import"./PdfViewerSidebar-Bkr8M1jp.js";import"./index-DWv9wz-O.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./PdfViewerToolbar-s6o0ppC9.js";import"./Button-to0u69wN.js";import"./chevron-right-BFpwcuaa.js";import"./Input-fr7UgVSn.js";import"./search-CZf2_gwq.js";import"./spin-Dc6yxLwi.js";import"./error-DvUULirA.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d="/osdk-ts/storybook/pr-3624/1742e3e2ac73b2cf8a17a677ef447f94e9f093b9/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{alignItems:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",color:"#fff",display:"flex",fontSize:"12px",fontWeight:600,height:"100%",justifyContent:"center",padding:"4px 8px",whiteSpace:"nowrap",width:"100%"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{alignItems:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",display:"flex",fontSize:"11px",fontWeight:700,height:"100%",justifyContent:"center",width:"100%"},children:t.label??"1"})}const l=[{id:"tooltip-1",label:"Key finding",page:1,rect:{height:28,width:120,x:55,y:400},render:t=>o.jsx(c,{...t}),type:"custom"},{id:"badge-1",label:"1",page:1,rect:{height:24,width:24,x:540,y:692},render:t=>o.jsx(r,{...t}),type:"custom"},{id:"badge-2",label:"2",page:1,rect:{height:24,width:24,x:540,y:418},render:t=>o.jsx(r,{...t}),type:"custom"},{id:"highlight-1",label:"Author line highlight",page:1,rect:{height:14,width:450,x:80,y:700},type:"highlight"}],F={argTypes:{annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}},src:{control:!1}},args:{annotations:l,onAnnotationClick:s(),src:d},component:n,render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),tags:["beta"],title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes"},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
