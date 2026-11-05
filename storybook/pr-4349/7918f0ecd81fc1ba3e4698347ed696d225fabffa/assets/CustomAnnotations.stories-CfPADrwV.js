import{j as n}from"./iframe-DZSjsAiP.js";import{B as e}from"./BasePdfViewer-DhzbqEvI.js";import"./preload-helper-DRp4yq1n.js";import"./index-CfG6lRDS.js";import"./BasePdfViewer.module.css-_Ingd0RF.js";import"./PdfViewerAnnotationLayer-fMJucpsj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LrRzRXwd.js";import"./PdfViewerOutlineSidebar-CC5P_ieL.js";import"./PdfViewerSidebarHeader-CFOQqORC.js";import"./useBaseUiId-DqEZVBYJ.js";import"./useControlled-CW4hq1Ru.js";import"./CompositeRoot-B6oBrjAd.js";import"./CompositeItem-BdQ_Qgkw.js";import"./ToolbarRootContext-DC4x9xJZ.js";import"./composite-C_s-Ej-L.js";import"./svgIconContainer-oLZG0PXz.js";import"./PdfViewerSearchBar-CmyXdj_f.js";import"./chevron-up-C7PgrgSz.js";import"./chevron-down-Cf7GCw_E.js";import"./cross-DuxYv-Qd.js";import"./PdfViewerSidebar-DzIvLTsO.js";import"./index-ORKGFXoZ.js";import"./index-BKSH5ZIy.js";import"./index-CPoJpgxQ.js";import"./PdfViewerToolbar-0uDRotNC.js";import"./Button-DFAegWDw.js";import"./chevron-right-XR2FtT3_.js";import"./Input-D45tcUlW.js";import"./search-BIZEGKYQ.js";import"./spin-D7Z9adRP.js";import"./error-w1f9WiTY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4349/7918f0ecd81fc1ba3e4698347ed696d225fabffa/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
