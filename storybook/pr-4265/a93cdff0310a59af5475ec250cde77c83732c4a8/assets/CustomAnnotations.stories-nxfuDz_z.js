import{j as n}from"./iframe-DT3_qYOR.js";import{B as e}from"./BasePdfViewer-4gZi7Hxx.js";import"./preload-helper-DJcbeZXn.js";import"./index-Bms-eX8O.js";import"./BasePdfViewer.module.css-D3uH1v8W.js";import"./PdfViewerAnnotationLayer-BbmF3K-Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSx6ZDNB.js";import"./PdfViewerOutlineSidebar-BQknlRAy.js";import"./PdfViewerSidebarHeader-CKm7KKBn.js";import"./useBaseUiId-Btj_fTu8.js";import"./useControlled-CTkDHUnO.js";import"./CompositeRoot-ykWtA3-w.js";import"./CompositeItem-DAx93KY8.js";import"./ToolbarRootContext-DRepvQNE.js";import"./composite-CY9Hfsj0.js";import"./svgIconContainer-Dzwe0jqD.js";import"./PdfViewerSearchBar-Bw9rtnGw.js";import"./chevron-up-tzlIvMDo.js";import"./chevron-down-CQZ2GZcC.js";import"./cross-DsVapprp.js";import"./PdfViewerSidebar-T0gudL4Y.js";import"./index-kKFIJm10.js";import"./index-BgPwEE_0.js";import"./index-BqtCGU3q.js";import"./PdfViewerToolbar-Dpv7353i.js";import"./Button-URBwxfkh.js";import"./chevron-right-BUlmkpLk.js";import"./Input-Lzcgvy8p.js";import"./search-mMYnAHur.js";import"./spin-CXH6Gq5G.js";import"./error-CfEF0UDB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4265/a93cdff0310a59af5475ec250cde77c83732c4a8/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
