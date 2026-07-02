import{j as o}from"./iframe-Dd1szrMe.js";import{B as n}from"./PdfViewer-CZGGO8Lm.js";import"./preload-helper-ZyFS72ZM.js";import"./index-CAgK9jdg.js";import"./PdfViewer.module.css-u0ocXXjD.js";import"./PdfViewerAnnotationLayer-BtAE10UK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BngoFxu2.js";import"./PdfViewerOutlineSidebar-DpMYuCsk.js";import"./PdfViewerSidebarHeader-8L5RJjNw.js";import"./useBaseUiId-CdR77v15.js";import"./useControlled-BTPSGAsV.js";import"./CompositeRoot-CyMnOtvo.js";import"./useCompositeListItem-v6wc-tSZ.js";import"./ToolbarRootContext-BkGiyAqi.js";import"./composite-CRt9kzf5.js";import"./CompositeItem-DUaJ13IJ.js";import"./svgIconContainer-DPEIWJyX.js";import"./PdfViewerSearchBar-BZDC2ffx.js";import"./chevron-up-BK6KDtL8.js";import"./chevron-down-3KBMvkMf.js";import"./cross-BeLIa3lb.js";import"./PdfViewerSidebar-VH9Vvy3j.js";import"./index-B2yaQToS.js";import"./index-xmtrJ4Wy.js";import"./index-DVO_ZVIo.js";import"./PdfViewerToolbar-DWME5GE8.js";import"./Button-l18qNjs5.js";import"./chevron-right-Cq2Y-wdQ.js";import"./Input-Q-5ZuT0B.js";import"./minus-Bf1z5Rn7.js";import"./spin-BK8UF2pJ.js";import"./error-CopeXtfB.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3601/4c6b8757afa552b8ca958bc1a4e69adf43a9ad4e/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],Y={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
