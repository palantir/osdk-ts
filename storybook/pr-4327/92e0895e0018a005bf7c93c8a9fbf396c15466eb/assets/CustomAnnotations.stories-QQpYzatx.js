import{j as n}from"./iframe-BJUxpguS.js";import{B as e}from"./BasePdfViewer-CPf0O8ft.js";import"./preload-helper-CcPnSf_d.js";import"./index-DaIWjini.js";import"./BasePdfViewer.module.css-C8vlzBKh.js";import"./PdfViewerAnnotationLayer-CQmQ_q-A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXbfBAKC.js";import"./PdfViewerOutlineSidebar-Ct4PsFtU.js";import"./PdfViewerSidebarHeader-DknOLfaV.js";import"./useBaseUiId-CUsRHIZ_.js";import"./useControlled-CV2ikSFn.js";import"./CompositeRoot-ml5tECJQ.js";import"./CompositeItem-DC6J7O9B.js";import"./ToolbarRootContext-96Mx370G.js";import"./composite-fRasBjEb.js";import"./svgIconContainer-DFZK57uZ.js";import"./PdfViewerSearchBar-Z7_TEebR.js";import"./chevron-up-C8GjKNPF.js";import"./chevron-down-D_Er5Djl.js";import"./cross-CF3gkRQt.js";import"./PdfViewerSidebar-JQrJiEm5.js";import"./index-DJciXKq6.js";import"./index-CRptwoO3.js";import"./index-CqveWGS6.js";import"./PdfViewerToolbar-BTcxoXiA.js";import"./Button-D6-FRmxX.js";import"./chevron-right-DySMbH0N.js";import"./Input-JPeJu_Ok.js";import"./search-82BfoOmm.js";import"./spin-DsE81IUM.js";import"./error-GeJDXztf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4327/92e0895e0018a005bf7c93c8a9fbf396c15466eb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
