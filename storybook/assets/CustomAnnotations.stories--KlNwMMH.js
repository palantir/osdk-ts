import{j as o}from"./iframe-CKFk0arE.js";import{B as e}from"./PdfViewer-n2TR7Mm3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BjQgtYP9.js";import"./PdfViewer.module.css-Bi8TUFRt.js";import"./PdfViewerAnnotationLayer-BP3nfWOE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gkh3ki_h.js";import"./PdfViewerOutlineSidebar-dLqCu6_6.js";import"./PdfViewerSidebarHeader-BkY6waui.js";import"./useBaseUiId-DAw5VlH9.js";import"./useControlled-BmBr0tvV.js";import"./CompositeRoot-DPvVZKCj.js";import"./CompositeItem-2K-NRXeL.js";import"./ToolbarRootContext-DC7lKy46.js";import"./composite-EscgZUjl.js";import"./svgIconContainer-BAT-Ac90.js";import"./PdfViewerSearchBar-B4rzER2j.js";import"./chevron-up-BxD9mORz.js";import"./chevron-down-CdZBYj4j.js";import"./cross-fbZdFG_D.js";import"./PdfViewerSidebar-BC4m_809.js";import"./index-rXGyYBlQ.js";import"./index-BLoK5Iyu.js";import"./index-BPzeTJNp.js";import"./PdfViewerToolbar-B46H0-0E.js";import"./Button-c1BMMVFp.js";import"./chevron-right-vwsxq-Tf.js";import"./Input-VZxUx3mR.js";import"./minus-BiUPw5-m.js";import"./search-BLu0EWyQ.js";import"./spin-BIcVLev0.js";import"./error-BaydBvcG.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
