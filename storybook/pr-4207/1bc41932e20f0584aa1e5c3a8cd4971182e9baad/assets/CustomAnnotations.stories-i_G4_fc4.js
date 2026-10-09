import{j as n}from"./iframe-CZ6kIwVs.js";import{B as e}from"./BasePdfViewer-ChYbgzmS.js";import"./preload-helper-7ZMJfvLO.js";import"./index-DI8fXOjY.js";import"./BasePdfViewer.module.css-CgYxazfL.js";import"./PdfViewerAnnotationLayer-C0sWMs5Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoL8qZNA.js";import"./PdfViewerOutlineSidebar-DEJS09WP.js";import"./PdfViewerSidebarHeader-ZKkgnayn.js";import"./useBaseUiId-C8GyANar.js";import"./useControlled-DYYKJrdL.js";import"./CompositeRoot-DTmlx2xW.js";import"./CompositeItem-C5Mndviw.js";import"./ToolbarRootContext-DwX-_42A.js";import"./composite-ZguSvKQK.js";import"./svgIconContainer-DnYA5NkM.js";import"./PdfViewerSearchBar-D-_WNNZY.js";import"./chevron-up-COLb3SCC.js";import"./chevron-down-CfJcExH9.js";import"./cross-D1S37vKD.js";import"./PdfViewerSidebar-DsK2EHCC.js";import"./index-CRcSFsCM.js";import"./index-D-O5Mu3x.js";import"./index-CeIvWQQV.js";import"./PdfViewerToolbar-BtQduIW0.js";import"./Button-D2YNSXqx.js";import"./chevron-right-C3paeiKi.js";import"./Input-BNiQQ7Yq.js";import"./search-BEog5Q0_.js";import"./spin-C17XiORJ.js";import"./error-Be3f2oAD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4207/1bc41932e20f0584aa1e5c3a8cd4971182e9baad/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
