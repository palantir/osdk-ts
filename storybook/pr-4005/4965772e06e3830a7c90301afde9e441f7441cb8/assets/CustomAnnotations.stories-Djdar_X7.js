import{j as n}from"./iframe-BgIqeTr7.js";import{B as e}from"./BasePdfViewer-CBi8LMND.js";import"./preload-helper-BbBE06U6.js";import"./index-OeIAiwUu.js";import"./BasePdfViewer.module.css-WMPfsZi6.js";import"./PdfViewerAnnotationLayer-CqT9InPM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DN2w3TP1.js";import"./PdfViewerOutlineSidebar-VqTktOi9.js";import"./PdfViewerSidebarHeader-L5BWigk8.js";import"./useBaseUiId-CgOsBxCj.js";import"./useControlled-DoFIiJ6c.js";import"./CompositeRoot-mRZyL7Z6.js";import"./CompositeItem-D2E5MTZ0.js";import"./ToolbarRootContext-XHaZZ7gx.js";import"./composite-BF8O5dbv.js";import"./svgIconContainer-BtrJOEHF.js";import"./PdfViewerSearchBar-BPENPiKR.js";import"./chevron-up-CWKyRQDq.js";import"./chevron-down-CZAmY7BW.js";import"./cross-Wbc8t1qS.js";import"./PdfViewerSidebar-DMHsSwZo.js";import"./index-DA3CS0qW.js";import"./index-D9MNyfPv.js";import"./index-ef3bSd-w.js";import"./PdfViewerToolbar-B9xW4QuZ.js";import"./Button-WSqWRGZH.js";import"./chevron-right-CUVnfRCX.js";import"./Input-Ccm-R2od.js";import"./search-BF7QrwO6.js";import"./spin-C8ph8OFM.js";import"./error-DvPLPT6J.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4005/4965772e06e3830a7c90301afde9e441f7441cb8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
