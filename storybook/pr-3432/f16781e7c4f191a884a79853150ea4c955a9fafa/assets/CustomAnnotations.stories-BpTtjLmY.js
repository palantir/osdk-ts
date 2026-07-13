import{j as o}from"./iframe-D7J8vumD.js";import{B as n}from"./PdfViewer-oJxw1EMJ.js";import"./preload-helper-CoI2b-NY.js";import"./index-QBifOzzz.js";import"./PdfViewer.module.css-B9V_rGk0.js";import"./PdfViewerAnnotationLayer-CBtIvQMD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DoKH801z.js";import"./PdfViewerOutlineSidebar-D3dGaT2M.js";import"./PdfViewerSidebarHeader-qomqdA8z.js";import"./useBaseUiId-C50RoOZc.js";import"./useControlled-BHmaFYpg.js";import"./CompositeRoot-DaHXEPEz.js";import"./CompositeItem-B4MmY3We.js";import"./ToolbarRootContext-Cwh4PfWk.js";import"./composite-BGDn0_gf.js";import"./svgIconContainer-DP4Tdjl6.js";import"./PdfViewerSearchBar-ywGG4QZg.js";import"./chevron-up-CuVS7Ia8.js";import"./chevron-down-DXW5sn_g.js";import"./cross-B2gz64XV.js";import"./PdfViewerSidebar-TQE9RVuI.js";import"./index-CI_n1iiV.js";import"./index-Cknec7q6.js";import"./index-BeuKTTLq.js";import"./PdfViewerToolbar-BrVoo2AD.js";import"./Button-DSmwpg33.js";import"./chevron-right-DpSm_pHg.js";import"./Input-BjK5t-V3.js";import"./search-B7AI5VYb.js";import"./spin-Q4NvzF3K.js";import"./error-BIJvNoxf.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d="/osdk-ts/storybook/pr-3432/f16781e7c4f191a884a79853150ea4c955a9fafa/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:d,annotations:l,onAnnotationClick:s()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
