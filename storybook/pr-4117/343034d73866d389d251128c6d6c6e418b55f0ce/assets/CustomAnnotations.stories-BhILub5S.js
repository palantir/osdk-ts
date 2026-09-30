import{j as n}from"./iframe-CE_irqki.js";import{B as e}from"./BasePdfViewer-BrxiKL4E.js";import"./preload-helper-B0wObQeK.js";import"./index-CbZ4Cj79.js";import"./BasePdfViewer.module.css-6Tsturkz.js";import"./PdfViewerAnnotationLayer-Dw9rJ5H-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C26SUTdj.js";import"./PdfViewerOutlineSidebar-Fvtdob6d.js";import"./PdfViewerSidebarHeader-C0Q2_usn.js";import"./useBaseUiId-Cuodx7xu.js";import"./useControlled-BqInFAvQ.js";import"./CompositeRoot-CjYH-Lye.js";import"./CompositeItem-BnnmhO1F.js";import"./ToolbarRootContext-CDB_L_pZ.js";import"./composite-CCcrzfR2.js";import"./svgIconContainer-co06VEp6.js";import"./PdfViewerSearchBar-C7LsFiyf.js";import"./chevron-up-X7mtzZB2.js";import"./chevron-down-oqAS4iB6.js";import"./cross-CiDhEPuo.js";import"./PdfViewerSidebar-D7NeoOAI.js";import"./index-BrqtMSKB.js";import"./index-D0l0Hg2C.js";import"./index-C-NLbbDg.js";import"./PdfViewerToolbar-D3iyrrUv.js";import"./Button-Do97WS9c.js";import"./chevron-right-BwxKv4VQ.js";import"./Input-CQv_PU5A.js";import"./search-BPF_4D3u.js";import"./spin-BnGTN_tn.js";import"./error-yF4FDunH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4117/343034d73866d389d251128c6d6c6e418b55f0ce/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
