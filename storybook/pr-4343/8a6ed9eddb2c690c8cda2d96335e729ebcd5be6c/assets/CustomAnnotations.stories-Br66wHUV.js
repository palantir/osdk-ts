import{j as n}from"./iframe-PwAIVm5u.js";import{B as e}from"./BasePdfViewer-CFtI3Ufl.js";import"./preload-helper-CQv3h1eP.js";import"./index-Ca_oKjEa.js";import"./BasePdfViewer.module.css-CcorK1j_.js";import"./PdfViewerAnnotationLayer-l7bPUeop.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDixz0L6.js";import"./PdfViewerOutlineSidebar-CjlGAeWD.js";import"./PdfViewerSidebarHeader-DKQr96NQ.js";import"./useBaseUiId-BhpsHhZ2.js";import"./useControlled-_4ugvpeb.js";import"./CompositeRoot-B2Nu1FwG.js";import"./CompositeItem-DPCNdhZq.js";import"./ToolbarRootContext-BB_k_Kqj.js";import"./composite-fUnz6yuB.js";import"./svgIconContainer-HsDGQ90M.js";import"./PdfViewerSearchBar-DS_IhSB2.js";import"./chevron-up-Cb0duFtM.js";import"./chevron-down-BA5gqzEX.js";import"./cross-GcEEbHxC.js";import"./PdfViewerSidebar-M_yyl893.js";import"./index-hThCMCFD.js";import"./index-RdMLhv4M.js";import"./index-BihfBpP7.js";import"./PdfViewerToolbar-DLIXz9_E.js";import"./Button-VHGYpAX6.js";import"./chevron-right-BsaXBd1I.js";import"./Input-CPGzuvOj.js";import"./search-Nx9kE-Q8.js";import"./spin-C0nXLC0k.js";import"./error-DMntN0M5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4343/8a6ed9eddb2c690c8cda2d96335e729ebcd5be6c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
