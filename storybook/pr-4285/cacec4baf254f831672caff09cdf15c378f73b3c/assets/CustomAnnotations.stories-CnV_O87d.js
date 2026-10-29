import{j as n}from"./iframe-CjqaNb_6.js";import{B as e}from"./BasePdfViewer-B4LD-VPs.js";import"./preload-helper-CGa3vgnS.js";import"./index-vq-4ZEFu.js";import"./BasePdfViewer.module.css-BsDm-ELZ.js";import"./PdfViewerAnnotationLayer-DfM4Nhr-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CD-W7rlT.js";import"./PdfViewerOutlineSidebar-DzftEhGP.js";import"./PdfViewerSidebarHeader-DYzV4h36.js";import"./useBaseUiId-BlK4VlOb.js";import"./useControlled-DENE4AVf.js";import"./CompositeRoot-CK-TwHMb.js";import"./CompositeItem-DdNr1E7d.js";import"./ToolbarRootContext-BkN7DcjO.js";import"./composite-C2vCaoMT.js";import"./svgIconContainer-DjFXNtcD.js";import"./PdfViewerSearchBar-zWzZ13Je.js";import"./chevron-up-DWov7Pwm.js";import"./chevron-down-DCYjYXHO.js";import"./cross-BpdOGJyJ.js";import"./PdfViewerSidebar-CU6tCvCT.js";import"./index-Dd6FNa4t.js";import"./index-CicBoOrA.js";import"./index-_mZt-hWo.js";import"./PdfViewerToolbar-uWkTxjfZ.js";import"./Button-d7ygQEjr.js";import"./chevron-right-DYyoJlza.js";import"./Input-BvVBd0y-.js";import"./search-DVbD0a3n.js";import"./spin-BxizeP_K.js";import"./error-CICrjBQf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/cacec4baf254f831672caff09cdf15c378f73b3c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
