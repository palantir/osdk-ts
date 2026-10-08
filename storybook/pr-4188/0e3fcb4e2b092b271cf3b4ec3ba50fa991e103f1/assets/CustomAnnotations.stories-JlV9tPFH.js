import{j as n}from"./iframe-BgM5ILJD.js";import{B as e}from"./BasePdfViewer-CaD1Ctf6.js";import"./preload-helper-D1sAdP5a.js";import"./index-ah8Na9h1.js";import"./BasePdfViewer.module.css-DtioMNOT.js";import"./PdfViewerAnnotationLayer-CfInodrE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-QUSbF5iV.js";import"./PdfViewerOutlineSidebar-BK-R0357.js";import"./PdfViewerSidebarHeader-pUQCTm7P.js";import"./useBaseUiId-CzAuSX_4.js";import"./useControlled-COnm-wVi.js";import"./CompositeRoot-UzRD7iZ2.js";import"./CompositeItem-B6xGoOu0.js";import"./ToolbarRootContext-CjwaP5zw.js";import"./composite-BS7dFqvY.js";import"./svgIconContainer-De6gxcHK.js";import"./PdfViewerSearchBar-0ESm-dtD.js";import"./chevron-up-BmD_0m4w.js";import"./chevron-down-D1QYpBiI.js";import"./cross-B5mOqZwT.js";import"./PdfViewerSidebar-DmCYHM7W.js";import"./index-DturTZ53.js";import"./index-DAXSmbbp.js";import"./index-YnWjipca.js";import"./PdfViewerToolbar-DYDEUrrW.js";import"./Button-KrMtAmhv.js";import"./chevron-right-BgpPP4te.js";import"./Input-DL79KIMl.js";import"./search-C2iFy_Yx.js";import"./spin-V1gE7odc.js";import"./error-BFuWQWXY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4188/0e3fcb4e2b092b271cf3b4ec3ba50fa991e103f1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
