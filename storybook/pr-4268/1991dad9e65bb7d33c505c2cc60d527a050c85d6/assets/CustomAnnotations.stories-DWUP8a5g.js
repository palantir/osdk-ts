import{j as n}from"./iframe-BaflQOGd.js";import{B as e}from"./BasePdfViewer-DvQAw6qi.js";import"./preload-helper-p4HJijQg.js";import"./index-Cdh_dFWj.js";import"./BasePdfViewer.module.css-BoieW_FZ.js";import"./PdfViewerAnnotationLayer-DuwbocPF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FB8VAunJ.js";import"./PdfViewerOutlineSidebar-doXrtx5E.js";import"./PdfViewerSidebarHeader-D2exJItX.js";import"./useBaseUiId-pk7UMSg-.js";import"./useControlled-BHd0pcmo.js";import"./CompositeRoot-SWHLt1FW.js";import"./CompositeItem-nIPenTO0.js";import"./ToolbarRootContext-CwJdNdBU.js";import"./composite-Bz466JDP.js";import"./svgIconContainer-C8p2nfID.js";import"./PdfViewerSearchBar-CJW-4pwq.js";import"./chevron-up-B9vqlMsz.js";import"./chevron-down-Cnmtw8e6.js";import"./cross-BGrOCP65.js";import"./PdfViewerSidebar-HYl5dfwf.js";import"./index-DxGtCk42.js";import"./index-BbhGUNVZ.js";import"./index-8FM1YS3J.js";import"./PdfViewerToolbar-Cztx47b2.js";import"./Button-Bdo2X4x8.js";import"./chevron-right-DU37zgGG.js";import"./Input-C7CjAQyY.js";import"./search-BBcvVFuT.js";import"./spin-C2CdELrV.js";import"./error-DIEj2ztu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4268/1991dad9e65bb7d33c505c2cc60d527a050c85d6/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
