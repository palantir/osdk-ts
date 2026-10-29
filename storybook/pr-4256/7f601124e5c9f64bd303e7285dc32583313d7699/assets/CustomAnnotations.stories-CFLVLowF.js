import{j as n}from"./iframe-CrBTuD2p.js";import{B as e}from"./BasePdfViewer-mhBw8laP.js";import"./preload-helper-BjNyA4Tc.js";import"./index-CFzUVYi2.js";import"./BasePdfViewer.module.css-LWFtlg4Z.js";import"./PdfViewerAnnotationLayer-DqSGWV8q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcGnQm96.js";import"./PdfViewerOutlineSidebar-C9Ys9QoJ.js";import"./PdfViewerSidebarHeader-D-SMAMcj.js";import"./useBaseUiId-BBTk7qb4.js";import"./useControlled-D0EXlvvG.js";import"./CompositeRoot-BIz-REx_.js";import"./CompositeItem-BE6iDbTy.js";import"./ToolbarRootContext-BXCYOJCq.js";import"./composite-BeVo3QMW.js";import"./svgIconContainer-DW2driag.js";import"./PdfViewerSearchBar-CZlBaXMJ.js";import"./chevron-up-CTqsFpY3.js";import"./chevron-down-BqX1E0HN.js";import"./cross-BBINy6sP.js";import"./PdfViewerSidebar-Dkl9U2-Q.js";import"./index-CEtkH-ta.js";import"./index-BqULJUvL.js";import"./index-Bnr4tUfA.js";import"./PdfViewerToolbar-DSLxDcxb.js";import"./Button-6cIUTGc1.js";import"./chevron-right-JfXxbN1s.js";import"./Input-7YuL0Mnz.js";import"./search-BDp0U2-N.js";import"./spin-CYlh11ir.js";import"./error-D-C4TtvX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4256/7f601124e5c9f64bd303e7285dc32583313d7699/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
