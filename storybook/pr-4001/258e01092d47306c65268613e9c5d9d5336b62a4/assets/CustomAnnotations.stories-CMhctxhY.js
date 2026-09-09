import{j as n}from"./iframe-B9fWy8hT.js";import{B as e}from"./BasePdfViewer-BROsZBHP.js";import"./preload-helper-DWfHVW0p.js";import"./index-DcqZYHDv.js";import"./BasePdfViewer.module.css-F8IFWTwR.js";import"./PdfViewerAnnotationLayer-szZtVl1Q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXYNFXlH.js";import"./PdfViewerOutlineSidebar-Du8yRIVy.js";import"./PdfViewerSidebarHeader-Bjjposbi.js";import"./useBaseUiId-ck-5-ASN.js";import"./useControlled-1rkkBjfr.js";import"./CompositeRoot-DHNsKFL1.js";import"./CompositeItem-Cqqz-d5o.js";import"./ToolbarRootContext-ahNi1RH8.js";import"./composite-BwwoklsZ.js";import"./svgIconContainer-u2Tnk_oU.js";import"./PdfViewerSearchBar-BGCkld88.js";import"./chevron-up-CNh9yDYr.js";import"./chevron-down-nNmhzWCh.js";import"./cross-boAy6lJm.js";import"./PdfViewerSidebar-CfrRtZ-i.js";import"./index-BEFSCPJo.js";import"./index-BpWX3K1g.js";import"./index-Dhsqt6ib.js";import"./PdfViewerToolbar-BjviYI4N.js";import"./Button-3STy3BF8.js";import"./chevron-right-Bgnju3CU.js";import"./Input-CD0TW00M.js";import"./search-B0RjXvIo.js";import"./spin-Ctdp_hLt.js";import"./error-DVMkH5gx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4001/258e01092d47306c65268613e9c5d9d5336b62a4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
