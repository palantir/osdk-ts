import{j as n}from"./iframe-CO_TqB81.js";import{B as e}from"./BasePdfViewer-zFtsVP19.js";import"./preload-helper-Cb9TEUNK.js";import"./index-BG1T9Qar.js";import"./BasePdfViewer.module.css-DhfArX-C.js";import"./PdfViewerAnnotationLayer-Wy93ebdI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTiLSeop.js";import"./PdfViewerOutlineSidebar-BSNT_sHS.js";import"./PdfViewerSidebarHeader-BzJ2qxx-.js";import"./useBaseUiId-CQDh8HZx.js";import"./useControlled-BzsK2z1m.js";import"./CompositeRoot-bAavk3zN.js";import"./CompositeItem-DiNcRYV6.js";import"./ToolbarRootContext-C89jM3yj.js";import"./composite-ksiLQPWX.js";import"./svgIconContainer-9GB5-wwK.js";import"./PdfViewerSearchBar-BHplcw5I.js";import"./chevron-up-Cc9rzh_V.js";import"./chevron-down-Cz7E_Xzc.js";import"./cross-BWp6Y9Mg.js";import"./PdfViewerSidebar-CE2f4WkZ.js";import"./index-CZb0rJv3.js";import"./index-Vp2_lvOX.js";import"./index-BpkhN8QR.js";import"./PdfViewerToolbar-B-MkAkuu.js";import"./Button-DcLBkUW1.js";import"./chevron-right-ByRYRMQp.js";import"./Input-C4_accH4.js";import"./search-CL2g-V2W.js";import"./spin-CzGUiCPE.js";import"./error-CQK0rvpI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4356/887faf7a458f099f2bf5a6e5a0f7a0e90b907529/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
