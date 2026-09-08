import{j as n}from"./iframe-CqpELHwS.js";import{B as e}from"./BasePdfViewer-IislYu8K.js";import"./preload-helper-DfJ58b8G.js";import"./index-BER4WQBS.js";import"./BasePdfViewer.module.css-z6xhgkKK.js";import"./PdfViewerAnnotationLayer-CfNATfY6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEvUGYN3.js";import"./PdfViewerOutlineSidebar-5IEOmmqD.js";import"./PdfViewerSidebarHeader-DylHPNK1.js";import"./useBaseUiId-CqI62Qpb.js";import"./useControlled-D7QaFiC3.js";import"./CompositeRoot-Dszebl5m.js";import"./CompositeItem-Du2CIA1V.js";import"./ToolbarRootContext-uFYVc9Dk.js";import"./composite-DOZwc2bc.js";import"./svgIconContainer-BTP1tkQ_.js";import"./PdfViewerSearchBar-hZXSas9c.js";import"./chevron-up-5FHEdi_q.js";import"./chevron-down-CiPBsoDI.js";import"./cross-u_0PEuYq.js";import"./PdfViewerSidebar-CmowZr9W.js";import"./index-0kwSuhRB.js";import"./index-Cis59Sxl.js";import"./index-CcEEUUj6.js";import"./PdfViewerToolbar-CIOsYGnn.js";import"./Button-DVcrv2BS.js";import"./chevron-right-yG2p2-v7.js";import"./Input-B8oxxBH0.js";import"./search-D9m05WlM.js";import"./spin-BtnmdL_I.js";import"./error-jtHR9fDA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3994/477ebeab8dfec28d858efb9ff11a7d4cd12dc435/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
