import{j as n}from"./iframe-CC2ptI8P.js";import{B as e}from"./BasePdfViewer-BBgVhuAp.js";import"./preload-helper-DJhSNMV6.js";import"./index-84SYJq0E.js";import"./BasePdfViewer.module.css-ByVwiRi7.js";import"./PdfViewerAnnotationLayer-DI2mTcrX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CopRrIXa.js";import"./PdfViewerOutlineSidebar-CQPWKwwe.js";import"./PdfViewerSidebarHeader-B6Z_mxo7.js";import"./useBaseUiId-BCidQo4j.js";import"./useControlled-DQuDgCM-.js";import"./CompositeRoot-CedMkBE8.js";import"./CompositeItem-CDqASXyT.js";import"./ToolbarRootContext-DJFAvWHQ.js";import"./composite-BKy8zjFJ.js";import"./svgIconContainer-aq_zJjvF.js";import"./PdfViewerSearchBar-z2nQFpvi.js";import"./chevron-up-CmV_L84U.js";import"./chevron-down-CoZSOIuk.js";import"./cross-6eZZZefX.js";import"./PdfViewerSidebar-DgA7tOha.js";import"./index-DPANitfT.js";import"./index-DamSmk8t.js";import"./index-DyTGXUkB.js";import"./PdfViewerToolbar-C-ASy7zy.js";import"./Button-CefAX4Ei.js";import"./chevron-right-CSGRE0ve.js";import"./Input-_srjMwb1.js";import"./search-CUgQ5xTX.js";import"./spin-B2AIPuLX.js";import"./error-CdNmuOhr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4318/1feda0662f532fb9db7a544eff91696b9020f8d3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
