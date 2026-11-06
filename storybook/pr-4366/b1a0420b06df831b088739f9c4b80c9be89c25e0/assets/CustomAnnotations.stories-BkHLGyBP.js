import{j as n}from"./iframe-CNCsodpO.js";import{B as e}from"./BasePdfViewer-CNPC3sC-.js";import"./preload-helper-BcSdXRr8.js";import"./index-DZaiIimE.js";import"./BasePdfViewer.module.css-DgYeTSWi.js";import"./PdfViewerAnnotationLayer-oUw0ujTF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7o_VOOb.js";import"./PdfViewerOutlineSidebar-Bzb2GQrZ.js";import"./PdfViewerSidebarHeader-CsWaK96S.js";import"./useBaseUiId-BM8If8HJ.js";import"./useControlled-jyzXrKzG.js";import"./CompositeRoot-oaJcIeV8.js";import"./CompositeItem-CznsiIYk.js";import"./ToolbarRootContext-D2snF5qH.js";import"./composite-D-lHYX2y.js";import"./svgIconContainer-D0BYcghd.js";import"./PdfViewerSearchBar-D-Jd4nCl.js";import"./chevron-up-CRWaAUiT.js";import"./chevron-down-QtQgwZHW.js";import"./cross-ByI78NKq.js";import"./PdfViewerSidebar-CbpVpZsd.js";import"./index-ikLawp9H.js";import"./index-JERw882y.js";import"./index-BiV4_PIL.js";import"./PdfViewerToolbar-CLIOYcMj.js";import"./Button-DdjGWYgj.js";import"./chevron-right-DeUEv22w.js";import"./Input-DEq1aCXP.js";import"./search-BLGSqUK3.js";import"./spin-bjIFYNBy.js";import"./error-vSyclIj9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4366/b1a0420b06df831b088739f9c4b80c9be89c25e0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
