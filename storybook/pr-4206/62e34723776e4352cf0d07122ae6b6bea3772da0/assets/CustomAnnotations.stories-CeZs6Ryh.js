import{j as n}from"./iframe-kxdUQCve.js";import{B as e}from"./BasePdfViewer-DGNQr5zl.js";import"./preload-helper-Cuq4TkHU.js";import"./index-Dj-vHPb7.js";import"./BasePdfViewer.module.css-DpeINNkX.js";import"./PdfViewerAnnotationLayer-B7PJfhq_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLSFbWFT.js";import"./PdfViewerOutlineSidebar-DPabYFFO.js";import"./PdfViewerSidebarHeader-WlZ6Obs_.js";import"./useBaseUiId-DHH2yIbk.js";import"./useControlled-BW2k3psm.js";import"./CompositeRoot-CF97c9v_.js";import"./CompositeItem-CSpMJ9Wh.js";import"./ToolbarRootContext-CW6avnm2.js";import"./composite-Bj70JY7P.js";import"./svgIconContainer-0muFsb9b.js";import"./PdfViewerSearchBar-LzlzLvcD.js";import"./chevron-up-sYdp_yxo.js";import"./chevron-down-CKJ5Wwcf.js";import"./cross-BGuVVI58.js";import"./PdfViewerSidebar-Ck1YGAEq.js";import"./index-CAihI7G4.js";import"./index-DLOXxPse.js";import"./index-Cm3W4-OV.js";import"./PdfViewerToolbar-BL2y0ykl.js";import"./Button-Ca-rtxgT.js";import"./chevron-right-BU5fqkhN.js";import"./Input-DaXzRTeY.js";import"./search-Dtrnv9od.js";import"./spin-DNcRz8Wb.js";import"./error-Dc_ezcGJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4206/62e34723776e4352cf0d07122ae6b6bea3772da0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
