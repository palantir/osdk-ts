import{j as n}from"./iframe-mxG0bqmN.js";import{B as e}from"./BasePdfViewer-D5ZQ1KKr.js";import"./preload-helper-CNw17NEq.js";import"./index-29oGgzLZ.js";import"./BasePdfViewer.module.css-DDG0s6QR.js";import"./PdfViewerAnnotationLayer-BkfsCNU5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C49qkTYU.js";import"./PdfViewerOutlineSidebar-CrhcRyj7.js";import"./PdfViewerSidebarHeader-zQyRvWRZ.js";import"./useBaseUiId-B0pa-b1P.js";import"./useControlled-CwpY0gyY.js";import"./CompositeRoot-B-GjY88p.js";import"./CompositeItem-CqN63eX8.js";import"./ToolbarRootContext-fx2tIRtZ.js";import"./composite-CT4w3sd4.js";import"./svgIconContainer-rUf9sgj2.js";import"./PdfViewerSearchBar-DIzHrR1u.js";import"./chevron-up-CNYf-9NY.js";import"./chevron-down-BPLfSvEY.js";import"./cross-D6Tl4R1E.js";import"./PdfViewerSidebar-kxM_rTsM.js";import"./index-yPM4gYG7.js";import"./index-LiG5jLj1.js";import"./index-xs8nS-0V.js";import"./PdfViewerToolbar-OrEkJTji.js";import"./Button-CoXV5wZD.js";import"./chevron-right-Csbu-w_R.js";import"./Input-DAYbAIy1.js";import"./search-D0vl5yax.js";import"./spin-CP5PTxEZ.js";import"./error-C0pmiaE9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-2570/0a3b5869268c445e6ac985eb96ef809cef96a14e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
