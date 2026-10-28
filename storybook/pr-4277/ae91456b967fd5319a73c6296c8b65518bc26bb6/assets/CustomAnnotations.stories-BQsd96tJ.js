import{j as n}from"./iframe-CMYq_tcz.js";import{B as e}from"./BasePdfViewer-CRAFjgQ9.js";import"./preload-helper-CM9HDmHc.js";import"./index-xVeJSQI1.js";import"./BasePdfViewer.module.css-BaEP5AWe.js";import"./PdfViewerAnnotationLayer-BHsI1sGI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjmX-gQs.js";import"./PdfViewerOutlineSidebar-ssKgcMi4.js";import"./PdfViewerSidebarHeader-CRUSL3RH.js";import"./useBaseUiId-DSFxpXlB.js";import"./useControlled-Cizv6LhD.js";import"./CompositeRoot-CQO7DKHu.js";import"./CompositeItem-zd83RHVO.js";import"./ToolbarRootContext-BkwDgNb_.js";import"./composite-DiZpwFe_.js";import"./svgIconContainer-exLH2FjZ.js";import"./PdfViewerSearchBar-zNtPmet6.js";import"./chevron-up-BR3ucmwE.js";import"./chevron-down-BNRseUEV.js";import"./cross-dRI083CA.js";import"./PdfViewerSidebar-CI7-pgxC.js";import"./index-C0T6zzR8.js";import"./index-BY7tovu0.js";import"./index-BFodXj3S.js";import"./PdfViewerToolbar-DYVs3gxj.js";import"./Button-Cx35rN_X.js";import"./chevron-right-CI7-fkdV.js";import"./Input-C2JC1_0u.js";import"./search-QHRMuF2d.js";import"./spin-CH7RAEK1.js";import"./error-BMW1MkdC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4277/ae91456b967fd5319a73c6296c8b65518bc26bb6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
