import{j as n}from"./iframe-CAOw1_Np.js";import{B as e}from"./BasePdfViewer-CpAs4jAP.js";import"./preload-helper-BtDOje63.js";import"./index-rKNeW6R2.js";import"./BasePdfViewer.module.css-DxqprhRV.js";import"./PdfViewerAnnotationLayer-B4IyFgNM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dg9KAUfR.js";import"./PdfViewerOutlineSidebar-CkV0v8Pz.js";import"./PdfViewerSidebarHeader-C7OikEow.js";import"./useBaseUiId-BRTQVt9V.js";import"./useControlled-BcHOqTg-.js";import"./CompositeRoot-Dibs-RKo.js";import"./CompositeItem-CJnfXQEg.js";import"./ToolbarRootContext-kfYngOQa.js";import"./composite-ceXOKcGl.js";import"./svgIconContainer-DJZ5kPqi.js";import"./PdfViewerSearchBar-DjkyZovP.js";import"./chevron-up-ChEOdxdh.js";import"./chevron-down-CrNYgO2n.js";import"./cross-6UH6f3dc.js";import"./PdfViewerSidebar-DVn64dTx.js";import"./index-DAICdrKF.js";import"./index-B9i7IC3F.js";import"./index-Bj9jZdxR.js";import"./PdfViewerToolbar-DYl9Pyic.js";import"./Button-BCAtXo9W.js";import"./chevron-right-CL0En3Ry.js";import"./Input-BIFRYkQa.js";import"./search-CAyVB4HI.js";import"./spin-BSm0GpHN.js";import"./error-BklEgYFX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4102/2a0a03977b63e0ab91678bc9327b9fa62f93c34c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
