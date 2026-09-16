import{j as n}from"./iframe-CChix_Ju.js";import{B as e}from"./BasePdfViewer-Bo9gh8c9.js";import"./preload-helper-DGn9W5qi.js";import"./index-pvPqNL-H.js";import"./BasePdfViewer.module.css-C82DcHtc.js";import"./PdfViewerAnnotationLayer-De53QZ0M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCBH_Ey5.js";import"./PdfViewerOutlineSidebar-DOWUbO2Y.js";import"./PdfViewerSidebarHeader-DO_4ETZE.js";import"./useBaseUiId-4A8uRFRe.js";import"./useControlled-CG8Zt7_4.js";import"./CompositeRoot-BcTFP5xH.js";import"./CompositeItem-Dh0FwBF1.js";import"./ToolbarRootContext-4N77tOAl.js";import"./composite-Ctdw8swW.js";import"./svgIconContainer-BeYzdFE0.js";import"./PdfViewerSearchBar-ech2g958.js";import"./chevron-up-Oj87dN5x.js";import"./chevron-down-DL0MqWR7.js";import"./cross-CUi9b35_.js";import"./PdfViewerSidebar-JNjOxJb6.js";import"./index-Bmjlrc5X.js";import"./index-CHXlKmK_.js";import"./index-BdOozmQn.js";import"./PdfViewerToolbar-kfpl3m5h.js";import"./Button-BRITeuER.js";import"./chevron-right-Dop7Ef7r.js";import"./Input-BRtUQT1Y.js";import"./search-CX5b2IB4.js";import"./spin-BLfDiO_w.js";import"./error-fDpd87S9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4038/45f654275fa8ea85f30c1a11506300b93e4a2de9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
