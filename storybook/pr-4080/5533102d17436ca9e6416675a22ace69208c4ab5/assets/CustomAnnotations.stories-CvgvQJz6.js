import{j as n}from"./iframe-C3xC__LU.js";import{B as e}from"./BasePdfViewer-NChNN_Zc.js";import"./preload-helper-DxYa6wnu.js";import"./index-Bdy1H0uO.js";import"./BasePdfViewer.module.css-CM7cn-B6.js";import"./PdfViewerAnnotationLayer-BSZVEkvV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgbwrksQ.js";import"./PdfViewerOutlineSidebar-DWSMTaXd.js";import"./PdfViewerSidebarHeader-X8d03ZLv.js";import"./useBaseUiId-DfXUpmNo.js";import"./useControlled-D8jbflQz.js";import"./CompositeRoot-C8YvZ1Sa.js";import"./CompositeItem-BTSmeuTL.js";import"./ToolbarRootContext-Ciubtyo1.js";import"./composite-DEhtrm_a.js";import"./svgIconContainer-Bfm1ZKMl.js";import"./PdfViewerSearchBar-BTQ8MzNq.js";import"./chevron-up-BFz6Lk-e.js";import"./chevron-down-Cpgn36Ir.js";import"./cross-DTsmRRZf.js";import"./PdfViewerSidebar-BvShy4kx.js";import"./index-DEH1lz3e.js";import"./index-BC4cspOB.js";import"./index-5F-Zydov.js";import"./PdfViewerToolbar-B2bf9WvK.js";import"./Button-CIfwAqPR.js";import"./chevron-right-B3ObuuM3.js";import"./Input-CprSxKZD.js";import"./search-C7Klq3lR.js";import"./spin-BGIEu7U9.js";import"./error-CQKPevIq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4080/5533102d17436ca9e6416675a22ace69208c4ab5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
