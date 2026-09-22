import{j as n}from"./iframe-SIMpA4b3.js";import{B as e}from"./BasePdfViewer-BjWJRjZ9.js";import"./preload-helper-u9tSabE5.js";import"./index-CgEuHlu2.js";import"./BasePdfViewer.module.css-B3XxkFeJ.js";import"./PdfViewerAnnotationLayer-sQ8iohIR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIgqOKRO.js";import"./PdfViewerOutlineSidebar-C3bq30k4.js";import"./PdfViewerSidebarHeader-9DoKIqLL.js";import"./useBaseUiId-Cayh95iR.js";import"./useControlled-aXvE1NEk.js";import"./CompositeRoot-tTmX_7vT.js";import"./CompositeItem-CnRf7Dd6.js";import"./ToolbarRootContext-B55ymUvU.js";import"./composite-BiHSWJxn.js";import"./svgIconContainer-Bv-MZKBZ.js";import"./PdfViewerSearchBar-DAyhIrZ_.js";import"./chevron-up-Ctg_Kwcv.js";import"./chevron-down-D2KA7jZq.js";import"./cross-A4PXp8OO.js";import"./PdfViewerSidebar-B4lY6r1T.js";import"./index-uzBTaDFQ.js";import"./index-DIMo0kF5.js";import"./index-BOG0Gn7K.js";import"./PdfViewerToolbar-C1iAHdkb.js";import"./Button-DePizqiT.js";import"./chevron-right-BF3yEut3.js";import"./Input-DI62ffjf.js";import"./search-94czUh6x.js";import"./spin-DyMxACnn.js";import"./error-CGNw4dMZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4036/5fc4b008412ff79c18e8df9d2b3903e46720ce39/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
