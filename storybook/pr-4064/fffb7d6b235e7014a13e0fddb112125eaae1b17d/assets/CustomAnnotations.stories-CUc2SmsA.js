import{j as n}from"./iframe-Djgn3mMp.js";import{B as e}from"./BasePdfViewer-JwwfiMOQ.js";import"./preload-helper-BBzcmrCr.js";import"./index-DMa22myD.js";import"./BasePdfViewer.module.css-BnqWadr0.js";import"./PdfViewerAnnotationLayer-4gHXXABm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FGa2vDD-.js";import"./PdfViewerOutlineSidebar-C32DsrFI.js";import"./PdfViewerSidebarHeader-Dl3AQ8sz.js";import"./useBaseUiId-BpSKPnMp.js";import"./useControlled-Dodjbhjp.js";import"./CompositeRoot-GtUdoxrj.js";import"./CompositeItem-9M2opMvG.js";import"./ToolbarRootContext-D_OMSFCs.js";import"./composite-v_9iQLjO.js";import"./svgIconContainer-BSc8qpEQ.js";import"./PdfViewerSearchBar-kv_bGWEm.js";import"./chevron-up-6Wqp5hX8.js";import"./chevron-down-hMfe6qGf.js";import"./cross-P-qahKgk.js";import"./PdfViewerSidebar-DM3sSkUp.js";import"./index-DXiVbOpv.js";import"./index-CXL1vt3n.js";import"./index-CX21NhuZ.js";import"./PdfViewerToolbar-DAOYRHBv.js";import"./Button-CJpjwaeJ.js";import"./chevron-right-CeBVd8Ms.js";import"./Input-DahsmOdu.js";import"./search-BFidPBD3.js";import"./spin-BBrIKLSp.js";import"./error-C4Sj7yvC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4064/fffb7d6b235e7014a13e0fddb112125eaae1b17d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
