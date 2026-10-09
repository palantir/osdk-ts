import{j as n}from"./iframe-DpbVK0Z4.js";import{B as e}from"./BasePdfViewer-BxXIyMai.js";import"./preload-helper-BMTjOH4m.js";import"./index-FV6PMg5w.js";import"./BasePdfViewer.module.css-neCynqWF.js";import"./PdfViewerAnnotationLayer-Be_i9bdB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_EzGKMo.js";import"./PdfViewerOutlineSidebar-BReUhURo.js";import"./PdfViewerSidebarHeader-2DEOD84m.js";import"./useBaseUiId-DPGPywgp.js";import"./useControlled-C8mfwfwA.js";import"./CompositeRoot-CsA2bLZK.js";import"./CompositeItem-7xXFyPB2.js";import"./ToolbarRootContext-EQtWNPb0.js";import"./composite-B3hTwjvJ.js";import"./svgIconContainer-BopSq90e.js";import"./PdfViewerSearchBar-Co7z-H0U.js";import"./chevron-up-HnaF2m-N.js";import"./chevron-down-BPIZ_aJd.js";import"./cross-CfOksEOQ.js";import"./PdfViewerSidebar-Dxtbncai.js";import"./index-DFzod05J.js";import"./index-CtCwm9A8.js";import"./index-DjzWs5sw.js";import"./PdfViewerToolbar-CwuID0nw.js";import"./Button-DXRDup3v.js";import"./chevron-right-BYMZwGjp.js";import"./Input-AjQ1LbFX.js";import"./search-Bpcgz7ed.js";import"./spin-aiYPu9y8.js";import"./error-Ddzskxi-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4120/133b91ef4c0c2ef6e2a829da235ea2f14c2c8951/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
