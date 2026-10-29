import{j as n}from"./iframe-IwlSs7RL.js";import{B as e}from"./BasePdfViewer-yzglnOyA.js";import"./preload-helper-BSkCOlkQ.js";import"./index-DubGe8n8.js";import"./BasePdfViewer.module.css-Dyp2rnhI.js";import"./PdfViewerAnnotationLayer-BoR-oZHR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVtKKwJB.js";import"./PdfViewerOutlineSidebar-BQQuXPxl.js";import"./PdfViewerSidebarHeader-CPyz30Lv.js";import"./useBaseUiId-C6iBuDel.js";import"./useControlled-DHwVcrm_.js";import"./CompositeRoot-B1eb18Ue.js";import"./CompositeItem-Co7hhhjf.js";import"./ToolbarRootContext-C2NTNe0y.js";import"./composite-BhDLSWJq.js";import"./svgIconContainer-CxRFzvkj.js";import"./PdfViewerSearchBar-CEL_GK9f.js";import"./chevron-up-ymAIul9l.js";import"./chevron-down-DkOqeyC-.js";import"./cross-QYKhi7EM.js";import"./PdfViewerSidebar-Cw2vBvga.js";import"./index-Bu0grvIG.js";import"./index-Dtiq40Ku.js";import"./index-rVQQDG8n.js";import"./PdfViewerToolbar-B9S-c72E.js";import"./Button-v4BAXuzD.js";import"./chevron-right-B_To7F27.js";import"./Input-DEK2jxOA.js";import"./search-B6kXKBbQ.js";import"./spin-BzxAwAe3.js";import"./error-IBUuPrgD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/180b89b4fd65597673f56c2d2c7b27a966f44af1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
