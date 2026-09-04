import{j as n}from"./iframe-DZC97llC.js";import{B as e}from"./BasePdfViewer-DmvwNO04.js";import"./preload-helper-BKx802u_.js";import"./index-B22k2ynk.js";import"./BasePdfViewer.module.css-CKsvWYSt.js";import"./PdfViewerAnnotationLayer-MLSRi_NO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pMx0KB0W.js";import"./PdfViewerOutlineSidebar-BvOHHzrx.js";import"./PdfViewerSidebarHeader-BaqIquZG.js";import"./useBaseUiId-C8ARUDoV.js";import"./useControlled-CM4OrEQX.js";import"./CompositeRoot-Y5l8H28P.js";import"./CompositeItem-7MvBWb4V.js";import"./ToolbarRootContext-D7J-RjRt.js";import"./composite-4CN6pmFS.js";import"./svgIconContainer-CHUDLQoK.js";import"./PdfViewerSearchBar-B75NccFF.js";import"./chevron-up--StUrf4v.js";import"./chevron-down-CiXO6Fic.js";import"./cross-C2TZ8jDw.js";import"./PdfViewerSidebar-Cumn3Ehf.js";import"./index-kEMBdBjV.js";import"./index-BMmTsFSZ.js";import"./index-CvyqG3Nj.js";import"./PdfViewerToolbar-DUJwvsTV.js";import"./Button-BKAvQm5U.js";import"./chevron-right-BIJ3wYX9.js";import"./Input-CJlK5efb.js";import"./search-D_uWqWVr.js";import"./spin-CPATH6Z2.js";import"./error-CWLyhGEl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3983/7ff02f069a9b79c09f1ef3ca482c0fa2a4f1bead/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
