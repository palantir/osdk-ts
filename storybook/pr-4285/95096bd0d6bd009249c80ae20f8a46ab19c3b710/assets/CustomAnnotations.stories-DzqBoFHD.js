import{j as n}from"./iframe-BO3JDeUy.js";import{B as e}from"./BasePdfViewer-BQsCRzPI.js";import"./preload-helper-urwU0B1K.js";import"./index-CEHZ1Lmc.js";import"./BasePdfViewer.module.css-G7ohjU8m.js";import"./PdfViewerAnnotationLayer-Ck9BYmgD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQnkZ9bh.js";import"./PdfViewerOutlineSidebar-DRqvgC5v.js";import"./PdfViewerSidebarHeader-CakVQMSR.js";import"./useBaseUiId-BhX3QU_S.js";import"./useControlled-CFrWaOQK.js";import"./CompositeRoot-D9-hIhoD.js";import"./CompositeItem-DeWDKhlH.js";import"./ToolbarRootContext-rGxGVX8f.js";import"./composite-DkSbjExr.js";import"./svgIconContainer-B2x3jtn9.js";import"./PdfViewerSearchBar-ySj1EEj4.js";import"./chevron-up-DOoilBRb.js";import"./chevron-down-D8wRJ6gM.js";import"./cross-B4B_Rmmg.js";import"./PdfViewerSidebar-BdA2Ymx7.js";import"./index-_n59woxc.js";import"./index-DuMMGCln.js";import"./index-C_ZbNhui.js";import"./PdfViewerToolbar-Cu56ZlAL.js";import"./Button-HsgZWy4d.js";import"./chevron-right-CECTJcep.js";import"./Input-aywzIDzd.js";import"./search-BTnE45Hm.js";import"./spin-LnAoef4A.js";import"./error-COT9B3Hv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/95096bd0d6bd009249c80ae20f8a46ab19c3b710/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
