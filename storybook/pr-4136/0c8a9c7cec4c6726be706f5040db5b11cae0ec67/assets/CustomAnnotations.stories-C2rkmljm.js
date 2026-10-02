import{j as n}from"./iframe-CcC1m7dm.js";import{B as e}from"./BasePdfViewer-FU2NV8Gi.js";import"./preload-helper-DeCk53aw.js";import"./index-0gvTVOTK.js";import"./BasePdfViewer.module.css-C82u6fE0.js";import"./PdfViewerAnnotationLayer-HyW2zJ7R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIbN2Psj.js";import"./PdfViewerOutlineSidebar-q4llNbDZ.js";import"./PdfViewerSidebarHeader-B7qSk5YI.js";import"./useBaseUiId-CzCqcGop.js";import"./useControlled-SAzSAZAO.js";import"./CompositeRoot-CxTruRAJ.js";import"./CompositeItem-BC1QTYXK.js";import"./ToolbarRootContext-CjeMCr-E.js";import"./composite-tUxKNezP.js";import"./svgIconContainer-yjiCwwqK.js";import"./PdfViewerSearchBar-kfpKg_zJ.js";import"./chevron-up-DTWkSza1.js";import"./chevron-down-C2TUiN-F.js";import"./cross-DV51ECIz.js";import"./PdfViewerSidebar-DAJzKrBx.js";import"./index-CNWy2Wzu.js";import"./index-CEYaUBZr.js";import"./index-40ATCYrw.js";import"./PdfViewerToolbar-pCUWLmZG.js";import"./Button-D0RNeWLg.js";import"./chevron-right-CNYo2sTI.js";import"./Input-CPQRmcYd.js";import"./search-BXFqiFKZ.js";import"./spin-C0D5XsQi.js";import"./error-hsPgizh-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4136/0c8a9c7cec4c6726be706f5040db5b11cae0ec67/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
