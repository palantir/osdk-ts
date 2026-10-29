import{j as n}from"./iframe-DsRLlUaX.js";import{B as e}from"./BasePdfViewer-hmZ7hoQZ.js";import"./preload-helper-C3_l2Hl0.js";import"./index-BjtlPBUb.js";import"./BasePdfViewer.module.css-DFxxXjRW.js";import"./PdfViewerAnnotationLayer-DMnmWIxh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFxD37dq.js";import"./PdfViewerOutlineSidebar-DjNRsG2s.js";import"./PdfViewerSidebarHeader-Czua-ZtS.js";import"./useBaseUiId-C4i6MKWL.js";import"./useControlled-DEedTOrX.js";import"./CompositeRoot-27bpmOMq.js";import"./CompositeItem-DfeVObqB.js";import"./ToolbarRootContext-B0k-j8eq.js";import"./composite-DOMJJy3E.js";import"./svgIconContainer-zp1B85KB.js";import"./PdfViewerSearchBar-BYnibhQO.js";import"./chevron-up-BmlmJwCX.js";import"./chevron-down-BpedfE0t.js";import"./cross-BZKb8UMR.js";import"./PdfViewerSidebar-CiA8HSle.js";import"./index-C9cwWX6g.js";import"./index-n_UhMgqI.js";import"./index-Bav5EGdy.js";import"./PdfViewerToolbar-jtwwqxM7.js";import"./Button-DOnuCfPD.js";import"./chevron-right-CyYm55fk.js";import"./Input-DZ_xmuAk.js";import"./search-SgUD_ncl.js";import"./spin-BbOZjGwp.js";import"./error-CaruzJxR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4254/f10f5f1b4e0290ad95d60964837be1196703c927/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
