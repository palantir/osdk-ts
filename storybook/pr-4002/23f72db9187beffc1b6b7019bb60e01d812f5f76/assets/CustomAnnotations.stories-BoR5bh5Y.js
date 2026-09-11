import{j as n}from"./iframe-BDntCMEH.js";import{B as e}from"./BasePdfViewer-t-DW5Z1S.js";import"./preload-helper-B50VuOmN.js";import"./index-B0z8RHyd.js";import"./BasePdfViewer.module.css-CQAAqyHi.js";import"./PdfViewerAnnotationLayer-JjVNGp47.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dp85Zd4w.js";import"./PdfViewerOutlineSidebar-DIJ5en6e.js";import"./PdfViewerSidebarHeader-Cj-mBDri.js";import"./useBaseUiId-BTqLhW0i.js";import"./useControlled-B173rJPI.js";import"./CompositeRoot-CqCXHM5p.js";import"./CompositeItem-BTJTpSwe.js";import"./ToolbarRootContext-C8N9jA7J.js";import"./composite-BQ7qlaUQ.js";import"./svgIconContainer-B6ralbiB.js";import"./PdfViewerSearchBar-DI_g_zzS.js";import"./chevron-up-Disd9lAY.js";import"./chevron-down-BxBh9Dqz.js";import"./cross-BH8OF0Bn.js";import"./PdfViewerSidebar-DrNSiPOy.js";import"./index-BQKiMfv1.js";import"./index-CX_hrFB8.js";import"./index-BOofLcNJ.js";import"./PdfViewerToolbar-lkVmMGb9.js";import"./Button-Bpn7C7dn.js";import"./chevron-right-DOEG618o.js";import"./Input-CXpC2-sJ.js";import"./search-CYEButG9.js";import"./spin-7KI6O9X9.js";import"./error-CAncZcqv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4002/23f72db9187beffc1b6b7019bb60e01d812f5f76/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
