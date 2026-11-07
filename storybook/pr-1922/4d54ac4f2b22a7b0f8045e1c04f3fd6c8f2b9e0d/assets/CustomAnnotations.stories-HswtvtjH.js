import{j as n}from"./iframe-ByxoF4UB.js";import{B as e}from"./BasePdfViewer-Cgz9kuXg.js";import"./preload-helper-CXMZSjtp.js";import"./index-87CISW6C.js";import"./BasePdfViewer.module.css-BUKFsdXb.js";import"./PdfViewerAnnotationLayer-CfQFIR20.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-bFBGN6Ih.js";import"./PdfViewerOutlineSidebar-DJREs6A_.js";import"./PdfViewerSidebarHeader-C8D9swq2.js";import"./useBaseUiId-uat7AM1o.js";import"./useControlled-Dzpgg9G4.js";import"./CompositeRoot-DZPHHEso.js";import"./CompositeItem-CwRzyQgC.js";import"./ToolbarRootContext-Dnh-d6oH.js";import"./composite-wjt4XLHj.js";import"./svgIconContainer-C7yUgkWe.js";import"./PdfViewerSearchBar-BoovtCF4.js";import"./chevron-up-BtyWGkC2.js";import"./chevron-down-j_R9vXIX.js";import"./cross-wBV-Qz69.js";import"./PdfViewerSidebar-L4wsBcMo.js";import"./index-CQ29xKcD.js";import"./index-BjYlodOL.js";import"./index-DbpuMeeP.js";import"./PdfViewerToolbar-lenlKn6B.js";import"./Button-GV0a0tCT.js";import"./chevron-right-BCq18kzH.js";import"./Input-DgqlI36T.js";import"./search-Cs7dO1R3.js";import"./spin-DlxCBkEv.js";import"./error-BsU_wzAp.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1922/4d54ac4f2b22a7b0f8045e1c04f3fd6c8f2b9e0d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
