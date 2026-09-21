import{j as n}from"./iframe-rrq8MZm7.js";import{B as e}from"./BasePdfViewer-DoBgid2L.js";import"./preload-helper-g_e3lUw3.js";import"./index-DgF7SkuQ.js";import"./BasePdfViewer.module.css-D-Al21dp.js";import"./PdfViewerAnnotationLayer-B4Pa56El.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuBOUwep.js";import"./PdfViewerOutlineSidebar-NoCBmk9W.js";import"./PdfViewerSidebarHeader-BuVWJ43n.js";import"./useBaseUiId-Ck0oWSaP.js";import"./useControlled-CFE1onYy.js";import"./CompositeRoot-ClJgtuze.js";import"./CompositeItem-CfvMX9u5.js";import"./ToolbarRootContext-BX6aviUc.js";import"./composite-Dz23lKV_.js";import"./svgIconContainer-DzRNCFzx.js";import"./PdfViewerSearchBar-dG4sQ6YI.js";import"./chevron-up-DVKUDI8L.js";import"./chevron-down-wVslH90M.js";import"./cross-Dx39xAnI.js";import"./PdfViewerSidebar-CeRKcbxP.js";import"./index-Bf3ZsPEb.js";import"./index-CSl6GKyJ.js";import"./index-CxWs-nPq.js";import"./PdfViewerToolbar-CFkS54m9.js";import"./Button-CR0VLtCt.js";import"./chevron-right-BvEAsPni.js";import"./Input-DomtRdeE.js";import"./search-HS8jOdU9.js";import"./spin-DYtT6oRy.js";import"./error-Bcjq0Lff.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4060/116b92c2c8037793e6c392f9b0ef1991b6a63990/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
