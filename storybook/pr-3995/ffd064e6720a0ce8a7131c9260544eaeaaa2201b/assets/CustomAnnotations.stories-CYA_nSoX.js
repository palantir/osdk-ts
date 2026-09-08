import{j as n}from"./iframe-CI9rENOr.js";import{B as e}from"./BasePdfViewer-Des6-1Ls.js";import"./preload-helper-C65H2kRp.js";import"./index-BaGMdRan.js";import"./BasePdfViewer.module.css-D_hex7wN.js";import"./PdfViewerAnnotationLayer-BqkhELYx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CymmJNcY.js";import"./PdfViewerOutlineSidebar-CdPyiO9z.js";import"./PdfViewerSidebarHeader-ChvDSW49.js";import"./useBaseUiId-sOlDVMc5.js";import"./useControlled-Cem_rLXf.js";import"./CompositeRoot-76lj2YVG.js";import"./CompositeItem-C1H6xqvv.js";import"./ToolbarRootContext-ZE_LxgeM.js";import"./composite-DmfEV9z-.js";import"./svgIconContainer-BcUTFG9y.js";import"./PdfViewerSearchBar-BvGpKRXX.js";import"./chevron-up-DS_sfcQU.js";import"./chevron-down-CcfRnQgG.js";import"./cross-DbBPFO7V.js";import"./PdfViewerSidebar-DJPVqfMk.js";import"./index-C7fkS1TJ.js";import"./index-DgVrz3v8.js";import"./index-2mtmcLVe.js";import"./PdfViewerToolbar-D77z8dLf.js";import"./Button-DhFEEkGk.js";import"./chevron-right-CvFxnphB.js";import"./Input-DVQjs6N1.js";import"./search-C3IyHFqm.js";import"./spin-Dxlg2vqM.js";import"./error-DGU8szJe.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3995/ffd064e6720a0ce8a7131c9260544eaeaaa2201b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
