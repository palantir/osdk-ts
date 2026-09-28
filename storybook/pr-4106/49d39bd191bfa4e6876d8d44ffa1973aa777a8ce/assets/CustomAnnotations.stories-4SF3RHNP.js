import{j as n}from"./iframe-xlXCZ1ws.js";import{B as e}from"./BasePdfViewer-Bl7raXRM.js";import"./preload-helper-qqQQlHro.js";import"./index-0LV67TMp.js";import"./BasePdfViewer.module.css-D6bgtRSz.js";import"./PdfViewerAnnotationLayer-5Jt_Ata6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8YHC8VIt.js";import"./PdfViewerOutlineSidebar-Bmv68_pC.js";import"./PdfViewerSidebarHeader-aI_BFvO5.js";import"./useBaseUiId-BGTxIfXW.js";import"./useControlled-BnjR3wqV.js";import"./CompositeRoot-C-huw0MW.js";import"./CompositeItem-BYik2Kor.js";import"./ToolbarRootContext-5Gfw3fcR.js";import"./composite-CRMLjWFi.js";import"./svgIconContainer-CuvK47Ur.js";import"./PdfViewerSearchBar-DfZsm1A3.js";import"./chevron-up-DeJJ1UcY.js";import"./chevron-down-gZxsFq9N.js";import"./cross-CR59a-Oy.js";import"./PdfViewerSidebar-CKZqa5mC.js";import"./index-kTsIio2O.js";import"./index-C9_hIpBS.js";import"./index-mu_ylgEd.js";import"./PdfViewerToolbar-a2Gccqv0.js";import"./Button-BsW3xUOI.js";import"./chevron-right-D6XapKZk.js";import"./Input-BoJ1ruei.js";import"./search-C6I7AzRf.js";import"./spin-C8QS8At6.js";import"./error-1_b5vZEY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4106/49d39bd191bfa4e6876d8d44ffa1973aa777a8ce/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
