import{j as o}from"./iframe-BiAp7qlL.js";import{B as e}from"./PdfViewer-DykPtej1.js";import"./preload-helper-JVo6734q.js";import"./index-CQcFOWil.js";import"./PdfViewer.module.css-BHw72d2b.js";import"./PdfViewerAnnotationLayer-DeUBTezd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DONwnYWl.js";import"./PdfViewerOutlineSidebar-BvSto1rk.js";import"./PdfViewerSidebarHeader-B8HhmGYs.js";import"./useBaseUiId-CjAQKvu1.js";import"./useControlled-B36afOR9.js";import"./CompositeRoot-onhq8iX4.js";import"./CompositeItem-CI_PM_Hq.js";import"./ToolbarRootContext-CcrZckfO.js";import"./composite-p19Fe2tx.js";import"./svgIconContainer-COEsHZDV.js";import"./PdfViewerSearchBar-B-RBQuCk.js";import"./chevron-up-7UmK-0oV.js";import"./chevron-down-5c5dpeJJ.js";import"./cross-BOGPXBcz.js";import"./PdfViewerSidebar-CzCaSgAb.js";import"./index-B_GaAJkw.js";import"./index-BqaYgD8L.js";import"./index-D0zp2Plk.js";import"./PdfViewerToolbar-BZceHoV-.js";import"./Button-Cy-uz3uQ.js";import"./chevron-right-DOLYfUIp.js";import"./Input-C8B9L3eu.js";import"./minus-fB-_tNDC.js";import"./search-BYg1Y9fB.js";import"./spin-C37FouS5.js";import"./error-uDToQwnv.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3618/81172078df7e41d8a56c0b3fd47a4d126c4a94cd/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
/>`}}}};var i,a,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
