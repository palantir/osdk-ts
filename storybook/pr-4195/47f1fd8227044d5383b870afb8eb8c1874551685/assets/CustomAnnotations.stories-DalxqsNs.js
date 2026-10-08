import{j as n}from"./iframe-Brmfbmz5.js";import{B as e}from"./BasePdfViewer-DjZf9ThD.js";import"./preload-helper-DOndN82M.js";import"./index-CdHtMllz.js";import"./BasePdfViewer.module.css-BhRXpktF.js";import"./PdfViewerAnnotationLayer-BBNd8lYX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsyREVUO.js";import"./PdfViewerOutlineSidebar-DrD2WPz7.js";import"./PdfViewerSidebarHeader-BeyHZlvn.js";import"./useBaseUiId-DOGmrDtt.js";import"./useControlled-B9XW-ROk.js";import"./CompositeRoot-CuDRvtQN.js";import"./CompositeItem-CAOvInfw.js";import"./ToolbarRootContext-DJZTCp8t.js";import"./composite-RDVcdR-R.js";import"./svgIconContainer-Cy0NnLfo.js";import"./PdfViewerSearchBar-gXkwDrGA.js";import"./chevron-up-CzrM3MPI.js";import"./chevron-down-Bstv9WV1.js";import"./cross-fGiz3Rjs.js";import"./PdfViewerSidebar-D7X8GckO.js";import"./index-DTHd-YPe.js";import"./index-DIAM2hNo.js";import"./index-Dr0L57xQ.js";import"./PdfViewerToolbar-DbX6fOra.js";import"./Button-BUGtRXvM.js";import"./chevron-right-CfV7BU8n.js";import"./Input-BEXhNqGp.js";import"./search-DtsbzCVy.js";import"./spin--ttpcR3z.js";import"./error-CqVZQ730.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4195/47f1fd8227044d5383b870afb8eb8c1874551685/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
