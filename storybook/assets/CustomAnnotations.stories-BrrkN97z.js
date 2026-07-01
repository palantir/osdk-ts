import{j as o}from"./iframe-CQqcNnwi.js";import{B as e}from"./PdfViewer-BsQT5y3O.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BGqNz3HP.js";import"./PdfViewer.module.css-DTL7DYQa.js";import"./PdfViewerAnnotationLayer-ChvkfN-l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSuCOCNo.js";import"./PdfViewerOutlineSidebar-DDv8DE1K.js";import"./PdfViewerSidebarHeader-w5L-Fd-8.js";import"./useBaseUiId-81HNnwRN.js";import"./useControlled-D_CwS4tB.js";import"./CompositeRoot-BeW5ng1l.js";import"./CompositeItem-Byt82z5M.js";import"./ToolbarRootContext-on_UmCVp.js";import"./composite-Du3fY-K0.js";import"./svgIconContainer-IQ0gBQ0C.js";import"./PdfViewerSearchBar-CLj7O6p-.js";import"./chevron-up-B1espuya.js";import"./chevron-down-DQ9a4skg.js";import"./cross-C6Rm_Lrn.js";import"./PdfViewerSidebar-DEQEavKv.js";import"./index-CsF8MjB7.js";import"./index-BFZh7uCY.js";import"./index-C4QRzzj4.js";import"./PdfViewerToolbar-BNOPgksV.js";import"./Button-D78VRn98.js";import"./chevron-right-L4Av4nI6.js";import"./Input-B_Q9krhW.js";import"./minus-DGBq1uHg.js";import"./search-T4DuTzMx.js";import"./spin-LDWF5mL_.js";import"./error-Cw0E_S2M.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const $=["CustomAnnotation"];export{n as CustomAnnotation,$ as __namedExportsOrder,Y as default};
