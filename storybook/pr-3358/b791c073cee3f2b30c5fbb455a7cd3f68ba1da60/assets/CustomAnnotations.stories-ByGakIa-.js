import{j as o}from"./iframe-DszJazu2.js";import{B as n}from"./PdfViewer-Kf0Odc2C.js";import"./preload-helper-Bzu0i3_D.js";import"./index-Ba8E2uBZ.js";import"./PdfViewer.module.css-CI_V7WA4.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-C7NnPtJZ.js";import"./index-DjghywXo.js";import"./index-gwcYQEqp.js";import"./PdfViewerAnnotationLayer-Cw6P26Q6.js";import"./PdfViewerOutlineSidebar-gWR2uj4i.js";import"./PdfViewerSidebarHeader-CaLQG5dg.js";import"./useBaseUiId-uQFZhVSw.js";import"./useControlled-n_Yv0c_i.js";import"./CompositeRoot-CJLrsaqq.js";import"./CompositeItem-uiLx_b_4.js";import"./ToolbarRootContext-kbbri2LF.js";import"./composite-aIxXXaZF.js";import"./svgIconContainer-CEdnDZiu.js";import"./PdfViewerSearchBar-BN0MlcJ_.js";import"./chevron-up-f4yMTxrg.js";import"./chevron-down-DKM3dFlz.js";import"./cross-BBAUnA0Z.js";import"./PdfViewerSidebar-t5TbF2G0.js";import"./index-BWYwqrEl.js";import"./PdfViewerToolbar-CFuJtoIz.js";import"./Button-CitqSRfE.js";import"./chevron-right-CY9ogxpg.js";import"./Input-DmxxNVOR.js";import"./minus-B1UoTyUl.js";import"./spin-DMtdQS0r.js";import"./error-Bsv4MnOe.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3358/b791c073cee3f2b30c5fbb455a7cd3f68ba1da60/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Beta/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
