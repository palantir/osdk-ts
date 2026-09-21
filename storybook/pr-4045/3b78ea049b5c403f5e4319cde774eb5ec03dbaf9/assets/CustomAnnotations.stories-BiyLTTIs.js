import{j as n}from"./iframe-DGxn_FfA.js";import{B as e}from"./BasePdfViewer-B39eNGPr.js";import"./preload-helper-K_1Peegk.js";import"./index-DRUA9-Xo.js";import"./BasePdfViewer.module.css-CQffT6Lg.js";import"./PdfViewerAnnotationLayer-DVTOHgHP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BaTVvorT.js";import"./PdfViewerOutlineSidebar-DZErc-6i.js";import"./PdfViewerSidebarHeader-ClIhI7WC.js";import"./useBaseUiId-CmBmMESo.js";import"./useControlled-SGdv5sh_.js";import"./CompositeRoot-BWWmQ5xh.js";import"./CompositeItem-CqRwnn1g.js";import"./ToolbarRootContext-BvwYmpzB.js";import"./composite-DsQ0vKV8.js";import"./svgIconContainer-BTT_iTBU.js";import"./PdfViewerSearchBar-DrwLCmLY.js";import"./chevron-up-CBn2RU_T.js";import"./chevron-down-kbFfOEdC.js";import"./cross-BbLFpAfM.js";import"./PdfViewerSidebar-CIjJAf1g.js";import"./index-BzK3-5ei.js";import"./index-Cn-ogudX.js";import"./index-C09U9z-b.js";import"./PdfViewerToolbar-CLZzd66k.js";import"./Button-dnprDbN8.js";import"./chevron-right-CWJifr7J.js";import"./Input-vHhrLUUa.js";import"./search-D7bJBEOM.js";import"./spin-CcZBLzZl.js";import"./error-GM-hvFd6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4045/3b78ea049b5c403f5e4319cde774eb5ec03dbaf9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
