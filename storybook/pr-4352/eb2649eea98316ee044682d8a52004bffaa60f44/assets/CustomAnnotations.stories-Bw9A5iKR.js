import{j as n}from"./iframe-cQ3f48MB.js";import{B as e}from"./BasePdfViewer-Dv9zCSHH.js";import"./preload-helper-D6QOSXh4.js";import"./index-D1RuRedd.js";import"./BasePdfViewer.module.css-D6SfGJ1e.js";import"./PdfViewerAnnotationLayer-Bte8rH3K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgfTSmxx.js";import"./PdfViewerOutlineSidebar-DFkCcbQx.js";import"./PdfViewerSidebarHeader-G1GvEQbZ.js";import"./useBaseUiId-CMNXwzlb.js";import"./useControlled-ByZlI-u7.js";import"./CompositeRoot-BxXBRLdZ.js";import"./CompositeItem-684cCOtj.js";import"./ToolbarRootContext-DNEaNwHU.js";import"./composite-B6VOm6ZQ.js";import"./svgIconContainer-CgizML4Q.js";import"./PdfViewerSearchBar-Ds4Ih9kW.js";import"./chevron-up-Datrgx7x.js";import"./chevron-down-CIrisS0y.js";import"./cross-DauAavmu.js";import"./PdfViewerSidebar-C27WHKql.js";import"./index-C-MPwgvx.js";import"./index-MlmEIZWp.js";import"./index-C8RTiPbx.js";import"./PdfViewerToolbar-DsZRLBti.js";import"./Button-DZgLeZFj.js";import"./chevron-right-wYVqDtjE.js";import"./Input-BuFeTP1U.js";import"./search-iHipGmJb.js";import"./spin-B7WNIKMp.js";import"./error-CsayxGJU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4352/eb2649eea98316ee044682d8a52004bffaa60f44/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
