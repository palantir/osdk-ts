import{j as n}from"./iframe-Bjs833GT.js";import{B as e}from"./BasePdfViewer-DSAPOtIr.js";import"./preload-helper-BlVzQ63h.js";import"./index-ouW-uxFy.js";import"./BasePdfViewer.module.css-4C7_ukWC.js";import"./PdfViewerAnnotationLayer-D2v9i9vJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQTp23d7.js";import"./PdfViewerOutlineSidebar-kV7Zc7yx.js";import"./PdfViewerSidebarHeader-DUG9zgPd.js";import"./useBaseUiId-azhLq6E8.js";import"./useControlled-T6eskrKs.js";import"./CompositeRoot-EKerA01W.js";import"./CompositeItem-BOsNn8o6.js";import"./ToolbarRootContext-Gv05lgLU.js";import"./composite-DAp8GgCU.js";import"./svgIconContainer-B50GNB1l.js";import"./PdfViewerSearchBar-BnQIv4a0.js";import"./chevron-up-GvP0eTV7.js";import"./chevron-down-DSKsXuZi.js";import"./cross-odZi7HLt.js";import"./PdfViewerSidebar-RAMNpU57.js";import"./index-Ci1PABP6.js";import"./index-Cd4CH7YJ.js";import"./index-BIIN4O4s.js";import"./PdfViewerToolbar-C7490Xqv.js";import"./Button-Bi0CmGS9.js";import"./chevron-right-BUr6JS25.js";import"./Input-jDIiSSPg.js";import"./search-Bz3i30zB.js";import"./spin-DDOugBM0.js";import"./error-D5mhWRkN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4134/f6670b4e7a375df68b34d679e53e1805b63f8fcd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
