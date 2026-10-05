import{j as n}from"./iframe-DGLAKnND.js";import{B as e}from"./BasePdfViewer-D8zZrh46.js";import"./preload-helper-DFgLk3H0.js";import"./index-MAOZVqBp.js";import"./BasePdfViewer.module.css-D7lA0WqK.js";import"./PdfViewerAnnotationLayer-GynjuGlA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CR9i5l4S.js";import"./PdfViewerOutlineSidebar-DUszXKGP.js";import"./PdfViewerSidebarHeader-BRMp8b7L.js";import"./useBaseUiId-BaGNlDqg.js";import"./useControlled-EZBO8tge.js";import"./CompositeRoot-Dt_xcinf.js";import"./CompositeItem-DgGcGQW6.js";import"./ToolbarRootContext-DLHGbFy6.js";import"./composite-CNVl9uwD.js";import"./svgIconContainer-FR2bqQFg.js";import"./PdfViewerSearchBar-D-MqfnSN.js";import"./chevron-up-OnyyxKMj.js";import"./chevron-down-BpoIGC6g.js";import"./cross-CxVHgnds.js";import"./PdfViewerSidebar-DTDk9tLh.js";import"./index-2SXn5UAQ.js";import"./index-D8VO6Jfw.js";import"./index-TSIf0hfv.js";import"./PdfViewerToolbar-D8BLdmwr.js";import"./Button-D_UOXx3n.js";import"./chevron-right-DmgH-Q3l.js";import"./Input-Cs47mLOC.js";import"./search-BOgD6jUI.js";import"./spin-CrqZcRSj.js";import"./error-D43b2FyI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4143/4220a6ee5c32a507bac5da14a138d8524b08dd95/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
