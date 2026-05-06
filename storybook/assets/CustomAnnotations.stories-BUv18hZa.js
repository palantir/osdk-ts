import{j as o}from"./iframe-tom4IkXw.js";import{B as e}from"./PdfViewer-VR40dbBG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-re_9MejM.js";import"./PdfViewer.module.css-CLl7VEtt.js";import"./svgIconContainer-Cjdc7kOr.js";import"./constants-rggtfkKZ.js";import"./usePdfDocument-Bsy3j5nN.js";import"./index-YrV6hnxy.js";import"./index-CPX1r99E.js";import"./PdfViewerAnnotationLayer-DRfsy_-x.js";import"./PdfViewerOutlineSidebar-CQQLZRDs.js";import"./PdfViewerSidebarHeader-CI5Pc0Uu.js";import"./useBaseUiId-BUmajB7L.js";import"./useControlled-Bej4nu2w.js";import"./CompositeRoot-BLOjs0IM.js";import"./CompositeItem-Dbrw1sxP.js";import"./ToolbarRootContext-B00dcKN5.js";import"./composite-DpudtoJz.js";import"./PdfViewerSearchBar-B6xxELGt.js";import"./chevron-up-Y9_FxpxP.js";import"./chevron-down-BPFDu9mo.js";import"./cross-B5Gn2zgq.js";import"./PdfViewerSidebar-Bx1VXLXZ.js";import"./index-Z-jkU_Ff.js";import"./PdfViewerToolbar-DxSIZ-q1.js";import"./Button-B5lv9fzp.js";import"./chevron-right-BXhjf-Yb.js";import"./Input-SjRvgIR6.js";import"./minus-DMgWyX6K.js";import"./error-cbmKhX9E.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],W={title:"Experimental/PdfViewer/Recipes",component:e,args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
