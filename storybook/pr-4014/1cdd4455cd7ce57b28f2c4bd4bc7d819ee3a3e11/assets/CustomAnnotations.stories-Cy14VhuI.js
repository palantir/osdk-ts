import{j as n}from"./iframe-uT48rLM_.js";import{B as e}from"./BasePdfViewer-DJBJhDUU.js";import"./preload-helper-yoQuylqU.js";import"./index-CSvzskdp.js";import"./BasePdfViewer.module.css-DoCxRb_d.js";import"./PdfViewerAnnotationLayer-P10RSZEp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CB5vJ18j.js";import"./PdfViewerOutlineSidebar-DKMH7AVX.js";import"./PdfViewerSidebarHeader-C0lvTqCp.js";import"./useBaseUiId-9T64UX1j.js";import"./useControlled-DuOdWxX8.js";import"./CompositeRoot-qzyXS7ra.js";import"./CompositeItem-BxuJPWc4.js";import"./ToolbarRootContext-DjYPc8nU.js";import"./composite-DezEwUvA.js";import"./svgIconContainer-p9hJC-XV.js";import"./PdfViewerSearchBar-B4DP4zmc.js";import"./chevron-up-BRo5l_MN.js";import"./chevron-down-DEgdTzUt.js";import"./cross-Bjaf7ehU.js";import"./PdfViewerSidebar-LYrEOIwE.js";import"./index-BSbxg0rW.js";import"./index-5wHFC5Fm.js";import"./index-BEQpnWE2.js";import"./PdfViewerToolbar-BDbwqAf5.js";import"./Button-C6gEU1e5.js";import"./chevron-right-33A4BPBf.js";import"./Input-CQKdcBRU.js";import"./search-DQlds2Tm.js";import"./spin-53XsNcos.js";import"./error-BQiQ2GDM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/1cdd4455cd7ce57b28f2c4bd4bc7d819ee3a3e11/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
