import{j as n}from"./iframe-COeKHpt9.js";import{B as e}from"./BasePdfViewer-CLdMYJin.js";import"./preload-helper-BpPSpj7h.js";import"./index--VOZVAr7.js";import"./BasePdfViewer.module.css-D_JGphQd.js";import"./PdfViewerAnnotationLayer-B5cC5IXq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MzNE9TyU.js";import"./PdfViewerOutlineSidebar-DPMm3TkC.js";import"./PdfViewerSidebarHeader-iRKT3yII.js";import"./useBaseUiId-AZYk0Vbu.js";import"./useControlled-Bj6n9A7a.js";import"./CompositeRoot-CgJy1gw_.js";import"./CompositeItem-Dt_9zGFK.js";import"./ToolbarRootContext-DpPmKmnD.js";import"./composite-DvaIADEs.js";import"./svgIconContainer-DtZ0wDAF.js";import"./PdfViewerSearchBar-ClKBpUMw.js";import"./chevron-up-BHvOrBFw.js";import"./chevron-down-BCN0Zf9y.js";import"./cross-D5gXcdmB.js";import"./PdfViewerSidebar-DPaTPb5b.js";import"./index-ImvirjPY.js";import"./index-vOPTDT5X.js";import"./index-Crl2o2c4.js";import"./PdfViewerToolbar-qL7sgOed.js";import"./Button-BcUZxYUb.js";import"./chevron-right-D3gDBDhi.js";import"./Input-BgvgMSkQ.js";import"./search-CcRznbWc.js";import"./spin-BtGo-Wcu.js";import"./error-cky3iDMt.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4189/6c71a34024d99b631e2bad0c414c5f3c47d48348/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
