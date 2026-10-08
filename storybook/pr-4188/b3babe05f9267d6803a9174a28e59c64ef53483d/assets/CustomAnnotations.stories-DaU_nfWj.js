import{j as n}from"./iframe-Ds_0fUNG.js";import{B as e}from"./BasePdfViewer-B4HcQER_.js";import"./preload-helper-rl_3IysT.js";import"./index-CfHbFnsm.js";import"./BasePdfViewer.module.css-MFp_r4pU.js";import"./PdfViewerAnnotationLayer-D3PWH1D2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-NFJyhIkG.js";import"./PdfViewerOutlineSidebar-BFLoFiEm.js";import"./PdfViewerSidebarHeader-DYnkMqk0.js";import"./useBaseUiId-BTcKJi-m.js";import"./useControlled-BJ5XCIhk.js";import"./CompositeRoot-BhbhTpin.js";import"./CompositeItem-Cd9-IsCw.js";import"./ToolbarRootContext-WaLBUvtM.js";import"./composite-BQp92XLf.js";import"./svgIconContainer-Bnjtz_zA.js";import"./PdfViewerSearchBar-BR1X2SsJ.js";import"./chevron-up-C-wtdL_e.js";import"./chevron-down-QYpALvW6.js";import"./cross-CPIn0YCt.js";import"./PdfViewerSidebar-B2QkzSVV.js";import"./index-Xp60VzFy.js";import"./index-B3M6RB_Y.js";import"./index-BcshOSPh.js";import"./PdfViewerToolbar-DD3qERN0.js";import"./Button-BIMxSH7M.js";import"./chevron-right-C8qK5siy.js";import"./Input-DML-f9Nt.js";import"./search-D8R0XkDu.js";import"./spin-DzzmO4RX.js";import"./error-BqmstoPM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4188/b3babe05f9267d6803a9174a28e59c64ef53483d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
