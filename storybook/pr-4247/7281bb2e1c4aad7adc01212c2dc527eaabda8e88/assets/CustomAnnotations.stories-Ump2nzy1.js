import{j as n}from"./iframe-Bfa633nI.js";import{B as e}from"./BasePdfViewer-g28jOl28.js";import"./preload-helper-S8ArRewN.js";import"./index-CAFX3a2o.js";import"./BasePdfViewer.module.css-DB2MjBJn.js";import"./PdfViewerAnnotationLayer-CVv8GWwL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hvGNAUKT.js";import"./PdfViewerOutlineSidebar-B8ecsGlo.js";import"./PdfViewerSidebarHeader-DWaMPeYw.js";import"./useBaseUiId-DkL2EsGI.js";import"./useControlled-DE-SX_fd.js";import"./CompositeRoot-GHWxNL93.js";import"./CompositeItem-BHvcBU4g.js";import"./ToolbarRootContext-rfZwmAj4.js";import"./composite-MyhD4oE7.js";import"./svgIconContainer-CMg2uk3-.js";import"./PdfViewerSearchBar-Gcot_-mn.js";import"./chevron-up-aN-TKgNu.js";import"./chevron-down-sNl64qaM.js";import"./cross-CO8lPM-Y.js";import"./PdfViewerSidebar-C4gwldon.js";import"./index-BnocMrsR.js";import"./index-CyqiMZNC.js";import"./index-g_La0Psk.js";import"./PdfViewerToolbar-Cmlk2dhS.js";import"./Button-bQTkGamX.js";import"./chevron-right-B810oKZt.js";import"./Input-vSvt0OGa.js";import"./search-DBXxF15B.js";import"./spin-CRAtCeZG.js";import"./error-jmH2Pe7J.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4247/7281bb2e1c4aad7adc01212c2dc527eaabda8e88/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
