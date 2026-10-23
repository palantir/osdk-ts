import{j as n}from"./iframe-vvAR62dd.js";import{B as e}from"./BasePdfViewer-h8Q9tfeE.js";import"./preload-helper-CCln4nV6.js";import"./index-GmZDd95a.js";import"./BasePdfViewer.module.css-zbBOOdi9.js";import"./PdfViewerAnnotationLayer-DfdHl_fC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bp1ZHuMK.js";import"./PdfViewerOutlineSidebar-CJj4gg2r.js";import"./PdfViewerSidebarHeader-BhL-qwI8.js";import"./useBaseUiId-Z7KW9EIT.js";import"./useControlled-C-mBGUI2.js";import"./CompositeRoot-DwRpAa-k.js";import"./CompositeItem-DcxtPwna.js";import"./ToolbarRootContext-rrmxt5FX.js";import"./composite-zVuCDcDS.js";import"./svgIconContainer-Dzj9GXt6.js";import"./PdfViewerSearchBar-DIsuXsGr.js";import"./chevron-up-CWwWDDe9.js";import"./chevron-down-Bekr5naF.js";import"./cross-CpEJT7cV.js";import"./PdfViewerSidebar-BFcnPJZu.js";import"./index-Se0bF5VG.js";import"./index-OCJal9Dk.js";import"./index-CV2OXpxY.js";import"./PdfViewerToolbar-B-pnPut1.js";import"./Button-DYluNYeK.js";import"./chevron-right-BZek-Emb.js";import"./Input-CMHuklSy.js";import"./search-nGnjAR9u.js";import"./spin-BJqGL4mP.js";import"./error-DlRppvjG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4245/dbf4bd4f300e992f7fb94ec7249c29cf900f476d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
