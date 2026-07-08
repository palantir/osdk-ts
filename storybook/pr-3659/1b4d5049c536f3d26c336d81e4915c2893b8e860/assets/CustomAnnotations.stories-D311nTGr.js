import{j as o}from"./iframe-DMczly9y.js";import{B as n}from"./PdfViewer-VO8sX_d4.js";import"./preload-helper--MTjbHr9.js";import"./index-Bkh435fV.js";import"./PdfViewer.module.css-DhPLyH_N.js";import"./PdfViewerAnnotationLayer-CfJVMvee.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpH2Nhy5.js";import"./PdfViewerOutlineSidebar-BBuORxxH.js";import"./PdfViewerSidebarHeader-t5TXfUJx.js";import"./useBaseUiId-GPSmMHjO.js";import"./useControlled-Dgcw26YK.js";import"./CompositeRoot-Dk7_z6aJ.js";import"./CompositeItem-DFx7eN5O.js";import"./ToolbarRootContext-9muea_6F.js";import"./composite-Da_TEeE3.js";import"./svgIconContainer-B0onUOf2.js";import"./PdfViewerSearchBar-xlSyBRbS.js";import"./chevron-up-EC2qBrmA.js";import"./chevron-down-CD6IwESQ.js";import"./cross-DJDSZb9x.js";import"./PdfViewerSidebar-C0oqUH_s.js";import"./index-FexXw7Td.js";import"./index-BvNyxsvF.js";import"./index-D-g0-3Wt.js";import"./PdfViewerToolbar-BpuHPczf.js";import"./Button-DRWvgaAt.js";import"./chevron-right-CnPyxDgf.js";import"./Input-0vu4-5sX.js";import"./search-CMZ9-Ov6.js";import"./spin-BnVapKwe.js";import"./error-D1elG5xT.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3659/1b4d5049c536f3d26c336d81e4915c2893b8e860/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:n,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(n,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},e={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
