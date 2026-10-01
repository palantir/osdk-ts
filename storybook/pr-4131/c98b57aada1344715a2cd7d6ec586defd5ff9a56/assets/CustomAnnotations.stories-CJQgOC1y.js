import{j as n}from"./iframe-BTVQ2MDu.js";import{B as e}from"./BasePdfViewer-CAadad9T.js";import"./preload-helper-V8IN1a25.js";import"./index-De5UO2WD.js";import"./BasePdfViewer.module.css-CWBPsLiQ.js";import"./PdfViewerAnnotationLayer-Dm3FFN61.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DvImdSHW.js";import"./PdfViewerOutlineSidebar-DVastFwB.js";import"./PdfViewerSidebarHeader-DS9Ws1w1.js";import"./useBaseUiId-ageCLcwt.js";import"./useControlled-BNBhFfAy.js";import"./CompositeRoot-mRv2Eqz3.js";import"./CompositeItem-BYdhC28O.js";import"./ToolbarRootContext-BKviL8sB.js";import"./composite-j0A6Y-jy.js";import"./svgIconContainer-Z92KrpXF.js";import"./PdfViewerSearchBar-C1HMHRyr.js";import"./chevron-up-BUeM2TE9.js";import"./chevron-down-B2iYughc.js";import"./cross-CiaqJ3Ct.js";import"./PdfViewerSidebar-BOMkerTs.js";import"./index-DHPYKUwx.js";import"./index-BQEu1zYD.js";import"./index-kvy3rFgR.js";import"./PdfViewerToolbar-Cxg14hlw.js";import"./Button-Ca-Rehkm.js";import"./chevron-right-C5XisiS3.js";import"./Input-BfcaF7JW.js";import"./search-DG5bPe3Q.js";import"./spin-CKiD61c3.js";import"./error-B4_XiTjG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4131/c98b57aada1344715a2cd7d6ec586defd5ff9a56/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
