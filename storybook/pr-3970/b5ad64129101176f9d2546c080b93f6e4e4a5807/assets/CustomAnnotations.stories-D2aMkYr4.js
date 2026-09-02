import{j as n}from"./iframe-DFSfQ_aP.js";import{B as e}from"./BasePdfViewer-DANLq-Y5.js";import"./preload-helper-DJLQJiWb.js";import"./index-CHPYvPwX.js";import"./BasePdfViewer.module.css-DaKqEiiP.js";import"./PdfViewerAnnotationLayer-CRWL-sf2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqaBYt1E.js";import"./PdfViewerOutlineSidebar-CqhB8rsV.js";import"./PdfViewerSidebarHeader-saPAF-s_.js";import"./useBaseUiId-DCyghABl.js";import"./useControlled-DXWD0Znz.js";import"./CompositeRoot-CgZWLN7d.js";import"./CompositeItem-CyzwHVke.js";import"./ToolbarRootContext-BpJBwGb-.js";import"./composite-BX_h9XZf.js";import"./svgIconContainer-BpYc0jTS.js";import"./PdfViewerSearchBar-mSwIoFzZ.js";import"./chevron-up-JLfL1A1a.js";import"./chevron-down-D8HcwDY0.js";import"./cross-Ce3cqE51.js";import"./PdfViewerSidebar-CEE6kbFx.js";import"./index-CdSacirl.js";import"./index-CQjeWbkR.js";import"./index-ASrgrlRW.js";import"./PdfViewerToolbar-D1OSYuVB.js";import"./Button-BpGPHejG.js";import"./chevron-right-ituaQkKi.js";import"./Input-B4nqbncu.js";import"./search-HIhGbyYm.js";import"./spin-Bayd9U-f.js";import"./error-D7U43ngn.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3970/b5ad64129101176f9d2546c080b93f6e4e4a5807/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
