import{j as o}from"./iframe-B_sNEAoD.js";import{B as n}from"./PdfViewer-0dm84SIH.js";import"./preload-helper-D4w3BnHq.js";import"./index-Boi3yEsI.js";import"./PdfViewer.module.css-D-AucNxM.js";import"./PdfViewerAnnotationLayer-CGhO9N1A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_ktzRke-.js";import"./PdfViewerOutlineSidebar-CMpXrF2u.js";import"./PdfViewerSidebarHeader-DyAFlU_I.js";import"./useBaseUiId-sroOZ_HI.js";import"./useControlled-DPIbQqn6.js";import"./CompositeRoot-BSsk542J.js";import"./CompositeItem-BeNd1EcZ.js";import"./ToolbarRootContext-C_Wh8Bm0.js";import"./composite-CVNBfdPF.js";import"./svgIconContainer-C33xHrgH.js";import"./PdfViewerSearchBar-CqBvMa_k.js";import"./chevron-up-GuRcPABk.js";import"./chevron-down-De0mGeAX.js";import"./cross-CNm-11LQ.js";import"./PdfViewerSidebar-CCyvAKU4.js";import"./index-CSupOoj1.js";import"./index-D9sBx7SB.js";import"./index-SbkiAc5f.js";import"./PdfViewerToolbar-CAsKHKGO.js";import"./Button-DcOn_dM0.js";import"./chevron-right-D9DTypF8.js";import"./Input-CXVnOTc2.js";import"./minus-Cuki4ueG.js";import"./search-DH6_rBgy.js";import"./spin-Cstv-cye.js";import"./error-B3EqSWGF.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3583/c0af75bc705358f25357faaeffb387ed4ce8fd3d/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
