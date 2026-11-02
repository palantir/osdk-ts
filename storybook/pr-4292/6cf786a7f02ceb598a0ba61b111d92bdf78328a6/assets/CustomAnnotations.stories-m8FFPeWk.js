import{j as n}from"./iframe-yzha5v0q.js";import{B as e}from"./BasePdfViewer-BGkK2QQS.js";import"./preload-helper-D-8FAAW5.js";import"./index-60EGa8qT.js";import"./BasePdfViewer.module.css-Y8aSVnfE.js";import"./PdfViewerAnnotationLayer-CkMxbZGn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8bXvwaeo.js";import"./PdfViewerOutlineSidebar-3_ONyoEt.js";import"./PdfViewerSidebarHeader-CSicL9dn.js";import"./useBaseUiId-BbIMkHOG.js";import"./useControlled-D0bVi2TG.js";import"./CompositeRoot-BTH8FPsW.js";import"./CompositeItem-ha9gBhOi.js";import"./ToolbarRootContext-D2IbjqCY.js";import"./composite-BDH9_dFX.js";import"./svgIconContainer-C44iOk89.js";import"./PdfViewerSearchBar-C5tVhWF7.js";import"./chevron-up-CKX1qmzh.js";import"./chevron-down-DLVlSQ8P.js";import"./cross-BlwLOBUQ.js";import"./PdfViewerSidebar-VYpEABYd.js";import"./index-DbIozRF2.js";import"./index-O5EAmeT1.js";import"./index-BVrkRt64.js";import"./PdfViewerToolbar-Dgl4M-Vs.js";import"./Button-BiUOfKuO.js";import"./chevron-right-J4xDkOKG.js";import"./Input-EyuyzT2W.js";import"./search-gm56Xs7t.js";import"./spin-D-P5tF_4.js";import"./error-B0YQBao9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4292/6cf786a7f02ceb598a0ba61b111d92bdf78328a6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
