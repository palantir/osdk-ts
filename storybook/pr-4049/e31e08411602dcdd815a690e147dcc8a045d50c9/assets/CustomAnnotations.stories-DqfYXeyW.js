import{j as n}from"./iframe-CYdVR6sB.js";import{B as e}from"./BasePdfViewer-NE4QVelu.js";import"./preload-helper-BXur23Md.js";import"./index-BALJL5HN.js";import"./BasePdfViewer.module.css-Cp8FYX6B.js";import"./PdfViewerAnnotationLayer-5wx1o6c1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLrRMtoU.js";import"./PdfViewerOutlineSidebar-KsmVmag2.js";import"./PdfViewerSidebarHeader-C3oV8GMP.js";import"./useBaseUiId-DWAeiyj4.js";import"./useControlled-DJ_ChqUq.js";import"./CompositeRoot-B6EvVlLu.js";import"./CompositeItem-C73xX0Ds.js";import"./ToolbarRootContext-ryiKPViF.js";import"./composite-Cc3NubB-.js";import"./svgIconContainer-BA_bcDbd.js";import"./PdfViewerSearchBar-jmpyF7yL.js";import"./chevron-up-JM4U7PPB.js";import"./chevron-down-BTVG76nb.js";import"./cross-Cw6hhHQ7.js";import"./PdfViewerSidebar-Cxo91CJ0.js";import"./index-BfKW-3Wf.js";import"./index-DoUPlBgv.js";import"./index-B8qCRObq.js";import"./PdfViewerToolbar-CWwfBxPU.js";import"./Button-DXqS5gF6.js";import"./chevron-right-DydSznQd.js";import"./Input-8WX07h9e.js";import"./search-Ceaj3yJ_.js";import"./spin-TG55u7b2.js";import"./error-D8UfR1ZG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4049/e31e08411602dcdd815a690e147dcc8a045d50c9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
