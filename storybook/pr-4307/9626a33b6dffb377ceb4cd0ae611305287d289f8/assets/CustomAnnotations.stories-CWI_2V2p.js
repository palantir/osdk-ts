import{j as n}from"./iframe-p7D6sarL.js";import{B as e}from"./BasePdfViewer-DxYNP1u9.js";import"./preload-helper-fTfJHf6r.js";import"./index-BdE6iQIl.js";import"./BasePdfViewer.module.css-WMSKmjOk.js";import"./PdfViewerAnnotationLayer-Dza_AmE1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mvw2bTiG.js";import"./PdfViewerOutlineSidebar-Dd690diU.js";import"./PdfViewerSidebarHeader-BVZ3VBlA.js";import"./useBaseUiId-Dpj_J2PZ.js";import"./useControlled-D8RNaOKh.js";import"./CompositeRoot-0UMvT-js.js";import"./CompositeItem-DPnrDtg_.js";import"./ToolbarRootContext-DHC1R4PN.js";import"./composite-C6-iGtUX.js";import"./svgIconContainer-4FKWJ0K3.js";import"./PdfViewerSearchBar-DheD6m-N.js";import"./chevron-up-C__4PLQb.js";import"./chevron-down-CW12YW7p.js";import"./cross-BIlvkmku.js";import"./PdfViewerSidebar-DF04N73L.js";import"./index-DrFK8Y9T.js";import"./index-nQDHUjnH.js";import"./index-CZrsf4r_.js";import"./PdfViewerToolbar-CiputGVd.js";import"./Button-DTuYEipm.js";import"./chevron-right-Calj5F2C.js";import"./Input-LdPdzdTD.js";import"./search-0vpab4Qy.js";import"./spin-DtQVRx_P.js";import"./error-orkHl4EN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4307/9626a33b6dffb377ceb4cd0ae611305287d289f8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
