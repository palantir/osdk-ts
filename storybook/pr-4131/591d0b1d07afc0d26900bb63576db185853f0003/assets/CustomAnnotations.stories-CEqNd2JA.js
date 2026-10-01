import{j as n}from"./iframe-DHfhGWcA.js";import{B as e}from"./BasePdfViewer-00BS0OKf.js";import"./preload-helper-D14EGrrK.js";import"./index-CCF9MEs2.js";import"./BasePdfViewer.module.css-BTYgR471.js";import"./PdfViewerAnnotationLayer-BER6K1ZY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkzjDLRe.js";import"./PdfViewerOutlineSidebar-DgoMYM7T.js";import"./PdfViewerSidebarHeader-D_UXdYm4.js";import"./useBaseUiId-BATl1CQr.js";import"./useControlled-Bxerh3bt.js";import"./CompositeRoot-Pu_atRrg.js";import"./CompositeItem-CLlZ6Yb0.js";import"./ToolbarRootContext-erU_8-54.js";import"./composite-DbTWPUQ9.js";import"./svgIconContainer-BaEBe_Ou.js";import"./PdfViewerSearchBar-C_3eiZaJ.js";import"./chevron-up-sXC435XN.js";import"./chevron-down-DR6eEQC2.js";import"./cross-Dj-fC_ys.js";import"./PdfViewerSidebar-B9T_U6Bx.js";import"./index-DFvQFeWQ.js";import"./index-Blf5so-r.js";import"./index-C5pfUNxc.js";import"./PdfViewerToolbar-BZ9IfPsY.js";import"./Button-Dj3Gc0R8.js";import"./chevron-right-2KHytdoc.js";import"./Input-zMxDvO-I.js";import"./search-DWYoVV2s.js";import"./spin-uCwIUPUF.js";import"./error-CAZmovtj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4131/591d0b1d07afc0d26900bb63576db185853f0003/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
