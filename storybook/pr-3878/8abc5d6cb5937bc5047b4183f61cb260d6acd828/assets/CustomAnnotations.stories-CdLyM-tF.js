import{j as n}from"./iframe-BDguHbPD.js";import{B as e}from"./BasePdfViewer-gKQv4gDB.js";import"./preload-helper-7xLPbKmM.js";import"./index-C_5MPolp.js";import"./BasePdfViewer.module.css-CH3KynC3.js";import"./PdfViewerAnnotationLayer-DkfYfc2e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFdHx-pu.js";import"./PdfViewerOutlineSidebar-DhPX6bkZ.js";import"./PdfViewerSidebarHeader-C53vdW5d.js";import"./useBaseUiId-bwbz0VU7.js";import"./useControlled-B3aVNzWK.js";import"./CompositeRoot-DpTk_RYC.js";import"./CompositeItem-5MkrSg_6.js";import"./ToolbarRootContext-CALlmZI0.js";import"./composite-BsxX_L6c.js";import"./svgIconContainer-Z2Julm7W.js";import"./PdfViewerSearchBar-B13wN6Ef.js";import"./chevron-up-pw_FndaE.js";import"./chevron-down-CHEXQxiW.js";import"./cross-D4TeOGZ-.js";import"./PdfViewerSidebar-DIXjxvYn.js";import"./index-CaXJKsDl.js";import"./index-BAF4Gh4w.js";import"./index-C7DI1YIp.js";import"./PdfViewerToolbar-Cya-ARX0.js";import"./Button-D2v8_Tej.js";import"./chevron-right-4SiFLcwn.js";import"./Input-CXvy1-u2.js";import"./search-B1yR-f_r.js";import"./spin-Dl9RBa9c.js";import"./error-uqFmDj8x.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/8abc5d6cb5937bc5047b4183f61cb260d6acd828/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
