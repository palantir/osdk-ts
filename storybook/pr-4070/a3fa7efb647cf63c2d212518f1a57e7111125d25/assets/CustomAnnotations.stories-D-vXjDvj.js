import{j as n}from"./iframe-l_8eBvr6.js";import{B as e}from"./BasePdfViewer-CC42ZmYf.js";import"./preload-helper-CWo-haOY.js";import"./index-pTEOeQs1.js";import"./BasePdfViewer.module.css-Dvr5Ic3r.js";import"./PdfViewerAnnotationLayer-CCYCgJff.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LeAfIYdG.js";import"./PdfViewerOutlineSidebar-CUovTnBX.js";import"./PdfViewerSidebarHeader-C5umMW64.js";import"./useBaseUiId-GR3xcgzw.js";import"./useControlled-_ZKeS4Zg.js";import"./CompositeRoot-C3hNuKPf.js";import"./CompositeItem-DVcnG8tP.js";import"./ToolbarRootContext-D8m03rR2.js";import"./composite-DKO9W0st.js";import"./svgIconContainer-BE3MMvAi.js";import"./PdfViewerSearchBar-RWiN_rpT.js";import"./chevron-up-CtU8XA-H.js";import"./chevron-down-Dr_zm-jW.js";import"./cross-AIldtqcf.js";import"./PdfViewerSidebar-BV9j61M5.js";import"./index-CTOamDEC.js";import"./index-rFITWboZ.js";import"./index-CsnFWtbo.js";import"./PdfViewerToolbar-D6jqfmqq.js";import"./Button-D_UBsIlq.js";import"./chevron-right-B9Kmtx2F.js";import"./Input-b3HEdj9w.js";import"./search-53j1pAYR.js";import"./spin-kkqSzRlt.js";import"./error-BjQYuyH5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4070/a3fa7efb647cf63c2d212518f1a57e7111125d25/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
