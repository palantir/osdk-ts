import{j as n}from"./iframe-Eth4DscF.js";import{B as e}from"./BasePdfViewer-Lm_FDKJP.js";import"./preload-helper-D5DT8Gvv.js";import"./index-CaJ3mqr2.js";import"./BasePdfViewer.module.css-CQOHisG3.js";import"./PdfViewerAnnotationLayer-C0XObFby.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BR1kOTt7.js";import"./PdfViewerOutlineSidebar-BBmkNpmb.js";import"./PdfViewerSidebarHeader-Dlj_Yr-S.js";import"./useBaseUiId-B7RIhr15.js";import"./useControlled-E-2hYUgD.js";import"./CompositeRoot-BrF6aMnq.js";import"./CompositeItem-DlxbA5eX.js";import"./ToolbarRootContext-DZvBkO8Q.js";import"./composite-qIMfmfrB.js";import"./svgIconContainer-CoGRC72I.js";import"./PdfViewerSearchBar-D4gYAyV8.js";import"./chevron-up-DDlbaCce.js";import"./chevron-down-CqqSfn04.js";import"./cross-BwB0DXiU.js";import"./PdfViewerSidebar-jv4K6tPu.js";import"./index-Daf7mDrl.js";import"./index-Cfo3ydBu.js";import"./index-B8aJ10lX.js";import"./PdfViewerToolbar-jVwCwIar.js";import"./Button-DxVY95w9.js";import"./chevron-right-ohOlmK8K.js";import"./Input-4EN0R4Wx.js";import"./search-CJHLYodH.js";import"./spin-CYVYczM0.js";import"./error-BXTM1REk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/8fbdfc34a8d84d08fd28053e178c84939e90e5f6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
