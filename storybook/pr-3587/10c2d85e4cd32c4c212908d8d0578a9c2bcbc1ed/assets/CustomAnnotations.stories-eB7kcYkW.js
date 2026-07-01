import{j as o}from"./iframe-CRF3sQbb.js";import{B as n}from"./PdfViewer-C2Dxa6vm.js";import"./preload-helper-BxvwHE1r.js";import"./index-C2_vf368.js";import"./PdfViewer.module.css-CTD7ggg1.js";import"./PdfViewerAnnotationLayer-Du--kQje.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOn7PQgl.js";import"./PdfViewerOutlineSidebar-N901V4p-.js";import"./PdfViewerSidebarHeader-0XQ2bJHe.js";import"./useBaseUiId-4pUjU83e.js";import"./useControlled-CH6zwWP0.js";import"./CompositeRoot-DLTTQL16.js";import"./CompositeItem-CanDnIqa.js";import"./ToolbarRootContext-DY1zAZAc.js";import"./composite-CTZL7J_0.js";import"./svgIconContainer-Cwc2mUeQ.js";import"./PdfViewerSearchBar-BCqVyHXv.js";import"./chevron-up-DJzIeftt.js";import"./chevron-down-DwDCfnH2.js";import"./cross-C8iLLnih.js";import"./PdfViewerSidebar-DmSCGcUL.js";import"./index-BsqUftG_.js";import"./index-BX5C1w-G.js";import"./index-qfKuOoTK.js";import"./PdfViewerToolbar-DIU21teX.js";import"./Button-BSJkBcDT.js";import"./chevron-right-kpClKrnM.js";import"./Input-CpyJIJ7L.js";import"./minus-BXIDGL63.js";import"./search-CzZCuUmt.js";import"./spin-dEKubcqY.js";import"./error-DKDaNk4P.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3587/10c2d85e4cd32c4c212908d8d0578a9c2bcbc1ed/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
