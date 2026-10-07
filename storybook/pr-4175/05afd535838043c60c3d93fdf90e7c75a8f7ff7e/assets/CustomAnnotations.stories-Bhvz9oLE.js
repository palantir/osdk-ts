import{j as n}from"./iframe-BuDnfqKQ.js";import{B as e}from"./BasePdfViewer-BNcyPOAn.js";import"./preload-helper-B6J6BeBc.js";import"./index-B6xFqDwW.js";import"./BasePdfViewer.module.css-C4ETDlyP.js";import"./PdfViewerAnnotationLayer-lEkNH_tW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-iUXAl2ja.js";import"./PdfViewerOutlineSidebar-Bu9ISqrf.js";import"./PdfViewerSidebarHeader-DMGbcqWB.js";import"./useBaseUiId-Cy8x85cF.js";import"./useControlled-BWRXH__P.js";import"./CompositeRoot-CooFzpS9.js";import"./CompositeItem-Dc19RcBz.js";import"./ToolbarRootContext-DTTMwqZv.js";import"./composite-DOI6fCuf.js";import"./svgIconContainer-DN1WNNEt.js";import"./PdfViewerSearchBar-BtKWE8-m.js";import"./chevron-up-ju3oQ9KM.js";import"./chevron-down-C4fOxkM5.js";import"./cross-FLwBoLKf.js";import"./PdfViewerSidebar-C0KL1S_a.js";import"./index-zf1BCIO_.js";import"./index-VpAGjtCA.js";import"./index-Bcup2US4.js";import"./PdfViewerToolbar-DkCFYN-A.js";import"./Button-Ckrw6oVp.js";import"./chevron-right-CS94RCPN.js";import"./Input-fZvrHimm.js";import"./search-CoDCGLUE.js";import"./spin-BiAFAsZe.js";import"./error-DtRlIBmm.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4175/05afd535838043c60c3d93fdf90e7c75a8f7ff7e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
