import{j as o}from"./iframe-BtTN4BQB.js";import{B as e}from"./BasePdfViewer-OL9w6cXG.js";import"./preload-helper-C2hFUd6N.js";import"./index-pxWT2dwl.js";import"./BasePdfViewer.module.css-C4-tpThP.js";import"./PdfViewerAnnotationLayer-Coc7qNim.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZ37hH8U.js";import"./PdfViewerOutlineSidebar-CWvgCMuV.js";import"./PdfViewerSidebarHeader-B4fgR3zc.js";import"./useBaseUiId-lIY47ohq.js";import"./useControlled-BY2aVBy7.js";import"./CompositeRoot-BSRv4Qnc.js";import"./CompositeItem-Dm5rFUvO.js";import"./ToolbarRootContext-BKy1ZUvI.js";import"./composite-CdDRlQtM.js";import"./svgIconContainer-Ck-gVtGn.js";import"./PdfViewerSearchBar-CrGiqdQh.js";import"./chevron-up-CPUlXJJh.js";import"./chevron-down-BcmFYUSl.js";import"./cross-q76qzbb-.js";import"./PdfViewerSidebar-Blr0WOKT.js";import"./index-9u2i6wOA.js";import"./index-Cq-V6BRN.js";import"./index-CMayXVvR.js";import"./PdfViewerToolbar-CVbDBLi9.js";import"./Button-BLq1-le0.js";import"./chevron-right-CVx3OQTb.js";import"./Input-BP96gLBp.js";import"./search-B3tYggTx.js";import"./spin-Bkf41HYE.js";import"./error-eGAnK2yX.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3964/a1e10d5d6b6711268c6a60d812c19895262f0911/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function r({annotation:t}){return o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>o.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>o.jsx(r,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>o.jsx(r,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:d()},render:t=>o.jsx("div",{style:{height:"600px"},children:o.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental/pdf-viewer";
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
