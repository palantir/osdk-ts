import{j as o}from"./iframe-ZKDPnRYv.js";import{B as e}from"./BasePdfViewer-C7WGoMpa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNWYE-f1.js";import"./BasePdfViewer.module.css-DC6rhCkh.js";import"./PdfViewerAnnotationLayer-GNHiredu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjrkvkYW.js";import"./PdfViewerOutlineSidebar-DM0OJfFw.js";import"./PdfViewerSidebarHeader-Bb_6J6MS.js";import"./useBaseUiId-Ce1gy8Rx.js";import"./useControlled-F5SgWL0g.js";import"./CompositeRoot-ETrBZ8yO.js";import"./CompositeItem-C1cGzStq.js";import"./ToolbarRootContext-4_ztJASm.js";import"./composite-BmiDYLqb.js";import"./svgIconContainer-DrDKA2Lc.js";import"./PdfViewerSearchBar-3VkbrbFE.js";import"./chevron-up-HMzVux31.js";import"./chevron-down-DWL-RGCQ.js";import"./cross-f6oJQcWu.js";import"./PdfViewerSidebar-Bl2yeB41.js";import"./index-CW4IzwL-.js";import"./index-CBLMz6-B.js";import"./index-Cb1Rmdlc.js";import"./PdfViewerToolbar-dfrKJr1W.js";import"./Button-BJSgrwjd.js";import"./chevron-right-BTVZpQJj.js";import"./Input-BVhJywkb.js";import"./search-BicHh123.js";import"./spin-CfJMVGCC.js";import"./error-FVA4fmQK.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="./compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
