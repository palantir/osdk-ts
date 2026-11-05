import{j as n}from"./iframe-BEK1shVf.js";import{B as e}from"./BasePdfViewer-CkyIpp3o.js";import"./preload-helper-BuTZfPnC.js";import"./index-BqkMqHUK.js";import"./BasePdfViewer.module.css-Dt0fF1C5.js";import"./PdfViewerAnnotationLayer-C91svmqj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qb5S3oxW.js";import"./PdfViewerOutlineSidebar-C-TrKRj5.js";import"./PdfViewerSidebarHeader-BPcIH5fA.js";import"./useBaseUiId-Bbs9yJ0n.js";import"./useControlled-BrC9O3tj.js";import"./CompositeRoot-55jNCp0L.js";import"./CompositeItem-Zu9n7Vbm.js";import"./ToolbarRootContext-BqUxfNXS.js";import"./composite-_69CGg7n.js";import"./svgIconContainer-B5e6FaMs.js";import"./PdfViewerSearchBar-UVCtpSOD.js";import"./chevron-up-BqU-CfFL.js";import"./chevron-down-DvnARLJ3.js";import"./cross-eaaked_u.js";import"./PdfViewerSidebar-BjTCfqP5.js";import"./index-CzyW3VIg.js";import"./index-ZWNosLBb.js";import"./index-Bb4KPyDR.js";import"./PdfViewerToolbar-D2EbpAOz.js";import"./Button-BBBCKJre.js";import"./chevron-right-VBLWs7uj.js";import"./Input-p3RqWT-8.js";import"./search-BfhK71_u.js";import"./spin-BQa_SNkw.js";import"./error-BmGg8gRf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4355/2b8585b02b056536de95bb92f1e1374102fd2f11/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
