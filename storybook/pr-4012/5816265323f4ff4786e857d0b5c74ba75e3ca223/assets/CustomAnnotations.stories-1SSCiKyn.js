import{j as n}from"./iframe-zZuIx-c9.js";import{B as e}from"./BasePdfViewer-DOPb9W3-.js";import"./preload-helper-XLtQClQl.js";import"./index-DGgNHuzV.js";import"./BasePdfViewer.module.css-DjWANsZg.js";import"./PdfViewerAnnotationLayer-DhoYkjaw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B8LX95cv.js";import"./PdfViewerOutlineSidebar-9hMSAR9_.js";import"./PdfViewerSidebarHeader-DyZh9zqi.js";import"./useBaseUiId-QsYmwdFZ.js";import"./useControlled-B4CVwr3J.js";import"./CompositeRoot-A5R3Pr0N.js";import"./CompositeItem-DKDVMcoh.js";import"./ToolbarRootContext-pNEiopTT.js";import"./composite-Cx527Tyd.js";import"./svgIconContainer-BVFcWySo.js";import"./PdfViewerSearchBar-scrHpJCk.js";import"./chevron-up-BezA9gj5.js";import"./chevron-down-BRlfcJdA.js";import"./cross-CI4w4_Jo.js";import"./PdfViewerSidebar-C5J7aneZ.js";import"./index-DaqIxsao.js";import"./index-TM8zQZc6.js";import"./index-C1Pc_aQZ.js";import"./PdfViewerToolbar-B32xAvpj.js";import"./Button-Cv2L8neg.js";import"./chevron-right-CTMtUmNe.js";import"./Input-BD19hUvi.js";import"./search-CNuN0o2o.js";import"./spin-Z2AHRgi6.js";import"./error-C5gHLQAi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4012/5816265323f4ff4786e857d0b5c74ba75e3ca223/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
