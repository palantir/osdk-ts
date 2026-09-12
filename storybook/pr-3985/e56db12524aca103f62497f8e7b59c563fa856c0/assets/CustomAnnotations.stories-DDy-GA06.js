import{j as n}from"./iframe-kpUBKcBo.js";import{B as e}from"./BasePdfViewer-Cpr4E_Ae.js";import"./preload-helper-CEFfxAxV.js";import"./index-CzIfSD2x.js";import"./BasePdfViewer.module.css-BhWT5mtp.js";import"./PdfViewerAnnotationLayer-BSetaQKY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CLq6c4rE.js";import"./PdfViewerOutlineSidebar-D4Cl8uxc.js";import"./PdfViewerSidebarHeader-BBqO8Ah1.js";import"./useBaseUiId-eq47N9Yh.js";import"./useControlled-C4e8W1YD.js";import"./CompositeRoot-sFbKk6XD.js";import"./CompositeItem-ChylY6HS.js";import"./ToolbarRootContext-CcFhYs5t.js";import"./composite-DqwQEgXz.js";import"./svgIconContainer-D1XUyLZc.js";import"./PdfViewerSearchBar-B6e9ZVPq.js";import"./chevron-up-B0nfTL52.js";import"./chevron-down-CeKigphE.js";import"./cross-CsmLqXcs.js";import"./PdfViewerSidebar-BmpD_9i_.js";import"./index-fVh42c2P.js";import"./index-Cg38QLat.js";import"./index-nssiJGD2.js";import"./PdfViewerToolbar-DlRzUzhI.js";import"./Button-IGB5Y7yU.js";import"./chevron-right-Dq3r1EO9.js";import"./Input-xZVHbMZj.js";import"./search-D4qHiAMZ.js";import"./spin-CZkX9b3l.js";import"./error-DS4cKU2L.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3985/e56db12524aca103f62497f8e7b59c563fa856c0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
