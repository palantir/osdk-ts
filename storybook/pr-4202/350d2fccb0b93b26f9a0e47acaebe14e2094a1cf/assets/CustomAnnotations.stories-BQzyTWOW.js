import{j as n}from"./iframe-CXk0WqhB.js";import{B as e}from"./BasePdfViewer-DUKO32LN.js";import"./preload-helper-ChjBfvhG.js";import"./index-ML5mwP3e.js";import"./BasePdfViewer.module.css-C4U5zFcD.js";import"./PdfViewerAnnotationLayer-DWlB4qnG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DY7sVL-2.js";import"./PdfViewerOutlineSidebar-mtD_M-W2.js";import"./PdfViewerSidebarHeader-BNT60aw2.js";import"./useBaseUiId-DHjZ3Omh.js";import"./useControlled-Bl28iO0R.js";import"./CompositeRoot-LDpbwH3I.js";import"./CompositeItem-04P4zIgd.js";import"./ToolbarRootContext-DTmHJOM7.js";import"./composite-ytyU9AJN.js";import"./svgIconContainer-Dcyi3Q_X.js";import"./PdfViewerSearchBar-UtHSZZ1e.js";import"./chevron-up-DXTTiNvj.js";import"./chevron-down-DQ2eC5iE.js";import"./cross-BmemhmuM.js";import"./PdfViewerSidebar-DhYpmtv5.js";import"./index-_eczYP6a.js";import"./index-CjxpfJC5.js";import"./index-BT6_XaBS.js";import"./PdfViewerToolbar-BsR1Gxb2.js";import"./Button-Dic26hGY.js";import"./chevron-right-ChIknEX1.js";import"./Input-D9BOnKAN.js";import"./search-BLVXHNks.js";import"./spin-CKF2cSiD.js";import"./error-BWxZwg9W.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4202/350d2fccb0b93b26f9a0e47acaebe14e2094a1cf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
