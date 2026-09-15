import{j as n}from"./iframe-CJIAHpsc.js";import{B as e}from"./BasePdfViewer-7i1eqUNr.js";import"./preload-helper-6cWemOcr.js";import"./index-BzlqDAfw.js";import"./BasePdfViewer.module.css-CWPK4Ev0.js";import"./PdfViewerAnnotationLayer-CwAwYLZw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAiAIo2U.js";import"./PdfViewerOutlineSidebar-uEDvj3cf.js";import"./PdfViewerSidebarHeader-pvGXi4aE.js";import"./useBaseUiId-DvojBwxI.js";import"./useControlled-OjeTa2_t.js";import"./CompositeRoot-DZHbEWwG.js";import"./CompositeItem-Czysbmcp.js";import"./ToolbarRootContext-CJh9ljWw.js";import"./composite-CFOr0BZu.js";import"./svgIconContainer-56SLvs0U.js";import"./PdfViewerSearchBar-gEc3ko7_.js";import"./chevron-up-lxYKkgE2.js";import"./chevron-down-TVEh7Z-q.js";import"./cross-D0IHJ6R4.js";import"./PdfViewerSidebar-BPk9KsOx.js";import"./index-D7-FHl4f.js";import"./index-DiBt9TUI.js";import"./index-BzXh_3LE.js";import"./PdfViewerToolbar-h8LbKKqe.js";import"./Button-B7ufGNzS.js";import"./chevron-right-DmFZAB4I.js";import"./Input-icqzcMB1.js";import"./search-Bfm8FcWQ.js";import"./spin-Cj3mTfO9.js";import"./error-D5dqG5sm.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/3b9f8e2623c23c4387b115766bdc1ab546ed91a5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
