import{j as o}from"./iframe-CzEAcITS.js";import{B as n}from"./PdfViewer-H9fS_Y2J.js";import"./preload-helper-DVUrYGcs.js";import"./index-DidwzLKx.js";import"./PdfViewer.module.css-mERKRpO4.js";import"./PdfViewerAnnotationLayer-B6n66Y9I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Z6NIJkxB.js";import"./PdfViewerOutlineSidebar-DxuKhBti.js";import"./PdfViewerSidebarHeader-CV1g0b-x.js";import"./useBaseUiId-Wsui1rDl.js";import"./useControlled-n-om19Vg.js";import"./CompositeRoot-CHXdTk1p.js";import"./CompositeItem-DRPR7SAg.js";import"./ToolbarRootContext-74w3-zbe.js";import"./composite-CGc5OLRr.js";import"./svgIconContainer-BzNHxf01.js";import"./PdfViewerSearchBar-ST8L7Nf_.js";import"./chevron-up-CFNiCYfk.js";import"./chevron-down-Ck7FvghV.js";import"./cross-BEXvhRFN.js";import"./PdfViewerSidebar-cQOCR87x.js";import"./index-BrIngB4d.js";import"./index-CGs03jCU.js";import"./index-CgPz4Is9.js";import"./PdfViewerToolbar-DXSbEY32.js";import"./Button-Bjv4-aZR.js";import"./chevron-right-LndCHlsL.js";import"./Input-DsiSoXN8.js";import"./search-D1GRIozI.js";import"./spin-2l8VZag3.js";import"./error-Cpn6Ss2N.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d="/osdk-ts/storybook/pr-3611/4ba0bc43c7a75931affec1412fa098aeb4a0bff6/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:d,annotations:l,onAnnotationClick:s()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
