import{j as n}from"./iframe-D7hanWlH.js";import{B as e}from"./BasePdfViewer-BzYjXfrb.js";import"./preload-helper-CO6dxj1b.js";import"./index-D-fAM26k.js";import"./BasePdfViewer.module.css-LgjIMo4s.js";import"./PdfViewerAnnotationLayer-CVN31EHG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cc7bXJde.js";import"./PdfViewerOutlineSidebar-CxU6p_BO.js";import"./PdfViewerSidebarHeader-BFEnsCNk.js";import"./useBaseUiId-Bu7z_xTH.js";import"./useControlled-i2ARdjw-.js";import"./CompositeRoot-QObKR3Zx.js";import"./CompositeItem-tDOcOAJb.js";import"./ToolbarRootContext-Dx6PUY5o.js";import"./composite-D9lkXcst.js";import"./svgIconContainer-DvWstcAL.js";import"./PdfViewerSearchBar-DVw3GXR_.js";import"./chevron-up-D-MXJorO.js";import"./chevron-down-Cjgkim-K.js";import"./cross-Y5gvP3Fl.js";import"./PdfViewerSidebar-BMjYsluD.js";import"./index-Dt79Win6.js";import"./index-D_yrCdEG.js";import"./index-vVHHs4bi.js";import"./PdfViewerToolbar-BC8FQcLO.js";import"./Button-BnMNzQq6.js";import"./chevron-right-DimgGn9C.js";import"./Input-Cdf8UtKg.js";import"./search-DSRtq581.js";import"./spin-D868vd-a.js";import"./error-CzhlMkp_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4321/9515b82e3e6b0cad74240533714d6aca1dffd0b0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
