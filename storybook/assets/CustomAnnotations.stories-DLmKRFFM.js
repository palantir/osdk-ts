import{j as o}from"./iframe-BIk6y3D2.js";import{B as e}from"./PdfViewer-S771t50E.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BrxLtgxq.js";import"./PdfViewer.module.css-DKiYE-Z8.js";import"./svgIconContainer-ClEpVk-E.js";import"./constants-rggtfkKZ.js";import"./usePdfDocument-CCUEWHSA.js";import"./index-B2SBv7wx.js";import"./index-CZA_PHWc.js";import"./PdfViewerAnnotationLayer-BjndnT_T.js";import"./PdfViewerOutlineSidebar-BtzbygHB.js";import"./PdfViewerSidebarHeader-Cp-phrXJ.js";import"./useBaseUiId-BfuB2Dn3.js";import"./useControlled-ZaEmo-cv.js";import"./CompositeRoot-DQ5iKRIM.js";import"./CompositeItem-DrrHs1Co.js";import"./ToolbarRootContext-DvR5WIlE.js";import"./composite-CxTcUga1.js";import"./PdfViewerSearchBar-gXzZxV5K.js";import"./chevron-up-B-7SS0_R.js";import"./chevron-down-c1DUM2ML.js";import"./cross-Wh0LPwEp.js";import"./PdfViewerSidebar-Crgcwroz.js";import"./index-CM6sKWBT.js";import"./PdfViewerToolbar-BzgigHRo.js";import"./Button-lxjb9aa4.js";import"./chevron-right--WVtOkzX.js";import"./Input-DrTecCg5.js";import"./minus-O03Xim5U.js";import"./error-C4_9KtpJ.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],W={title:"Experimental/PdfViewer/Recipes",component:e,args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const F=["CustomAnnotation"];export{n as CustomAnnotation,F as __namedExportsOrder,W as default};
