import{j as n}from"./iframe-DtoP6UZw.js";import{B as e}from"./BasePdfViewer-CKtJCZuz.js";import"./preload-helper-CFHJtsfx.js";import"./index-By2xjehZ.js";import"./BasePdfViewer.module.css-CtZ50Qz7.js";import"./PdfViewerAnnotationLayer-RkLifyJQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jaBdgr64.js";import"./PdfViewerOutlineSidebar-KWyKxRUO.js";import"./PdfViewerSidebarHeader-B0gzm_sM.js";import"./useBaseUiId-C9myCpxn.js";import"./useControlled-CLD2ZIzN.js";import"./CompositeRoot-aZVuHxv1.js";import"./CompositeItem-8ApCVdWW.js";import"./ToolbarRootContext-Chftn44K.js";import"./composite-ZO42S3vI.js";import"./svgIconContainer-DfGYICSx.js";import"./PdfViewerSearchBar-IxA47AUy.js";import"./chevron-up-DuX0xyRv.js";import"./chevron-down-Cp3kMwRT.js";import"./cross-Bz8JPJRT.js";import"./PdfViewerSidebar-Die6ihSM.js";import"./index-D-jbKgqf.js";import"./index-CeUVbJds.js";import"./index-D5DGgDMX.js";import"./PdfViewerToolbar-BZCow3sc.js";import"./Button-MPweKG2u.js";import"./chevron-right-DXBhYb6y.js";import"./Input-Cj3lDoEk.js";import"./search-BGmMu9uk.js";import"./spin-BA1DCrXF.js";import"./error-BgO9vMGd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/0d02122d0c75d9c58b0d02ca7db1134aa3b0d61a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
