import{j as n}from"./iframe-_5xzb7Z5.js";import{B as e}from"./BasePdfViewer-qE8UCKHB.js";import"./preload-helper-9kDSgaR1.js";import"./index-BQLQ6q72.js";import"./BasePdfViewer.module.css-BKN5_p64.js";import"./PdfViewerAnnotationLayer-BVhOUfug.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0z1agvg.js";import"./PdfViewerOutlineSidebar-BDHQPDBo.js";import"./PdfViewerSidebarHeader-0LWyqgWi.js";import"./useBaseUiId-CL6BvqYc.js";import"./useControlled-CaOEMTdE.js";import"./CompositeRoot-BbcxLSvn.js";import"./CompositeItem-sQD2esUI.js";import"./ToolbarRootContext-BP4N1j53.js";import"./composite-RcxH71Ia.js";import"./svgIconContainer-zoYg_i-y.js";import"./PdfViewerSearchBar-C9tMeqM0.js";import"./chevron-up-BdNore9n.js";import"./chevron-down-Dc3YtOri.js";import"./cross-DvzeLUuw.js";import"./PdfViewerSidebar-DdFgfTAu.js";import"./index-CNCDNsvZ.js";import"./index-Bwe_rVKq.js";import"./index-a6ymnaCE.js";import"./PdfViewerToolbar-CriIuNJs.js";import"./Button-BN8W0OGL.js";import"./chevron-right-96ZD6KIM.js";import"./Input-6FTkig4D.js";import"./search-FeXiW-S5.js";import"./spin-DC62Wf2M.js";import"./error-Ba02y8oz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4070/216bcc7c231ab5563dc049b7ded3448c688e0bcd/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
