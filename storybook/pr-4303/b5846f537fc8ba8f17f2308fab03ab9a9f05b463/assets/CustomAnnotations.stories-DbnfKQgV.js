import{j as n}from"./iframe-gvVvTYdX.js";import{B as e}from"./BasePdfViewer-C0tjsj2v.js";import"./preload-helper-C4B8pL_K.js";import"./index-BKV8xI6r.js";import"./BasePdfViewer.module.css-CMJOUSNQ.js";import"./PdfViewerAnnotationLayer-CYv8X9u5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dh35usU3.js";import"./PdfViewerOutlineSidebar-CRJw1iuE.js";import"./PdfViewerSidebarHeader-BoMtpqgT.js";import"./useBaseUiId-fY3jSIio.js";import"./useControlled-Cz01Hj64.js";import"./CompositeRoot-BcFTMRAd.js";import"./CompositeItem-Ceyb7lxq.js";import"./ToolbarRootContext-_TM7bc4T.js";import"./composite-U12YfSVj.js";import"./svgIconContainer-CbGtxYsB.js";import"./PdfViewerSearchBar-BApK3r_R.js";import"./chevron-up-B4NFnp6f.js";import"./chevron-down-DNhCoDCr.js";import"./cross-DXV_E_3w.js";import"./PdfViewerSidebar-BBYGuSHN.js";import"./index-Ct7dCOO5.js";import"./index-DFGGqFfD.js";import"./index-Y-Z5WvlR.js";import"./PdfViewerToolbar-BuaXS3hz.js";import"./Button-CM6iPOlW.js";import"./chevron-right-DRDDUJK7.js";import"./Input-B5s_ufnw.js";import"./search-BpBkWvYy.js";import"./spin-0h2_JcF_.js";import"./error-oahmhnhI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4303/b5846f537fc8ba8f17f2308fab03ab9a9f05b463/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
