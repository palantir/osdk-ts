import{j as n}from"./iframe-B30VXZ-6.js";import{B as e}from"./BasePdfViewer-tBrnx3v0.js";import"./preload-helper-ChWHhmMQ.js";import"./index-C8WN5xda.js";import"./BasePdfViewer.module.css-BKT4GnQV.js";import"./PdfViewerAnnotationLayer-DmlzION5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiD0SdCE.js";import"./PdfViewerOutlineSidebar-DQQTrDEl.js";import"./PdfViewerSidebarHeader-CkN6zB7l.js";import"./useBaseUiId-N1dQpqNi.js";import"./useControlled-jMDaMrsG.js";import"./CompositeRoot-Cm6VUj19.js";import"./CompositeItem-DXi528OA.js";import"./ToolbarRootContext-Dshg5ZnG.js";import"./composite-CL2Urpfy.js";import"./svgIconContainer-CDJpdA9T.js";import"./PdfViewerSearchBar-DEDCwUwu.js";import"./chevron-up-VpseUvUl.js";import"./chevron-down-DiQ4Q7Kd.js";import"./cross-q0dJk3Qv.js";import"./PdfViewerSidebar-C5J-ZAgQ.js";import"./index-D6kqTvDq.js";import"./index-BPP2HBPd.js";import"./index-G14MjZBl.js";import"./PdfViewerToolbar-Bm7hPZuf.js";import"./Button-Fs0rdLv2.js";import"./chevron-right-D5Aw_6UK.js";import"./Input-CUQ6PF3-.js";import"./search-Mz2TVtVf.js";import"./spin-V61O8ccQ.js";import"./error-Cc1FQeFa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4102/18fd306e3eea1e5877d475d64ea44fbe3c588237/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
