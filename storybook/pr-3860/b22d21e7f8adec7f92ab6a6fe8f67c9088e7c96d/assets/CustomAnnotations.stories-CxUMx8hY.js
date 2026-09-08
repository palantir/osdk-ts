import{j as n}from"./iframe-Bl9Agv3T.js";import{B as e}from"./BasePdfViewer-Do_hOGcW.js";import"./preload-helper-C2Q81Ac3.js";import"./index-DsMKsdV8.js";import"./BasePdfViewer.module.css-BEo7Tpw1.js";import"./PdfViewerAnnotationLayer-DPEn_SM1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwE0bWea.js";import"./PdfViewerOutlineSidebar-CmsdfeIa.js";import"./PdfViewerSidebarHeader-DmYNCFjQ.js";import"./useBaseUiId-CxMJijpy.js";import"./useControlled-BFzsGkd0.js";import"./CompositeRoot-La5M5RJu.js";import"./CompositeItem-D_lixxrU.js";import"./ToolbarRootContext-DtF-FbA5.js";import"./composite-BXwJLY2p.js";import"./svgIconContainer-CYsYLgfA.js";import"./PdfViewerSearchBar-DGJ509Tq.js";import"./chevron-up-BZDHc_ym.js";import"./chevron-down-BpdWjY1P.js";import"./cross-DNHfVbpu.js";import"./PdfViewerSidebar-C_EnVx5m.js";import"./index-CzVK5CEn.js";import"./index-Bqfpj0Ej.js";import"./index-DTOWBSwW.js";import"./PdfViewerToolbar-CADaAnph.js";import"./Button-C9n-JPHB.js";import"./chevron-right-Cq8ETXwP.js";import"./Input-BPwTrKsb.js";import"./search-BMgb5_aJ.js";import"./spin-CH-mGOiT.js";import"./error-BNDEYQ-r.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3860/b22d21e7f8adec7f92ab6a6fe8f67c9088e7c96d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
