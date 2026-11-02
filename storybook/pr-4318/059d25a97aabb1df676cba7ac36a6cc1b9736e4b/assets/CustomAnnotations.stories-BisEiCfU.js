import{j as n}from"./iframe-gwjWh6aP.js";import{B as e}from"./BasePdfViewer-D3JCa-Xy.js";import"./preload-helper-bIyT3R7b.js";import"./index-B2e6YLgb.js";import"./BasePdfViewer.module.css-BQYoncaD.js";import"./PdfViewerAnnotationLayer-Dx033abk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDCGSXNo.js";import"./PdfViewerOutlineSidebar-DQcJoVJ2.js";import"./PdfViewerSidebarHeader-q5thEYqr.js";import"./useBaseUiId-MuGd9EbB.js";import"./useControlled-BRAT0rWw.js";import"./CompositeRoot-CSWL0J3s.js";import"./CompositeItem-B632hz3W.js";import"./ToolbarRootContext-eiDeLXye.js";import"./composite-XNngWcyG.js";import"./svgIconContainer-uf6Xe766.js";import"./PdfViewerSearchBar-D-UtZEYa.js";import"./chevron-up-m8FkoQnf.js";import"./chevron-down-Bpsf2br_.js";import"./cross-CxSJV-iM.js";import"./PdfViewerSidebar-DK8Z_Cgu.js";import"./index-BjKGneLm.js";import"./index-C2Xm0Ig8.js";import"./index-CctUI8eo.js";import"./PdfViewerToolbar-Cwerbr-V.js";import"./Button-DYsrDr-V.js";import"./chevron-right-CGLECGu6.js";import"./Input-B14JiyW9.js";import"./search-77UZhWyC.js";import"./spin-DaILJp9D.js";import"./error-CG0c4OaM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4318/059d25a97aabb1df676cba7ac36a6cc1b9736e4b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
