import{j as n}from"./iframe-Bp6ykM_Q.js";import{B as e}from"./BasePdfViewer-Ch2e0SOR.js";import"./preload-helper-hhg-UuLO.js";import"./index-CkmqH5v_.js";import"./BasePdfViewer.module.css-Zu55uZwu.js";import"./PdfViewerAnnotationLayer-DPEGQdx0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-O1qjy1i-.js";import"./PdfViewerOutlineSidebar-DMLr_JDS.js";import"./PdfViewerSidebarHeader-BNvnIZgx.js";import"./useBaseUiId-B9JaL3lL.js";import"./useControlled-DfSSocWG.js";import"./CompositeRoot-Dqk5RuUP.js";import"./CompositeItem-DEa3hl5L.js";import"./ToolbarRootContext-DvDyj9lB.js";import"./composite-CELT5bVY.js";import"./svgIconContainer-Bbfw_TbJ.js";import"./PdfViewerSearchBar-DNcQVyCH.js";import"./chevron-up-DZIBKwFV.js";import"./chevron-down-DzC25JPe.js";import"./cross-C2XcpcwW.js";import"./PdfViewerSidebar-sGkmKgem.js";import"./index-KVwHojvU.js";import"./index-D7B9vPdC.js";import"./index-DPOB5ZLL.js";import"./PdfViewerToolbar-Dl9ZYEr3.js";import"./Button-CqF-mJTx.js";import"./chevron-right-C5Gv1BF3.js";import"./Input-8kWtUrGW.js";import"./search-oCnrD3HI.js";import"./spin-Cjb3DqZV.js";import"./error-pcj4mGvq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4208/182eb1b4e7c1a40276783d7d8ea42a1425ca24ff/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
