import{j as n}from"./iframe-B0BeHSW3.js";import{B as e}from"./BasePdfViewer-DssJ2vff.js";import"./preload-helper-DAJqEBqZ.js";import"./index-fkdnmgoB.js";import"./BasePdfViewer.module.css-EorVSxkt.js";import"./PdfViewerAnnotationLayer-DGXwUTtq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQmYQnSa.js";import"./PdfViewerOutlineSidebar-CQ7AbdYN.js";import"./PdfViewerSidebarHeader-BrirlFKX.js";import"./useBaseUiId-CFx2OXwB.js";import"./useControlled-Y2VvyFT1.js";import"./CompositeRoot-CGGtDIvD.js";import"./CompositeItem-CCwjGTNJ.js";import"./ToolbarRootContext-BU8BYZpt.js";import"./composite-BKG8TgZ7.js";import"./svgIconContainer-3LirYjxc.js";import"./PdfViewerSearchBar-BYKv7wkc.js";import"./chevron-up-CMUh9_HD.js";import"./chevron-down-CIEyD1Re.js";import"./cross-ChIXxlFh.js";import"./PdfViewerSidebar-CaKZY71K.js";import"./index-Dbl4MtyX.js";import"./index-CeseuNBk.js";import"./index-B8qFFoze.js";import"./PdfViewerToolbar-CzimHNTt.js";import"./Button-CUzfzg16.js";import"./chevron-right-k95gyM0W.js";import"./Input-BhPQq-YU.js";import"./search-Eov1ZRug.js";import"./spin-DyT0CKnN.js";import"./error-LXXuPtJW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4180/c5ba0a1eaf0c05fcede6141ba613520240b28092/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
