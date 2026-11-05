import{j as n}from"./iframe-5l1aTQWB.js";import{B as e}from"./BasePdfViewer-ClL9Vib3.js";import"./preload-helper-CV54w-MR.js";import"./index-CabVKWfS.js";import"./BasePdfViewer.module.css-lTMGXAoh.js";import"./PdfViewerAnnotationLayer-BSVaTcYu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D4_ePV4b.js";import"./PdfViewerOutlineSidebar-D4DKUyr2.js";import"./PdfViewerSidebarHeader-BNReHXHY.js";import"./useBaseUiId-D2qSGviR.js";import"./useControlled-Dv35mSy4.js";import"./CompositeRoot-CIAUHOBN.js";import"./CompositeItem-CiQq9b_9.js";import"./ToolbarRootContext-DpNaqsW8.js";import"./composite-BN-nzUC2.js";import"./svgIconContainer-DUWwpavS.js";import"./PdfViewerSearchBar-D2C2Z6ZG.js";import"./chevron-up-Cy2dHORW.js";import"./chevron-down-C-oTZ5aG.js";import"./cross-DVFwGI58.js";import"./PdfViewerSidebar-DLDwC7VZ.js";import"./index-BKm5H3zL.js";import"./index-CWUPxEVH.js";import"./index-U5dtIGUV.js";import"./PdfViewerToolbar-hor6X3Y-.js";import"./Button-BbI-ZrrT.js";import"./chevron-right-6t-earY4.js";import"./Input-DVZngs_7.js";import"./search-ocH4sH9r.js";import"./spin-8jMD_x6c.js";import"./error-Cor_ktfQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4351/42c4281bf7bd4ab9e0ec7ff276074e80532571b4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
