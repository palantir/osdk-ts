import{j as n}from"./iframe--rHM778H.js";import{B as e}from"./BasePdfViewer-j0qDuOFD.js";import"./preload-helper-DpVBsV2L.js";import"./index-BElFIwyB.js";import"./BasePdfViewer.module.css-Mb2J-rj8.js";import"./PdfViewerAnnotationLayer-B7GW-Qgo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zfzVXMld.js";import"./PdfViewerOutlineSidebar-Bm2Lh68m.js";import"./PdfViewerSidebarHeader-ow50m8rB.js";import"./useBaseUiId-BT7Lgjzv.js";import"./useControlled-BERkl8jy.js";import"./CompositeRoot-Bvt1bQsi.js";import"./CompositeItem-5osJRFVq.js";import"./ToolbarRootContext-DNOQmnhU.js";import"./composite-CaRBo0mp.js";import"./svgIconContainer-CjX9_w9R.js";import"./PdfViewerSearchBar-CZgXRF6_.js";import"./chevron-up-TTOku_SS.js";import"./chevron-down-BlvURY3l.js";import"./cross-CHXgNJax.js";import"./PdfViewerSidebar-B5PHkgd7.js";import"./index-CmizMsna.js";import"./index-B1NiRkYf.js";import"./index-D6fdAiU5.js";import"./PdfViewerToolbar-Wzf9xqob.js";import"./Button-BOD28ASd.js";import"./chevron-right-DZ5Fn4yI.js";import"./Input-DqZJVW1Y.js";import"./search-ZsY-Nyc_.js";import"./spin-DDlC4aAL.js";import"./error-CPHhJfnm.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4323/b1a17701307f177a98a2de756221f5dd1f77a469/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
