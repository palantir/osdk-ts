import{j as n}from"./iframe-lON5AZ3L.js";import{B as e}from"./BasePdfViewer-CRYwdrQ8.js";import"./preload-helper-CII01xYb.js";import"./index-BbInquUP.js";import"./BasePdfViewer.module.css-P5XHmewd.js";import"./PdfViewerAnnotationLayer-x5xAju-T.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DsbqtpSN.js";import"./PdfViewerOutlineSidebar-CMh4gu2_.js";import"./PdfViewerSidebarHeader-Dqp6XYFs.js";import"./useBaseUiId-COzPbt8W.js";import"./useControlled-Bg_lHZoo.js";import"./CompositeRoot-DZseU9ir.js";import"./CompositeItem-ppbsSdS6.js";import"./ToolbarRootContext-Dh8fWcX2.js";import"./composite-ChlDDG92.js";import"./svgIconContainer-CX_rozDa.js";import"./PdfViewerSearchBar-BH0QvNEY.js";import"./chevron-up-Cc9oNnF9.js";import"./chevron-down-B6vOrraR.js";import"./cross-CZfg3piu.js";import"./PdfViewerSidebar-Bz-XSZF9.js";import"./index-BDhDrjkY.js";import"./index-U5f43BN7.js";import"./index-CcwZGg1N.js";import"./PdfViewerToolbar-D80KRibS.js";import"./Button-NLlVT-nC.js";import"./chevron-right-B0lNRVkm.js";import"./Input-BTUHBzsz.js";import"./search-ZnUmH3zZ.js";import"./spin-DBXZ6TY_.js";import"./error-B77E7aT6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4328/2c519ee1f614b3ea54335b1ed556cdf73d90c6ff/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
