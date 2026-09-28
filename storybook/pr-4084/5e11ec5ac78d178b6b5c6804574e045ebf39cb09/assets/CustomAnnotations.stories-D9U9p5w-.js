import{j as n}from"./iframe-BiX95vgM.js";import{B as e}from"./BasePdfViewer-DHfcoEeM.js";import"./preload-helper-DWnaR-1b.js";import"./index-BabfefxA.js";import"./BasePdfViewer.module.css-B0V-E_2B.js";import"./PdfViewerAnnotationLayer-DsWEETbU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-XOw3o6Nw.js";import"./PdfViewerOutlineSidebar-Xwo7WJ6r.js";import"./PdfViewerSidebarHeader-ZqQUklIX.js";import"./useBaseUiId-CQekfIk1.js";import"./useControlled-B0weLlnb.js";import"./CompositeRoot-DcC2iSzI.js";import"./CompositeItem-BFJIxEVd.js";import"./ToolbarRootContext-DqKQJUCi.js";import"./composite-KUIWn9JP.js";import"./svgIconContainer-BCrh5jbf.js";import"./PdfViewerSearchBar-Dq_jLxKl.js";import"./chevron-up-jWVpiCtu.js";import"./chevron-down-Qcf4cgke.js";import"./cross-C7wa8kmV.js";import"./PdfViewerSidebar-D8CXNyTt.js";import"./index-BdjoCnA2.js";import"./index-CqOEHXIi.js";import"./index-DsTIq2po.js";import"./PdfViewerToolbar-DKIfuah9.js";import"./Button-DbzWoDvM.js";import"./chevron-right-BKnFzVUG.js";import"./Input-mW8oBDz9.js";import"./search-BRep0j7S.js";import"./spin-C9QpIRhW.js";import"./error-Bo4C15lT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4084/5e11ec5ac78d178b6b5c6804574e045ebf39cb09/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
