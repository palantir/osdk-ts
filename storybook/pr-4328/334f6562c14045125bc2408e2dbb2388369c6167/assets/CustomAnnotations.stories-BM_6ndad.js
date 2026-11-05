import{j as n}from"./iframe-DxLxeeBD.js";import{B as e}from"./BasePdfViewer-APARYW9v.js";import"./preload-helper-B7NNhvj1.js";import"./index-DSM2Nmta.js";import"./BasePdfViewer.module.css-BIvz0mnJ.js";import"./PdfViewerAnnotationLayer-Cw6vkkJa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QvUbreUn.js";import"./PdfViewerOutlineSidebar-B5a74cWp.js";import"./PdfViewerSidebarHeader-D5h3ldhw.js";import"./useBaseUiId-BEhgV5tS.js";import"./useControlled-DAtmThLw.js";import"./CompositeRoot-jr6_nVtw.js";import"./CompositeItem-IyZEpEpW.js";import"./ToolbarRootContext-D7eywLcy.js";import"./composite-D1h37npl.js";import"./svgIconContainer-B6Cb5ptS.js";import"./PdfViewerSearchBar-BVAmhmWH.js";import"./chevron-up-3YeceyR6.js";import"./chevron-down-DqhD85JK.js";import"./cross-Z_oHrjIu.js";import"./PdfViewerSidebar-lbr_PuHm.js";import"./index-bdK4kZrJ.js";import"./index-CKLl7OmG.js";import"./index-CwXC3XWN.js";import"./PdfViewerToolbar-CYtoz8iJ.js";import"./Button-BOLOFIFE.js";import"./chevron-right-BpBfxWD3.js";import"./Input-CFINwHSJ.js";import"./search-BuJ4cv5l.js";import"./spin-BmXLOmll.js";import"./error-B99vb4Y2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4328/334f6562c14045125bc2408e2dbb2388369c6167/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
