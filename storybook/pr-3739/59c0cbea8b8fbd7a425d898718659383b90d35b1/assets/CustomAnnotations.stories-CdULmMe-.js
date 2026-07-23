import{j as o}from"./iframe-D_9TmTWV.js";import{B as e}from"./PdfViewer-DxgsaWl6.js";import"./preload-helper-DJH2govB.js";import"./index-CZmlMw1G.js";import"./PdfViewer.module.css-CQ_izyfl.js";import"./PdfViewerAnnotationLayer-BvSTVefJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWlQdsnq.js";import"./PdfViewerOutlineSidebar-8cl65eZx.js";import"./PdfViewerSidebarHeader-B4xxqpKY.js";import"./useBaseUiId-BDKr1Znm.js";import"./useControlled-DS9eNVze.js";import"./CompositeRoot-C-m0fOsX.js";import"./CompositeItem-CcExbvwI.js";import"./ToolbarRootContext-CNcIlT0m.js";import"./composite-DvHiPVn1.js";import"./svgIconContainer-e2zn3xKA.js";import"./PdfViewerSearchBar-C_pj9Hot.js";import"./chevron-up-t6hlWL8b.js";import"./chevron-down-BZXSDnra.js";import"./cross-LTJbD_sI.js";import"./PdfViewerSidebar-DC9jAm1Q.js";import"./index-boWbyro0.js";import"./index-ilaZ_cq1.js";import"./index-Z3aTWHLe.js";import"./PdfViewerToolbar-CUXIBOCD.js";import"./Button-Dubu6PwJ.js";import"./chevron-right-CS1djdoL.js";import"./Input-BAv6Vl12.js";import"./search-BiwpNc5U.js";import"./spin-ByIUEhNB.js";import"./error-BMNLqSay.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3739/59c0cbea8b8fbd7a425d898718659383b90d35b1/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Y=["CustomAnnotation"];export{n as CustomAnnotation,Y as __namedExportsOrder,F as default};
