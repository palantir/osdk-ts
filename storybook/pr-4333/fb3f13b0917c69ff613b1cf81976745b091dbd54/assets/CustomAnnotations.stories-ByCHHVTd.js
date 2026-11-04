import{j as n}from"./iframe-CsKQ3MiN.js";import{B as e}from"./BasePdfViewer-C5sSMfUr.js";import"./preload-helper-DGKcnXHD.js";import"./index-Dr6q-Sfz.js";import"./BasePdfViewer.module.css-C8Ai8lmz.js";import"./PdfViewerAnnotationLayer-CQoGwt3w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qmHT4nPy.js";import"./PdfViewerOutlineSidebar-BU1wuvxY.js";import"./PdfViewerSidebarHeader-C19Cu23G.js";import"./useBaseUiId-BzoXUnOl.js";import"./useControlled-Cob_C-Qn.js";import"./CompositeRoot-BlXaoSVk.js";import"./CompositeItem-DZkfIwKg.js";import"./ToolbarRootContext-BNxut5tp.js";import"./composite-CoD6tMpx.js";import"./svgIconContainer-CEz_OqiJ.js";import"./PdfViewerSearchBar-CNP1T5zG.js";import"./chevron-up-hsl77dP2.js";import"./chevron-down-BCi4kbBt.js";import"./cross-D0wLRLht.js";import"./PdfViewerSidebar-DcpHIFqf.js";import"./index-DoTKq459.js";import"./index-BeHm_BzD.js";import"./index-snnTh06i.js";import"./PdfViewerToolbar-BcvPA9jh.js";import"./Button-BEOltIVE.js";import"./chevron-right-B7SCPUE6.js";import"./Input-D9JW6ixL.js";import"./search-cTPZqcQC.js";import"./spin-BALcuib0.js";import"./error-C-bxu3dO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4333/fb3f13b0917c69ff613b1cf81976745b091dbd54/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
