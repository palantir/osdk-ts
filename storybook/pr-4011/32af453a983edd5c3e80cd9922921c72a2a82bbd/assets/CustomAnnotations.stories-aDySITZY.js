import{j as n}from"./iframe-D0YyS42l.js";import{B as e}from"./BasePdfViewer-BV7LxpfP.js";import"./preload-helper-BCB_Qe4i.js";import"./index-Bsavn4W3.js";import"./BasePdfViewer.module.css-BjkJtY26.js";import"./PdfViewerAnnotationLayer--MQkkjzX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BR9BGLnq.js";import"./PdfViewerOutlineSidebar-D4X3pkwQ.js";import"./PdfViewerSidebarHeader-C6WZ5hBG.js";import"./useBaseUiId-D4SQ7WJt.js";import"./useControlled-BGd4K6A9.js";import"./CompositeRoot-CvCbKzH7.js";import"./CompositeItem-CUm9EsTA.js";import"./ToolbarRootContext-Dm0HFQW0.js";import"./composite-z8nqybue.js";import"./svgIconContainer-ppOpPTiK.js";import"./PdfViewerSearchBar-CDk9gomb.js";import"./chevron-up-DZVTcENu.js";import"./chevron-down-B2Awu_XJ.js";import"./cross-dsq08tGB.js";import"./PdfViewerSidebar-DukjMxMP.js";import"./index-B-0gmAXF.js";import"./index-O1djYu27.js";import"./index-C1kCmh68.js";import"./PdfViewerToolbar-D0AFtF7H.js";import"./Button-tmtP2Iw5.js";import"./chevron-right-D0FIi6b5.js";import"./Input-souD-H1n.js";import"./search-BXsTnHq3.js";import"./spin-KPUVBhkK.js";import"./error-CbeKU1Tz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/32af453a983edd5c3e80cd9922921c72a2a82bbd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
