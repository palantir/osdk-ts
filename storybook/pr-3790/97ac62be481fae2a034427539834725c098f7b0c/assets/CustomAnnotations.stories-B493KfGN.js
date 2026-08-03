import{j as o}from"./iframe-aLJ4vB0x.js";import{B as n}from"./PdfViewer-DbkAqZoE.js";import"./preload-helper-B5sUmCwj.js";import"./index-DKvaEXHI.js";import"./PdfViewer.module.css-CZe-8NN4.js";import"./PdfViewerAnnotationLayer-tFwgCvpk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IGy6Z96z.js";import"./PdfViewerOutlineSidebar-B7lYm27U.js";import"./PdfViewerSidebarHeader-BHqjBqV-.js";import"./useBaseUiId-BuIqAuhc.js";import"./useControlled-C7kgsGsI.js";import"./CompositeRoot-CzcaIKhK.js";import"./CompositeItem-C0_6gg2t.js";import"./ToolbarRootContext-B7yBHeEe.js";import"./composite-D_Mqvp3m.js";import"./svgIconContainer-873Hh3eJ.js";import"./PdfViewerSearchBar-BwW9C4W3.js";import"./chevron-up-M77HFCzA.js";import"./chevron-down-D9U3DaSB.js";import"./cross-BQrUWsOd.js";import"./PdfViewerSidebar-Ck5Mwf2w.js";import"./index-xX1_mGTA.js";import"./index-BkKRshEc.js";import"./index-CUJ1tB6w.js";import"./PdfViewerToolbar-Byh6v3-6.js";import"./Button-lNsDPS4F.js";import"./chevron-right-BMBDjC3r.js";import"./Input-DJfYdaTn.js";import"./search-D07Efajj.js";import"./spin-BoSDkQVr.js";import"./error-BpshgP1A.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d="/osdk-ts/storybook/pr-3790/97ac62be481fae2a034427539834725c098f7b0c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:d,annotations:l,onAnnotationClick:s()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
