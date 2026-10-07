import{j as n}from"./iframe-DTvoIH2r.js";import{B as e}from"./BasePdfViewer-B8YQ1U8h.js";import"./preload-helper-Bl5BDaS_.js";import"./index-Cm5sGWxJ.js";import"./BasePdfViewer.module.css-aBNolFbv.js";import"./PdfViewerAnnotationLayer-CjBbNXdK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-p4SIgPdB.js";import"./PdfViewerOutlineSidebar-XN90CorS.js";import"./PdfViewerSidebarHeader-P2yxKHEs.js";import"./useBaseUiId-DFuLIzAR.js";import"./useControlled-0uh_9m14.js";import"./CompositeRoot-C_JqeGsa.js";import"./CompositeItem-OtQFnxkB.js";import"./ToolbarRootContext-Bwl43FVk.js";import"./composite-u0e-F1rW.js";import"./svgIconContainer-TNOoFETa.js";import"./PdfViewerSearchBar-Ci2rc2t8.js";import"./chevron-up-Bhsls9ly.js";import"./chevron-down-Kc2WAjaE.js";import"./cross-dEikKBUB.js";import"./PdfViewerSidebar-JVnSkhhQ.js";import"./index-C_BS0Bod.js";import"./index-BkNGnmPX.js";import"./index-huiBNFNy.js";import"./PdfViewerToolbar-C4t0R2ed.js";import"./Button-Eyz2dERQ.js";import"./chevron-right-C4Kdomun.js";import"./Input-C-tth6vb.js";import"./search-CkOB4LMx.js";import"./spin-DPfQuqRQ.js";import"./error-CAqUL9Mb.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4163/2e427d20f12e69a1517983d1c9dc446d2b8f9f48/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
