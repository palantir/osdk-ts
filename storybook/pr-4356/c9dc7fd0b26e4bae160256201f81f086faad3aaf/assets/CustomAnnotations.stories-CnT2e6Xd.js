import{j as n}from"./iframe-V97s0gAW.js";import{B as e}from"./BasePdfViewer-DN7Q43YS.js";import"./preload-helper-3HSTeFHP.js";import"./index-DpgCkzdC.js";import"./BasePdfViewer.module.css-ePpNxAUm.js";import"./PdfViewerAnnotationLayer-pgQ90UXV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBjwheh6.js";import"./PdfViewerOutlineSidebar-veyz_MYp.js";import"./PdfViewerSidebarHeader-CZCkCKDZ.js";import"./useBaseUiId-Bab3TUT0.js";import"./useControlled-CturneKY.js";import"./CompositeRoot-DXoEOf9m.js";import"./CompositeItem-Dp8TKMUS.js";import"./ToolbarRootContext-Cm4dkNA7.js";import"./composite-CbcGiMzv.js";import"./svgIconContainer-DcsfwCI6.js";import"./PdfViewerSearchBar-BNRhx6Gl.js";import"./chevron-up-h5sAfkDO.js";import"./chevron-down-D6e3j0_s.js";import"./cross-D1lQCJW7.js";import"./PdfViewerSidebar-NP6LxLKs.js";import"./index-DF7F2J8l.js";import"./index-mHMhPLDN.js";import"./index-D4Dl5EM_.js";import"./PdfViewerToolbar-DQZJOvSf.js";import"./Button-BO5_Znwd.js";import"./chevron-right-DwLDxBBZ.js";import"./Input-C6RT56dE.js";import"./search-B7TbVw6W.js";import"./spin-BrYtjBs9.js";import"./error-3rN_CcIw.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4356/c9dc7fd0b26e4bae160256201f81f086faad3aaf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
