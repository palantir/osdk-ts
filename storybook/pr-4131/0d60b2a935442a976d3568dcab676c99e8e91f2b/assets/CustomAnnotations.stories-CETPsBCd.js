import{j as n}from"./iframe-youlX2De.js";import{B as e}from"./BasePdfViewer-CDFO6J6V.js";import"./preload-helper-DMj5aBc5.js";import"./index-Dyy6V7kE.js";import"./BasePdfViewer.module.css-Cn3pPDxm.js";import"./PdfViewerAnnotationLayer-DvOtTKDn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6oTlLCS.js";import"./PdfViewerOutlineSidebar-HxT9548g.js";import"./PdfViewerSidebarHeader-DSUL3iTa.js";import"./useBaseUiId-CNEu6f9Y.js";import"./useControlled-DaSybbDg.js";import"./CompositeRoot-cn2zaCMy.js";import"./CompositeItem-Cml7HDGs.js";import"./ToolbarRootContext-CA4yJOZ7.js";import"./composite-DF73ZPcS.js";import"./svgIconContainer-jpw1hIcy.js";import"./PdfViewerSearchBar-CGb01eQl.js";import"./chevron-up-z9XUttTL.js";import"./chevron-down-CmXpC65B.js";import"./cross-JeqqL3a9.js";import"./PdfViewerSidebar-BxXPlATP.js";import"./index-wc1nMvwS.js";import"./index-rZeAfKdB.js";import"./index-DQbJRRPB.js";import"./PdfViewerToolbar-NBLV1BP6.js";import"./Button-CbOY6Chn.js";import"./chevron-right-BYam4PtZ.js";import"./Input-B5YU-z1C.js";import"./search-D5ZZMY1l.js";import"./spin-CqgqtFlS.js";import"./error-BHWsO3Au.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4131/0d60b2a935442a976d3568dcab676c99e8e91f2b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
