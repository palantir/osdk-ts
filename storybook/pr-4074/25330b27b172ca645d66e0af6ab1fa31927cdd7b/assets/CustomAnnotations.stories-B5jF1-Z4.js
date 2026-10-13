import{j as n}from"./iframe-C1tZXogj.js";import{B as e}from"./BasePdfViewer-C_mocpFY.js";import"./preload-helper-CPtBFz2Y.js";import"./index-DxPI7-w_.js";import"./BasePdfViewer.module.css-t5X9bKIK.js";import"./PdfViewerAnnotationLayer-rLORp8o4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DjEDzUZG.js";import"./PdfViewerOutlineSidebar-C515JHZI.js";import"./PdfViewerSidebarHeader-CQ8eBwrs.js";import"./useBaseUiId-BME5ZjIK.js";import"./useControlled-mPEThvmW.js";import"./CompositeRoot-CsvAnYnK.js";import"./CompositeItem-BBNw29UQ.js";import"./ToolbarRootContext-DgDYgZp9.js";import"./composite-cuBDJi1p.js";import"./svgIconContainer-CIq0Uduk.js";import"./PdfViewerSearchBar-BRrxkDcB.js";import"./chevron-up-Be-NaPtY.js";import"./chevron-down-CRmIr1SJ.js";import"./cross-D5lRpI2u.js";import"./PdfViewerSidebar-x_RJeAIH.js";import"./index-D4pImD7i.js";import"./index-BYD_xDue.js";import"./index-iBT1_a_C.js";import"./PdfViewerToolbar-mjoRljY7.js";import"./Button-IJ98NdC3.js";import"./chevron-right-CIL1I28K.js";import"./Input-BFJGoRS_.js";import"./search-mQyGpkqY.js";import"./spin-CYYXQDUM.js";import"./error-Ccxy7sxh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4074/25330b27b172ca645d66e0af6ab1fa31927cdd7b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
