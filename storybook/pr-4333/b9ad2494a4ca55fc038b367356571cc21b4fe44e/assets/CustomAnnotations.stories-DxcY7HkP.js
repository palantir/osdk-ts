import{j as n}from"./iframe-CQFC4dx4.js";import{B as e}from"./BasePdfViewer-BrZS-yPf.js";import"./preload-helper-JcY_IPoe.js";import"./index-Cspojgcw.js";import"./BasePdfViewer.module.css-BfPa0fAj.js";import"./PdfViewerAnnotationLayer-CNKKdFJ2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYp_gnDn.js";import"./PdfViewerOutlineSidebar-zg8C_iU0.js";import"./PdfViewerSidebarHeader-CL_bit0a.js";import"./useBaseUiId-Dc6nK4KF.js";import"./useControlled-BVb8ax9g.js";import"./CompositeRoot-CRdRT-Ke.js";import"./CompositeItem-Don4IZ7P.js";import"./ToolbarRootContext-Bi5DI-Ar.js";import"./composite-7q0vYS_p.js";import"./svgIconContainer-BKBde2aY.js";import"./PdfViewerSearchBar-zH1Z-6Zn.js";import"./chevron-up-CyNAIY2e.js";import"./chevron-down-giF0vKbh.js";import"./cross-DOs9H1e3.js";import"./PdfViewerSidebar-B5rkfSue.js";import"./index-xDMkfL05.js";import"./index-P5yCg6P1.js";import"./index-C4XVD7Cr.js";import"./PdfViewerToolbar-DIv1BqdQ.js";import"./Button-CcSga4fz.js";import"./chevron-right-CVaok1W6.js";import"./Input-DXeuXn9d.js";import"./search-BU20I270.js";import"./spin-BRPDi935.js";import"./error-CkMA_OFf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4333/b9ad2494a4ca55fc038b367356571cc21b4fe44e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
