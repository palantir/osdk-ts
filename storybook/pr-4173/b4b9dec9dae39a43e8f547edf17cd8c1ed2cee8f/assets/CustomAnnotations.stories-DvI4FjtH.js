import{j as n}from"./iframe-CQxG3cCC.js";import{B as e}from"./BasePdfViewer-DnpvPbMZ.js";import"./preload-helper-BQhDaTv1.js";import"./index-DxGOzCTx.js";import"./BasePdfViewer.module.css-BfCIxPTg.js";import"./PdfViewerAnnotationLayer-Cz6t2usT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CohHdUnz.js";import"./PdfViewerOutlineSidebar-DBSRlzfm.js";import"./PdfViewerSidebarHeader-CB5KJU70.js";import"./useBaseUiId-Dt5sayHU.js";import"./useControlled-DBmpvbx5.js";import"./CompositeRoot-UaBOTu3G.js";import"./CompositeItem-D3C5uQt7.js";import"./ToolbarRootContext-Dp2y2zy-.js";import"./composite-UnoLR2xI.js";import"./svgIconContainer-BhtEOhwo.js";import"./PdfViewerSearchBar-4rEgf2yX.js";import"./chevron-up-C2bbOhFH.js";import"./chevron-down-C-j45_ex.js";import"./cross-csp5HbTE.js";import"./PdfViewerSidebar-ClfvdmEv.js";import"./index-DRHTc7Po.js";import"./index-srIEGZLU.js";import"./index-B8ySRxPM.js";import"./PdfViewerToolbar-Bpu-ZyTK.js";import"./Button-D1svI8Md.js";import"./chevron-right-Dwy_g4-Z.js";import"./Input-IKU9NsaD.js";import"./search-XsOT8fX6.js";import"./spin-CBBFF0_-.js";import"./error-DvI5aFF7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4173/b4b9dec9dae39a43e8f547edf17cd8c1ed2cee8f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
