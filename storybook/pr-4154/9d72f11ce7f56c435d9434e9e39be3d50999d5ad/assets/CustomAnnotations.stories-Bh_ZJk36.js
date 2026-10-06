import{j as n}from"./iframe-D6fPZnqe.js";import{B as e}from"./BasePdfViewer-CZY5FjLQ.js";import"./preload-helper-CBKbTLo4.js";import"./index-DhSFErPm.js";import"./BasePdfViewer.module.css-DkLU7pNR.js";import"./PdfViewerAnnotationLayer-CUPzH_GM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qMdB4Pju.js";import"./PdfViewerOutlineSidebar-x-UKADSY.js";import"./PdfViewerSidebarHeader-KUeXVipo.js";import"./useBaseUiId-D4NDHa5t.js";import"./useControlled-iYay2yJT.js";import"./CompositeRoot-TqhddMsK.js";import"./CompositeItem--v0QRyqL.js";import"./ToolbarRootContext-DyAqKFWo.js";import"./composite-Be4p-4ws.js";import"./svgIconContainer-DubCep_u.js";import"./PdfViewerSearchBar-dmOtz89K.js";import"./chevron-up-BAHETOHn.js";import"./chevron-down-ClCJem65.js";import"./cross-9F8JKEQy.js";import"./PdfViewerSidebar-DcLIdP_4.js";import"./index-CB6cfHnU.js";import"./index-DAhymAav.js";import"./index-D-Gucmtt.js";import"./PdfViewerToolbar-D8x5KbHe.js";import"./Button-BLxStAZZ.js";import"./chevron-right-B-NpgR8Z.js";import"./Input-DoNUyN0C.js";import"./search-j5vkqq1q.js";import"./spin-BUP1hrMd.js";import"./error-1a5mXdNM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4154/9d72f11ce7f56c435d9434e9e39be3d50999d5ad/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
