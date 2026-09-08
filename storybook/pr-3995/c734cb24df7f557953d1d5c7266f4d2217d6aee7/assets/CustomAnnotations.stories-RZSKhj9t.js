import{j as n}from"./iframe-Bx-FSmYs.js";import{B as e}from"./BasePdfViewer-BW2F-y9f.js";import"./preload-helper-DgijergL.js";import"./index-xwvc2Shv.js";import"./BasePdfViewer.module.css-DFeQK12g.js";import"./PdfViewerAnnotationLayer-Chok5Pap.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_Ts3ULo.js";import"./PdfViewerOutlineSidebar-BnFYnSpE.js";import"./PdfViewerSidebarHeader-DAyTWKsg.js";import"./useBaseUiId-BGi2L2nz.js";import"./useControlled-DFOJ9xFP.js";import"./CompositeRoot-BIY8rNAr.js";import"./CompositeItem-CMA7rFte.js";import"./ToolbarRootContext-DpyqD2o0.js";import"./composite-mmpRjkxT.js";import"./svgIconContainer-CBLTX1NK.js";import"./PdfViewerSearchBar-tDqtMcJ9.js";import"./chevron-up-K8CVZpQ3.js";import"./chevron-down-Buw4ucuN.js";import"./cross-BOo5QBm9.js";import"./PdfViewerSidebar-CitAlBiA.js";import"./index-BY0uRhrX.js";import"./index-CIkpzaA0.js";import"./index-Ye47VGO5.js";import"./PdfViewerToolbar-XkkkBQTw.js";import"./Button--MuiOxa3.js";import"./chevron-right-BuNPQgEZ.js";import"./Input-Cv-wNC9i.js";import"./search-CdlZ7Qxj.js";import"./spin-p2VuFxde.js";import"./error-DdvC7qFd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3995/c734cb24df7f557953d1d5c7266f4d2217d6aee7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
