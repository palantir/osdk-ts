import{j as o}from"./iframe-BPFPjQfN.js";import{B as n}from"./BasePdfViewer-CEjYUJC2.js";import"./preload-helper-BS5sFlIZ.js";import"./index-DLsuK50b.js";import"./BasePdfViewer.module.css-BJvet-r9.js";import"./PdfViewerAnnotationLayer-BLbL9Rld.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BMT2PCWX.js";import"./PdfViewerOutlineSidebar-Bk0gwbIi.js";import"./PdfViewerSidebarHeader-BHdqkvT_.js";import"./useBaseUiId-XR0mowR0.js";import"./useControlled-DWmknCjz.js";import"./CompositeRoot-CA970t9z.js";import"./CompositeItem-BU1kZ6Zk.js";import"./ToolbarRootContext-DvfgzgjU.js";import"./composite--6cSo0WV.js";import"./svgIconContainer-BCrLikms.js";import"./PdfViewerSearchBar-BA4cUbL1.js";import"./chevron-up-Cy7f5Tfh.js";import"./chevron-down-U37QTCrW.js";import"./cross-jacAbTr1.js";import"./PdfViewerSidebar-DxykRtfz.js";import"./index-D2ej1Jb2.js";import"./index-B2XioIrj.js";import"./index-BOMANPh2.js";import"./PdfViewerToolbar-DvFEX25O.js";import"./Button-MukxU7Us.js";import"./chevron-right-CFbmX4Me.js";import"./Input-Cbr4DxDr.js";import"./search-CZtJ4QjI.js";import"./spin-DcQ8QPd8.js";import"./error-DEs_Iieb.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3964/16440df0d8530ed50f3ea29f255762c0a5d13bf1/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
