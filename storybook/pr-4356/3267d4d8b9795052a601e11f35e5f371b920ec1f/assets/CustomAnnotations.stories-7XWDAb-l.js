import{j as n}from"./iframe-DlzpeYey.js";import{B as e}from"./BasePdfViewer-D58rDpoP.js";import"./preload-helper-D49cnuzB.js";import"./index-CLOJWpvR.js";import"./BasePdfViewer.module.css-CX7rvjV3.js";import"./PdfViewerAnnotationLayer-WzdmWYmR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBUB7jzW.js";import"./PdfViewerOutlineSidebar-LBpwdTRB.js";import"./PdfViewerSidebarHeader-C4F5UmT9.js";import"./useBaseUiId-0fwu-5sC.js";import"./useControlled-fZuEx10T.js";import"./CompositeRoot-D2Db5Di6.js";import"./CompositeItem-B1K0j6t8.js";import"./ToolbarRootContext-DdMsogNF.js";import"./composite-CPVo-XsX.js";import"./svgIconContainer-s_VNNREI.js";import"./PdfViewerSearchBar-Cb6W1Yiw.js";import"./chevron-up-DrfB9smu.js";import"./chevron-down-wlUp9z9T.js";import"./cross-C9f-NEvt.js";import"./PdfViewerSidebar-Btgx_38s.js";import"./index-Dx8CT-jt.js";import"./index-Dp-4F4Kh.js";import"./index-B42S07sI.js";import"./PdfViewerToolbar-DkATAFEk.js";import"./Button-D-qtDRYT.js";import"./chevron-right-yf8yKPcc.js";import"./Input-BI9FrHdv.js";import"./search-DvttvRVv.js";import"./spin-C_GE0YSh.js";import"./error-DWCk07vu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4356/3267d4d8b9795052a601e11f35e5f371b920ec1f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
