import{j as n}from"./iframe-DnMZhogX.js";import{B as e}from"./BasePdfViewer-WYNzgR-L.js";import"./preload-helper-D4NPUWDF.js";import"./index-C6vUCj3I.js";import"./BasePdfViewer.module.css-Ce6CPN-S.js";import"./PdfViewerAnnotationLayer-B28qdywS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2Qnfj1a.js";import"./PdfViewerOutlineSidebar-J0YLfQZS.js";import"./PdfViewerSidebarHeader-DNxEHCIB.js";import"./useBaseUiId-BQvmXl_6.js";import"./useControlled-B2iKOn4D.js";import"./CompositeRoot-CroFFjns.js";import"./CompositeItem-r96J_nIs.js";import"./ToolbarRootContext-BocpL34Y.js";import"./composite-C04hi1zy.js";import"./svgIconContainer-BVAzBycF.js";import"./PdfViewerSearchBar-CCwDu9Nz.js";import"./chevron-up-6peZ01KG.js";import"./chevron-down-q0wNWe4O.js";import"./cross-B0Br0EiR.js";import"./PdfViewerSidebar-1rv7Nqgw.js";import"./index-3k87IEg2.js";import"./index-t2KVREOA.js";import"./index-CkhjCsS5.js";import"./PdfViewerToolbar-CWHzkU2-.js";import"./Button-DNd_NMyi.js";import"./chevron-right-OpZM0xdV.js";import"./Input-LnfuE3I2.js";import"./search-Dq0e8pTI.js";import"./spin-BVFkwjji.js";import"./error-DSDfnydb.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4033/8113bb336b639da72c7b0e2e192f228c4866acfc/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
