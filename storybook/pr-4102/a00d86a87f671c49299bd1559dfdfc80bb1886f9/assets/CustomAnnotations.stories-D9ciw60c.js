import{j as n}from"./iframe-Cd3assbj.js";import{B as e}from"./BasePdfViewer-DA1EESrM.js";import"./preload-helper-CJDETHpR.js";import"./index-CuezTBwu.js";import"./BasePdfViewer.module.css-BAYF5aoT.js";import"./PdfViewerAnnotationLayer-C_Gug8CJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwC7Y_Lr.js";import"./PdfViewerOutlineSidebar-2NZHidNA.js";import"./PdfViewerSidebarHeader-HMoGmA_M.js";import"./useBaseUiId-BiXP69FS.js";import"./useControlled-C6IOb7yO.js";import"./CompositeRoot-BeW3YXzY.js";import"./CompositeItem-Bvq7b2TM.js";import"./ToolbarRootContext-8Wniw3sv.js";import"./composite-Ba6K1tVR.js";import"./svgIconContainer-mKWT46Ew.js";import"./PdfViewerSearchBar-DWJ8YTgH.js";import"./chevron-up-DpAs353q.js";import"./chevron-down-CJuFpDqg.js";import"./cross-BWupVKMA.js";import"./PdfViewerSidebar-MRLbP8ew.js";import"./index-N34x7HCr.js";import"./index-BAIR5AIA.js";import"./index-Z1uxp6Qk.js";import"./PdfViewerToolbar-BsjFcfuP.js";import"./Button-DL7dr6Eo.js";import"./chevron-right-jhdBagkn.js";import"./Input-CNsHRcz9.js";import"./search-DpDuiZ1l.js";import"./spin-CI8uNEtE.js";import"./error-DnfhABs7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4102/a00d86a87f671c49299bd1559dfdfc80bb1886f9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
