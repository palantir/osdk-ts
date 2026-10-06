import{j as n}from"./iframe-DWfCOAQu.js";import{B as e}from"./BasePdfViewer-BaiYi9Ty.js";import"./preload-helper-AetNKwh5.js";import"./index-CqJhMuS2.js";import"./BasePdfViewer.module.css-C00YAJTD.js";import"./PdfViewerAnnotationLayer-DELfqMcm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C41-tJtF.js";import"./PdfViewerOutlineSidebar-CE1K6Ems.js";import"./PdfViewerSidebarHeader-BbmDx8Hr.js";import"./useBaseUiId-BKma_f4b.js";import"./useControlled-CnSP5Uy7.js";import"./CompositeRoot-D_E17u2k.js";import"./CompositeItem-CfFTNcKF.js";import"./ToolbarRootContext-BnN-yS54.js";import"./composite-DNxX4Nkb.js";import"./svgIconContainer-Q7lczhdT.js";import"./PdfViewerSearchBar-DtCQ8Nby.js";import"./chevron-up-DSNBFXpG.js";import"./chevron-down-Dt5AdPlw.js";import"./cross-B_xAvT3d.js";import"./PdfViewerSidebar-4ySsrrjj.js";import"./index-Dcv9F_CZ.js";import"./index-CrNU2B9N.js";import"./index-WpqqJaJk.js";import"./PdfViewerToolbar-4px38u0j.js";import"./Button-C6vZxzg6.js";import"./chevron-right-juAXG2n4.js";import"./Input-B5DqZdR7.js";import"./search-BgPhvmky.js";import"./spin-an9Bo5XM.js";import"./error-D0MXudnr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4158/7462ad04e2a966549aa0c255f369b7c5bcb0c288/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
