import{j as n}from"./iframe-D8QP41pb.js";import{B as e}from"./BasePdfViewer-BZ_RdYIl.js";import"./preload-helper-rYx5aepV.js";import"./index-ptxv2enP.js";import"./BasePdfViewer.module.css-eCWsBu12.js";import"./PdfViewerAnnotationLayer-mgyORvZU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C2Isfxtd.js";import"./PdfViewerOutlineSidebar-Dd9Bi3Ys.js";import"./PdfViewerSidebarHeader-DgZihHCE.js";import"./useBaseUiId-BoqMbBaF.js";import"./useControlled-G3ngQ_8d.js";import"./CompositeRoot-CQ-YvIjo.js";import"./CompositeItem-nSbVFhm7.js";import"./ToolbarRootContext-DDihycVp.js";import"./composite-sgwSF-wx.js";import"./svgIconContainer-CRypdVCt.js";import"./PdfViewerSearchBar-DMWEGUy0.js";import"./chevron-up-ChXzB2Ds.js";import"./chevron-down-7YXmtC0t.js";import"./cross-C4B55KNt.js";import"./PdfViewerSidebar-CE8bMB3T.js";import"./index-BOgqeeRL.js";import"./index-Cgw2ueis.js";import"./index-Dng6rJam.js";import"./PdfViewerToolbar-Czc1JFwZ.js";import"./Button-CyBwq7g0.js";import"./chevron-right-CWJtd49o.js";import"./Input-lEEPXcpp.js";import"./search-C3wepv5K.js";import"./spin-IRdGEnVi.js";import"./error-D-e6D9Uk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4112/ddf0ce1d17b5e76ffa30a8c5980f7d1311a1c7f4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
