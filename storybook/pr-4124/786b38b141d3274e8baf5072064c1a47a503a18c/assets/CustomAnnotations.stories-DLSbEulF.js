import{j as n}from"./iframe-UxLT7lYy.js";import{B as e}from"./BasePdfViewer-CkKkjGXX.js";import"./preload-helper-CV6iJ-wL.js";import"./index-CaLIOjRM.js";import"./BasePdfViewer.module.css-BVUByANH.js";import"./PdfViewerAnnotationLayer-CFBj_AUE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-f78Srk9d.js";import"./PdfViewerOutlineSidebar-DEPeZLHG.js";import"./PdfViewerSidebarHeader-ZPkSyn8K.js";import"./useBaseUiId-DR0pgCNJ.js";import"./useControlled-CDHE3Jck.js";import"./CompositeRoot-Dn07G7-y.js";import"./CompositeItem-Kvq0UPS2.js";import"./ToolbarRootContext-19oVc1QJ.js";import"./composite-BYQddcpi.js";import"./svgIconContainer-HqUabHbJ.js";import"./PdfViewerSearchBar-Bwq4Ev-D.js";import"./chevron-up-5xzA1rC0.js";import"./chevron-down-CNsNwb1i.js";import"./cross-gbTOR5Si.js";import"./PdfViewerSidebar-CaWu5LAJ.js";import"./index-azpejN4Q.js";import"./index-5Zs5CZ2c.js";import"./index-C8h5tRSe.js";import"./PdfViewerToolbar-4KQW9AdR.js";import"./Button-DZCJ8vSD.js";import"./chevron-right-BH4d7ay7.js";import"./Input-DHvCRjgv.js";import"./search-K5dECyKJ.js";import"./spin-fvTSjvTu.js";import"./error-CvnQXRAs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4124/786b38b141d3274e8baf5072064c1a47a503a18c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
