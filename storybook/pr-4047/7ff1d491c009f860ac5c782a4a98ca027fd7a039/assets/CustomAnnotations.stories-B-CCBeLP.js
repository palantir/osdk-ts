import{j as n}from"./iframe-b99LbP9m.js";import{B as e}from"./BasePdfViewer-BE-PnNpd.js";import"./preload-helper-DVhK3iQp.js";import"./index-lvCDhi6D.js";import"./BasePdfViewer.module.css-CZ99dk0S.js";import"./PdfViewerAnnotationLayer-HbKEh6VS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Be4dW7PI.js";import"./PdfViewerOutlineSidebar-D_cFsv1U.js";import"./PdfViewerSidebarHeader-BQyczJl7.js";import"./useBaseUiId-6kqzncOU.js";import"./useControlled-ByvbEfpA.js";import"./CompositeRoot-BY362AcT.js";import"./CompositeItem-CKc0sSZR.js";import"./ToolbarRootContext-BgL_RAO8.js";import"./composite-CtvoA4ac.js";import"./svgIconContainer-BihU0y1S.js";import"./PdfViewerSearchBar-DFbPWVsL.js";import"./chevron-up-3lhbrUVC.js";import"./chevron-down-D4nxFd5U.js";import"./cross-DIxLp0N9.js";import"./PdfViewerSidebar-BiKS_DWb.js";import"./index-DLEC-1eU.js";import"./index-DJmpNsh_.js";import"./index-CQtcp48q.js";import"./PdfViewerToolbar-DcT7UJoe.js";import"./Button-C5yqAo8p.js";import"./chevron-right-bY8hn0iT.js";import"./Input-hdA3kWA3.js";import"./search-CC467d8u.js";import"./spin-W7FhABmw.js";import"./error-DAEmkM_5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4047/7ff1d491c009f860ac5c782a4a98ca027fd7a039/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
