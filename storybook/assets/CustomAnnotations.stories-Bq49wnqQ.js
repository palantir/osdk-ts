import{j as o}from"./iframe-BDzFOxX0.js";import{B as e}from"./PdfViewer-SQNb3PaU.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_Ioicug.js";import"./PdfViewer.module.css-Byn3Yh2U.js";import"./svgIconContainer-C_yJ1WXt.js";import"./constants-rggtfkKZ.js";import"./usePdfDocument-CjKOV6NV.js";import"./index-D__9VqCX.js";import"./index-BPPhVEDk.js";import"./PdfViewerAnnotationLayer-D7ygpTvL.js";import"./PdfViewerOutlineSidebar-BtOkOu94.js";import"./PdfViewerSidebarHeader-CEupcSVU.js";import"./useBaseUiId-05QqjS5V.js";import"./useControlled-hrXkzhJL.js";import"./CompositeRoot-BKZdIEO0.js";import"./CompositeItem-gvBUtfn0.js";import"./ToolbarRootContext-DFrYGIGv.js";import"./composite-DsgudkzN.js";import"./PdfViewerSearchBar-DR1dWVh8.js";import"./chevron-up-_50wuAEy.js";import"./chevron-down-7u4kSXM9.js";import"./cross-C4udWbRu.js";import"./PdfViewerSidebar-DFuva6Hq.js";import"./index-DkdncJqp.js";import"./PdfViewerToolbar-D8uqhB6q.js";import"./Button-BResIl2M.js";import"./chevron-right-ihL7osJ0.js";import"./Input-Di3QJ4qh.js";import"./minus-CDSItT8c.js";import"./error-DpE8cUaZ.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],W={title:"Experimental/PdfViewer/Recipes",component:e,args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
