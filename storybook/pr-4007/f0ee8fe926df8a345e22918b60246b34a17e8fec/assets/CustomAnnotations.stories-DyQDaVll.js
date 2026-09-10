import{j as n}from"./iframe-BXr8Xp2f.js";import{B as e}from"./BasePdfViewer-BvLxaKuC.js";import"./preload-helper-QMSJ2T2z.js";import"./index-Di1QXXOB.js";import"./BasePdfViewer.module.css-DXWFUqFk.js";import"./PdfViewerAnnotationLayer-DbqkYlJK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0l9WW_N.js";import"./PdfViewerOutlineSidebar-Tp6af_2o.js";import"./PdfViewerSidebarHeader-CAbm3iTV.js";import"./useBaseUiId-BnWXJnJX.js";import"./useControlled-B8QMfPVX.js";import"./CompositeRoot-BdT-xVyS.js";import"./CompositeItem-4cSdCb7D.js";import"./ToolbarRootContext-CF3RFtFR.js";import"./composite-DX-jTCFh.js";import"./svgIconContainer-DI5sy3Bm.js";import"./PdfViewerSearchBar-Chec4qvK.js";import"./chevron-up-CgAQ9KWK.js";import"./chevron-down-IAwnATnI.js";import"./cross-BWStps-6.js";import"./PdfViewerSidebar-HS5CxW7M.js";import"./index-BratHID5.js";import"./index-B1TvT34D.js";import"./index-Bxr4aZil.js";import"./PdfViewerToolbar-CyQOekTR.js";import"./Button-C-QbecBZ.js";import"./chevron-right-B1jFba9I.js";import"./Input-C5ZRCR8-.js";import"./search-zzPZfnCA.js";import"./spin-Br3qS8rq.js";import"./error-CCe_KGjt.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4007/f0ee8fe926df8a345e22918b60246b34a17e8fec/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
