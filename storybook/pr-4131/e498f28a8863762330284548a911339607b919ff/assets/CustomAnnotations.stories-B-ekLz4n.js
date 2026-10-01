import{j as n}from"./iframe-Cq4acRIY.js";import{B as e}from"./BasePdfViewer-BYciTSO8.js";import"./preload-helper-MAyNwQdY.js";import"./index-6eoOxZ40.js";import"./BasePdfViewer.module.css-DxknjHCi.js";import"./PdfViewerAnnotationLayer-DTZ9ctN6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5GpDiMl.js";import"./PdfViewerOutlineSidebar-DRGhiKx5.js";import"./PdfViewerSidebarHeader-Ce1dkGg3.js";import"./useBaseUiId-Bjm3kLfn.js";import"./useControlled-BhrnnSyx.js";import"./CompositeRoot-CgVN4Qb8.js";import"./CompositeItem-C3jCGG7J.js";import"./ToolbarRootContext-sZwDlHkO.js";import"./composite-Bn47_cTN.js";import"./svgIconContainer-BeKF9m8R.js";import"./PdfViewerSearchBar-Cw4T8m_S.js";import"./chevron-up-Cfl0vVH5.js";import"./chevron-down-CdL9km5b.js";import"./cross-DLXEiws_.js";import"./PdfViewerSidebar-BxwMhz6V.js";import"./index-BZTiDrQp.js";import"./index-DrCCi1us.js";import"./index-Dc9EpWSo.js";import"./PdfViewerToolbar-DAqBY0_o.js";import"./Button-w2RzDLnC.js";import"./chevron-right-BB0VlUC9.js";import"./Input-X1xzUJ9h.js";import"./search-CRBn2Ssp.js";import"./spin-Coy4YSra.js";import"./error-CIJkAMmO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4131/e498f28a8863762330284548a911339607b919ff/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
