import{j as n}from"./iframe-zGF2yItg.js";import{B as e}from"./BasePdfViewer-DiKuQbdu.js";import"./preload-helper-DKR91DwN.js";import"./index-CI0AAd7R.js";import"./BasePdfViewer.module.css-DOqjJU4f.js";import"./PdfViewerAnnotationLayer-CaEO-aTE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwzjiGes.js";import"./PdfViewerOutlineSidebar-DLstzMze.js";import"./PdfViewerSidebarHeader-C0c_ox-7.js";import"./useBaseUiId-D8XkRAoN.js";import"./useControlled-Bcq_19a7.js";import"./CompositeRoot-kP-4U7q_.js";import"./CompositeItem-BGuYZ8t8.js";import"./ToolbarRootContext-zfiNhCTv.js";import"./composite-BhRiZx70.js";import"./svgIconContainer-CfbP11Km.js";import"./PdfViewerSearchBar-By_7jH2n.js";import"./chevron-up-ssHwhLFd.js";import"./chevron-down-BYonktV5.js";import"./cross-BclfVS0V.js";import"./PdfViewerSidebar-C8eVcxq0.js";import"./index-Ce2iCB2D.js";import"./index-CpyS4ByO.js";import"./index-C9gBj_QQ.js";import"./PdfViewerToolbar-jH3AVBFQ.js";import"./Button-CUzrpo83.js";import"./chevron-right-B6a-xUBl.js";import"./Input-gx0WGAlP.js";import"./search-Dr3ly3kj.js";import"./spin-BhMd1AV1.js";import"./error-rXo5lK8q.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4220/0e9d9ad4cf5813eab90d8bd1acce3b870acf3ee8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
