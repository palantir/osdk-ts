import{j as n}from"./iframe-E4YUsTVF.js";import{B as e}from"./BasePdfViewer-CJ1V3ELo.js";import"./preload-helper-DS93hH50.js";import"./index-33WajHAP.js";import"./BasePdfViewer.module.css-YxXprP-n.js";import"./PdfViewerAnnotationLayer-CotyW7jH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-M820CJZi.js";import"./PdfViewerOutlineSidebar-d7PGJUr2.js";import"./PdfViewerSidebarHeader-uhChsGtA.js";import"./useBaseUiId-Cmr5xOLR.js";import"./useControlled-DcS_dYjp.js";import"./CompositeRoot-4xM_8XM2.js";import"./CompositeItem-Dy6HQ5ii.js";import"./ToolbarRootContext-Z5Mk8e8P.js";import"./composite-BPb4GIr2.js";import"./svgIconContainer-BpDOXtMt.js";import"./PdfViewerSearchBar-KaaaN_Ex.js";import"./chevron-up-DH8kTr-f.js";import"./chevron-down-BXAN807d.js";import"./cross-B0teiHtj.js";import"./PdfViewerSidebar-BPXmWYOz.js";import"./index-C0oG0k9r.js";import"./index-BD5alyvs.js";import"./index-C6lnPhSr.js";import"./PdfViewerToolbar-Cz-iE9zq.js";import"./Button-D8Hq8qlo.js";import"./chevron-right-D67OEFAA.js";import"./Input-DzBskEWR.js";import"./search-C6TyODke.js";import"./spin-D7FckdA0.js";import"./error-C7OFda1X.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4138/7dcf2fb4cb1fbae7a862c261572577313a902aea/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
