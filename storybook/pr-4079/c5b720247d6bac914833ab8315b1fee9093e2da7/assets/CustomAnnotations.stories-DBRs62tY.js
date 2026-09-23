import{j as n}from"./iframe-BF6_9Xjc.js";import{B as e}from"./BasePdfViewer-6ll8XwTS.js";import"./preload-helper-CVsiSqQ7.js";import"./index-B1Ya2fBr.js";import"./BasePdfViewer.module.css-BuTptlO8.js";import"./PdfViewerAnnotationLayer-c_IPha39.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNiX6aAf.js";import"./PdfViewerOutlineSidebar-2dHYqIcd.js";import"./PdfViewerSidebarHeader-CyS_7T6s.js";import"./useBaseUiId-s3ehRo10.js";import"./useControlled-BXYuK13Z.js";import"./CompositeRoot-DgAY31Ct.js";import"./CompositeItem-DI8gVSRQ.js";import"./ToolbarRootContext-DHHYvc0f.js";import"./composite-BGGp11kx.js";import"./svgIconContainer-CQE4WPFB.js";import"./PdfViewerSearchBar-BWqUcVR7.js";import"./chevron-up-DFcX3ZbM.js";import"./chevron-down-CVGUePFi.js";import"./cross-_UU9sZ5F.js";import"./PdfViewerSidebar-CMFiKbj-.js";import"./index-qnSLgzX3.js";import"./index-CYSW1VxS.js";import"./index-aIhJZAmJ.js";import"./PdfViewerToolbar-CMtRMVnG.js";import"./Button-SD0gx5bd.js";import"./chevron-right-DAG3PB9Z.js";import"./Input-RBsPV06C.js";import"./search-BUGVh3PQ.js";import"./spin-7t4Cp4Ag.js";import"./error-Dk0JQDUN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4079/c5b720247d6bac914833ab8315b1fee9093e2da7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
