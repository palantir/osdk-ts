import{j as n}from"./iframe-Dqi9AKQ4.js";import{B as e}from"./BasePdfViewer-BosJi71e.js";import"./preload-helper-Bt4Y1gaG.js";import"./index-DUzHQ-g1.js";import"./BasePdfViewer.module.css-B0eIAA1G.js";import"./PdfViewerAnnotationLayer-Bqq6WZy5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-SuDC7r.js";import"./PdfViewerOutlineSidebar-DFAMYdDr.js";import"./PdfViewerSidebarHeader-B54Ml9uW.js";import"./useBaseUiId-D9DZyJv1.js";import"./useControlled-Bofva4ix.js";import"./CompositeRoot-B7naGCOz.js";import"./CompositeItem-D9oAX4d7.js";import"./ToolbarRootContext-D53iOUwp.js";import"./composite-BrE87LEg.js";import"./svgIconContainer-DBFNWjmD.js";import"./PdfViewerSearchBar-CWKm3qqZ.js";import"./chevron-up-CXJTRYvq.js";import"./chevron-down-B-x5XAQs.js";import"./cross-CViy1YB1.js";import"./PdfViewerSidebar-BEZNvGlC.js";import"./index-CJftUKPV.js";import"./index-BTd5eHZp.js";import"./index-B4xagMAY.js";import"./PdfViewerToolbar-B3zl4R-0.js";import"./Button-qQ4ULf31.js";import"./chevron-right-t-xrO6c-.js";import"./Input-Bbb9NzYy.js";import"./search-DGlyxpi9.js";import"./spin-GoqnaVHQ.js";import"./error-Bfb1Ifz6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4049/c74d5993cb8f1a365cfe4f55336cf57c0a8f509a/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
