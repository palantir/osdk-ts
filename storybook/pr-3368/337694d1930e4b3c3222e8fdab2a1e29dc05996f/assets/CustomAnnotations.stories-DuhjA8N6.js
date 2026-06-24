import{j as o}from"./iframe-sEvLPolU.js";import{B as n}from"./PdfViewer-DQX6sl_e.js";import"./preload-helper-Bj-XLBLi.js";import"./index-B2k8cSeY.js";import"./PdfViewer.module.css-B1ZFjMQX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DcNI2lZ7.js";import"./index-DixlF0uw.js";import"./index-BOoAG0JL.js";import"./PdfViewerAnnotationLayer-Bh1gh2O-.js";import"./PdfViewerOutlineSidebar-D09QB2Fg.js";import"./PdfViewerSidebarHeader-pG3mEUk1.js";import"./useButton-BEUrubjh.js";import"./useControlled-BkOJfPWz.js";import"./CompositeRoot-BUx0JGot.js";import"./CompositeItem-ihskczSe.js";import"./ToolbarRootContext-DfGIvNaf.js";import"./composite-r2yQWaqa.js";import"./svgIconContainer-B0E6OCJM.js";import"./PdfViewerSearchBar-B453Ix9S.js";import"./chevron-up-C0H_9KqP.js";import"./chevron-down-C-qiYxSC.js";import"./cross-D2g0iDLe.js";import"./PdfViewerSidebar-nuNoMvIo.js";import"./index-CiYHEsPi.js";import"./PdfViewerToolbar-DTKBKvEu.js";import"./Button-DVWy0fU4.js";import"./chevron-right-BU3KCS3X.js";import"./Input-CUUYRNNr.js";import"./minus-kM6udRA1.js";import"./spin-7TMyUGou.js";import"./error-D4_SCDen.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3368/337694d1930e4b3c3222e8fdab2a1e29dc05996f/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Beta/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
