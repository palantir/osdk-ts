import{j as n}from"./iframe-cnARutXL.js";import{B as e}from"./BasePdfViewer--0HR7V4w.js";import"./preload-helper-BmFSLRtI.js";import"./index-DFLlU5DH.js";import"./BasePdfViewer.module.css-LWMHQTKn.js";import"./PdfViewerAnnotationLayer-1S-zeXsp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYHkCgLb.js";import"./PdfViewerOutlineSidebar-Db-mFTyL.js";import"./PdfViewerSidebarHeader-CnpotAH2.js";import"./useBaseUiId-D3qiS2j7.js";import"./useControlled-C2e7ttGZ.js";import"./CompositeRoot-DrKWShkE.js";import"./CompositeItem-BZ25FDYT.js";import"./ToolbarRootContext-Cpm7XsDL.js";import"./composite-B8QB1mMF.js";import"./svgIconContainer-BYzMgWJS.js";import"./PdfViewerSearchBar-C3N4W8-Q.js";import"./chevron-up-BbrRiePx.js";import"./chevron-down-B7Voti3u.js";import"./cross-PEBZaCxU.js";import"./PdfViewerSidebar-CgLp-F_C.js";import"./index-W_p-C1mB.js";import"./index-BH1BAqhj.js";import"./index-WfGsRQkJ.js";import"./PdfViewerToolbar-MZHm8Nq4.js";import"./Button-6fdr9V7a.js";import"./chevron-right-D8c7DQsu.js";import"./Input-DDwYvpo2.js";import"./search-C7s-xGFv.js";import"./spin-Dmmmcudp.js";import"./error-D4N7FIX9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4070/6f010e3daec6e5068d3f899e77b3b27b15e2fbe6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
