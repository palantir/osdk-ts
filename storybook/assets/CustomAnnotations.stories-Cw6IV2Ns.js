import{j as o}from"./iframe-DtbzkEzs.js";import{B as e}from"./BasePdfViewer-B757Fp80.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cdl7LtxY.js";import"./BasePdfViewer.module.css-BLnAkzmx.js";import"./PdfViewerAnnotationLayer-OuBmmU7j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEVhOZcm.js";import"./PdfViewerOutlineSidebar-DNeuYZxV.js";import"./PdfViewerSidebarHeader-_zKJMla2.js";import"./useBaseUiId-D9GVHSAs.js";import"./useControlled-D6veSbC8.js";import"./CompositeRoot-DrBct6LY.js";import"./CompositeItem-CrrqQtnx.js";import"./ToolbarRootContext-jyIYtAkE.js";import"./composite-BCd6_VbD.js";import"./svgIconContainer-B1X0MJ2V.js";import"./PdfViewerSearchBar-BlKluqGF.js";import"./chevron-up-BPZ85aOK.js";import"./chevron-down-BkbtkYMp.js";import"./cross-CkY96ER9.js";import"./PdfViewerSidebar-FolywG59.js";import"./index-CvbQmAxO.js";import"./index-CAGi0i5x.js";import"./index-BuXzcc8v.js";import"./PdfViewerToolbar-Kpt1bEcj.js";import"./Button-wQYjXV7W.js";import"./chevron-right-cNpc-KQL.js";import"./Input-CLvZmI34.js";import"./search-tpVGv-bq.js";import"./spin-CNUT-_I6.js";import"./error-DdI77Vqv.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Y=["CustomAnnotation"];export{n as CustomAnnotation,Y as __namedExportsOrder,F as default};
