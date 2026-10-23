import{j as n}from"./iframe-BpdL9i9r.js";import{B as e}from"./BasePdfViewer-BREg5Z2u.js";import"./preload-helper-BGgpRwmn.js";import"./index-BOBmNIkf.js";import"./BasePdfViewer.module.css-DRmUqfrO.js";import"./PdfViewerAnnotationLayer-BOTg22Yn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDO7Vxhx.js";import"./PdfViewerOutlineSidebar-OdNDLFxx.js";import"./PdfViewerSidebarHeader-CcvRxM9n.js";import"./useBaseUiId-DRf0avcO.js";import"./useControlled-QZyhjlC2.js";import"./CompositeRoot-Cb_mm6by.js";import"./CompositeItem-DWqZMJZf.js";import"./ToolbarRootContext-B3r4TQUK.js";import"./composite-BFfsCZEe.js";import"./svgIconContainer-BYUaz7v8.js";import"./PdfViewerSearchBar-B8Snljau.js";import"./chevron-up-r3u3JX8A.js";import"./chevron-down-CmBeGku0.js";import"./cross-B_FitAUD.js";import"./PdfViewerSidebar-Bb0_Wf1Y.js";import"./index-CQPYqNM-.js";import"./index-Dh6vk7Lg.js";import"./index-CAZS1ZmE.js";import"./PdfViewerToolbar-16xflOlp.js";import"./Button-BysZxDt3.js";import"./chevron-right-B1AKeJm8.js";import"./Input-yfdnK4QX.js";import"./search-C5Bpx8xV.js";import"./spin-V55Ur53u.js";import"./error-BZRmZs4O.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1927/452b3b823bf6961cfd754866f1648a88d6d10c66/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
