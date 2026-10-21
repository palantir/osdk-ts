import{j as n}from"./iframe-AXAl_lkK.js";import{B as e}from"./BasePdfViewer-CR6EgeMD.js";import"./preload-helper-CmOyIjss.js";import"./index-WwDO5TYI.js";import"./BasePdfViewer.module.css-Bvu2dzJC.js";import"./PdfViewerAnnotationLayer-DMTZyUPS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cyx__npZ.js";import"./PdfViewerOutlineSidebar-CUVDbfJI.js";import"./PdfViewerSidebarHeader-Bj1zD2QN.js";import"./useBaseUiId-Z03BErLK.js";import"./useControlled-CwZsDCym.js";import"./CompositeRoot-CLadqUzK.js";import"./CompositeItem-3bSE7nfu.js";import"./ToolbarRootContext-Bjje7bvz.js";import"./composite-DhTcvoOi.js";import"./svgIconContainer-C41-1JgD.js";import"./PdfViewerSearchBar-Cvhft3Gk.js";import"./chevron-up-5Z9e1fPn.js";import"./chevron-down-Bzpri4FT.js";import"./cross-CQtMlVpl.js";import"./PdfViewerSidebar-Cm_znfa1.js";import"./index-DyLMV4YC.js";import"./index-waMJrP0w.js";import"./index-BfO3FL2b.js";import"./PdfViewerToolbar-CyDIKkkA.js";import"./Button-PnLOiyuX.js";import"./chevron-right-BMQOm2UK.js";import"./Input-rah5Oh7j.js";import"./search-DSOJHa0m.js";import"./spin-BbpsMNFM.js";import"./error-DelAmSaO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4241/053fa37b34eb9bdf5a41b0fe6dd092cce3006c6a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
