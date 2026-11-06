import{j as n}from"./iframe-C3HFz_5t.js";import{B as e}from"./BasePdfViewer-CZ9t7lUz.js";import"./preload-helper-Lu-1fXSQ.js";import"./index-C294enkt.js";import"./BasePdfViewer.module.css-BRdifxXz.js";import"./PdfViewerAnnotationLayer-CVcPy3tm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bq4E_D6D.js";import"./PdfViewerOutlineSidebar-CaQpzoIu.js";import"./PdfViewerSidebarHeader-DbiZRVbi.js";import"./useBaseUiId-Bldx0Hal.js";import"./useControlled-CO4tNWxM.js";import"./CompositeRoot-Djt65RTk.js";import"./CompositeItem-Ljl_SfE6.js";import"./ToolbarRootContext-QkATP4Zh.js";import"./composite-D03Np3Q8.js";import"./svgIconContainer-Dx7Oqsa5.js";import"./PdfViewerSearchBar-HSxr9lVV.js";import"./chevron-up-BHe39bWw.js";import"./chevron-down-DKXpMnZC.js";import"./cross-VDE-QV8Y.js";import"./PdfViewerSidebar-DG1phdFg.js";import"./index-o5L_LgpC.js";import"./index-jlzeR6Al.js";import"./index-YNwbQPnW.js";import"./PdfViewerToolbar-Cp9q4yza.js";import"./Button-BCjPDU8B.js";import"./chevron-right-BxQZXxHl.js";import"./Input-C6djVFfS.js";import"./search-DicQa5iZ.js";import"./spin-BhGCp_wK.js";import"./error-NlvFbJx8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4323/748da0a674d51d24927f01a78ee5d82038eb9e6a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
