import{j as o}from"./iframe-TApi_89H.js";import{B as n}from"./BasePdfViewer-BSeF_oHS.js";import"./preload-helper-sYHE9xkK.js";import"./index-C7k_RZGy.js";import"./BasePdfViewer.module.css-CiLJcm4b.js";import"./PdfViewerAnnotationLayer-BrnzpX1N.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGVEBmji.js";import"./PdfViewerOutlineSidebar-UnDcaRFw.js";import"./PdfViewerSidebarHeader-DUK7AjML.js";import"./useBaseUiId-D7C__S_-.js";import"./useControlled-CD3Nk51s.js";import"./CompositeRoot-BgtuexoJ.js";import"./CompositeItem-DWMayDud.js";import"./ToolbarRootContext-CXJo9eGs.js";import"./composite-DCCTyU-Y.js";import"./svgIconContainer-C7DRNdJN.js";import"./PdfViewerSearchBar-Cd7zwU01.js";import"./chevron-up-Dkimdggo.js";import"./chevron-down-Bn6U06zL.js";import"./cross-fnS0M6qm.js";import"./PdfViewerSidebar-DyJLkocC.js";import"./index-s3cuk91h.js";import"./index-XwwRSRPj.js";import"./index-ZB-gWh6L.js";import"./PdfViewerToolbar-CTOx_D3p.js";import"./Button-5wphI9oR.js";import"./chevron-right-DDZCuLuR.js";import"./Input-BvP2l_mS.js";import"./search-COp09I1s.js";import"./spin-DtayIh83.js";import"./error-BnvoNHjd.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d="/osdk-ts/storybook/pr-3957/bcbb9c8cc799837aa2e2f30cac31a44c8c500e7c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:d,annotations:l,onAnnotationClick:s()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
