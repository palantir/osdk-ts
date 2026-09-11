import{j as n}from"./iframe-q73h-SNz.js";import{B as e}from"./BasePdfViewer-cuG4oIcm.js";import"./preload-helper-BvXISORE.js";import"./index-CNgILQVN.js";import"./BasePdfViewer.module.css-CEgmGXDe.js";import"./PdfViewerAnnotationLayer-B9T6QaPs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnKZu6zx.js";import"./PdfViewerOutlineSidebar-B66J6UIC.js";import"./PdfViewerSidebarHeader-CFewFIXA.js";import"./useBaseUiId-BT4TVIMU.js";import"./useControlled-CIDCJXAS.js";import"./CompositeRoot-BPySZV7q.js";import"./CompositeItem-8Q0GNXmT.js";import"./ToolbarRootContext-XN_eoe5I.js";import"./composite-DsUUOBpL.js";import"./svgIconContainer-BnJjPefi.js";import"./PdfViewerSearchBar-DXBVXR8Q.js";import"./chevron-up-CwrQarYn.js";import"./chevron-down-CcztAG1Q.js";import"./cross-UurqhnpQ.js";import"./PdfViewerSidebar-BQcjDujq.js";import"./index-CgMWGLyW.js";import"./index-CmcHR3Mh.js";import"./index-GTDJrYHL.js";import"./PdfViewerToolbar-BQDy4xWg.js";import"./Button-DMD0TrjN.js";import"./chevron-right-CbXDzyKQ.js";import"./Input-CUYY-XQS.js";import"./search-CyIDS8Xl.js";import"./spin-MIdvHrni.js";import"./error-BBRDAF1W.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4013/a7bd7d7d6d96fbb58da4e0a4635684d57ea74605/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
